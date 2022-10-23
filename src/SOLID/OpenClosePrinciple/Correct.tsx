type TitleProps = {
  title: string;
  children: JSX.Element;
};

const Title = ({ title, children }: TitleProps) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <h1>{title}</h1>
    {children}
  </div>
);

type TitleWithLinkProps = {
  title: string;
  href: string;
  buttonText: string;
};

export const TitleWithLink = ({
  title,
  href,
  buttonText,
}: TitleWithLinkProps) => (
  <Title title={title}>
    <div>
      <a href={href}>{buttonText}</a>
    </div>
  </Title>
);

type TitleWithButtonProps = {
  title: string;
  buttonText: string;
  onClick: () => void;
};

export const TitleWithButton = ({
  title,
  buttonText,
  onClick,
}: TitleWithButtonProps) => (
  <Title title={title}>
    <button onClick={onClick}>{buttonText}</button>
  </Title>
);

//Caso precicemos em um futuro criar outro tipo de botão.... fazemos:

type TitleSpecialButtonProps = {
  title: string;
  onClick: () => void;
};

export const TitleSpecialButton = ({
  title,
  onClick,
}: TitleSpecialButtonProps) => (
  <Title title={title}>
    <button onClick={onClick}>Special button</button>
  </Title>
);

export default Title;
