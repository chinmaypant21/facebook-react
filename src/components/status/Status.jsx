const Status = () => {
    return (
        <div className="status-container">
            <div className="status-field">
                <div className="profile-img">
                    <img src={require('../../assets/person/1.jpeg')}/>
                </div>
                <div className="comment-input">
                    <div>What on your mind, John?</div>
                </div>
            </div>
            <div className="top-hr-outline">
                <div>
                    Live Video
                </div>
                <div>
                    Photo/Video
                </div>
                <div>
                    Feeling/Activity
                </div>
            </div>
            <div className="status-button"></div>
        </div>
    )
}

export default Status