import React, {Component} from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

class GifListContainer extends Component {

    constructor() {
        super();
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        this.fetchGifs()       
    }

    fetchGifs = (searchTerm = "") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=Bx3pPdU1YG9RR53e1876MHJbcbdPu31F&limit=3`)
        .then(resp => resp.json())
        .then(json => { 
            this.setState({ gifs: json.data.map(gif => gif.images.original.url)
            })
        }) 
    }

    render () {
        return (
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch fetchGifs={this.fetchGifs} />
            </div>
        )
    }

}

export default GifListContainer;
