/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgfqym6h3f664as")

  collection.listRule = "@collection.lease_Application.approved = true"
  collection.viewRule = "@collection.lease_Application.approved = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgfqym6h3f664as")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})
