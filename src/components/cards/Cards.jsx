/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Cards.css'
import Creadit from '../creadit/Creadit';

const Cards = () => {
   const [allActors, setAllActors] = useState([])

 useEffect(()=>{
      fetch('./data.json')
      .then(res => res.json())
      .then(data => setAllActors(data))
 },[])
console.log(allActors)
      return (

            <div className='container'>
                  <div className="home-container">
                  <div className="card-container">
                            {
                              allActors.map(actor => (
                                    <div key={actor.id} className="card">
                                    <div className="card-img">
                                          <img className='photo' src={actor.image} alt="" />
                                    </div>
                                    <h2 >{actor.course_name}</h2>
                                    <p><small >{actor.details}</small></p>
                                    <div className="info">
                                          <p>price: {actor.price}</p>
                                          <p>credit: {actor.credit}</p>
                                    </div>
                                    <button className='card-btn'>select</button>
                              </div>
                              ))
                            }
                              </div>
                       <div className="creadit-container">
                          <h3>Course Name</h3>
                       </div>
                  </div>

            </div>

      );
};

export default Cards;