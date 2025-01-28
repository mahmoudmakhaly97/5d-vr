const ImageMaker = ({ src, alt, className = "", rest }) => {
  return <img src={src} alt={alt} className={className} {...rest} />;
};
export default ImageMaker;
