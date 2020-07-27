export const DEFAULT_STORE = {
  notes: [],
};

export const ACTION_TYPES = {
  addNotes: 'addNotesOfStore',
  removeNotes: 'removeNotesOfStore',
  editNotes: 'editNotesOfStore',
};

export default function notesStore(state = DEFAULT_STORE, action) {
  switch (action.type) {
    case ACTION_TYPES.addNotes: {
      return { notes: [...state.notes, ...action.payload] };
    }
    case ACTION_TYPES.removeNotes: {
      const prevStateNotes = [...state.notes];
      const updatedNotes = prevStateNotes.filter(
        (note, i) => i !== action.payload,
      );
      return { notes: updatedNotes };
    }
    case ACTION_TYPES.editNotes: {
      const prevStateNotes = [...state.notes];
      const selectedNote = prevStateNotes.find(
        (note, i) => i === action.payload.index,
      );
      selectedNote.description = action.payload.description;
      selectedNote.title = action.payload.title;
      selectedNote.selectedDate = action.payload.selectedDate;
      return { notes: prevStateNotes };
    }

    default:
      return state;
  }
}
