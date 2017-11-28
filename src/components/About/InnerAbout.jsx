import React, {Component} from 'react';
export default class InnerAbout extends Component{
    render() {
        console.log(1);
        return (
            <div>Appinner{this.props.value}</div>
        )
    }

}