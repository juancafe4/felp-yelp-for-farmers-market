import React from 'react';
import {List, ListItem} from 'material-ui/List';
import MarketStore from '../stores/MarketStore';
import MarketActions from '../actions/MarketActions';
import RaisedButton from 'material-ui/RaisedButton';


class MarketStands extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'MarketStands';

      this.state = {
        stands: [
          {
            "_id": "57c3b40e1296955e3ac32412",
            "name": "Ray's Organic Vegetables",
            "image": "http://static1.squarespace.com/static/54b92e6ae4b076c29fb9c591/t/54bcf4ece4b054d28241c94e/1421669615896/farm+stand.jpg?format=1500w",
            "hours": "Sat: 9:00 - 13:00",
            "owners": "Ray",
            "description": "Get fresh, organic, locally grown vegetables! ",
          },
          {
            "_id": "57c3b40e1296955e3ac33412",
            "name": "Fresh Baked Goods",
            "image": "https://s-media-cache-ak0.pinimg.com/564x/48/2f/a5/482fa57edde827269ade0aeff4b0a897.jpg",
            "hours": "Sat: 7:00 - 17:00",
            "owners": "Fresh Baked Co.",
            "description": "Fresh pastries and breads. Fresh pastries and breads. Fresh pastries and breads. Fresh pastries and breads. Fresh pastries and breads. ",
          },
          {
            "_id": "57c3b40e1296955e3ac22412",
            "name": "Barb's Cheese",
            "image": "http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/say_cheese_slideshow/getty_rf_photo_of_cheese_farmers_market.jpg",
            "hours": "Sat: 9:00 - 17:00",
            "owners": "Barb",
            "description": "Cheese made from the milk of grassfed cows, by Barb Barbel.",
          },
        ],
        displayed: undefined
      }

      this.toggleStand = this.toggleStand.bind(this);
    }

    toggleStand(index) {
      if (this.state.displayed === index) {
        this.setState({displayed: undefined});
      }
      else {
        this.setState({displayed: index});
      }
    }

    render() {
      console.log(this.state.stands);
      let ListItems;
      if (this.state.stands) {
        ListItems = this.state.stands.map((stand, i) => {
          if (this.state.displayed !== i) {
            return (<ListItem key={i} primaryText={stand.name} onClick={this.toggleStand.bind(null, i)}></ListItem>);
          } else {
            return (
              <ListItem id={i} key={i} onClick={this.toggleStand.bind(null, i)}>
                <img src={stand.image} className='standImg'/>
                <h2>{stand.name}</h2>
                <p>Owners: {stand.owners}</p>
                <h5>{stand.hours}</h5>
                <p>{stand.description}</p>
              </ListItem>
            )
          }
        })
      }
      if (this.state.stands) {
        return (
          <div className='row'>
            <div className="col-xs-12 col-md-6 col-md-offset-3">
              <h1 className="text-center">Stands</h1>
            </div>
            <div className="col-xs-12 col-md-6 col-md-offset-3">
              <List>
                {ListItems}
              </List>
            </div>
          </div>
        )
      } else {
        return (
          <div className="text-center">
            <h3>No stands for this location</h3>
            <RaisedButton label="Add a Stand" onClick={this.addStandModal}/>
          </div>
        )
      }
    }
}

export default MarketStands;
