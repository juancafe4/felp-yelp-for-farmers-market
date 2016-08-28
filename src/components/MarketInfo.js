import React from 'react';
import MarketStore from '../stores/MarketStore';
import MarketActions from '../actions/MarketActions';
import {List, ListItem} from 'material-ui/List';

import Maps from './Maps';

class MarketInfo extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MarketInfo';

        this.state = {
          name: MarketStore.getName(),
          market: MarketStore.getMarket()
        }
     let name = props.params.id.split('&')[1];
     console.log(name) 
      MarketActions.setName(name);

      this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
      MarketStore.startListening(this._onChange)
    }

    componentWillUnmount() {
      MarketStore.stopListening(this._onChange);
    }
    _onChange() {
      this.setState({
        name: MarketStore.getName(),
        market: MarketStore.getMarket()
      })
    }
    render() {
      let months, hours, modSchedule;
      let {name} = this.state;
      if (this.state.market) {
        let { Address, GoogleLink, Products, Schedule } = this.state.market;
        Products = Products.split(';').map((product,i) => {
          if (this.state.expand) {
            return <ListItem key={i}>{product}</ListItem>
          } else {
            if (i < 5) 
              return product + ', ';
            else
              return '';
          }
        });
        console.log(Products);

        let newURL = GoogleLink = decodeURI(GoogleLink).split('=')[1]
        newURL =  newURL.replace('%2C', '').split(' ');

        let lat = newURL[0], lng = newURL[1];

        return (
          <div className='row'>
            <div className="col-xs-12 text-center">
              <h1>{name}</h1>
              <h4>{Address}</h4>
            </div>
            <div className="col-xs-12 col-md-6 col-md-offset-3 text-center">
              <Maps lat={lat} lng={lng} Address={Address}/>
            </div>
            <div className="col-xs-12 text-center">
              {Products}
            </div>

          </div>
        )
      }
      else
        return <div>Not Found</div>
    }
}

export default MarketInfo;;
