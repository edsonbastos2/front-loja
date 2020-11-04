import { combineReducers } from 'redux';
import UsuarioRedux from './reducers/UsuarioReducers';

export default combineReducers({
  user: UsuarioRedux
})