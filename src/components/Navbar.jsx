import { useContext } from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SiteContext from '../context/SiteContext'
import useLogout from '../api/useLogout'

const Navbar = () => {
  const { state } = useContext(SiteContext)
  const handleLogout = useLogout()
  
  return (
    <nav>
      <Link to="/">
        <FaHome />
      </Link>
      {state.isLoggedIn === true
        ? <button onClick={() => handleLogout()}>Logout</button>
        : ''
      }
      <Link to="/account">
        Account
      </Link>
    </nav>
  )
}

export default Navbar