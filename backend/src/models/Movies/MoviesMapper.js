const Movie = require('./movie');

exports.fromArray = (results) => {
    const arr = results.records.map(record => record.toObject());
    return arr.map((result) => {
        return new Movie(result);
    });
}