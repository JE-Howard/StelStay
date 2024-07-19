/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6i4e6le4mih24xu")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6i4e6le4mih24xu")

  collection.listRule = "@request.auth.email=email.email || @collection.users.type=\"Applicant\""

  return dao.saveCollection(collection)
})
