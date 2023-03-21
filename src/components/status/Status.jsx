import './Status.css'
import { LiveTvIcon, AddPhotoIcon, EmojiIcon } from '../../utils/icons'

const Status = () => {
    return (
        <div className="status-container">
            <div className="status-field">
                <div className="profile-img">
                    <img src={require('../../assets/person/1.jpeg')}/>
                </div>
                <div className="comment-input status-text-div">
                    <div>What's on your mind, John?</div>
                </div>
            </div>
            <div className="status-button impression-btn-container top-hr-outline">
                <div>
                    <LiveTvIcon sx={{color:'red'}}/>
                    Live Video
                </div>
                <div>
                    <AddPhotoIcon sx={{color:'#45bd62'}}/>
                    Photo/video
                </div>
                <div>
                    <EmojiIcon sx={{color:'#f7b928'}}/>
                    Feeling
                </div>
            </div>
        </div>
    )
}

export default Status