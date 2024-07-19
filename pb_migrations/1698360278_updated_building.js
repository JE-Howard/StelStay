/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ctcmb4dhgib5lve")

  collection.listRule = "@request.auth.type=\"Resident\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ctcmb4dhgib5lve")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
