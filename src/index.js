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
            isOpen: [false, false, false],
            selected:-1,
            total:0,
            stayWin:0,
            stayLose:0,
            switchWin:0,
            switchLose:0
        };
        this.handleClick=this.handleClick.bind(this);
        this.handleStay=this.handleStay.bind(this);
        this.handleSwitch=this.handleSwitch.bind(this);
    }
    handleClick(i) {
        let arr = [];
        const temp = [false, false, false];
        if (i === 0) {
            arr.push(1, 2);
        } else if (i === 1) {
            arr.push(0, 2);
        } else {
            arr.push(0, 1);
        }
        let randChoice = getRandomInt(0, 1);
        if (!randChoice && this.state.values[arr[0]] === 0) {
            temp[arr[0]] = true;
            this.setState({ isOpen: temp,selected:i });

        } else if (!randChoice && this.state.values[arr[1]] === 0) {
            temp[arr[1]] = true;
            this.setState({ isOpen: temp ,selected:i});
        } else if (randChoice && this.state.values[arr[1]] === 0) {
            temp[arr[1]] = true;
            this.setState({ isOpen: temp ,selected:i});
        } else {
            temp[arr[0]] = true;
            this.setState({ isOpen: temp ,selected:i});

        }
    }
    handleStay(){
        let stayWin=this.state.stayWin;
        let stayLose=this.state.stayLose;
        if(this.state.values[this.state.selected]==1){
            stayWin++;
        }else{
            stayLose++;
        }
        let i = getRandomInt(0, 2);
        let arr = [0, 0, 0];
        arr[i] = 1;
        this.setState({stayWin:stayWin,stayLose:stayLose,total:this.state.total+1,values:arr,isOpen:[false,false,false],selected:-1});

    }
    handleSwitch(){
        let switchWin=this.state.switchWin;
        let switchLose=this.state.switchLose;
        let switchDoor=-1;
        if (this.state.selected === 0) {
            if(this.state.isOpen[1]==true){
                switchDoor=2;
            }else{
                switchDoor=1;
            }
        } else if (this.state.selected === 1) {
            if(this.state.isOpen[0]==true){
                switchDoor=2;
            }else{
                switchDoor=0;
            }
        } else {
            if(this.state.isOpen[0]==true){
                switchDoor=1;
            }else{
                switchDoor=0;
            }
        }
        if(this.state.values[switchDoor]==1){
            switchWin++;
        }else{
            switchLose++;
        }

        let i = getRandomInt(0, 2);
        let arri = [0, 0, 0];
        arri[i] = 1;
        this.setState({switchWin:switchWin,switchLose:switchLose,total:this.state.total+1,values:arri,isOpen:[false,false,false],selected:-1});
    }
    render() {
        return (
            <div>
                <div>
                    <Door count='1' onClick={() => { this.handleClick(0) }} isOpen={this.state.isOpen[0]} />
                    <Door count='2' onClick={() => { this.handleClick(1) }} isOpen={this.state.isOpen[1]} />
                    <Door count='3' onClick={() => { this.handleClick(2) }} isOpen={this.state.isOpen[2]} />
                </div>
                <button onClick={this.handleSwitch}>Switch</button>
                <button onClick={this.handleStay}>Stay</button>
                <table>
                    <tr>
                        <th>Switch Win</th>
                        <th>Switch Lose</th>
                        <th>Stay Win</th>
                        <th>Stay Lose</th>
                    </tr>
                    <tr>
                        <th>{(this.state.switchWin/(this.state.switchWin+this.state.switchLose)).toFixed(2)}</th>
                        <th>{(this.state.switchLose/(this.state.switchWin+this.state.switchLose)).toFixed(2)}</th>
                        <th>{(this.state.stayWin/(this.state.stayWin+this.state.stayLose)).toFixed(2)}</th>
                        <th>{(this.state.stayLose/(this.state.stayWin+this.state.stayLose)).toFixed(2)}</th>
                    </tr>
                </table>
            </div>

        );
    }
}
ReactDOM.render(
    <MontyHall />,
    document.getElementById('root')
);