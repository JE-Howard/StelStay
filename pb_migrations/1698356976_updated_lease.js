/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgfqym6h3f664as")

  collection.listRule = "@request.auth.type = \"Admin\" || (@collection.lease_Application.email = @request.auth.email && @collection.lease_Application.approved = true)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgfqym6h3f664as")

  collection.listRule = "@request.auth.type = \"Admin\" || (@collection.lease_Application.email = @request.auth.users_name && @collection.lease_Application.approved = true)"

  return dao.saveCollection(collection)
})
