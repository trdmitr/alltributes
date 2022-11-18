import React, { useMemo } from 'react'
import cl from '../UI/Pub.module.css'
import classes from "./Homepage.module.css"
import './Homepage.css'
import { useNavigate } from 'react-router-dom'


const Homepage = ({ tributes }) => {
  const navigate = useNavigate();



  const cardTribute = useMemo(() => {
    return tributes.map((tribut) => (
      <div className="column-6">
        <div className="media" key={tribut.index} onClick={() => navigate(`/tributs/${tribut.id}`)}>
          <img className="media-image" src={tribut.text} width={100} />
          <div className="media-body">
            {/* <h5>{tribut.Name}</h5> */}
            <p>
            {tribut.Name}
            {/*р*/}
            </p>
          </div>
        </div>
      </div>

    ))
  })

  return (
    <div className={cl.tribute_app}>
      <div className={classes.content}>
        <div className="container">
          <header>
            <h1>Все трибьюты</h1>
          </header>
          <main className="main clearfix">
            <h2>Выбираем!</h2>
            <div className="row">
              {cardTribute}
            </div>
          </main>
        </div>
      </div>
    </div>
  )


}

export default Homepage