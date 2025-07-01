const express = require('express');
const cors = require('cors');
require('dotenv').config();
const admin = require('firebase-admin');

// Vercel serverless handler
const { default: serverless } = require('serverless-http');

const app = express();

app.use(express.json());

// --- CORS Middleware for All Origins (dev/prod) ---
app.use((req, res, next) => {
  // Allow all origins for development. Replace * with your domain for production.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  next();
});

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
});
const db = admin.firestore();

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Secure endpoint to add a project
app.post('/add-project', async (req, res) => {
  const { title, description, githubLink, userEmail } = req.body;
  if (userEmail !== process.env.ADMIN_EMAIL) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  if (!title || !description || !githubLink) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  try {
    await db.collection('projects').add({
      title,
      description,
      githubLink,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(200).json({ message: 'Project added successfully' });
  } catch (error) {
    console.error('Add project error:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET endpoint to fetch all projects
app.get('/projects', async (req, res) => {
  try {
    const snapshot = await db.collection('projects').orderBy('createdAt', 'desc').get();
    const projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(projects);
  } catch (error) {
    console.error('Fetch projects error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update project
app.put('/update-project/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, githubLink, userEmail } = req.body;
  if (userEmail !== process.env.ADMIN_EMAIL) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  if (!title || !description || !githubLink) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  try {
    await db.collection('projects').doc(id).update({
      title,
      description,
      githubLink,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(200).json({ message: 'Project updated successfully' });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Delete project
app.delete('/delete-project/:id', async (req, res) => {
  const { id } = req.params;
  const { userEmail } = req.body;
  if (userEmail !== process.env.ADMIN_EMAIL) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  try {
    await db.collection('projects').doc(id).delete();
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = serverless(app);