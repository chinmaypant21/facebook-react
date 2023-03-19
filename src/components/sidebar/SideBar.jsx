import "./SideBar.css"
import { SideMenu, IconGradient } from "../../utils/iconUtils";
import { HeartIcon } from "../../utils/icons";

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar-wrapper">
                <IconGradient id='sidebar-icon-gradient' startGradient={'var(--icon-grad-i)'} stopGradient={'var(--icon-grad-f)'}/> 
                {
                    SideMenu.map((x,idx)=>(
                        // console.log(x)
                        <button className="sidebar-btn" key={idx}>
                            <div>{x.icon}</div>
                            <div>{x.text}</div>
                        </button>
                    ))
                }
            </div>
                
                <footer className="top-hr-outline">
                    <ul>
                        <li><a href=".">Privacy</a><span> ·</span></li>
                        <li><a href=".">Terms</a><span> ·</span></li>
                        <li><a href=".">Advertising</a><span> ·</span></li>
                        <li><a href=".">Ad choices</a><span> ·</span></li>
                        <li><a href=".">Cookies</a><span> ·</span></li>
                        <li><a href=".">More</a><span> ·</span></li>
                        <li><a href=".">Created with <HeartIcon sx={{fontSize:'inherit'}}/> by Chinz</a></li>
                    </ul>
                </footer>
        </div>
    );
}

export default SideBar;