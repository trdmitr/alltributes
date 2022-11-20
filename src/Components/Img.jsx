import { useEffect, useState  } from "react"
import Loader from "./UI/Loader/Loader";
import classes from "../Components/TribOne/TribOne.module.css"
const Img = ({imgUrl, imgAlt}) => {
    const [url, setUrl] = useState('');
    useEffect(() => {
      // console.log (imgUrl)
      fetch(imgUrl)
        .then(response => response.blob())
        .then((image) => {
          setUrl(URL.createObjectURL(image));
        });
      }, [imgUrl])
    
    if (!url) {
      return <Loader/>;
    }
        
    return <img className={classes.mediaImage} src = {url} alt={imgAlt}/>;
  }

export default Img