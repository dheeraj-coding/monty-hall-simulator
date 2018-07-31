import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Door extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='door'>
                {this.props.value}
            </div>
        );
    }

}

class MontyHall extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Door value='door' />
                <Door value='door' />
                <Door value='door' />
            </div>
        );
    }
}
ReactDOM.render(
    <MontyHall />,
    document.getElementById('root')
);