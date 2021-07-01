import React , { useState , useEffect } from 'react';
import Repos from './Repos';
import langaugeDB from './language';

const Topics = () => {
    const [language , setLangauge] = useState("javascript");
    const [loading , setLoading] = useState(false);
    const [data , setData] = useState([]);
    const [error, setError] = useState(true);
    const handleClick = (e) => {
        setLangauge(e.target.id);
        setLoading(true);
    }
    
    const urlGenerator = (language) => {
        return 'https://api.github.com/search/repositories?q=language:' + language + '&sort=stars&order=desc'
    }

    const fetchAPI = async () => {
        try{
        const response = await fetch(urlGenerator(language));
        const data = await response.json();
        setLoading(false);
        console.log(data)
        console.log(data.stargazers_count);
        console.log(data.forks_count)
        }catch(error){
           console.log(error)
           setError(error)
        }
    }
    useEffect(() => {
      fetchAPI();
    })

    if(loading){
        return <h2>loading...</h2>
    }

    return <React.Fragment>
    <section className
    ="topic-section">
    <h2>Languages</h2>
    <ul className="topic-list">
     {langaugeDB.map((language) => {
         const { id , name , logo } = language;
         return <li key={id}>
         <button 
         id={`${name}`}
         onClick={(e) => handleClick(e)}
         className="topic-btn">        
         <figure><img src={logo} alt={name} className="topic-logo"/></figure>
         <h4>{name}</h4>     
         </button>
         </li>
     })}
    </ul>
    </section>
    <section className="repo-list">
       {data.map((repo , index) => {
           return <Repos />;
       })}
    </section>
    </React.Fragment>
}

export default Topics;