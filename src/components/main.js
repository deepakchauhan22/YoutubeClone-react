import React from 'react';
import Search from './search';
import VideoPlay from './videoplay';
import VideoList from './videolist';
import youtube from '../baseUrl/youtube';


class Main extends React.Component{

    state = {
        videos:[],
        selectedVideo: null
    }
    handleSubmit = async(termFromSearchBar) =>{
        const response = await youtube.get('/search',{
            params:{
                q:termFromSearchBar
            }
        })
        this.setState({
            videos:response.data.items
        })
    };

    handleVideoSelect = (video) =>{
        this.setState({selectedVideo:video})
    }

    render(){
        return(
            <div className='ui container'>
                   <Search handleFormSubmit={this.handleSubmit}/>
                   <div className='ui grid'>
                        <div className="ui row">
                            <div className="sixteen wide column">
                                <VideoPlay video={this.state.selectedVideo}/>
                                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                            </div>
                     </div>
               </div>
            </div>
        )
    }
}


export default Main;