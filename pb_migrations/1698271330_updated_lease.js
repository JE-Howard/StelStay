/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgfqym6h3f664as")

  collection.listRule = "@request.auth.id != \"\" && (student_id = @request.auth.email || bill_payer_id.students_email.email = @request.auth.email)"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgfqym6h3f664as")

  collection.listRule = "@request.auth.id != \"\" && (student_id.email = @request.auth.email || bill_payer_id.students_email.email = @request.auth.email)"

  return dao.saveCollection(collection)
})
