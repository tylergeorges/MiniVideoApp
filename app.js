
//* http://www.omdbapi.com/?i=tt3896198&apikey=423771dd
class App extends React.Component {
    state = {
        baseURL: 'http://www.omdbapi.com/?',
        apiKey: 'apikey=423771dd',
        query: '&t=', //* t = title
        movieTitle: '',
        searchURL: ''
    }

    handleChange = (e) =>{
        e.preventDefault()

        // console.log(e.target.value) //* gets value of whats being typed in search bar   

        this.setState({//* sets the movie title to what was typed
            movieTitle: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        //* sets state with base URL, api key, query, and the movie title
        this.setState({
            searchURL: `${this.state.baseURL}${this.state.apiKey}${this.state.query}${this.state.movieTitle}` //* building URL
        }, () => {
            fetch(this.state.searchURL)//* after its going to fetch the search URL from above
                .then(response => response.json())//* takes URL and puts it in json format
                .then(movies => console.log(movies))//* shows the movie searched in the console
            .catch(error => console.error(error))
        })
    }

    render(){
        return(
            <div>
            <h1>Mini Movie App</h1>

            <form onSubmit={this.handleSubmit}>
                <label htmlFor="movieTitle">Movie Title</label>
                
                {/* //* sets movie title value to what was typed and executes handle change function */}
                <input type="text" id="movieTitle" value={this.state.movieTitle} onChange={this.handleChange}/> 

                <input type="submit"/>
            </form>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))