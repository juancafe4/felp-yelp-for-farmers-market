import React from 'react';
import MarketStore from '../stores/MarketStore';
import MarketActions from '../actions/MarketActions';
class MarketInfo extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MarketInfo';

        this.state = {
          name: MarketStore.getName()
        }
        
     let name = props.params.id.split('&')[1]; 
      MarketActions.setName(name);

      this._onChange = this._onChange.bind(this);
    }

    compopnentDidMount() {
      this.setState({name: MarketStore.getName()})
      MarketStore.startListening(this._onChange)
    }

    compopnentWillUnmount() {
      MarketStore.stopListening(this._onChange);
    }
    _onChange() {
      console.log('_onChange')
      this.setState({name: MarketStore.getName()})
    }
    render() {
      console.log(this.state)
      let {name} = this.state;
      console.log('getting name ', name)
      if(name)
        return (
          <div className='row'>
            <div className="col-xs-12">
              <h1>{MarketStore.getName()}</h1>
            </div>
          </div>
        )
      else
        return <div></div>
    }
}

export default MarketInfo;;
