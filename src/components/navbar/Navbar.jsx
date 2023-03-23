import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import SearchBar from './SearchBar'
import { Logo, HomeIcon, WatchIcon, MarketIcon, GroupIcon, MenuIcon, MessengerIcon, NotifyIcon } from '../../utils/icons'
import './NavBar.css'

const NavBar = () => {
    const [activeElement, setActiveElement] = useState()

    const handleBtnClick = even => {
        if (activeElement !== undefined) 
            activeElement.classList.remove('testing')

        setActiveElement(even.currentTarget)
        even.currentTarget.classList.add('testing')
        // console.log(activeElement)/
        // activeElement.classList.add('testing')
    

    }

    return(
        <div className='navbar'>
            <div className="nav-left">
                <Logo />
                <SearchBar />
            </div>
            
            <div className="nav-center">
                <Link to={'/'}>
                    <div onClick={handleBtnClick}>
                        <HomeIcon />
                    </div>
                </Link>

                <Link to={'/watch'}>
                    <div onClick={handleBtnClick}>
                        <WatchIcon />
                    </div>
                </Link>

                <Link to={'/marketplace'}>
                    <div onClick={handleBtnClick}>
                        <MarketIcon />
                    </div>
                </Link>

                <Link to={'/groups/feed'}>
                    <div onClick={handleBtnClick}>
                        <GroupIcon />
                    </div>
                </Link>
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