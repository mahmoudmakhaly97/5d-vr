const Video = ({ poster, src, message = "", className, rest, style }) => {
  const isYoutube = src.includes("youtube.com") || src.includes("youtube.bex");
  return isYoutube ? (
    <iframe
      className={className}
      src={src}
      title={message}
      allowFullScreen
      scrolling="no"
      {...rest}
    ></iframe>
  ) : (
    <video
      muted
      autoPlay
      loop
      playsInline
      poster={poster}
      className={className}
      {...rest}
      style={style}
    >
      <source src={src} type="video/mp4" />
      {message}
    </video>
  );
};
export default Video;
