import React, { useState, useEffect } from "react";
import "./App.css";

import fetchImage from "./utility/Api";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
import Button from "./components/Button";

export default function App() {
  const [imageName, setImageName] = useState("");
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [totalHits, setTotalHits] = useState(0);
 
  useEffect(() => {
    if (imageName !== '') {
      setStatus('pending');
      searchImage();
    }
  }, [imageName])

  const handleFormSubmit = name => {
    setImageName(name);
    setPage(1);
    setGallery([]);
  };

  const searchImage = () => {
    fetchImage(imageName, page)
      .then(data => {
          setGallery([...gallery, ...data.hits]);
          setStatus('resolved');
          setPage(page + 1);
          setTotalHits(data.totalHits);
      })
      .catch(() => {
        setError(error); 
        setStatus('rejected');});
  };

  const onLoadMore = () => {
    searchImage();
  };

  const onOpenModal = (url, alt) => {
    setLargeImageURL(url);
    setImageAlt(alt);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const updateData = (value) => {
    setSearch(value);
  };

    return (
      <>
        <Searchbar
          onSubmit={handleFormSubmit}
          onSearch={updateData}
          search={search}
        />
        <ImageGallery
          status={status}
          error={error}
          gallery={gallery}
          onClick={onOpenModal}
        />
        {totalHits !== gallery.length && 
          <Button onLoadMore={onLoadMore}></Button>
        }
        {showModal && (
          <Modal closeModal={toggleModal}>
            <img src={largeImageURL} alt={imageAlt} />
          </Modal>
        )}
      </>
    );
}
