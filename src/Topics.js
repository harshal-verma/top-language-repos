import React , { useState , useEffect } from 'react';
import { RiGitRepositoryFill, RiStarSLine, RiUser3Line } from "react-icons/ri";
import { GoRepoForked, GoCode, GoLink, GoCalendar} from "react-icons/go"
import langaugeDB from './language';
import axios from "axios";

const Topics = () => {
    const [language , setLanguage] = useState('javascript');
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(true);
    const [data , setData] = useState([]);

    const urlGenerator = (language) => {
        return 'https://api.github.com/search/repositories?q=language:' + language + '&sort=stars&order=desc';
    }
    const getData = async () => {
        setLoading(true);
        axios({
            method: "get",
            url: urlGenerator(language),
        }).then(res => {
            setData([...res.data.items])
            setLoading(false);
        })
    }
    useEffect(() => {
    //    fetchAPI();
       getData();
    }, [language])
    console.log(data);
    console.log(language)
    if(loading){
        return <h2>loading rn...</h2>
    }
    return <React.Fragment>
    <section className
    ="topic-section">
    <h2>Languages</h2>
    <ul className="topic-list">
     {langaugeDB.map((language) => {
         const { id , name , lang , logo } = language;
         return <li key={id}>
         <button 
         id={`${lang}`}
         onClick = {() => 
            {
                setLanguage(lang);
            }
        }
         className="topic-btn">        
         <figure><img src={logo} alt={name} className="topic-logo"/></figure>
         <h4>{name}</h4>     
         </button>
         </li>
     })}
    </ul>
    </section>
    <section className="all-repos">
    {data.map((repos , index) => {
           return <div 
           key = {index}
           className="single-repo">
               <h2><RiGitRepositoryFill/> {repos.name}</h2>
               <div className="single-repo-flex">
               <p><GoCode/> {language}</p>
               <div><GoRepoForked style={{
                   color: "#fff"
               }}/> {repos.forks_count} <RiStarSLine style={{
                   color: "#fff"
               }}/> {repos.stargazers_count}</div>
               </div>
               <p className="repo-description">{repos.description}</p>
               <div className="single-repo-flex">
               <h3><a href = {repos.html_url}><RiUser3Line/>{repos.name}</a></h3>
               <div><GoCalendar/>{repos.created_at}</div>
               </div>
               <a href={repos.homepage}><p><GoLink />{repos.homepage}</p></a>
            </div>
       })} 
    </section>
    </React.Fragment>
}

export default Topics;