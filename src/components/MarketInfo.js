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
          market: MarketStore.getMarket(),
          expand: false
        }
     let name = props.params.id.split('&')[1];
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

      
      console.log('market123',this.state.market);
      if (this.state.market) {
        let { address, link, products, schedules } = this.state.market;
        console.log('products',products);
        products = products.map((product,i) => {
          if (this.state.expand) {
            return <ListItem key={i} className='productsList'>{product}</ListItem>
          } else {
            if (i < 4) 
              return product + ', ';
            else
              return '';
          }
        });
        products.push(<div className='col-xs-12' key={products.length+1}><a onClick={() => this.setState({expand: !this.state.expand})}>{this.state.expand ? 'hide' : 'show more'}</a></div>)
        let newURL = link = decodeURI(link).split('=')[1]
        newURL =  newURL.replace('%2C', '').split(' ');

        let lat = newURL[0], lng = newURL[1];



        return (
          <div className='row'>
            <div className="col-xs-12 text-center">
              <h1>{name}</h1>
              <h4>{address}</h4>
            </div>
            <div className="col-xs-12 col-md-6 col-md-offset-3 text-center">
              <Maps lat={lat} lng={lng} Address={address}/>
            </div>
            <div className="col-xs-12 col-md-4 col-md-offset-4 text-center">
              <h4>products:</h4>
              {products}
            </div>

          </div>
        )
      }
      else
        return <div>Not Found</div>
    }
}

export default MarketInfo;;
