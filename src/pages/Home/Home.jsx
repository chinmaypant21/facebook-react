import { Feed, FriendBar, SideBar, NavBar, Watch } from "../../components"
import { Routes, Route } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return(
        <>
            <NavBar />
            <div className="home-container">
                <SideBar />
                <Routes>
                    <Route path='/' exact element={<Feed />}/>
                    <Route path='/watch' exact element={<Watch />}/>
                </Routes>
                <FriendBar />
            </div>
        </>
    )
}

export default Home