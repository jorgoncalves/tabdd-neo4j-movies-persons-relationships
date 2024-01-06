const driver = require('../config/neo4j');
const MovieMapper = require('../models/Movies/MoviesMapper');

exports.getMovies = async () => {
    const session = driver.session();
    try {
        // const results = await session.run('MATCH (movie:Movie) RETURN movie');
        const results = await session.run('MATCH (movie:Movie)<-[:ACTED_IN]-(actor:Person) RETURN movie, collect(actor) AS cast;');
        return MovieMapper.fromArray(results);
    } finally {
        session.close();
    }
}

exports.searchMovies = async (title) => {
    const session = driver.session();
    try {
        const results = await session.run('MATCH (movie:Movie) WHERE movie.title CONTAINS $title RETURN movie', { title });
        return MovieMapper.fromArray(results);
    } finally {
        session.close();
    }
}