import express from 'express';
import path from 'path';

const app = express();

const publicRoot = path.resolve('public');

app.use(express.static('public'));
app.use(express.json());

app.get(['/', '/home'], (req, res) => {
res.sendFile('html/home.html', { root: publicRoot });
});
app.get('/skills', (req, res) => {
res.sendFile('html/skills.html', { root: publicRoot });
});
app.get('/experience', (req, res) => {
res.sendFile('html/experience.html', { root: publicRoot });
});
app.get('/projects', (req, res) => {
res.sendFile('html/projects.html', { root: publicRoot });
});
app.get('/education', (req, res) => {
res.sendFile('html/education.html', { root: publicRoot });
});
app.get('/certificates', (req, res) => {
res.sendFile('html/certificates.html', { root: publicRoot });
});
app.get('/contact', (req, res) => {
res.sendFile('html/contact.html', { root: publicRoot });
});

export default app;
