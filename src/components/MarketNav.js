import React from 'react';

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
          selectedIndex: this.props.index
        }
        this.goToPage = this.goToPage.bind(this);
    }
    select(index) {
      this.setState({selectedIndex: index})
    }

    goToPage(page) {
      browserHistory.push(`/market/${this.props.id}/${page}/${this.state.selectedIndex}`)
    }

    render() {
      let i = this.state.selectedIndex;
        return (
          <div className='row'>
            <Paper className='col-xs-12 col-md-6 col-md-offset-3' zDepth={1}>
              <BottomNavigation selectedIndex={+i}>
                <BottomNavigationItem
                  className='bottomNavItem'
                  label="More Info"
                  icon={infoIcon}
                  onTouchTap={() => this.select(0)}
                  onClick={this.goToPage.bind(null, 'info')}
                />
                <BottomNavigationItem
                  className='bottomNavItem'
                  label="Reviews"
                  icon={reviewIcon}
                  onTouchTap={() => this.select(1)}
                  onClick={this.goToPage.bind(null, 'reviews')}
                />
                <BottomNavigationItem
                  className='bottomNavItem'
                  label="Stands"
                  icon={storageIcon}
                  onTouchTap={() => this.select(2)}
                  onClick={this.goToPage.bind(null, 'stands')}
                />
              </BottomNavigation>
            </Paper>
          </div>
        )
    }
}

export default DisplayMarket;



