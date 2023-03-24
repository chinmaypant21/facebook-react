import WatchCard from "./WatchCard"
import './Watch.css'

const Watch = () => {
    return (
        <div className="watch-container">
            <div className="watch-wrapper">
            {
                Array.from({ length: 10 }).map(() => <WatchCard />)
            }
            </div>
        </div>
    )
    }

export default Watch