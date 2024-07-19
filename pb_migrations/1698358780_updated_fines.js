/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ar16moc673fd1yx")

  collection.listRule = "@request.auth.type = \"Resident\" && student_email.email = @request.auth.email"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ar16moc673fd1yx")

  collection.listRule = "@request.auth.type = \"Resident\" && student_email.email = @request.auth.id"

  return dao.saveCollection(collection)
})
