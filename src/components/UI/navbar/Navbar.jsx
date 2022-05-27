import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton';


function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = event => {
    localStorage.removeItem('isAuth');
    setIsAuth(false);
  }

  return (
    <div className='navbar'>
        <div className='navbar__links'>
            <Link className='navbar__links__link' to='/posts'> posts </Link>
            <Link className='navbar__links__link' to='/about'> about </Link>
          <MyButton
            onClick={logout}
          >
            Logout
          </MyButton>
        </div>

    </div>
  )
}

export default Navbar