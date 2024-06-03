import css from "./ImageCard.module.css";
const ImageCard = ({ urls, alt, openModal }) => {
  return (
    <div className={css.ImageCard}>
      <img
        className={css.image}
        src={urls.small}
        alt={alt}
        onClick={() => openModal({ src: urls.regular, alt })}
      />
    </div>
  );
};

export default ImageCard;
