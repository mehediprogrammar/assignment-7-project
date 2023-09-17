/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Cards.css'
import Creadit from '../creadit/Creadit';

const Cards = () => {
   const [allActors, setAllActors] = useState([])
   const [selectActors, setSelectActors] = useState([])
   const [Remaining, setRemaining] = useState(0)
   const [totalCounts, setTotalCounts] = useState(0)

 useEffect(()=>{
      fetch('./data.json')
      .then(res => res.json())
      .then(data => setAllActors(data))
 },[])

 const handleAllActors = (actor) =>{
      console.log(actor)
    const isExite = selectActors.find((item) => item.id == actor.id);
    let count = actor.credit;
    if(isExite){
      return alert('already booked')
    }else{
      selectActors.forEach((item) => {
         count = count + item.credit;
      })
       const creditRemaining = count;
       if(count > 20){
            return alert('credit not allow 20tk')
       }else{
            setRemaining(creditRemaining)
            setTotalCounts(count)
            setSelectActors([...selectActors, actor ])
       }
     
    }
 
 }
 console.log(selectActors)
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
                                    <button onClick={()=>handleAllActors(actor) } className='card-btn'>select</button>
                              </div>
                              ))
                            }
                              </div>
                       <div className="creadit-container">
                          <Creadit selectActors = {selectActors} Remaining={Remaining} totalCounts={totalCounts} ></Creadit>
                       </div>
                  </div>

            </div>

      );
};

export default Cards;