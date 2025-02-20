const Video = ({ poster, src, message = "", className, rest, style }) => {
  const isYoutube = src.includes("youtube.com") || src.includes("youtube.be");

  if (isYoutube) {
    const url = new URL(src);
    const videoId = url.searchParams.get("v") || src.split("/").pop();
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;

    return (
      <iframe
        className={className}
        src={embedUrl}
        title={message}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        scrolling="no"
        style={{ width: "100%", height: "100%", border: "none" }}
        {...rest}
      ></iframe>
    );
  }

  return (
    <video
      muted
      autoPlay
      loop
      playsInline
      poster={poster}
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      {...rest}
    >
      <source src={src} type="video/mp4" />
      {message}
    </video>
  );
};
export default Video;
