import './loading.css';
var React = require('react');

var App = React.createClass({
   getInitialState: function() {
       return {
           count: 0
       };
   },

   _increment: function() {
       this.setState({ count: this.state.count + 1 });
   },

   render: function() {
       return (
           <div>
               <span>the count is: </span>
               <span >{this.state.count}</span>
               <button onClick={this._increment}>click </button>
               <div className="loader">
                <span className="loader-loading">
                    <p/>
                </span>
                <span className="loader-text">{'加载中...'}</span>
            </div>
           </div>
       )
   }
})

module.exports = App;