

const addThings = (req, res, next) => {
    console.log(req.body)
    req.app
        .get('db')
        .add_things([req.body.name_thing, req.body.price, req.body.img])
        .then(response => 
            res
                .status(200)
                .send(response)
        )
        .catch(e => res.status(500).send(e))
};

const getInventory = (req, res, next) => {
    req.app
        .get('db')
        .get_things()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
};

const deleteThings = (req, res, next) => {
    req.app
        .get('db')
        .delete_things(req.params.id)
        .then(response => 
            res
                .status(200)
                .send(response)
        )
        .catch(err => res.status(500).send(err));
};



module.exports = {
    addThings,
    getInventory,
    deleteThings
   
};