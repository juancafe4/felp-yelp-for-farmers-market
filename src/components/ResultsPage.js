
import React from 'react';
import {browserHistory} from 'react-router';

import MarketStore from '../stores/MarketStore';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/places/business-center';
import CircularProgress from 'material-ui/CircularProgress';

import MarketActions from '../actions/MarketActions';

class ResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ResultsPage';

        this.state = {
          results: MarketStore.getResults()
        }

        this._onChange = this._onChange.bind(this);
        this.goToMarket = this.goToMarket.bind(this);
    }

    componentDidMount() {
      MarketActions.getResults(this.props.params.zipcode);
      MarketStore.startListening(this._onChange);
    }

    componentWillUnmount() {
      MarketStore.stopListening(this._onChange);
    }

    _onChange() {
      this.setState({
        results: MarketStore.getResults()
      })
    }

    goToMarket(id, address) {
      browserHistory.push(`/market/${id}&${address}/info/0`);
    }

    render() {
      if(this.state.results) {
        let {results} = this.state;

        let listItems = results.map(result => {
          let {marketname, id} = result;
          let miles = marketname.split(' ')[0]
          let address = marketname.substr(miles.length+1, marketname.length)
          return <ListItem key={id} onClick={this.goToMarket.bind(null, id, address)} primaryText={`${address}`} secondaryText={`${miles} miles`} rightIcon={<ActionInfo/>}/>
        })
        return(
          <div className='container'>
            <List>
               {listItems}
            </List>
          </div>
        );
      }
      return (
        <div className='conatainer'>
          <div className='text-center'>
            <CircularProgress size={2} />
          </div>
        </div>
      )  
    }
}

export default ResultsPage;
