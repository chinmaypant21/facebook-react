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
                    <Skeleton animation="wave" variant="circular" width={'2vw'} height={'2vw'} />
                }

                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon sx={{fontSize:'2vw'}}/>
                    </IconButton>
                }
                
                title={
                    <Skeleton
                    animation="wave"
                    height={'0.6vw'}
                    width="80%"
                    style={{ marginBottom: '0.8vw' }}
                    />
                }
                
                subheader={
                    <Skeleton animation="wave" height={'0.6vw'} width="40%" />
                }
            />
            
            <Skeleton className='watch-card-body' animation="wave" variant="rectangular" />

            <CardContent className='watch-card-foot'>
                <Fragment>
                    <Skeleton animation="wave" height={'0.6vw'} style={{ marginBottom: '0.8vw' }} />
                    <Skeleton animation="wave" height={'0.6vw'} width="80%" />
                </Fragment>
            </CardContent>
        </Card>
  );
}


export default WatchCard;