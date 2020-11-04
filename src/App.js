import { useSelector, useDispatch } from 'react-redux';


function App() {

  let email = useSelector(state => state.user.email);
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch({

    })
  }

  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <p>E-mail: {email}</p>
    </div>
  );
}

export default App;
