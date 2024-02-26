import { useContext } from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SiteContext from '../context/SiteContext'
import useLogout from '../api/useLogout'

const Navbar = () => {
  // State //
  const { state } = useContext(SiteContext)

  // Hooks //

  // Events //
  const handleLogout = useLogout()

  // Logic //
  const admin = () => {
    if (state.userInfo.roles?.Admin === 5400) {
      return true
    } else {
      return false
    }
  }

  return (
    <nav>
      <Link to="/">
        <FaHome />
      </Link>
      {admin() === true
        ?  <Link to="/admin">Admin</Link>
        : ''
      }
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