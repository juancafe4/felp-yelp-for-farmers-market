import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';


class Maps extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Maps';

        this.onMapCreated = this.onMapCreated.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onCloseClick = this.onCloseClick.bind(this);
        this.clickCircle = this.clickCircle.bind(this);
    }
    onMapCreated(map) {
      map.setOptions({
        disableDefaultUI: true
      });
    }

    onDragEnd(e) {
      console.log('onDragEnd', e);
    }

    onCloseClick() {
      console.log('onCloseClick');
    }
    clickCircle(e) {
      console.log('click')
    }

    render() {
      console.log('here ', this.props.lat)
      const coords = {
        lat: this.props.lat,
        lng: this.props.lng
      };

        return (
            <Gmaps
              width={'100%'}
              height={'400px'}
              lat={coords.lat}
              lng={coords.lng}
              zoom={12}
              loadingMessage={'Loading ...'}
              params={{v: '3.exp', key: 'YOUR_API_KEY'}}
              onMapCreated={this.onMapCreated}>
              <Marker
                lat={coords.lat}
                lng={coords.lng}
                draggable={true}
                onDragEnd={this.onDragEnd} />
              <InfoWindow
                lat={coords.lat}
                lng={coords.lng}
                content={this.props.Address}
                onCloseClick={this.onCloseClick} />
            </Gmaps>
      );
    }
}

export default Maps;
  /*
  <Circle
    lat={coords.lat}
    lng={coords.lng}
    radius={500}
    onClick={this.clickCircle}/>
  */
