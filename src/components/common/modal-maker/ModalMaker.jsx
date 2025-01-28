import { Modal } from "reactstrap";

const ModalMaker = ({ children, show, onHide, className }) => {
  return (
    <Modal
      isOpen={show}
      toggle={onHide}
      size="xl"
      className={className}
      centered
    >
      {children}
    </Modal>
  );
};

export default ModalMaker;
