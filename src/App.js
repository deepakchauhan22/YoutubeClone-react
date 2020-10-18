import React, { useState, useEffect } from 'react'; //usestate, useEffect} these are hooks used for state management and data loading   
import './App.css';                       //useeffect is a hook tht helps in data fetching
import Main from './components/main';
import Footer from './components/footer';


function App() {
  const[data,setData] = useState ([])   //setData is function for updating state data and usestate takes initiate state
  useEffect(()=>{                       //async is added await that it will wait for data 
    const fetchData =async()=>{
      const result = await 
fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyALSd-1Oa3Go4TtzyUA73TiKl1NNaoiZ2s")
  .then(
        response => response.json()
      )
      setData(result.items);
    }
    fetchData();

  },[]) ; // we only want to fetch data when the componnt mounts so we added and empty [] after use effect
 
  return (
    <div className="App" >
           
      <header>
      <h1>Youtube</h1>
      </header>  
      <div className="ui container">
      <div class="ui celled grid" >
      <div class="row">
          <div class="eleven wide column">
            <Main />
       
            {data.map(video =>(
            <div class="ui items video-item "  key={video.id}>
                <div class="item ">
                  <div class="image">
                    <img src={video.snippet.thumbnails.default.url} />
                  </div>
                  <div class="content">
                    <a class="header">{video.snippet.title}</a>
                    <div class="meta">
                      <span>{video.statistics.viewCount}</span>  <span>{video.snippet.publishedAt}</span>
                    </div>
                    <div class="meta">
                      <span>{video.snippet.channelTitle}</span>
                    </div>
                    <div class="description">
                      <p>{video.snippet.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              )  
              )}
                </div>
          <div class="five wide column">
          <h1>Most Popular</h1>
          {data.map(video =>(
            <div class="ui items video-item mostpopular"  key={video.id}>
                <div class="item">
                  <div class="image">
                    <img src={video.snippet.thumbnails.default.url} />
                  </div>
                  <div class="content">
                    <a class="header">{video.snippet.title}</a>
                    <div class="meta">
                    <span>{video.snippet.channelTitle}</span>
                    </div>
                    <div class="description">
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              )  
              )}


          </div>
      </div>
      </div>
    </div>
      {/* add key value to div so every time we render dynamic children
      npm install serve "serve helps us with setting up a light weight server"
       */}
     
     <Footer />
    </div>
    

    //Google Lighthouse is an open-source, automated tool for measuring the quality of web pages.
    // It can be run against any web page, public or requiring authentication.
  );
}

export default App;
//set data is function for updating state data