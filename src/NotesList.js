import React from 'react';
import styles from './NotesList.module.css';

function NotesListItem({text}) {
    return (
        <li>{text}</li>
    );
}

export default function NotesList({notes, className}) {
    const items = notes.map(note => <NotesListItem text={note.title}/>);

    // Note: allowing styling from the parent
    // may have unintended consequences.
    // Parent styles may take precedence, which
    // goes against per-component styling.
    return (
        <ul className={`${styles.list} ${className}`}>
            {items}
        </ul>
    )
}