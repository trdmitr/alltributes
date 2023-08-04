import React, { useMemo } from 'react'
import cl from '../UI/Pub.module.css'
import classes from "./Homepage.module.css"
// import './Homepage.css'
import { useNavigate } from 'react-router-dom'
import AddToHomeScreenButton from '../AddToHomeScreenButton/AddToHomeScreenButton'


const Homepage = ({ tributes }) => {
  const navigate = useNavigate();



  const cardTribute = useMemo(() => {
    return tributes.map((tribut) => (
      <div className={classes.column50}>
        <div className={classes.media} key={tribut.index} onClick={() => navigate(`/tributs/${tribut.id}`)}>
          <img className={classes.mediaImage} src={tribut.text} width={100} />
          <div className={classes.mediaBody}>
            <p>
              {tribut.Name}
            </p>
          </div>
        </div>
      </div>

    ))
  })

  return (
    <div className={cl.tribute_app}>
      <div className={classes.content}>
        <div className={classes.container}>
          <header>
            <h1>Все трибьюты</h1>
            <AddToHomeScreenButton/>
          </header>
          <main className={`${classes.main} ${classes.clearfix}`}>
            <h2>Выбираем!</h2>
            <div className={classes.row}>
              {cardTribute}
            </div>
          </main>
        </div>
      </div>
    </div>
  )


}

export default Homepage