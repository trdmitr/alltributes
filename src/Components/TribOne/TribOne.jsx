import React, { useMemo } from 'react'
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'
import cl from '../UI/Pub.module.css'
import classes from './TribOne.module.css'
import { LinkButton } from '../UI/Buttons/LinkButton';
import BackButton from '../UI/Buttons/BackButton'

const TribOne = ({ tributes }) => {
  const navigate = useNavigate();
  const params = useParams();
  const currSings = useMemo(() => {
    return tributes.filter(tributes => tributes.id == params.id);

  }, [tributes])
  function goTribute (url) {
    return  `<a href=${url} target="_blank" rel="noopener noreferrer">`
}
 
  
  const listContent = useMemo(() => {         
    return  currSings.map((currSing) =>   
   <div className={classes.mediaSong} key={currSing.id}> 
    <img className={classes.mediaImage} src={currSing.Title} width={80} alt={currSing.Name} />
      {/* <div className= {classes.headerSong} >
  <h2>{currSing.Name}</h2></div> */}
  {/* <LinkButton>{currSing.Name}</LinkButton> */}
  <a className={classes.linkTo}  href={currSing.link} target="_blank" rel="noopener noreferrer"> {currSing.Name} </a>
  
  <div>
  <img className={classes.tziImage} src={currSing.Photo} width={80} alt="Трибьюты Подземки"/>
  </div> 
  
  </div>);
  }, [currSings])
  
  return (
    <div className={cl.tribute_app}>
            <div className={classes.content}>
                {/* <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome> */}
                {/* <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton> */}
                {/* <YoutButton onClick={() => navigate("/playlist")}>плелист</YoutButton> */}
                <BackButton onClick={() => navigate("/")}>Назад</BackButton>
                {listContent}
            </div>
        </div>

  )
}

export default TribOne