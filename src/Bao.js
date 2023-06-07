import useFetch from "./useFetch";
import Navbar from "./Navbar";
import Movie from "./Movie";

const Bao = () => {

    const { data : movies, isPending, error} = useFetch('https://json-server-template-seven.vercel.app/movies');

    return (
        <div className="App">
            <Navbar />
            <div className="movie-container">
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div>}
                {movies && <Movie movies={movies.filter(movie => movie.title === 'Bao')}></Movie>}
            </div>
        </div>
    );
}
 
export default Bao;

