const add = (a,b) => {
    return a + b;
};

const sub = (a,b) => {
    return a - b;
};

const mult = (a,b) => {
    return a * b;
};

const name = "lok";

// module.exports = add;

// module.exports = name;

    //either
module.exports.add = add;
module.exports.sub = sub;
module.exports.mult = mult;
    //or
// module.exports = { add: add, sub: sub, mult: mult };
module.exports = { add, sub, mult, name};