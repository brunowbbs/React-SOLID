// <Button>{children}</Button>; is Extensible
{
  /* <Button>
    <Button>
      <Title>OK</Title>
      <Icon></Icon>
</Button>*/
}

//<Button title={title}></Button>; is not extensible pois precisamos modificar internamente o componente

type TitleProps = {
  title: string;
  type: "default" | "withLinkButton" | "withNormalButton";
  href?: string;
  buttonText?: string;
  onClick?: () => void;
};

const Title = ({ title, type, buttonText, href, onClick }: TitleProps) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <h1>{title}</h1>

    {type === "withLinkButton" && (
      <div onClick={onClick}>
        <a href={href}>{buttonText}</a>
      </div>
    )}

    {type === "withNormalButton" && (
      <button onClick={onClick}>{buttonText}</button>
    )}

    {/*Caso queira fazer nova implementação precisa mexer internamente no componente*/}
    {type === "withNormalButton" && (
      <button onClick={onClick}>{buttonText}</button>
    )}
  </div>
);

export default Title;
