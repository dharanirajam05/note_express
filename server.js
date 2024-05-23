const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');

let notes = [];

app.use(express.json());
app.use(cors());

app.get('/notes', (req, res) => {
  res.send(notes);
});

app.post('/notes', (req, res) => {
  const { content } = req.body;
  const newNote = { id: Date.now().toString(), content };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.put('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const { content } = req.body;
  const noteIndex = notes.findIndex((note) => note.id === noteId);
  if (noteIndex === -1) {
    return res.status(404).json({ message: 'Note not found' });
  }
  notes[noteIndex].content = content;
  res.json(notes[noteIndex]);
});

app.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  notes = notes.filter((note) => note.id !== noteId);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
