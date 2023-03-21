const Comment = ({value}) => {
    return(
        <div className="comment-container">
            <div className="profile-img">
                <img src={require('../../assets/person/1.jpeg')}/>
            </div>
            <div className='comment-bubble'>
                <div>John Doe</div>
                <div>{value}</div>
            </div>
        </div>
    )
}

export default Comment;