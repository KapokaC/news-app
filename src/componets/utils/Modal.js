import React from "react";
import { Modal, Button } from "react-bootstrap";

const CustomModal = ({ handleClose, message }) => {
  return (
    <Modal show={!!message} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>News</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
