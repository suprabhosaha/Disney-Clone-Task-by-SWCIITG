import Slider from "./Slider";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MovieList from "./MovieList";
import useFetch from "./useFetch";

const Home = () => {

    const { data : movies, isPending, error} = useFetch('https://json-server-template-seven.vercel.app/movies');

    return (
        <div className="App">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div id="home">
                <Slider></Slider>  
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div>}
                {movies && <MovieList movies={movies.filter(movie => movie.type === 'recommend')} title="Recommended movies"></MovieList>}
                {movies && <MovieList movies={movies.filter(movie => movie.type === 'new')} title="Latest movies"></MovieList>}
                {movies && <MovieList movies={movies.filter(movie => movie.type === 'trending')} title="Trending movies"></MovieList>}
                {movies && <MovieList movies={movies.filter(movie => movie.type === 'original')} title="Originals"></MovieList>}
                <Footer></Footer>
            </div>
        </div>
        
    );
}

export default Home;