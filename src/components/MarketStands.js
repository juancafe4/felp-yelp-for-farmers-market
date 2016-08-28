import React from 'react';
import {List, ListItem} from 'material-ui/List';


class MarketStands extends React.Component {
    constructor(props) {
      super(props);
      this.displayName = 'MarketStands';

      this.state = {
        stands: [
          {
          name: 'Betsy\'s Homemade Jewellry', 
          hours: 'Sat: 9:00 - 3:00 pm', 
          description: 'We sell homemade jewelry made by Besty Barbel herself.', 
          owners: 'Betsy, Barb, and Bonny',
          image: 'http://static1.squarespace.com/static/52ffef08e4b01bd45db5f35d/t/5442a560e4b08cdfdca9048f/1413653872744/image.jpg'
          },
          {
          name: 'Bernard\'s Potatoes', 
          hours: '13', 
          description: 'we sell fruits', 
          owners: 'Anthony',
          image: 'https://static01.nyt.com/images/2012/11/21/opinion/21bittman-sweetpotato/21bittman-sweetpotato-blog427.jpg'
          }
        ],
        displayed: undefined
      }

      this.toggleStand = this.toggleStand.bind(this);
    }

    toggleStand(index) {
      if (this.state.displayed === index) {
        console.log('this.state.displayed',this.state.displayed)
        this.setState({displayed: undefined});
      }
      else {
        console.log('toggle');
        this.setState({displayed: index});
      }
    }

    render() {
      let ListItems = this.state.stands.map((stand, i) => {
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
    }
}

export default MarketStands;
