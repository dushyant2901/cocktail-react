import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({img,name,id,info,glass}) => {
  return (
    <article className='cocktail'>
      <div className="img-container"> <img src={img} alt={name} /></div>
     <div className="cocktail-footer">
      <h3>{name}</h3>
      <h4>{info}</h4>
      <p>{glass}</p>
     <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>Details</Link></div>
    </article>
  )
}

export default Cocktail
