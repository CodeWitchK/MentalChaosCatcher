
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [noteMode, setNoteMode] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState<{ title: string; body: string; createdAt: string }[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const deleteNote = (idx: number) => {
    setNotes(notes.filter((_, i) => i !== idx));
  };

  const formatTimestamp = (): string => {
    const now = new Date();
    return `${now.toLocaleDateString()} @ ${now.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })}`;
  };

  const handleSave = () => {
    if (!noteText.trim()) return;

    const newNote = { title: noteTitle, body: noteText, createdAt: formatTimestamp() };

    if (editIndex !== null) {
      const updated = [...notes];
      updated[editIndex] = { ...updated[editIndex], ...newNote };
      setNotes(updated);
      setEditIndex(null);
    } else {
      setNotes([...notes, newNote]);
    }

    setNoteTitle('');
    setNoteText('');
    setNoteMode(false);
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <View style={styles.topBar} />
      <View style={styles.container}>
        {noteMode ? (
          <>
            <Text style={styles.label}>~*~ Mental Chaos Catcher ~*~</Text>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.buttonText}>Save Note</Text>
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              value={noteTitle}
              onChangeText={setNoteTitle}
              placeholder="Name the chaos"
            />

            <TextInput
              style={[styles.input, styles.textArea]}
              value={noteText}
              onChangeText={setNoteText}
              placeholder="Start typing..."
              multiline
            />
          </>
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={() => setNoteMode(true)}>
              <Text style={styles.buttonText}>+ Add Note</Text>
            </TouchableOpacity>

            {notes.map((note, idx) => (
              <View key={idx} style={styles.noteCard}>
                <View style={styles.noteHeader}>
                  <Text style={styles.noteTitle}>{note.title}</Text>
                  <Text style={styles.timestamp}>{note.createdAt}</Text>
                </View>

                <View style={styles.noteActions}>
                  <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => deleteNote(idx)}>
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      setNoteTitle(note.title);
                      setNoteText(note.body);
                      setEditIndex(idx);
                      setNoteMode(true);
                    }}
                  >
                    <Text style={styles.buttonText}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
}


// styles.ts
