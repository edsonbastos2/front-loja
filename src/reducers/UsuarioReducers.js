const initialState = {
  email: 'anonimo@padrao.com'
}

const UsuarioRedux = (state = initialState, action) => {

  if (action.type === 'SET_EMAIL') {
    return { ...state, email: action.payload.email }
  }

  return state;
}

export default UsuarioRedux;