import "./Post.css"
import { PublicIcon, LikeIcon, CommentIcon, ShareIcon, MessengerIcon, EmojiIcon } from "../../utils/icons"
import { useState, useEffect, useRef } from "react"
import { IconButton } from "@mui/material"
import InputEmoji from 'react-input-emoji'
import Comment from "./Comment"

const Post = ({item}) => {

    const commentInputRef = useRef(null);

    const [imageLiked, setImageLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const [commentCount, setCommentCount] = useState(0)
    const [commentText, setCommentText] = useState('')
    const [commentArray, setCommentArray] = useState([])
  
    const updateLike = () => {
        if(!imageLiked){
            setLikeCount(likeCount+1)
            setImageLiked(true)
        }

        else{
            setLikeCount(likeCount-1)
            setImageLiked(false)
        }
    }

    const createComment = (comment) => {
        setCommentArray([...commentArray,comment]);
        setCommentCount(commentCount+1);
    }

    useEffect(()=>{
        setLikeCount(item.likeCount)
        setCommentCount(item.commentCount)
    },[item,commentArray])
    return (
        <div className="post-container" key={item.id}>
            <div className="post-head">
                <div className="post-author-profile">
                    <div className="profile-img">
                        <img src={require(`../../${"assets/person/10.jpeg"}`)} />
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
                    <div onClick={updateLike} style={{color: imageLiked ? 'var(--like-color)' : 'unset'}}><LikeIcon />&nbsp;Like</div>
                    <div onClick={()=>{commentInputRef.current.focus()}}><CommentIcon />&nbsp;Comment</div>
                    <div><ShareIcon />&nbsp;Share</div>
                </div>
                <div className="post-comment-container top-hr-outline">
                    <div className="post-comments" id="post-comments">
                        {
                            commentArray.map((item,idx) => (
                                <Comment value={item} key={idx} />
                            ))
                        }
                    </div>
                    <div className="comment-input">
                         <InputEmoji ref={commentInputRef}
                            value={commentText}
                            onChange={setCommentText}
                            cleanOnEnter
                            onEnter={(e)=>{createComment(e)}}
                            placeholder="Write a comment..."
                        />
                        <IconButton onClick={(e)=>{createComment(commentText); setCommentText('')}}>
                            <MessengerIcon sx={{fontSize:'inherit'}} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post