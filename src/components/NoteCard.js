import React from 'react';
import { Button } from 'react-bootstrap';
import './NoteCard.css';

const NoteCard = ({ note, noteNumber, editNote, setEditNote, handleUpdateNote, handleEditNote, handleDeleteNote }) => {
  // Function to format date and time
  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return ''; // Handle empty date string

    const dateObject = new Date(dateTimeString);
    if (isNaN(dateObject.getTime())) return ''; // Handle invalid date string

    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return dateObject.toLocaleDateString('en-US', options);
  };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">Note {noteNumber}</p>
          <p>{note.content}</p>
        </div>
        <div className="flip-card-back">
          <textarea value={editNote.content} onChange={(e) => setEditNote({ ...editNote, content: e.target.value })}></textarea>
          <Button className="but" onClick={() => handleEditNote(note)}>Edit</Button>
          <Button className="but" onClick={() => handleDeleteNote(note.id)}>Delete</Button>
          <Button className="but" onClick={handleUpdateNote}>Update</Button>
          <p className="note-card-date">{formatDateTime(note.date)}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
