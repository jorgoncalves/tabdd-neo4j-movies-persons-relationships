const Person = require('./person');

exports.fromArray = (results) => {
    const arr = results.records.map(record => record.toObject());
    return arr.map((result) => {
        return new Person(result.person);
    });
}