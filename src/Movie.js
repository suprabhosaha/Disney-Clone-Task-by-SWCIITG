import { FaPlus, FaPlay } from "react-icons/fa";

const Movie = ({movies}) => {

    return (
        <div className="movie-box">
            {movies.map((movie) => (
                <div className="movie-preview" key={movie.id}>
                    <img src={ movie.titleImg } alt={ movie.title} />
                    <div className="watch"><button id="play"><FaPlay></FaPlay> PLAY</button>
                    <button id="trailer"><FaPlay /> TRAILER</button>
                    <button id="add"><FaPlus /></button></div>
                    <div className="subTitle">{ movie.subTitle }</div>
                    <div className="description">{ movie.description }</div>
                </div>
            ))}
        </div>
    );
}
 
export default Movie;