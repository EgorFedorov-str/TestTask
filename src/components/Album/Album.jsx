import { useEffect, useState } from "react";
import ImageCarousel from "../Carousel/Carousel";
import "./styles.css";
import { useSelector } from 'react-redux';


export default function Album({albumId, albumTitle}) {
  const [images, setImages] = useState();
  const photos = useSelector(state => state.photo.photos.filter(photo => photo.albumId === albumId))

  useEffect(() => {
    setImages(  
      photos.map((photo) => photo.url)
    );
  }, []);
  return (
    <div className="App">
      <ImageCarousel albumTitle={albumTitle} images={images} />
    </div>
  );
}