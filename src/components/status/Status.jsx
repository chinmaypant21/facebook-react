import { useState } from 'react'
import { LiveTvIcon, AddPhotoIcon, EmojiIcon, CloseIcon } from '../../utils/icons'
import Modal from '@mui/material/Modal';
import {IconButton, TextField} from "@mui/material"
import './Status.css'

const Status = ({postData,setPostData, profileIcon, profileName}) => {

    const [createPostModalOpen, setCreatePostModalOpen] = useState(false)
    const [textValue,setTextValue] = useState('')
    const [postInputImg, setPostInputImg] = useState()

    function handleValueChange(e) {
        setTextValue(e.target.value)
    }

    function handleCloseModal() {
        setTextValue('')
        setPostInputImg()
        setCreatePostModalOpen(false)
    }

    function createPost() {
        setCreatePostModalOpen(true);
    }

    function handleImgInput(e) {
        const path = URL.createObjectURL(e.target.files[0])
        setPostInputImg(path)
    }

    function postStatus() {
        const currentPost = {
            profilePicture: profileIcon,
            username: profileName,
            desc:textValue,
            photo:postInputImg
        }

        setTimeout(()=>{
            setPostData([currentPost,...postData])
            setCreatePostModalOpen(false)
        },1000)
        setTextValue('')
        setPostInputImg()
    }

    return (
        <div className="status-container">
            <div className="status-field">
                <div className="profile-img">
                    <img src={profileIcon}/>
                </div>
                <div className="comment-input status-text-div" onClick={createPost}>
                    <div>What's on your mind, {profileName}?</div>
                </div>
            </div>
            <div className="status-button impression-btn-container top-hr-outline">
                <div onClick={createPost}>
                    <LiveTvIcon sx={{color:'red'}}/>
                    Live Video
                </div>
                <div onClick={createPost}>
                    <AddPhotoIcon sx={{color:'#45bd62'}}/>
                    Photo/video
                </div>
                <div onClick={createPost}>
                    <EmojiIcon sx={{color:'#f7b928'}}/>
                    Feeling
                </div>
            </div>
            <Modal
                open={createPostModalOpen}
                onClose={()=>{setCreatePostModalOpen(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='post-modal-container'>
                    <div className='post-modal-head'>
                        <div>
                            Create post
                        </div>
                        <div className='close-icon' onClick={handleCloseModal}>
                            <IconButton>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className='post-modal-field-container top-hr-outline'>
                        <TextField
                            className='post-modal-input'
                            multiline
                            minRows={4}
                            maxRows={5}
                            value={textValue}
                            placeholder={`What's on your mind, ${profileName}?`}
                            onChange={handleValueChange}
                        />
                        <div className='post-img-preview'>
                        {
                            postInputImg
                            ? <img src={postInputImg}/>
                            : <></>
                        }
                        </div>
                        <label htmlFor='inputImage'>
                            <div className='post-add-img-div'>
                                <div>
                                    <AddPhotoIcon sx={{color:'#45bd62'}}/>
                                </div>
                                <span>
                                    Add to your post
                                </span>
                                <input id='inputImage' type="file" multiple accept='image/png, image/jpg, image/jpeg' 
                                    style={{display:'none'}} 
                                    onChange={handleImgInput}
                                    />
                            </div>
                        </label>
                        <div className='post-target-btn' 
                            style={(textValue === '' && postInputImg === undefined) ? {backgroundColor:'#505151',cursor:'no-drop'} : {} }
                            onClick={postStatus}>
                            Post
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Status