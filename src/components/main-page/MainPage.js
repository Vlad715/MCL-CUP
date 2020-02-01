import React from 'react';
import {Animated} from "react-animated-css";
import './MainPage.css';

import backgroundPict from './background.png';
import closeBtn from './Main Close Btn.png';
import cupHoist from './Cup Hoist.png';
import grayBackground from './gray-background.png';
import confetti from './confetti.png';
import portland from './PORTLAND.png';
import dallas from './DALLAS.png';
import portlandLogo from './PORTLAND logo.png';
import dallasLogo from './DALLAS logo.png';



const MainPage = () => {

    return (
        <div className='main-page'>
            <img src={backgroundPict} />
            <img className='close-btn' src= {closeBtn} />
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
                <Animated  animationIn="slideInLeft" animationInDuration={4000} animationInDelay={5000} isVisible={true}>
                    <img  src= {portland} />
                </Animated>
            </div>
            <div className='team-right'>
                <Animated animationIn="slideInRight" animationInDuration={4000} animationInDelay={5000} isVisible={true}>
                    <img  src= {dallas} />
                </Animated>
            </div>
            <div className='text-in-midle'>
                <Animated animationIn="zoomIn" animationInDuration={1000} animationInDelay={9000} isVisible={true}>
                    <div className='text-one'>ONE</div>
                </Animated>
            </div>
            <div className='logo-left'>
                <Animated  animationIn="bounceIn" animationInDuration={3000} animationInDelay={9000} isVisible={true}>
                    <img  src= {portlandLogo} />
                </Animated>
            </div>
            <div className='logo-right'>
                <Animated  animationIn="bounceIn" animationInDuration={3000} animationInDelay={9000} isVisible={true}>
                    <img  src= {dallasLogo} />
                </Animated>
            </div>
        </div>
    );
};

export default MainPage;

