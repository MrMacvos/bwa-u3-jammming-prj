import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
  render() {
    return (
		<div className="TrackList">
			{/* You will add a map method that renders a set of Track components */}
			{this.props.tracks.map(tracks => <Track key={tracks.id} track={tracks} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />)}
		</div>
    );
  }
}

export default TrackList;
