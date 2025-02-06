const Video = ({ poster, src, message = "", className, rest, style }) => {
  const isYoutube = src.includes("youtube.com") || src.includes("youtube.bex");

  if (isYoutube) {
    // Extract video ID from URL
    const url = new URL(src);
    const videoId = url.searchParams.get("v");
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`; // Infinite loop

    return (
      <iframe
        className={className}
        src={embedUrl}
        title={message}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        scrolling="no"
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
      {...rest}
      style={style}
    >
      <source src={src} type="video/mp4" />
      {message}
    </video>
  );
};
export default Video