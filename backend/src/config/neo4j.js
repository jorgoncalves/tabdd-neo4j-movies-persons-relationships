const neo4j = require('neo4j-driver');
const fs = require('fs');

const neo4jUrl = process.env.NEO4J_URI;
const neo4jUser = process.env.NEO4J_USER;
const neo4jPassword = process.env.NEO4J_PASSWORD;

const driver = new neo4j.driver(neo4jUrl, neo4j.auth.basic(neo4jUser, neo4jPassword));

// Function responsible for loading data, if it doesn't exist, 
// from the load-movies.cypher file located in /data folder
const loadDataFromCypher = async () => {
    const session = driver.session();
    try {
        const result = await session.run('MATCH (m:Movie) RETURN m');
        const movies = result.records.map(record => record.toObject());
        if (movies.length === 0) {
            console.log("Loading data from load-movies.cypher");
            const cypher = fs.readFileSync('./data/load-movies.cypher').toString();
            await session.run(cypher);
            console.log("Data loaded");
        } else {
            console.log("Data already loaded");
        }
    } finally {
        session.close();
    }
}

const testConnection = async () => {
    const session = driver.session();
    try {
        await driver.verifyConnectivity();
        console.log("Successfully connected to Neo4j");


        const resultAll = await session.run('MATCH (m:Movie) RETURN m');

        console.log("Query all movies:               ", resultAll.records.length);

        const resultReeves = await session.run('MATCH (p:Person {name: "Keanu Reeves"})-[:ACTED_IN]->(m:Movie) RETURN m');

        console.log("Query movies with Keanu Reeves: ", resultReeves.records.length);
    } finally {
        session.close();
    }
}

const setup = async () => {
    await loadDataFromCypher();
    await testConnection();
}

setup();

//default export to be used in other files
module.exports = driver;