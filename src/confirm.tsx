import * as React from 'react';
import './confirm.css'

interface IProps {
    title: string,
    content: string,
    cancleCaption?: string,
    okCaption?: string
}

class Confirm extends React.Component<IProps> {
    public render() {
        const { title, content, cancleCaption, okCaption  } = this.props;
        return (
      <div className="confirm-wrapper confirm-visible">
            <div className="confirm-container">
              <div className="confirm-title-container">
       <span>{title}</span>
       </div>
              <div className="confirm-content-container">
                <p>{content}</p>
              </div>
              <div className="confirm-buttons-container">
                <button className="confirm-cancel">{cancleCaption}</button>
                <button className="confirm-ok">{okCaption}</button>
              </div>
            </div>
          </div>
        );
      }
}

export default Confirm;