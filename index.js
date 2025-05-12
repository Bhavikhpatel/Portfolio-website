import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get port from environment variable for Render deployment
const PORT = process.env.PORT || 3000;
// Update baseURL to be dynamic based on environment
const baseURL = process.env.NODE_ENV === 'production' 
    ? process.env.RENDER_EXTERNAL_URL 
    : `http://localhost:${PORT}`;

const app = express();

// Manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static('public'));
app.use(express.json()); // For parsing application/json

// Routes for HTML pages
app.get(["/","/home"], (req, res) => {
    res.sendFile('html/home.html', { root: process.cwd() + '/public' });
});

app.get("/skills", (req, res) => {
    res.sendFile('html/skills.html', { root: process.cwd() + '/public' });
});

app.get("/experience", (req, res) => {
    res.sendFile('html/experience.html', { root: process.cwd() + '/public' });
});

app.get("/projects", (req, res) => {
    res.sendFile('html/projects.html', { root: process.cwd() + '/public' });
});

app.get("/education", (req, res) => {
    res.sendFile('html/education.html', { root: process.cwd() + '/public' });
});

app.get("/certificates", (req, res) => {
    res.sendFile('html/certificates.html', { root: process.cwd() + '/public' });
});

app.get("/contact", (req, res) => {
    res.sendFile('html/contact.html', { root: process.cwd() + '/public' });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});