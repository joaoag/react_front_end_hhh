import React, {Component} from 'react';
import DisplayVenue from './displayVenue'

export default class ShowVenues extends Component {
  constructor (props){
    super(props);
    this.state = {
      venue : null
    };
  }

  _updateVenue(venue){
    this.setState({
      venue: venue
    })
  }

  render() {
    const { venues } = this.props;
    const { venue } = this.state;

    const list = venues && venues.map((venue, index) => {
      return (
        <p key={index}>
          <li> {venue.name} {venue.address} {venue.distance}km</li>
          <button onClick={()=>{this._updateVenue(venue)}}>view</button>
        </p>
      )
    })

    return (<div>
    { this.state.venue ? < DisplayVenue venue={venue} /> : <ul>{list}</ul> }</ div>)

  }
}

// still cant see when were actually using index, as in what is it adding?