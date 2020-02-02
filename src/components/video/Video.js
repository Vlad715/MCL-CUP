import React, {Component} from 'react';
import {Animated} from "react-animated-css";
import ReactPlayer from 'react-player';
import './Video.css';

import btnWatch from '../../assets/iсons/btn_watch.png';
import btnClose from '../../assets/iсons/btn_close.png';
import video from './video.mp4';
import btnPlayIcon from '../../assets/iсons/Play Button.png';

export default class Video extends Component {

    render() {
        const {watchSport, onWatchSport, onPlayBtn} = this.props;
        let classShowPlayBtn;
        if (watchSport.showPlayBtn ) { classShowPlayBtn = 'btn-play'} else { classShowPlayBtn = 'btn-play invisible'}

        return (
            <div>
                <div className='btn-watch' onClick={onWatchSport}> 
                    <Animated  animationInDelay={watchSport.delay} isVisible={!watchSport.showVideo} animationInDelay={watchSport.delay}>
                        <img src={btnWatch} />
                    </Animated>
                </div>
                <div className='btn-watch' onClick={onWatchSport}> 
                    <Animated   isVisible={watchSport.showVideo}>
                        <img src={btnClose} />
                    </Animated>
                </div>
                <div className='text-watch'> 
                    <Animated  animationIn="zoomIn" animationInDuration={500} animationInDelay={watchSport.delay} isVisible={!watchSport.showVideo}>
                        <div> WATCH TV SPORT</div>
                    </Animated>
                </div>
                <div className='video-block'> 
                    <Animated  animationIn="zoomIn" animationInDuration={500} isVisible={watchSport.showVideo}>
                        <ReactPlayer className='video' url={video} controls={true} playing={!watchSport.showPlayBtn}/>
                    </Animated>
                    <div className={classShowPlayBtn} onClick={onPlayBtn}>
                        <img src={btnPlayIcon} />
                    </div>
                </div>
            </div>
        );
    }
};