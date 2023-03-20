import "./Feed.css"
import Post from "../post/Post";
import { Posts } from "../../utils/dummyData";

const Feed = () => {
    return (
        <div className="feed-container">
            <div className="feed-wrapper">
                <div className="feed-stories"></div>
                <div className="feed-create-post"></div>
                <div className="feed-posts">
                    {
                        Posts.map(item => (
                            <Post item = {item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Feed;