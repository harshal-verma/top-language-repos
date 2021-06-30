import React, { useState } from 'react';
import "./App.css"

const urlGenerator = (language) => {
   return 'https://api.github.com/search/repositories?q=language: ' + language + '&sort=stars&order=desc';
}


const Fetch = () => {
    const fetchAPI = async () => {
        const response = await fetch(urlGenerator('JavaScript'));
        const data = await response.json();
        console.log(data)
    }
    return <React.Fragment>
    
    </React.Fragment>
}

export default Fetch;