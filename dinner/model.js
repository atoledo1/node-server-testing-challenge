const db = require("../data/connections.js");

module.exports = {
  find,
  findById,
  add,
  remove,
};

function find() {
  return db("supplies");
}

function findById(itemId) {
  return db("supplies").where({ id: itemId });
}

function add(item) {
  return db("supplies")
    .insert(item)
    .then((newSupplies) => {
      return newSupplies;
    });
}

function remove(itemId) {
  return db("supplies").del().where({ id: itemId });
}
