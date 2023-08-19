import { Component } from "react";

export default class Clock extends Component {

    state = {
        showTime: false,
        time: new Date().toLocaleTimeString()
    }

    intervalId = null
    
    componentDidMount() {
        this.intervalId = setInterval(
            () => this.setState({ time: new Date().toLocaleTimeString() }),
            1000,
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    toggleShowTime = () => {
        this.setState(({ showTime} ) => ({
            showTime: !showTime
        }))
    }

    render() {
        const { showTime } = this.state;
        
        return (
            <>
                <button type="buttom"
                    onClick={this.toggleShowTime}>
                    Show time/Close time
                </button>
                
                {showTime && <h1>{this.state.time}</h1>}
            </>
        )
}
}