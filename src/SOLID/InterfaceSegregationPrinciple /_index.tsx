import { VideoList } from "./Wrong";

const mock = [
  {
    title: "Nome do vídeo",
    duration: 3,
    coverUrl: "https://google.com/cover-url",
  },
];

const InterfaceSegregationPrinciple = () => {
  return (
    <div>
      <VideoList items={mock} />
    </div>
  );
};

export default InterfaceSegregationPrinciple;
