import { Feed, FriendBar, SideBar, NavBar } from "../../components"
import './Home.css'

const Home = () => {
    return(
        <>
            <NavBar />
            <div className="home-container">
                <SideBar />
                <Feed />
                <FriendBar />
            </div>
        </>
    )
}

export default Home