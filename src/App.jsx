import "modern-normalize";
import "./App.css";
import getImages from "./apiService/images";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const { results, total_pages } = await getImages(query, page);
        if (results.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setShowLoadMore(page < total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setShowLoadMore(false);
    setIsEmpty(false);
    setError(null);
  };
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalImage(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {error && <ErrorMessage text={`Something went wrong ${error}`} />}
      {isEmpty && <ErrorMessage text="Nothing find with this query" />}
      {showLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
      {isLoading && <Loader />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        image={modalImage}
      />
    </>
  );
};

export default App;
