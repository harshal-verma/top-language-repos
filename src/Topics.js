import React , { useState , useEffect } from 'react';
import { RiBodyScanFill, RiGitRepositoryFill, RiStarSLine, RiUser3Line } from "react-icons/ri";
import { BsGrid } from "react-icons/bs"
import { FaListUl } from "react-icons/fa"
import { GoRepoForked, GoCode, GoLink, GoCalendar} from "react-icons/go"
import langaugeDB from './language';
import axios from "axios";

const Topics = () => {
    const [language , setLanguage] = useState('javascript');
    const [loading , setLoading] = useState(false);
    const [data , setData] = useState([]);
    const [gridView , setGridView] = useState(true);
    const [showMore , setShowMore] = useState(false)

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
        return (
            <div className = "loader">
                <img src = "https://media1.tenor.com/images/672b62d967f8d00d608d22f36c1831db/tenor.gif?itemid=5388999" alt = "loading..."/>
            </div>
        )
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
         onClick = {() => setLanguage(lang)}
         className="topic-btn">        
         <figure><img src={logo} alt={name} className="topic-logo"/></figure>
         <h4>{name}</h4>     
         </button>
         </li>
     })}
    </ul>
    <div className="repo-header">
       <div className="repo-header-intro">
           <h2>{language} repositories</h2>
           <p>Showing popular repositories (max: 30) based on star count.
           </p>
       </div>
       <div className="repo-header-btn">
           <BsGrid title = "Grid View" onClick = {() => (setGridView(true))} className = {`grid-btn  ${gridView ? "grid-orange-btn" : null}`}/>
           <FaListUl title = "List View" onClick = {() => (setGridView(false))} className = {`list-btn  ${gridView ? null : "list-orange-btn"}`} />
       </div>
    </div>
    </section>
    <section className = {gridView ? "grid-view" : "list-view"}>
    {data.map((repos , index) => {
           return <div 
           key = {index}
           className="single-repo">
               <a href={repos.html_url}
               className = "single-repo-name"><h2><RiGitRepositoryFill/> {repos.name}</h2></a>
               <div className="wrapper">
               <div className="single-repo-flex stars">
               <p><GoCode/> {language}</p>
               <div><GoRepoForked/> {repos.forks_count} <RiStarSLine/> {repos.stargazers_count}</div>
               </div>
               <p className="repo-description">{repos.description ? repos.description : "no description available"}</p>
               <div className="single-repo-flex calendar">
               <p><a href = {repos.html_url} title = "Owner"><RiUser3Line/>{repos.name}</a></p>
               <div title = "Updated at"><GoCalendar/> {repos.updated_at.substring(0,10)}</div>
               </div>
               </div>
               <a href= {repos.homepage || `/`} className="homepage-link" title = {repos.homepage ? "Project Homepage" : ""}><p><GoLink /> {repos.homepage || 'website is not available'}</p></a>
            </div>
       })} 
    </section>
    {/*<div className = "show-more-btn" onClick = {() => setShowMore(!showMore)}><button>{showMore ? "Show Less" : "Show More"}</button></div> */}
    </React.Fragment>
}

export default Topics;