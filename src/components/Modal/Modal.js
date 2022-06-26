import { Modal } from 'react-bootstrap';

function MyModal({ title, body, prefix, ...props }) {
  return (
    <Modal
    	{...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { title }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <a href={ prefix + body }>{body}</a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide} className="btn bg-violet text-light">Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;