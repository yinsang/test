import React, { Component } from 'react';
class App  extends Component {
    componentDidMount() {
        this.refs.appPage.addEventListener("touchstart", (e) =>{
            var p = document.createElement('p')
            p.innerHTML = (new Date().getTime() +"app touchstart")
            document.body.appendChild(p)
        })

        this.refs.appPage.addEventListener("click", (e) =>{
            var p = document.createElement('p')
            p.innerHTML = (new Date().getTime() +"app click")
            document.body.appendChild(p)
            
        })


        this.refs.appPage.onclick = function(){
            var p = document.createElement('p')
            p.innerHTML = (new Date().getTime() +"app onclick")
            document.body.appendChild(p)
        }

    }
    handleUpClick(){
        var p = document.createElement('p')
        p.innerHTML = (new Date().getTime() +"up onclick")
        document.body.appendChild(p)
    }
    render() {
        return (
            <div>
<div className="app-page page" ref="appPage">
                <span>App</span>
               <a href='/About'>About</a>
            </div>
            
            <div className="up" ref='up' onClick={this.handleUpClick}></div>
            </div>
        );
    }
}

export default App;
