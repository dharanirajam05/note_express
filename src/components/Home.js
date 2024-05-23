import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteCard from './NoteCard';
import './Home.css'; // Import the CSS file for Home component

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editNote, setEditNote] = useState({ id: '', content: '' });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/notes');
      setNotes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateNote = async () => {
    try {
      await axios.post('http://localhost:5000/notes', { content: newNote });
      fetchNotes();
      setNewNote('');
    } catch (error) {
      console.error(error);
      alert('Failed to create note');
    }
  };

  const handleEditNote = (note) => {
    setEditNote({ id: note.id, content: note.content });
  };

  const handleUpdateNote = async () => {
    try {
      await axios.put(`http://localhost:5000/notes/${editNote.id}`, { content: editNote.content });
      fetchNotes();
      setEditNote({ id: '', content: '' });
      console.log('Note updated successfully');
    } catch (error) {
      console.error('Failed to update note:', error);
      alert('Failed to update note');
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error(error);
      alert('Failed to delete note');
    }
  };

  return (
    <div>
      <br/>
      <h3>Note Taking App</h3>
      <div>
        <br/>
        <textarea className='not' value={newNote} onChange={(e) => setNewNote(e.target.value)}></textarea>
        <button class="add" onClick={handleCreateNote}>Add Note</button>
        <br/>
      </div>
      <div className="note-container">
        {notes.map((note,index) => (
          <NoteCard
            key={note.id}
            note={note}
            noteNumber={index + 1}
            editNote={editNote}
            setEditNote={setEditNote}
            handleUpdateNote={handleUpdateNote}
            handleEditNote={handleEditNote}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
