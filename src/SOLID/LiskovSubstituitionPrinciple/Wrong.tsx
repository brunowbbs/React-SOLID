import { useState } from "react";
import Modal from "react-modal";

export const ModalHolder = ({ contentToShow }: any) => {
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
