import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
class MarketReviews extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MarketReviews';

        this.state = {
          rating: null,
        }
        this.onStarClick = this.onStarClick.bind(this);
    }
    onStarClick(nextValue, prevValue, name) {
        console.log('nextValue ', nextValue);
        console.log('prevValue ', prevValue);
        console.log('name ', name)
        this.setState({rating: nextValue});
    }
    render() {
      return (
        <div className='row'>
          <div className="col-xs-12">
            <div>
                <h2>Rating from state: {this.rating}</h2>
              <StarRatingComponent 
                name="Market Name Raiting" 
                starCount={5}
                value={this.rating}
                starColor={'#FF8F00'}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>
        </div>
      )
    }
}

export default MarketReviews;
