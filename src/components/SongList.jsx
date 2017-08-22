import React from 'react';
import Song from './Song.jsx'

export default (props) => {
    let songNodes = props.data.map((song, index) => {
        return (
            <Song 
            title={song["im:name"].label} 
            artist={song["im:artist"].label} 
            artwork={song["im:image"][2].label} 
            sample={song.link[1].attributes.href}
            position={index+1} 
            key={index+1} />
        )
    })
    return (
        <div className="song-list">
            {songNodes}            
        </div>
    )
}