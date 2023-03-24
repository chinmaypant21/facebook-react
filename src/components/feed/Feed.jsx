import "./Feed.css"
import {Post, Status} from "..";
import { Posts } from "../../utils/dummyData";
import { useEffect, useState } from "react";

const Feed = ({profileIcon, profileName}) => {
    const name = profileName.split(" ")[0]
    const [postData,setPostData] = useState(Posts)

    return (
        <div className="feed-container">
            <div className="feed-wrapper">
                <div className="feed-create-post">
                    <Status setPostData={setPostData} postData={postData} profileIcon={profileIcon} profileName={name}/>
                </div>
                <div className="feed-posts">
                    {
                        postData.map(item => (
                            <Post item = {item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Feed;