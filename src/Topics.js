import React from 'react';
import langaugeDB from './language';

const Topics = () => {
    return <section className="topic-section">
    <h2>Languages</h2>
    <ul className="topic-list">
     {langaugeDB.map((language) => {
         const { id , name , logo } = language;
         return <li key={id}>
         <button className="topic-btn">        
         <figure><img src={logo} alt={name} className="topic-logo"/></figure>
         <h4>{name}</h4>     
         </button>
         </li>
     })}
    </ul>
    </section>
}

export default Topics;