import React, {Component} from 'react';
import MainPage from '../main-page';
import Video from '../video';
import './App.css';

import backgroundPict from './background.png';

export default class App extends Component {

  state = {
    advertising: '',
    teamPhoto: true,
    watchSport: {
        isVisible: true,
        delay: 17000
    }
  };

onWatchSport = () => {
    this.setState(({watchSport}) => {
        return {
            watchSport: {
                isVisible: !watchSport.isVisible,
                delay: 0
            }
        };
    });
  };

onMainCloseBtn = () => {
  this.setState({
    advertising: 'invisible'
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
      <div className='app-font'>
        <img src={backgroundPict}/>
        <div className={advertising}>
          <MainPage teamPhoto={teamPhoto} onMainCloseBtn={this.onMainCloseBtn}/>
          <Video watchSport={watchSport} onWatchSport={this.onWatchSport}/>
        </div>
      </div>
    );
  }  
}

