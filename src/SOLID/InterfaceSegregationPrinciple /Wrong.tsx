type Video = {
  title: string;
  duration: number;
  coverUrl: string;
};
type Props = {
  items: Array<Video>;
};
export const VideoList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <Thumbnail key={item.title} video={item} />
      ))}
    </ul>
  );
};

// O Thumbnailcomponente é bem pequeno e simples, mas tem um problema - ele espera que um objeto de
//  vídeo completo seja passado como props, enquanto efetivamente usa apenas uma de suas propriedades.

type ThumbnailProps = {
  video: Video;
};
const Thumbnail = ({ video }: ThumbnailProps) => {
  return <img src={video.coverUrl} />;
};
