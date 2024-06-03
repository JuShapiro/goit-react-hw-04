import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.galleryList}>
      {images.map(({ id, alt_description, urls }) => (
        <li key={id}>
          <ImageCard urls={urls} alt={alt_description} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
