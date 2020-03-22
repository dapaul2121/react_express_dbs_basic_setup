const Group = require('../../mongo/index')

const getAllMongo = (req, res) => {
    Group.find({}, (err, data) => {
        if (err) {
            res.sendStatus(404)
        } else {
            res.send(data)
        }
    })
}

module.exports.getAllMongo = getAllMongo