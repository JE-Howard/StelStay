/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jgfqnhg4bact53r")

  collection.listRule = "@request.auth.type=\"Resident\" || @request.auth.type =\"Admin\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jgfqnhg4bact53r")

  collection.listRule = "@request.auth.type=\"Resident\" && @request.auth.type =\"Admin\""

  return dao.saveCollection(collection)
})
