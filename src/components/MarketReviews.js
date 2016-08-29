import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';
import MarketStore from '../stores/MarketStore';


class MarketReviews extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MarketReviews';

        this.state = {
          rating: null,
          text: '',
          reviews:  MarketStore.getMarket().reviews
        }
        this.onStarClick = this.onStarClick.bind(this);
        this.submit = this.submit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    submit(e) {
      e.preventDefault();
      let newObj = {
        rating: this.state.rating,
        text: this.state.text,
        date: moment(Date.now()).format("lll")
      }
      let revs = this.state.reviews;
      this.setState({reviews: revs.concat(newObj)});
      this.setState({text: '', rating: null});
    }

    onInputChange(e) {
      this.setState({text: e.target.value});
    }

    render() {
      console.log('REVIEWS',this.state.reviews);
      let Reviews;
      if (this.state.reviews.length) {
        console.log('!@$!%!#', this.state.reviews);
        Reviews = this.state.reviews.map((review, i) => {
          return (
            <div key={i}>
              <StarRatingComponent
                name='showing review'
                starCount={+review.rating}
                editing={false}
                value={+review.rating}
                starColor={'rgb(255, 143, 0)'}
              />
              <p>{review.date}</p>
              <p>{review.text}</p>
            </div>
          )
        })
      }
      return (
        <div className='row'>
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <h2>Write a Review: {this.rating}</h2>
            <h4>Select your rating:</h4>
            <StarRatingComponent 
              name="Market Name Rating" 
              value={this.state.rating}
              starCount={5}
              starColor={'#FF8F00'}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
          <div className="col-xs-12 col-md-6 col-md-offset-3 reviewText">
            <form onSubmit={this.submit}>
              <TextField
                width='200%'
                hintText="Your review..."
                multiLine={true}
                rows={1}
                rowsMax={10}
                value={this.state.text}
                onChange={this.onInputChange}
              />
              <FlatButton type='submit' label="Submit" />
            </form>
          </div>
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            {Reviews}
          </div>
        </div>
      )
    }
}

export default MarketReviews;
