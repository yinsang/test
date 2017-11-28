import React, {Component} from 'react';
import './../../App.css'
import { connect } from 'react-redux'
class About extends Component {
    constructor(props) {
        super(props); 
    } 
    handleClick() {
        console.log(this.props);
        this.props.onClick();
    }
    render() {
        return(
            <div className="about-page page" ref="aboutPage"><span>About..............</span>
                <a href='/App'>App</a>
                <div>{this.props.value}</div>
                <button onClick={this.handleClick.bind(this)}>change</button>
            </div>
        );
    }
}
const input = (state) => {
    return {
      value: state + 2
    }
  }
  const output = {
      onClick:() =>({
          type:'click'
      })
  }
export default connect(input, output)(About);;