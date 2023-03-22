import './Status.css'
import { LiveTvIcon, AddPhotoIcon, EmojiIcon, CloseIcon } from '../../utils/icons'
import { useState } from 'react'
import Modal from '@mui/material/Modal';
import {IconButton, TextField} from "@mui/material"

const Status = () => {

    const [createPostModalOpen, setCreatePostModalOpen] = useState(false)
    const [textValue,setTextValue] = useState('')

    function handleValueChange(e) {
        setTextValue(e.target.value)
        console.log(textValue)
    }

    function createPost() {
        setCreatePostModalOpen(true);
    }

    return (
        <div className="status-container">
            <div className="status-field">
                <div className="profile-img">
                    <img src={require('../../assets/person/1.jpeg')}/>
                </div>
                <div className="comment-input status-text-div" onClick={createPost}>
                    <div>What's on your mind, John?</div>
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
                        <div className='close-icon' onClick={()=>{setCreatePostModalOpen(false)}}>
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
                            placeholder="What's on your mind, Chinmay?"
                            onChange={handleValueChange}
                        />
                        <div className='post-add-img-div'>
                            <div>
                                <AddPhotoIcon sx={{color:'#45bd62'}}/>
                            </div>
                            <span>
                                Add to your post
                            </span>
                        </div>
                        <div className='post-target-btn' 
                            style={(textValue === '') ? {backgroundColor:'#505151',cursor:'no-drop'} : {} }>
                            Post
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Status