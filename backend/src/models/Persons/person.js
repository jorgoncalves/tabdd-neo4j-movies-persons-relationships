const _ = require('lodash');

function Person(_node) {
    _.extend(this, _node.properties);

    if (_node.elementId) {
        this.elementId = _node.elementId;
    }
    if (this.name) {
        this.name = this.name;
    }
    if (this.born) {
        this.born = this.born.toNumber();
    }
}

module.exports = Person;
