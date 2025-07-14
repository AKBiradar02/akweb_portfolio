const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');
const path = require('path');

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Initialize Firebase Admin using environment variables
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL
    }),
    projectId: process.env.FIREBASE_PROJECT_ID
  });
}

const db = admin.firestore();

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'https://akweb-portfolio.web.app', 'https://akweb-portfolio.firebaseapp.com'],
  credentials: true
}));
app.use(express.json());

// WARNING: This API currently has no authentication. For production, implement proper authentication and authorization!
// Add a simple API key check middleware
const API_KEY = process.env.API_KEY || 'changeme';
app.use((req, res, next) => {
  // Only protect write operations
  if (["POST", "PUT", "DELETE"].includes(req.method) && req.path.startsWith("/api/")) {
    const clientKey = req.headers['x-api-key'];
    if (clientKey !== API_KEY) {
      return res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
    }
  }
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' });
});

// Get all projects
app.get('/api/projects', async (req, res) => {
  try {
    const snapshot = await db.collection('projects').get();
    const projects = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Add new project
app.post('/api/add-project', async (req, res) => {
  try {
    const { title, description, githubLink, userEmail } = req.body;

    if (!title || !description || !githubLink || !userEmail) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const docRef = await db.collection('projects').add({
      title,
      description,
      githubLink,
      userEmail,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.json({ id: docRef.id, message: 'Project added successfully' });
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).json({ error: 'Failed to add project' });
  }
});

// Update project
app.put('/api/update-project/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, githubLink, userEmail } = req.body;

    await db.collection('projects').doc(id).update({
      title,
      description,
      githubLink,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.json({ message: 'Project updated successfully' });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ error: 'Failed to update project' });
  }
});

// Delete project
app.delete('/api/delete-project/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection('projects').doc(id).delete();
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Failed to delete project' });
  }
});

// Catch-all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;