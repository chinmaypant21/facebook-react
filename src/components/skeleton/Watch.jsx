import WatchCard from "./WatchCard"
import './Watch.css'
const displayCardsLength = 10;

const Watch = () => {
    return (
        <div className="watch-container">
            <div className="watch-wrapper">
            {
                Array.from({ length: displayCardsLength }).map(() => <WatchCard />)
            }
            </div>
        </div>
    )
    }

export default Watch