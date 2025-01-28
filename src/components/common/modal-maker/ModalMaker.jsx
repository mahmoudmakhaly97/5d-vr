import { Modal } from "reactstrap";

const ModalMaker = (props) => {
  return (
    <Modal
      isOpen={props.show} // Use 'isOpen' instead of passing props directly
      toggle={props.onHide} // Provide the toggle function if applicable
      size="xl"
      centered
    >
      {props.children}
    </Modal>
  );
};

export default ModalMaker;
