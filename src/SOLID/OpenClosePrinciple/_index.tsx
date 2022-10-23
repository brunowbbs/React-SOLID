import { TitleSpecialButton, TitleWithButton, TitleWithLink } from "./Correct";

function OpenClosedPrinciple() {
  return (
    <div>
      <TitleWithLink
        title="Principios SOLID"
        buttonText="Texto do Botão"
        href="http://google.com"
      />
      <TitleWithButton
        buttonText="Texto do botão"
        onClick={() => alert("ok")}
        title="Título do botão"
      />
      <TitleSpecialButton title="Special Button" onClick={() => alert("ok")} />
    </div>
  );
}

export default OpenClosedPrinciple;
