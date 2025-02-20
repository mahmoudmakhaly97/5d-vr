const ImageMaker = ({ src , style, alt, className = "", rest }) => {
  return <img src={src} alt={alt} className={className} {...rest}  style={style}/>;
};
export default ImageMaker;
