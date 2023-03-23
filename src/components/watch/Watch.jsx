import WatchCard from "./WatchCard"
import './Watch.css'

const Watch = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', rowGap:'2vw', margin:'2vw 8vw'}}>
        {
            Array.from({ length: 10 }).map(() => <WatchCard />)
        }
        </div>
    )
    }

export default Watch