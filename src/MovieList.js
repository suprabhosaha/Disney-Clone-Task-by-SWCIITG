const MovieList = ({movies, title}) => {

    return (
        <div className="blog-box">
            <h2>{ title }</h2>
            <div className="box-item">
                {movies.map((movie) => (
                    <div className="blog-preview" key={movie.id}>
                        <img src={ movie.cardImg } alt={ movie.title } />
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default MovieList;