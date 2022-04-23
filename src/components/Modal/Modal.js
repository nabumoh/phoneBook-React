/*****************************************
 * * Nadeem Abomokh 206622755
 * * Mohammad Hussen 208133454
 * * 45/4
 *****************************************/

import './Modal.css';

function Modal(props) {
  const { isOpen, header, body } = props;
  return (
    <div id="myModal" className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={props.onClose}>
            &times;
          </span>
          <h2>{header}</h2>
        </div>
        <div className="modal-body">{body}</div>
      </div>
    </div>
  );
}

export default Modal;
