import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Feed, FriendBar, SideBar, NavBar, Watch } from "../../components"
import { AvatarIcon } from "../../utils/icons";
import './Home.css'

const Home = ({profileName}) => {
    const navigate = useNavigate();
    
    // if (!redirected && localStorage.getItem("profileName") === null){
        //     console.log('redirect')
        //     updateRedirected(true)
        // }
        
    //     useEffect(()=>{
    //         console.log('redirect')
    //         if (localStorage.getItem("profileName") === null)
    //         {
    //             navigate('/login')        
    //         }
    // },[])

    return(
        <>
             <NavBar profileIcon={AvatarIcon}/> 
             <div className="home-container"> 
                 <SideBar profileIcon={AvatarIcon} profileName={profileName}/> 
                 <Routes> 
                    <Route path='/' exact element={<Feed profileIcon={AvatarIcon} profileName={profileName} />} />
                    <Route path='watch' exact element={<Watch />} />
                    <Route path='marketplace' exact element={<Watch />} />
                    <Route path='groups/feed' exact element={<Watch />} /> 
                 </Routes> 
                 <FriendBar /> 
             </div> 
        </>
    )
}

export default Home