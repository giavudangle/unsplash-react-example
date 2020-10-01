import React from 'react';
import '../styles/ImageList.css'
const ImageList = (props) => {
 
  const images = props.images.map(({description,id,urls}) => {
    return <img alt={description} key={id} src={urls.small}/>
  });

  return(
   <div className='image-list'>
    {images}
   </div>
  )
}

export default ImageList;