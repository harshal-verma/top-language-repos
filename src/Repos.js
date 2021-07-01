import React from 'react';
import { RiGitRepositoryFill, RiStarSLine, RiUser3Line } from "react-icons/ri";
import { GoRepoForked, GoCode, GoLink, GoCalendar} from "react-icons/go"
import './App.css'

const Repos = () => {
    return <div className="single-repo">
       <h2><RiGitRepositoryFill/> freeCodeCamp</h2>
       <hr/>
       <div className="single-repo-flex">
       <h3><GoCode/> javascript</h3>
       <div><GoRepoForked/> 26018 <RiStarSLine/> 325623</div>
       </div>
       <p>freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.</p>
       <div className="single-repo-flex">
       <h3><RiUser3Line/> freeCodeCamp</h3>
       <div><GoCalendar/> 2021-07-01</div>
       </div>
       <hr/>
       <p><GoLink />https://contribute.freecodecamp.org</p>
    </div>
}

export default Repos;