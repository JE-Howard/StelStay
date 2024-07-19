/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  collection.listRule = ''
  collection.viewRule = ''
  collection.createRule = ''
  collection.updateRule = ''
  collection.deleteRule = ''

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
