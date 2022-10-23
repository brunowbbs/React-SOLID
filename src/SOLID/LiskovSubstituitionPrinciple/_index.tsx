import { ModalHolder } from "./Correct";

function LiskovSubstituitonPrinciple() {
  const modalContent = { key: " value" };

  return (
    <div>
      <ModalHolder contentToShow={<h1>Hello World</h1>} />
    </div>
  );
}

export default LiskovSubstituitonPrinciple;
