// const foodItem = require("./schema")
const dbo = require("./conn");

const getData = (req, res) => {
    let db_connect = dbo.getDb();
    db_connect
        .collection("foods")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
};

const postData = (req, response) => {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        price: req.body.price,
    };
    db_connect.collection("foods").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log(myobj)
        response.json(res);
    });
};

module.exports = {
    getData,
    postData,
};
