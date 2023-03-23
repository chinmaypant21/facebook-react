import {Fragment} from 'react';
import {Card, CardHeader, CardContent, IconButton, Skeleton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Watch.css'

const WatchCard = () => {
    return (
        <Card className='watch-card'>
            <CardHeader 
                className='watch-card-head'

                avatar={
                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                }

                action={
                    <IconButton aria-label="settings">
                    <MoreVertIcon />
                    </IconButton>
                }
                
                title={
                    <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                    />
                }
                
                subheader={
                    <Skeleton animation="wave" height={10} width="40%" />
                }
            />
            
            <Skeleton className='watch-card-body' animation="wave" variant="rectangular" />

            <CardContent className='watch-card-foot'>
                <Fragment>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                </Fragment>
            </CardContent>
        </Card>
  );
}


export default WatchCard;