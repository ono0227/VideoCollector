import React from 'react';
import Iframe from "react-iframe";

const Youtube = (props) => {

    const video = props.videos.map((video) => {
        const url = 'https://www.youtube.com/embed/' + video.id.videoId;
        //urlにvideoIdを入れる

        return ( 
            <div style={{ margin: '20px', textAlign: 'center' }} key={video.id.videoId}>
                <Iframe
                    width="480"
                    height="270"
                    src={url}
                    frameBorder="0"
                    style={{ border: '0' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        )
    });

    return (
        <div style={{marginTop: '10px'}}>
          {video}
        </div>
    )

}

export default Youtube;
