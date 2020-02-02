import React, {Component} from 'react';
import MainPage from '../main-page';
import Video from '../video';
import './App.css';

import backgroundPict from '../assets/screens/background.png';

export default class App extends Component {

  state = {
    advertising: '',
    teamPhoto: true,
    watchSport: {
        showVideo: false,
        delay: 17000,
        showPlayBtn: false
    }
  };

onWatchSport = () => {
  this.setState(({watchSport}) => {
      return {
          watchSport: {
              showVideo: !watchSport.showVideo,
              delay: 0,
              showPlayBtn: !watchSport.showVideo
          }
      };
  });
};

onMainCloseBtn = () => {
  this.setState({
    advertising: 'invisible'
  });
}

onPlayBtn = () => {
  this.setState({
        watchSport: {
            showVideo: true,
            showPlayBtn: false
        }
  });
}

  render() {

    setTimeout(() => {
      this.setState({
          teamPhoto: false
      });
    }, 15000);

    let { teamPhoto, watchSport, advertising } = this.state;

    return (
      <div className='container'>
        <img src={backgroundPict}/>
        <div className={advertising}>
          <MainPage teamPhoto={teamPhoto} onMainCloseBtn={this.onMainCloseBtn}/>
          <Video watchSport={watchSport} onWatchSport={this.onWatchSport} onPlayBtn={this.onPlayBtn}/>
        </div>
      </div>
    );
  }  
}
