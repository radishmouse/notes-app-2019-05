import React from 'react';
import NotesList from './NotesList';
import NotesDetail from './NotesDetail';
import styles from './NotesApp.module.css';
export default class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedNote: '1001',
            notes: [      // This will hold an array of objects
                {
                    id: '1001',
                    title: 'first note',
                    text: 'this is the first note'
                },
                {
                    id: '1002',
                    title: 'second note',
                    text: 'yonder, it is the second note'
                },
                {
                    id: '1003',
                    title: 'third note',
                    text: 'imagine poop emojis here.'
                },
            ]
        }
    }

    render() {
        const theNote = this.state.notes.find(note => this.state.selectedNote === note.id);
        return (
            <div className={styles.app}>
                <NotesList 
                    className={styles.list}
                    notes={this.state.notes}
                    handleSelection={this._selectNote}
                />                
                <NotesDetail 
                    className={styles.detail} 
                    note={theNote}
                />
            </div>
        );
    }

    _selectNote = (id) => {
        // choose a note to show
        this.setState({
            selectedNote: id
        });
    }

    _updateNote = (idToUpdate, newText) => {
        // We can't simply reassign the item in the array.
        // So, we need to create a new array with all the existing notes.
        // But, we want to use the newText for the note with id === idToUpdate
        const updatedNotes1 = this.state.notes.map(note => {
            if (note.id === idToUpdate) {
                // return the modified version
                return {
                    ...note,        // Spread out all the existing key-value pairs.
                    text: newText   // But, overwrite *just* the text property.
                };
            } else {
                // return a copy of the note as-is.
                return {
                    ...note
                };
            }
        });
    }
}