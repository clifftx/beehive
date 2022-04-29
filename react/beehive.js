'use strict';

const e = React.createElement;

class Banner extends React.Component { 

    render() {
        return (
            <div className='banner'>Next Up: Player {this.props.player}</div>
        );
    }
}
class Spot extends React.Component {

    state = {
        currentPlayer: this.props.currentPlayer,
        owner: 0,
        background: 'gray',
    }
    onclick = () => {
        if (this.props.cellClicked(this.props.x, this.props.y) != -1) {
            if (this.props.currentPlayer === 1)
                this.setState({background: 'red'});
            else
                this.setState({background: 'blue'});
        }
    }
    render() {
        return (
            <div style={{background:this.state.background}} onClick={event => this.onclick()}>{this.props.y}</div>
        );
    }
}

class Board extends React.Component {

    state = {
        currentPlayer: 1,
        cellStatus: [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ],
    }
    cellClicked = (x,y) => {
        if (this.state.cellStatus[x][y] != 0) {
            console.log("Already clicked");
            return -1;
        }

        const newCellStatus = this.state.cellStatus;
        newCellStatus[x][y] = this.state.currentPlayer;
        this.setState({cellStatus: newCellStatus});

        const newCurrentPlayer = (this.state.currentPlayer === 1) ? 2 : 1;
        this.setState({currentPlayer: newCurrentPlayer});

        for (let i=0; i<5; i++) {
            console.log("i: " + i + ", 0: " + this.state.cellStatus[0][i]);
            console.log("i: " + i + ", 1: " + this.state.cellStatus[1][i]);
            console.log("i: " + i + ", 2: " + this.state.cellStatus[2][i]);
        }

        if (this.checkWin(1))
            console.log("Number 1 won!");

        if (this.checkWin(2))
            console.log("Number 2 won!");
    }

    checkWin = (player) => {
        console.log("===== checkWin =====");
        for (let i=0; i<10; i++) {
            if (this.checkCell(i,0, player))
                return true;
        }
    }
    checkCell = (x,y, player) => {
        console.log("Checking x:" + x + ", y:" + y + ", for player " + player);

        if (y == 9) {
            console.log("RETURNING TRUE!!!");
            return true;
        }

//        console.log("Y Mod 2: " + (y % 2));
        let chunk = 0;
        if (y % 2 === 0)
            chunk = 1;

        if (x > 0) {
            console.log("cellStatus[x-1][y+1]: " + this.state.cellStatus[x-chunk][y+1]);
            if (this.state.cellStatus[x-chunk][y+1] === player) {
                console.log("Recursive call with x: " + x-chunk + ", y: " + (y + 1) );
                if (this.checkCell(x-chunk, y + 1, player))
                    return true;
            }
        }

        if (x < 10) {
            console.log("cellStatus[x][y+1]: " + this.state.cellStatus[x-chunk+1][y+1]);
            if (this.state.cellStatus[x-chunk+1][y+1] === player) {
                console.log("Recursive call with x: " + x-chunk+1 + ", y: " + (y + 1));
                return this.checkCell(x-chunk+1, y + 1, player);
            }
        }

        return false;
    }

        render() {
                return (
                    <div>
                    <Banner player={this.state.currentPlayer} />
                    <div className="main">
                        <div className='container'>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='0' y='0'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='1' y='0'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='2' y='0'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='3' y='0'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='4' y='0'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='5' y='0'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='6' y='0'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='7' y='0'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='8' y='0'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='9' y='0'/>

                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='0' y='1'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='1' y='1'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='2' y='1'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='3' y='1'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='4' y='1'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='5' y='1'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='6' y='1'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='7' y='1'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='8' y='1'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='9' y='1'/>

                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='0' y='2'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='1' y='2'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='2' y='2'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='3' y='2'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='4' y='2'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='5' y='2'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='6' y='2'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='7' y='2'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='8' y='2'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='9' y='2'/>

                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='0' y='2'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='1' y='3'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='2' y='3'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='3' y='3'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='4' y='3'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='5' y='3'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='6' y='3'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='7' y='3'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='8' y='3'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='9' y='3'/>

                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='0' y='4'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='1' y='4'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='2' y='4'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='3' y='4'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='4' y='4'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='5' y='4'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='6' y='4'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='7' y='4'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='8' y='4'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='9' y='4'/>

                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='0' y='5'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='1' y='5'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='2' y='5'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='3' y='5'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='4' y='5'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='5' y='5'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='6' y='5'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='7' y='5'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='8' y='5'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='9' y='5'/>

                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='0' y='6'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='1' y='6'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='2' y='6'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='3' y='6'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='4' y='6'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='5' y='6'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='6' y='6'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='7' y='6'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='8' y='6'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='9' y='6'/>

                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='0' y='7'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='1' y='7'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='2' y='7'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='3' y='7'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='4' y='7'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='5' y='7'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='6' y='7'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='7' y='7'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='8' y='7'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='9' y='7'/>

                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='0' y='8'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='1' y='8'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='2' y='8'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='3' y='8'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='4' y='8'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='5' y='8'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='6' y='8'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='7' y='8'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='8' y='8'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='9' y='8'/>

                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='0' y='9'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='1' y='9'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='2' y='9'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='3' y='9'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='4' y='9'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='5' y='9'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='6' y='9'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='7' y='9'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='8' y='9'/>
                            <Spot cellClicked={this.cellClicked} currentPlayer={this.state.currentPlayer} x='9' y='9'/>
                        </div>
                    </div>
                    </div>
                );
        }
}


class LikeButton extends React.Component {
        constructor(props) {
                super(props);
                this.state = { liked: false };
        }

        render() {
                if (this.state.liked) {
                        return 'You liked this.';
                }

                return e(
                    'button',
                    { onClick: () => this.setState({ liked: true }) },
                    'Like'
                );
        }
}

const domContainer = document.querySelector('#BeehiveDOM');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Board));