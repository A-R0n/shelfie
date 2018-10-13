

const addThings = (req, res, next) => {
    req.app
        .get('db')
        .add_things([req.body.things])
        .then(response => 
            res
                .status(200)
                .send({ message: `Succesfully added ${req.body.things} to DB`})
        )
        .catch(e => res.status(500).send(e))
};

const getInventory = (req, res, next) => {
    req.app
        .get('db')
        .get_inventory()
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
    deleteThings,
   
};