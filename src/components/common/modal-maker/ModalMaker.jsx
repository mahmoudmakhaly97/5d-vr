import Modal from "react-bootstrap/Modal";
const ModalMaker = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
       centered
    >
      {props.children}
    </Modal>
  );
};
export default ModalMaker;
