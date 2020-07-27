import { ACTION_TYPES } from 'reducers/reducer1';

export const addStore = data => dispatch => {
  dispatch({
    type: ACTION_TYPES.addStore,
    payload: data,
  });
};
