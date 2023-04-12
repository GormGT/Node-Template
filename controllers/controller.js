const Thing = require("../models/Object");

//controllers
module.exports.home_get = (req, res) => {
    res.render("index", {title: "Index"});
}

module.exports.form_get = (req, res) => {
    res.render("form", {title: "Form"});
}

module.exports.form_post = async (req, res) => {

    const data = req.body;

    console.log(data.parcel);

    const doc = new Thing(data.parcel);

    try{
        doc.save();
        res.status(200).send({
            status: `Upload successful :)`
        })
    }
    catch(err){
        console.error('You broke it', err)
        res.status(400).send({
            status: (`Thing broke`, err)
        })
    }
}

module.exports.thing_readOne = async (req, res) => {

    const data = req.body;
    id = data.parcel;

    console.log(id);

    if(data){
        try{
            // instead of findOne use just find with an empty object to find all items in db
            const foundDoc = await Thing.findOne({_id: id});
            res.status(200).send({
                status: `${id}`
            })
        }
        catch(err){
            console.error('Thing broke again', err);
            res.status(400).send({
                status: `Not sure what you did, but it didn't work. ${err}`
            })
        }
    }
}

module.exports.doc_update = async (req, res) => {

    const data = req.body;
    console.log(data);

    try{
        const docToUpdat = await Thing.findOne({_id: data.id});
        await docToUpdat.updateOne(data.updatedDoc);
        res.status(200).send({
            status: `Document updated :D ${data.id}`
        })
    }
    catch(err){
        console.error(err);
        res.status(400).send({
            status: `Not again... ${err}`
        })
    }
}

module.exports.doc_delete = async (req, res) => {

    const data = req.body;
    console.log(data);

    try{
        const docToUpdat = await Thing.findOneAndDelete({_id: data.parcel});
        res.status(200).send({
            status: `Document sent to the shadow realm >:) ${data.parcel}`
        })
    }
    catch(err){
        console.error(err);
        res.status(400).send({
            status: `How do you keep messing this up???? ${err}`
        })
    }
}