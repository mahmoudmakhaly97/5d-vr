const Video = ({ poster, src, message = "" }) => {
  const handleCanPlay = () => {
    console.log("Video can play now");
  };

  return (
    <video
 
      muted
      autoPlay
      loop
      poster={poster}
      onCanPlay={handleCanPlay}
    >
      <source src={src} type="video/mp4" />
      {message}
    </video>
  );
};
export default Video;
