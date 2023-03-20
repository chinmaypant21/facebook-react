import "./Post.css"
import { PublicIcon, LikeIcon, CommentIcon, ShareIcon } from "../../utils/icons"
import { useState, useEffect } from "react"

const Post = ({item}) => {

    const [imageLiked, setImageLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const [commentCount, setCommentCount] = useState(0)

    const getLike = () => {
        if(!imageLiked){
            setLikeCount(likeCount+1)
            setImageLiked(true)
        }

        else{
            setLikeCount(likeCount-1)
            setImageLiked(false)
        }
    }

    const getComment = () => {

    }

    useEffect(()=>{
        setLikeCount(item.likeCount)
        setCommentCount(item.commentCount)
    },[item])
    return (
        <div className="post-container" key={item.id}>
            <div className="post-head">
                <div className="post-author-profile">
                    <div className="profile-img">
                        <img src={require(`../../${"assets/person/10.jpeg"}`)}></img>
                    </div>
                    <div>
                        <div className="profile-name">John Doe</div>
                        <div className="post-time">{item.time} <span>&nbsp;·&nbsp;</span> <PublicIcon sx={{fontSize:"1vw"}}/></div>
                    </div>
                </div>

                <div className="post-description">
                    {item.desc}
                </div>
            </div>

            <div className="post-img">
                <img src={require(`../../${item.photo}`)} alt={item.desc} />
            </div>

            <div className="post-impression post-foot">
                <div className="post-impression-display">
                    <div>{
                        imageLiked ? `You and ${likeCount - 1} others`
                        : `${likeCount} Likes`
                    }
                    </div>
                    <div>{commentCount} Comments</div>
                </div>
                <div className="impression-btn-container top-hr-outline">
                    <div onClick={getLike} style={{color: imageLiked ? 'var(--like-color)' : 'unset'}}><LikeIcon />&nbsp;Like</div>
                    <div onClick={getComment}><CommentIcon />&nbsp;Comment</div>
                    <div><ShareIcon />&nbsp;Share</div>
                </div>
                <div className="post-comment-container top-hr-outline">
                    
                </div>
            </div>
        </div>
    )
}

export default Post