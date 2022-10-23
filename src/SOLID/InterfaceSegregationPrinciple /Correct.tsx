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
        <Thumbnail key={item.title} video={item.coverUrl} />
      ))}
    </ul>
  );
};

type ThumbnailProps = {
  video: string;
};
const Thumbnail = ({ video }: ThumbnailProps) => {
  return <img src={video} />;
};
