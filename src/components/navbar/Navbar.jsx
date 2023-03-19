import SearchBar from './SearchBar'
import { IconButton } from '@mui/material'
import './NavBar.css'
import { Logo, HomeIcon, WatchIcon, MarketIcon, GroupIcon, MenuIcon, MessengerIcon, NotifyIcon } from '../../utils/icons'
const NavBar = () => {
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

                <div>
                    <MarketIcon />
                </div>

                <div>
                    <GroupIcon />
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

export default NavBar;