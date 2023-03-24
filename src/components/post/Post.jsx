import "./Post.css"
import { PublicIcon, LikeIcon, CommentIcon, ShareIcon, MessengerIcon } from "../../utils/icons"
import { LikeReactions } from "../../utils/iconUtils"
import { useState, useEffect, useRef } from "react"
import { IconButton } from "@mui/material"
import InputEmoji from 'react-input-emoji'
import Comment from "./Comment"

const Post = ({item}) => {

    const commentInputRef = useRef(null);

    const [imageLiked, setImageLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    const [likeReactionShow,setLikeReactionShow] = useState(false)
    const [commentCount, setCommentCount] = useState(0)
    const [commentText, setCommentText] = useState('')
    const [commentArray, setCommentArray] = useState([])
  
    const handleLikeButton = () => {
        if(!imageLiked)
            setLikeReactionShow(true)
    }

    const handleClickReaction = () => {
        setLikeCount(likeCount+1)
        setImageLiked(true)
        setLikeReactionShow(false)
    }

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
        if (comment != ''){
            setCommentArray([...commentArray,comment]);
            setCommentCount(commentCount+1);
        }
    }

    const handlePhotoURL = (photoURL) => (
        photoURL.startsWith("blob")
        ? photoURL
        : require(`../../${photoURL}`)
    )

    useEffect(()=>{
        setLikeCount(item?.likeCount || 0)
        setCommentCount(item?.commentCount || 0)
    },[item])

    return (
        <div className="post-container" key={item?.id}>
            <div className="post-head">
                <div className="post-author-profile">
                    <div className="profile-img">
                        <img src={item.profilePicture || require(`../../${"assets/person/10.jpeg"}`)} />
                    </div>
                    <div>
                        {/* {console.log(item)} */}
                        <div className="profile-name">{item.username || 'John Doe'}</div>
                        <div className="post-time">{item.time || 'Just Now'} <span>&nbsp;·&nbsp;</span> <PublicIcon sx={{fontSize:"1vw"}}/></div>
                    </div>
                </div>

                <div className="post-description">
                    {item?.desc}
                </div>
            </div>

            {
                (item?.photo !== undefined)
                ? 
                    <div className="post-img">
                        <img src={handlePhotoURL(item.photo)} alt={item?.desc} />
                    </div>
                :
                    <></>
            }

            <div className="post-impression post-foot">
                <div className="post-impression-display">
                    <div>{
                        imageLiked ? 
                            (likeCount>1 ?
                                `You and ${likeCount - 1} others`
                                : 'You Liked'
                            )
                        : `${likeCount} Likes`
                    }
                    </div>
                    <div>{commentCount} Comments</div>
                </div>
                <div className="impression-btn-container top-hr-outline">
                    <div className="post-like-btn" 
                        onMouseEnter={handleLikeButton}
                        onClick={updateLike}
                        style={{color: imageLiked ? 'var(--like-color)' : 'unset'}}>
                        <div className="like-react-popup"
                            onClick={updateLike}
                            style={!likeReactionShow? {display:'none'} : {}}>
                        {
                            LikeReactions.map((icon)=>(
                                <div>
                                    <img src={icon} 
                                        onClick={handleClickReaction}
                                        onMouseLeave={()=>{setLikeReactionShow(false)}}
                                    />
                                </div>
                            ))
                        }
                        </div>
                        <LikeIcon />&nbsp;Like
                    </div>
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