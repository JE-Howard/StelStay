/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('881bsb1yqtkixkm')

  collection.indexes = [
    'CREATE UNIQUE INDEX `idx_WXdGNZH` ON `apparment` (`building_name`)'
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('881bsb1yqtkixkm')

  collection.indexes = []

  return dao.saveCollection(collection)
})
