import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Door extends React.Component {
    render() {
        return (
            <div className='door' onClick={this.props.onClick}>
                <p>
                    {this.props.isOpen ? 'Goat' : "Door " + this.props.count}
                </p>

            </div>
        );
    }

}

class MontyHall extends React.Component {
    constructor(props) {
        super(props);
        let i = getRandomInt(0, 2);
        let arr = [0, 0, 0];
        arr[i] = 1;
        this.state = {
            values: arr,
            isOpen: [false, false, false]
        };
    }
    handleClick(i) {
        let arr = [];
        const temp = [false, false, false];
        if (i === 0) {
            arr.push(1, 2);
            console.log(arr[0]);
            console.log(arr[1]);
        } else if (i === 1) {
            arr.push(0, 2);
        } else {
            arr.push(0, 1);
        }
        let randChoice = getRandomInt(0, 1);
        if (!randChoice && this.state.values[arr[0]] === 0) {
            temp[arr[0]] = true;
            this.setState({ isOpen: temp });

        } else if (!randChoice && this.state.values[arr[1]] === 0) {
            temp[arr[1]] = true;
            this.setState({ isOpen: temp });
        } else if (randChoice && this.state.values[arr[1]] === 0) {
            temp[arr[1]] = true;
            this.setState({ isOpen: temp });
        } else {
            temp[arr[0]] = true;
            this.setState({ isOpen: temp });

        }
    }

    render() {
        return (
            <div>
                <Door count='1' onClick={() => { this.handleClick(0) }} isOpen={this.state.isOpen[0]} />
                <Door count='2' onClick={() => { this.handleClick(1) }} isOpen={this.state.isOpen[1]} />
                <Door count='3' onClick={() => { this.handleClick(2) }} isOpen={this.state.isOpen[2]} />

            </div>
        );
    }
}
ReactDOM.render(
    <MontyHall />,
    document.getElementById('root')
);