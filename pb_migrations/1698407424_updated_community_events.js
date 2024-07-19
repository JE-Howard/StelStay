/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("56rn9mhjikffou2")

  collection.deleteRule = "@request.auth.email=author.email && @request.auth.type=\"Resident\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("56rn9mhjikffou2")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
