import React from 'react';

class MarketStands extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MarketStands';
    }
    render() {
      return (
        <div className='row'>
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <h1 className="text-center">Stands</h1>
          </div>
        </div>
      )
    }
}

export default MarketStands;
