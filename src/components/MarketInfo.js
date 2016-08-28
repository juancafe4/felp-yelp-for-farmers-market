import React from 'react';
import MarketStore from '../stores/MarketStore';
import MarketActions from '../actions/MarketActions';
import {List, ListItem} from 'material-ui/List';

class MarketInfo extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MarketInfo';

        this.state = {
          name: MarketStore.getName(),
          market: MarketStore.getMarket()
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
      if (this.state.market) {
        let { Address, GoogleLink, Products, Schedule } = this.state.market;
        Products = Products.split(';').map((product,i) => {
          return <ListItem key={i}>{product}</ListItem>
        });
        return (
          <div className='row'>
            <div className="col-xs-12 text-center">
              <h1>{name}</h1>
              <h4>{Address}</h4>
              <List>{Products}</List>
              <h2>{GoogleLink}</h2>
            </div>
          </div>
        )
      }
      else
        return <div>Not Found</div>
    }
}

export default MarketInfo;;
