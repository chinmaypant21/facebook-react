import SearchBar from './SearchBar'
import './Navbar.css'
import { Logo, HomeIcon, WatchIcon, MenuIcon, MessengerIcon, NotifyIcon } from '../../utils/constants'
const Navbar = () => {
    return(
        <div className='navbar'>
            <div className="nav-left">
                <Logo />
                <SearchBar />
            </div>
            
            <div className="nav-center">
                <HomeIcon />
                <WatchIcon />
            </div>

            <div className="nav-right">
                <MenuIcon />
                <MessengerIcon />
                <NotifyIcon />
            </div>
        </div>
    )
}

export default Navbar;