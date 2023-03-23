import "./Feed.css"
import {Post, Status} from "..";
import { Posts } from "../../utils/dummyData";
import { useEffect, useState } from "react";

const Feed = () => {
    const [a,b] = useState(Posts)
    useEffect(()=>{
        console.log('here')
        // b(Posts)
    },[])
    return (
        <div className="feed-container">
            <div className="feed-wrapper">
                <div className="feed-create-post">
                    <Status b={b} a={a}/>
                </div>
                <div className="feed-posts">
                    {
                        a.map(item => (
                            <Post item = {item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Feed;