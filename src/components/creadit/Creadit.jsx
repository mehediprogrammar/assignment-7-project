/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Creadit.css'

const Creadit = ({ selectActors, Remaining, totalCounts }) => {
               return (
                              <div className='Hour-container'>
                                             <div>
                                               <h3 >Credit Hour Remaining {Remaining} hr</h3>
                                             </div>
                                             <hr />
                                             <h3>Course Name</h3>
                                             {
                                                            selectActors.map(actor => (
                                                                           <ol>{actor.course_name}</ol>
                                                            ))
                                             }
                                             <div>
                                                            <h5>Total Credit Hour:{totalCounts} </h5>
                                             </div>
                              </div>
               );
};

export default Creadit;