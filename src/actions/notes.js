import { ACTION_TYPES } from '../reducers/notesDetails';

export const addToNotesStore = data => dispatch => {
  dispatch({
    type: ACTION_TYPES.addNotes,
    payload: data,
  });
};

export const removeNotesToStore = payload => dispatch => {
  dispatch({ type: ACTION_TYPES.removeNotes, payload });
};

export const editNotesOfStore = payload => dispatch => {
  const payloadType = 'editNotes';
  dispatch({ type: ACTION_TYPES[payloadType], payload });
};
