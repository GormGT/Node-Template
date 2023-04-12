const mongoose = require('mongoose');

// create a schema (AKA database item)
const objectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, { timestamps: true })

// //fire a function after doc saved to db
// objectSchema.post('save', function (doc, next) {
//     console.log('New object was created and saved');
//     next();
// })

// create a model to use in the database, whatever that means
const Thing = mongoose.model('thing', objectSchema);

console.log(Thing);

//export the user model to use elsewhere. In this case, the database
module.exports = Thing;