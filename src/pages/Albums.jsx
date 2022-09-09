import Album from '../components/Album/Album';
import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbum } from '../store/actions/albumActions';
import {fetchPhoto} from '../store/actions/photoActions'
import SkeletonAlbum from '../components/Skeleton/SkeletonAlbum'

function Albums() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true);
  const {albums} = useSelector(state => state.album)
  
  useEffect(() => {
      setIsLoading(true)
      dispatch(fetchAlbum())
      if (albums) {
        setTimeout(() => {
          setIsLoading(false)
        }, 3000);
        
      }
    }, [])

  useEffect(() => {
      dispatch(fetchPhoto())
    }, [])  
  return (
    <>
    <h1>Albums</h1>
  {isLoading ? <SkeletonAlbum/> : albums.map(album => <Album key={album.id}  albumId={album.id} albumTitle={album.title}/>)}
    </>
   )
  
}

export default Albums