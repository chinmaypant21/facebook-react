import PeopleAltIcon from '@mui/icons-material/PeopleAlt'; //friends
import SendIcon from '@mui/icons-material/Send'; //messenger
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'; //watch
import RestoreIcon from '@mui/icons-material/Restore'; //Memories
import BookmarksIcon from '@mui/icons-material/Bookmarks'; //saved
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; //questions
import Diversity3Icon from '@mui/icons-material/Diversity3'; //groups
import StarIcon from '@mui/icons-material/Star'; //favourites
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; //Events
import LocalFloristIcon from '@mui/icons-material/LocalFlorist'; //Climate Science Center
import WorkIcon from '@mui/icons-material/Work'; //Jobs
import SettingsIcon from '@mui/icons-material/Settings'; //Settings

// For Reactions
import LikeImg from '../assets/reaction/like.png'
import LoveImg from '../assets/reaction/love.png'
import CareImg from '../assets/reaction/care.png'
import LaughImg from '../assets/reaction/laugh.png'
import WowImg from '../assets/reaction/wow.png'
import SadImg from '../assets/reaction/sad.png'
import AngerImg from '../assets/reaction/anger.png'

export const SideMenu = [
    {text: "Friends", icon:<PeopleAltIcon />},
    {text: "Messenger", icon: <SendIcon sx={{transform:'rotate(-30deg)'}}/>},
    {text: "Watch", icon: <OndemandVideoIcon />},
    {text: "Memories", icon: <RestoreIcon />},
    {text: "Saved", icon: <BookmarksIcon />},
    {text: "Questions", icon: <HelpOutlineIcon />},
    {text: "Groups", icon: <Diversity3Icon />},
    {text: "Favourites", icon: <StarIcon />},
    {text: "Events", icon: <EmojiEventsIcon />},
    {text: "Climate Science Center",icon: <LocalFloristIcon />},
    {text: "Jobs", icon: <WorkIcon />},
    {text: "Settings", icon: <SettingsIcon />},

    {text: "Groups", icon: <Diversity3Icon />},
    {text: "Favourites", icon: <StarIcon />},
    {text: "Events", icon: <EmojiEventsIcon />},
    {text: "Climate S cience Center",icon: <LocalFloristIcon />},
    {text: "Jobs", icon: <WorkIcon />},
    {text: "Settings", icon: <SettingsIcon />},
]

export const LikeReactions = [LikeImg, LoveImg, CareImg, LaughImg, WowImg, SadImg, AngerImg]


export const IconGradient = ({id,startGradient, stopGradient}) => (
    <svg width={0} height={0}>
          <linearGradient id={id} x1={1} y1={0} x2={1} y2={1}>
            <stop offset={0} stopColor={startGradient} />
            <stop offset={1} stopColor={stopGradient} />
          </linearGradient>
    </svg>
)