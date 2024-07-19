/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("56rn9mhjikffou2")

  collection.updateRule = "@request.auth.email=author.email && @request.auth.type=\"Resident\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("56rn9mhjikffou2")

  collection.updateRule = "@request.auth.email=author.email"

  return dao.saveCollection(collection)
})
