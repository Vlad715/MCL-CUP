import React from 'react';
import {Animated} from "react-animated-css";
import './Video.css';

import btnWatch from './btn_watch.png';
import btnClose from './btn_close.png';
import video from './video.png';

const Video = ({watchSport, onWatchSport}) => {

    return (
        <div>
            <div className='btn-watch' onClick={onWatchSport}> 
                <Animated  animationInDelay={watchSport.delay} isVisible={watchSport.isVisible}>
                    <img src={btnWatch} />
                </Animated>
            </div>
            <div className='btn-watch' onClick={onWatchSport}> 
                <Animated   isVisible={!watchSport.isVisible}>
                    <img src={btnClose} />
                </Animated>
            </div>
            <div className='text-watch'> 
                <Animated  animationIn="zoomIn" animationInDuration={500} animationInDelay={watchSport.delay} isVisible={watchSport.isVisible}>
                    <div> WATCH TV SPORT</div>
                </Animated>
            </div>
            <div className='video'> 
                <Animated  animationIn="zoomIn" animationInDuration={500} isVisible={!watchSport.isVisible}>
                    <img  src= {video} />
                </Animated>
            </div>
        </div>
    );
};

export default Video;