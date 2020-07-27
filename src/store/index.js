import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { saveState, loadState } from '../localStorage';
import rootReducer from '../reducers';

const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));
store.subscribe(() => {
  saveState({
    notesStore: store.getState().notesStore,
  });
});

export default store;
