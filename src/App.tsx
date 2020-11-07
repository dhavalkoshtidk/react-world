import React from 'react';
import logo from './logo.svg';
import './App.css';
import Confirm from './confirm';

interface IState {
  confirmOpen: boolean,
  confirmMessage: string,
  confirmVisible: boolean,
  countDown: number
}  
class  App extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
     confirmOpen: false,
     confirmMessage: 'Please hit the confirm button',
     confirmVisible: true,
     countDown: 10
    };
   }

  private timer: number = 0;
  private renderCount = 0;
   // This method is invoked before updating the comp
  public getSnapshotBeforeUpdate(prevProps: {}, prevState: IState) {
    this.renderCount += 1;
    console.log('getSnapshotBeforeUpdate', prevProps, prevState, {
      renderCount: this.renderCount
    });
    return this.renderCount;
  }

  public componentDidUpdate(prevProps: {}, prevState: IState, snapshot: number){
    console.log('componenteDidUpdate', prevProps, prevState, snapshot, {
      renderCount: this.renderCount
    });
  }

  // Insert timer after mounting of app
  public componentDidMount() {
    this.timer = window.setInterval(() => this.handleTimerTick(), 1000 );
  }

  // Remove timer after count to 0
  public componentWillUnmount() {
    clearInterval(this.timer);
  }
  // This method is invoked during rendering, This method would be invóked firstly
  public static getDerivedStateFromProps(props: {}, state: IState) {
    console.log("getDerivedStateFromProps", props, state);
    return null;
  }
  // This method is inviked before rendering. This method would be invoked secondly
  public shouldComponentUpdate(nextProps: {}, nextState: IState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  private handleTimerTick() {
    this.setState({
      confirmMessage : `Please hit the confirm button ${this.state.countDown} secs to go`,
      countDown: this.state.countDown - 1
    },
          () => {
            if (this.state.countDown <= 0) {
            clearInterval(this.timer);
            this.setState({
              confirmMessage: 'Too late to confirm!',
              confirmVisible: false
            });
          }
        }
    );
  }
  private handleCancelConfirmClick = () => {
    console.log("Cancel clicked");
    this.setState({ confirmOpen: false,
                    confirmMessage: "Take a break, I'm sure you will later ..."
    });
    clearInterval(this.timer);
  };
  
  private handleOkConfirmClick = () => {
    console.log("Ok clicked");
    this.setState({ confirmOpen: true,
                    confirmMessage: 'Cool, carry on reading!'
    });
    clearInterval(this.timer);
  };

  private handleConfirmClick = () => {
    console.log("Ok clicked");
    this.setState({ confirmOpen: true,
                    confirmMessage: 'Cool, carry on reading!'
    });
    clearInterval(this.timer);
  };



  public render () {
    const confirmProps = {
      open: this.state.confirmOpen,
      title: 'React and TypeScript',
      content: 'Are you sure you want to learn React and TypeScript?',
      cancleCaption: 'No way',
      okCaption: 'Yes please',
      onCancelClick: this.handleCancelConfirmClick,
      onOkClick: this.handleOkConfirmClick
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>{this.state.confirmMessage}</p>
      {this.state.confirmVisible && (
        <button onClick={this.handleConfirmClick}>Confirm</button>
      )}
      <Confirm {...confirmProps} />
    </div>
  );
  }
}

export default App;
