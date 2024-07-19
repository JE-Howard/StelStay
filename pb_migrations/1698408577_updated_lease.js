/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgfqym6h3f664as")

  collection.listRule = "(@request.auth.type = \"Resident\" && student_id.email = @request.auth.email   && @collection.lease_Application.approved ?= true) || @request.auth.type = \"Admin\" "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgfqym6h3f664as")

  collection.listRule = "(@request.auth.type = \"Resident\" && student_id.email = @request.auth.email   && @collection.lease_Application.approved = true) || @request.auth.type = \"Admin\" "

  return dao.saveCollection(collection)
})
