import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import PhotoItem from './PhotoItem';
import Footer from './Footer';
import CreateButton from './CreateButton';
import ActionSheet from './ActionSheet';

import { STORE_TYPES } from '../services/types';
import '../style/PhotoList.css';

class PhotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showActionSheet: false,
    };
  }
  showActionSheet = () => {
    this.setState(prevState => ({showActionSheet: !prevState.showActionSheet}))
  };

  renderPhotoList = () => {
    const node = this.props.photos.map((photo, i) => {
      return <PhotoItem photo={photo} key={`photo-item-${i}`} />;
    });
    return node;
  };
  
  render() {
    return (
      <div className='photo-list-view'>
        <Header />
        <div className='photo-list-wrapper'>
          {this.renderPhotoList()}
          <CreateButton showActionSheet={this.showActionSheet}/>
        </div>
        <div 
          className={this.state.showActionSheet ? 'dimmed show' : 'dimmed'}
          onClick={() => this.showActionSheet()}
        ></div>
        <ActionSheet 
          isShow={this.state.showActionSheet}
          showActionSheet={this.showActionSheet}
        />
        <Footer />
      </div>
    );
  }
}

export default connect(state => {
  return {
    [STORE_TYPES.STATE.TOP.PHOTOS]: state.top[STORE_TYPES.STATE.TOP.PHOTOS]
  };
})(PhotoList);
