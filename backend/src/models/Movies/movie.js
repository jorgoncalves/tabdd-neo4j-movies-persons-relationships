const _ = require('lodash');
const Person = require('../Persons/person');

function Movie(_node) {
    _.extend(this, _node.movie.properties);

    if (_node.elementId) {
        this.elementId = _node.elementId;
    }
    if (this.title) {
        this.title = this.title;
    }
    if (this.tagline) {
        this.tagline = this.tagline;
    }
    if (this.released) {
        this.released = this.released.toNumber();
    }
    if (_node.cast) {
        this.cast = _node.cast.map((node) => {
            return new Person(node);
        });
    }
}

module.exports = Movie;
