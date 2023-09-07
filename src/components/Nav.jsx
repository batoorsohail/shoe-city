import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img 
            src={headerLogo} 
            alt="logo"
            width={130}
            height={29}
          />
        </a>
      </nav>
    </header>
  )
}

export default Nav