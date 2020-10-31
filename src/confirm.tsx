import * as React from 'react';
import './confirm.css'



interface IProps {
    open: boolean,
    title: string,
    content: string,
    cancleCaption?: string,
    okCaption?: string,
    onOkClick: () => void,
    onCancelClick: () => void
}

class Confirm extends React.Component<IProps> {


    private handleOkClick = () => {
       // console.log('ok clicked', this.props);
        this.props.onOkClick();
    }
    private handleCancelClick = () => {
       // console.log('Cancel clicked', this.props);
        this.props.onCancelClick();
    }
    public render() {
        const { title, content, cancleCaption, okCaption  } = this.props;
        return (
      <div className={
        this.props.open
          ? "confirm-wrapper confirm-visible"
          : "confirm-wrapper"
      }>
            <div className="confirm-container">
              <div className="confirm-title-container">
       <span>{title}</span>
       </div>
              <div className="confirm-content-container">
                <p>{content}</p>
              </div>
              <div className="confirm-buttons-container">
                <button className="confirm-cancel" onClick={this.handleCancelClick} >{cancleCaption}</button>
                <button className="confirm-ok" onClick={this.handleOkClick}>{okCaption}</button>
              </div>
            </div>
          </div>
        );
      }
}

export default Confirm;