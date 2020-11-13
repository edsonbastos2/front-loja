import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';
import { isLogged } from '../../helpers/AuthHandle';

function Header() {
  let logged = isLogged();
  return (
    <HeaderArea>
      <div className="container">
        <Link className="logo">
          <span className="logo-1">O</span>
          <span className="logo-2">L</span>
          <span className="logo-3">X</span>
        </Link>
        <nav>
          <ul>

            {logged &&
              <>
                <li>
                  <Link to="">Minha Conta</Link>
                </li>
                <li>
                  <Link to="">Sair</Link>
                </li>
                <li>
                  <Link to="" className="buttom">Anúnciar</Link>
                </li>
              </>
            }

            {!logged &&

              <>
                <li>
                  <Link to="">Login</Link>
                </li>
                <li>
                  <Link to="">Cadastro</Link>
                </li>
              </>
            }

          </ul>
        </nav>
      </div>
    </HeaderArea>
  )
}

export default Header;