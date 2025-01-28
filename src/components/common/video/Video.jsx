const Video = ({ poster, src, message = "" }) => {
  return (
    <video muted autoPlay loop poster={poster}>
      <source src={src} type="video/mp4" />
      {message}
    </video>
  );
};
export default Video;
