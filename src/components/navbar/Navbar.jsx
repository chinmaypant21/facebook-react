import SearchBar from './SearchBar'
import { Icon, IconButton } from '@mui/material'
import './Navbar.css'
import { Logo, HomeIcon, WatchIcon, MenuIcon, MessengerIcon, NotifyIcon } from '../../utils/icons'
const Navbar = () => {
    return(
        <div className='navbar'>
            <div className="nav-left">
                <Logo />
                <SearchBar />
            </div>
            
            <div className="nav-center">
                <div>
                    <HomeIcon />
                </div>

                <div>
                    <WatchIcon />
                </div>
            </div>

            <div className="nav-right">
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <IconButton>
                    <MessengerIcon sx={{transform:'rotate(-20deg)'}} />
                </IconButton>

                <IconButton>
                    <NotifyIcon sx={{transform:'rotate(-20deg)'}} />
                </IconButton>

                <IconButton>
                    <div style={{height:'1em', width:'1em'}}></div>
                </IconButton>

            </div>
        </div>
    )
}

export default Navbar;