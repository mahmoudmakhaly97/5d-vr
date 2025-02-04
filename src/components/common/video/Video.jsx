const Video = ({ poster, src, message = "", className, rest }) => {
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
    <video muted autoPlay loop poster={poster} className={className} {...rest}>
      <source src={src} type="video/mp4" />
      {message}
    </video>
  );
};
export default Video;
