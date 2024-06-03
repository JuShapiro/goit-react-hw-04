const ImageCard = ({ urls, alt, openModal }) => {
  return (
    <div>
      <img
        src={urls.small}
        alt={alt}
        onClick={() => openModal({ src: urls.regular, alt })}
      />
    </div>
  );
};

export default ImageCard;
