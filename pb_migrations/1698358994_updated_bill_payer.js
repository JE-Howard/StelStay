/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0r57icagtdxsbhs")

  collection.listRule = "@request.auth.email=students_email.email"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0r57icagtdxsbhs")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
