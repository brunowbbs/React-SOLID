import { useState } from "react";
import Modal from "react-modal";

interface ModalHolderProps {
  contentToShow: JSX.Element;
}

export const ModalHolder = ({ contentToShow }: ModalHolderProps) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      <button onClick={() => setVisibility(true)}> Show Modal</button>

      <Modal isOpen={visibility} onRequestClose={() => setVisibility(false)}>
        <div>{contentToShow}</div>
      </Modal>
    </>
  );
};
