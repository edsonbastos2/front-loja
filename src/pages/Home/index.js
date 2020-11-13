import { useSelector } from 'react-redux';

function Home() {

  let email = useSelector(state => state.user.email);
  return (
    <>
      <h1>Página Home</h1>
      <p>E-mail: {email}</p>
    </>
  )
}

export default Home;