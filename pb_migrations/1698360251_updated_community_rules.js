/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3xe5lky2345mw2y")

  collection.listRule = "@request.auth.type=\"Resident\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3xe5lky2345mw2y")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
