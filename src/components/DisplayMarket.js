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
      MarketActions.getMarket(id);
      MarketActions.setName(name);
    }

    render() {
        let id = this.props.params.id;
        let index = (this.props.params.index ? this.props.params.index : 0);
        return (
          <div className='row'>
            <MarketNav id={id} index={index}/>
            {this.props.children}
          </div>
        )
    }
}

export default DisplayMarket;








/*
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
          // market: MarketStore.getMarket(),
          // name: '',
          selectedIndex: 0
        }
        // this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
      // let params = this.props.params.id;
      // params = decodeURI(params);
      // let id = params.split('&')[0];
      // this.setState({name: params.split('&')[1]});
      // MarketActions.getMarket(this.props.params.id);
      // MarketStore.startListening(this._onChange);


      let params = this.props.params.id;
      params = decodeURI(params);
      let id = params.split('&')[0];
      let name = params.split('&')[1];
      MarketActions.getMarket(id);
      MarketStore.setName(name);
    }

    // componentWillUnmount() {
    //   MarketStore.stopListening(this._onChange);
    // }

    // _onChange() {
    //   this.setState({
    //     market: MarketStore.getMarket()
    //   })
    // }

    // goToPage(page) {
    //   console.log('PROPS', this.props.params.id);
    //   browserHistory.push(`/market/${this.props.params.id}/${page}`)
    // }

    render() {
      // if (!this.state.market) {
      //     return <div>DisplayMarket</div>;
      // } else {
      //   let { Address, GoogleLink, Products, Schedule } = this.state.market;
      //   Products = Products.split(';').map((product,i) => {
      //     return <li key={i}>{product}</li>
      //   });
      //   let months, hours, modSchedule;
      //   Schedule = Schedule.split(/<br>/);
      //   console.log('SCHEDULE', Schedule)

        // let schedRowsArr = [];
        // Schedule.forEach(row => {
        //   if (row !== ' ') {
        //     if (row.split(' ')[1] === 'to') {
        //       months = row.replace('to ', '').split(' ').slice(0, 2);
        //       hours = row.replace('to ', '').split(' ').slice(2).join(' ').replace(';', '');

        //       if (!isNaN(row.charAt(0))) {
        //         months[0] = moment(months[0], 'MM/DD/YYY').format('MMMM');
        //         months[1] = moment(months[1], 'MM/DD/YYY').format('MMMM');
        //         schedRowsArr.push(`${months[0]} - ${months[1]} ${hours}`);
        //       } else {
        //         schedRowsArr.push(`${months[0]} - ${months[1]} ${hours}`);
        //       }
        //     }
        //   }
        // })

        // schedRowsArr = schedRowsArr.filter((row, i, arr) => {
        //   return (row !== arr[i+1])
        // })

        // schedRowsArr = schedRowsArr.map((row, i) => {
        //   return <h4 key={i}>{row}<br/></h4>
        // })
        ///// WORK ON LATER!!!!!!! ////////
        let id = this.props.params.id;
        console.log('props', this.props.params);

        console.log(";aslkdfja;seoifjaw;oe", id);
        return (
          <div className='row'>
            <MarketNav id={id}/>
            {this.props.children}
          </div>
        )
      // }
    }
}

export default DisplayMarket;
//#FFA000
         // <div>
         //    <h1>{this.state.name}</h1>
         //    <h5>{Address}</h5>
         //    <br/>
         //    <br/>
         //    <div>{schedRowsArr}</div>
         //    <br/>
         //    <br/>
         //    <br/>
         //    <ul>{Products}</ul>

         //  </div>


*/



