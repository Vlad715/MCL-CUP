import React from 'react';
import {Animated} from "react-animated-css";
import './MainPage.css';

import closeBtnMain from '../assets/iсons/Main Close Btn.png';
import cupHoist from '../assets/screens/Cup Hoist.png';
import grayBackground from '../assets/screens/gray-background.png';
import confetti from '../assets/screens/confetti.png';
import portland from '../assets/screens/PORTLAND.png';
import dallas from '../assets/screens/DALLAS.png';
import portlandLogo from '../assets/iсons/PORTLAND logo.png';
import dallasLogo from '../assets/iсons/DALLAS logo.png';
import mslBanner from '../assets/screens/MLS banner.png';

const MainPage = ({teamPhoto, onMainCloseBtn}) => {
    
    return (
        <div className='main-page'>
            <img className='close-btn' src= {closeBtnMain} onClick={onMainCloseBtn}/>
            <div className='gray-backdround'>
                <Animated animationIn="slideInUp" animationInDuration={3000} isVisible={true}>
                    <img  src= {grayBackground} />
                </Animated>
            </div>
            <div className='cup-block'>
                <Animated animationIn="slideInUp" animationInDuration={3000} isVisible={true}>
                    <img src={cupHoist}/>
                </Animated>
            </div>
            <div className='confetti'>
                <Animated animationIn="slideInUp" animationInDuration={2000} animationInDelay={2000} isVisible={true}>
                    <img  src={confetti} />
                </Animated>
            </div>
            <div className='team-left'>
                <Animated  animationIn="slideInLeft" animationInDuration={4000} animationInDelay={5000} 
                    animationOut="slideOutLeft" animationOutDuration={5000} isVisible={teamPhoto}>
                    <img src= {portland} />
                </Animated>
            </div>
            <div className='team-right'>
                <Animated animationIn="slideInRight" animationInDuration={4000} animationInDelay={5000}
                    animationOut="slideOutRight" animationOutDuration={5000} isVisible={teamPhoto}>
                    <img  src= {dallas} />
                </Animated>
            </div>
            <div className='text-in-midle'>
                <Animated animationIn="zoomIn" animationInDuration={1000} animationInDelay={9000} isVisible={teamPhoto}>
                    <div className='text-one'>ONE</div>
                </Animated>
                <Animated animationIn="zoomIn" animationInDuration={1000} animationInDelay={10000} isVisible={teamPhoto}>
                    <div className='text-game'>GAME</div>
                </Animated>
                <Animated animationIn="zoomIn" animationInDuration={1000} animationInDelay={11000} isVisible={teamPhoto}>
                    <div className='text-glory'>TO GLORY</div>
                </Animated>
            </div>
            <div className='logo-left'>
                <Animated  animationIn="bounceIn" animationInDuration={3000} animationInDelay={11000}
                    animationOut="slideOutLeft" animationOutDuration={2000} isVisible={teamPhoto}>
                    <img  src= {portlandLogo} />
                </Animated>
            </div>
            <div className='logo-right'>
                <Animated  animationIn="bounceIn" animationInDuration={3000} animationInDelay={11000}
                    animationOut="slideOutRight" animationOutDuration={2000} isVisible={teamPhoto}>
                    <img  src= {dallasLogo} />
                </Animated>
            </div>
            <div className='msl-banner'> 
                <Animated  animationIn="zoomIn" animationInDuration={500} animationInDelay={12000} isVisible={true}>
                    <img  src= {mslBanner} />
                </Animated>
            </div>
        </div>
    );
}

export default MainPage;
