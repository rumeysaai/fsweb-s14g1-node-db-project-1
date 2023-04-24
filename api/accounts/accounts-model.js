const db = require('../../data/db-config');

const getAll = () => {
  // KODLAR BURAYA
  return db.select('*').from('accounts');
}

const getById = id => {
  // KODLAR BURAYA
  return db('accounts').where('id', id).first();
}
const getByName = name => {
  // KODLAR BURAYA
  return db('accounts').where('name', name).first();
}

const create = account => {
  // insert into accounts (id, name, budget) values( )
  const inserted = db('accounts').insert(account).then(ids=>{
    return getById(ids[0])
  });
  return inserted;
}

const updateById = (id, account) => {
  return db('account').where('id',id).update(account)
  .then(affectedRows=>{
    return getById(id);
  });
}

const deleteById = id => {
  db('accounts').where('id',id).del();
}

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  updateById,
  deleteById,
}
