import React from 'react';
import {List, ListItem} from 'material-ui/List';


class MarketStands extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MarketStands';

        this.state = {
          stands: [
            {
            name: 'Betty\'s Jam', 
            hours: '13', 
            description: 'we sell fruits', 
            owners: 'Anthony'
            },
            {
            name: 'Bernard\'s Potatoes', 
            hours: '13', 
            description: 'we sell fruits', 
            owners: 'Anthony'
            }
          ]
        }
    }
    render() {
      let ListItems = this.state.stands.map((stand, i) => {
        return <ListItem key={i} primaryText={stand.name} onClick={this.openStand.bind(null, stand)}></ListItem>
      })
      return (
        <div className='row'>
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <h1 className="text-center">Stands</h1>
          </div>
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <List>
              {ListItems}
              <ListItem>
                <h2>Betsy's Homemade Jewellry</h2>
                <p>Owners: Betsy, Barb, and Bonny</p>
                <h5>Sat: 9:00 - 3:00 pm</h5>
                <p>We sell homemade jewellry made by Besty Barbel herself.</p>
              </ListItem>
            </List>
          </div>
        </div>
      )
    }
}

export default MarketStands;
