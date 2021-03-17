const mongoose = require(mongoose);
const config = require(config);

mongoose
    .connect(
        config.get('MongoURI'), {useNewURLParser: true, useUnifiedTopology: true})
    .then(() => console.log('connected to mongodb...'))
    .catch((err) => console.log(`could not connect to mongodb. Error ${err} `));