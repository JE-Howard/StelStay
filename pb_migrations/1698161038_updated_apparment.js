/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('881bsb1yqtkixkm')

  collection.name = 'apartment'

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('881bsb1yqtkixkm')

  collection.name = 'apparment'

  return dao.saveCollection(collection)
})
