import React from "react";
import { Modal } from "react-bootstrap";

const ModalComponents = (props) => {
  const { show, onHide, title, modalBody, className } = props;

  return (
    <>
      <div className="modal-header" style={{border:"none"}}>
        <Modal
          className={`${className} modal-container`}
          show={show}
          onHide={onHide}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: "20px" }} className="modal-title">
              {title}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>{modalBody}</Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ModalComponents;
