import React from 'react';
import logo from './logo.svg';
import './App.css';
import Confirm from './confirm';

interface IState {
  confirmOpen: boolean,
  confirmMessage: string;
}  
class  App extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);
    this.state = {
     confirmOpen: true,
     confirmMessage: 'Please hit the confirm button'
    };
   }
  private handleCancelConfirmClick = () => {
    console.log("Cancel clicked");
    this.setState({ confirmOpen: false,
                    confirmMessage: "Take a break, I'm sure you will later ..."
    });
  };
  
  private handleOkConfirmClick = () => {
    console.log("Ok clicked");
    this.setState({ confirmOpen: true,
                    confirmMessage: 'Cool, carry on reading!'
    });
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
      <button onClick={this.handleOkConfirmClick}>Confirm</button>
      <Confirm {...confirmProps} />
    </div>
  );
  }
}

export default App;
