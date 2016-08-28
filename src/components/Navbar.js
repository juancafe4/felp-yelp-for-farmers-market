import React, { Component } from 'react';
// import { Link } from 'react-router';
import { AppBar, Tabs, Tab, IconButton } from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import { browserHistory } from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

import MarketActions from '../actions/MarketActions';

const styles = {
  errorStyle: {
    color: 'white',
  },
  underlineStyle: {
    borderColor: '#C8E6C9',
  },
  underlineFocusStyle: {
    borderColor: 'white',
    borderWidth: 3
  },
  floatingLabelStyle: {
    color: '#C8E6C9',
  },
  floatingLabelFocusStyle: {
    color: 'white',
  },
};


export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }
    this.search = this.search.bind(this);
    this.goToUrl = this.goToUrl.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
  }

  goToUrl(url) {
    browserHistory.push(url);
  }

  search(e) {
    e.preventDefault();
    let {search} = this.state;
    if (search) { 
      MarketActions.getResults(search);
      browserHistory.push(`/results/zipcode/${search}`);
    }
    this.setState({search: ''});
  }
  changeSearch(e) { 
    this.setState({search: e.target.value})
  }
  render() {
    return (
      <AppBar title="Felp" showMenuIconButton={false} className='AppBar'>
        <form onSubmit={this.search}>
          <TextField
          value={this.state.search}
          onChange={this.changeSearch}
          className='SearchBox'
          floatingLabelText="SEARCH"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
          />
          <IconButton className='searchBtn' type="submit" ><ActionSearch className="actionSearch"/></IconButton>  
        </form>

        <Tabs>
          <Tab label="Home" onClick={this.goToUrl.bind(null, '/')}/>
          <Tab label="Item 2"/>
          <Tab label="Item 3"/>
          <Tab label="About Us" onClick={this.goToUrl.bind(null, '/about-us')}/>
        </Tabs>
      </AppBar>
    )
  }
}
