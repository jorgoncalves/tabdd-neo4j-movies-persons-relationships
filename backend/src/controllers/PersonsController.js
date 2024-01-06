const driver = require('../config/neo4j');
const PersonMapper = require('../models/Persons/PersonsMapper');
const MoviesMapper = require('../models/Movies/MoviesMapper');

exports.getPersons = async () => {
    const session = driver.session();
    try {
        const results = await session.run('MATCH (person:Person) RETURN person');
        return PersonMapper.fromArray(results);
    } finally {
        session.close();
    }
}

exports.searchPersons = async (name) => {
    const session = driver.session();
    try {
        const results = await session.run('MATCH (person:Person) WHERE person.name CONTAINS $name RETURN person', { name });
        return PersonMapper.fromArray(results);
    } finally {
        session.close();
    }
}

exports.actedIn = async (name) => {
    const session = driver.session();
    try {
        const results = await session.run('MATCH (person:Person)-[:ACTED_IN]->(movie:Movie) WHERE person.name CONTAINS $name RETURN movie', { name });
        return MoviesMapper.fromArray(results);
    } finally {
        session.close();
    }
}