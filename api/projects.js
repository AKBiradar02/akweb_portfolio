const express = require('express');
const cors = require('cors');
require('dotenv').config();
const admin = require('firebase-admin');
const { default: serverless } = require('serverless-http');

const app = express();

app.use(cors());
app.use(express.json());
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
app.get('/', (req, res) => {
  res.send('Backend server is running!');
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
    res.status(500).json({ error: error.message });
  }
});

const { default: serverless } = require('serverless-http');
module.exports = serverless(app);