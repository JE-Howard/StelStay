/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgfqym6h3f664as")

  collection.listRule = "@request.auth.id != \"\" && (@request.auth.type = \"Admin\" || @request.auth.id = id)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgfqym6h3f664as")

  collection.listRule = " @request.auth.type = \"resident\" && student_id.email = @request.auth.email"

  return dao.saveCollection(collection)
})
