/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.listRule = " @request.auth.id != \"\" && (@request.auth.type = \"Admin\" || @request.auth.id = id)"
  collection.deleteRule = "@request.auth.id != \"\" && @request.auth.type = \"admin\""

  return dao.saveCollection(collection)
})
