import React from 'react';
import MarketActions from '../actions/MarketActions';
import MarketStore from '../stores/MarketStore';
import moment from 'moment';
import MarketNav from './MarketNav';

import {Paper} from 'material-ui';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import {browserHistory} from 'react-router';


import FontIcon from 'material-ui/FontIcon';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const infoIcon  = <FontIcon className="material-icons">info</FontIcon>;
const reviewIcon  = <FontIcon className="material-icons">star</FontIcon>;
const storageIcon  = <FontIcon className="material-icons">storage</FontIcon>;

class DisplayMarket extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'DisplayMarket';

        this.state = {
          selectedIndex: 0
        }
    }

    componentDidMount() {
      let params = this.props.params.id;
      params = decodeURI(params);
      let id = params.split('&')[0];
      let name = params.split('&')[1];
      MarketActions.getMarket(id, name);
      MarketActions.setName(name);
    }

    render() {
        let id = this.props.params.id;
        let index = (this.props.params.index ? this.props.params.index : 0);
        return (
          <div className='container'>
            <div className='row'>
              <MarketNav id={id} index={index}/>
              {this.props.children}
            </div>
          </div>
        )
    }
}

export default DisplayMarket;

