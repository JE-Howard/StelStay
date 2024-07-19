/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6i4e6le4mih24xu")

  collection.listRule = "@collection.users.type =\"Applicant\" || @collection.users.email=email"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6i4e6le4mih24xu")

  collection.listRule = "@collection.users.type =\"Applicant\" || @request.auth.email= email"

  return dao.saveCollection(collection)
})
