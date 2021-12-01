import React, { Component } from "react";
import './App.css';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            src: "https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format",
            counter: 0

        }
    }







    increse = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrese = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    muftah = () => {
        this.setState({
            counter: 0
        })

    }

    decrese = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    }


    render() {
        return (
            <div className="vv">
                <h1>سبايدرمان أو الرجل العنكبوت شخصية خيالية خارقة </h1>

                <p> {this.state.counter} </p>

                <img className="kk" src={this.state.src} alt="img in src" />

                <div className="mn">
                    <button onClick={this.increse}  >+</button>
                    <button onClick={this.decrese}>-</button>
                    <button onClick={this.muftah}>reset</button>
                </div>


            </div>
        )
    }






}