/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("utgt2drhzwbv29j")

  collection.listRule = " @collection.users.type =\"Applicant\" || @request.auth.type = \"Applicant\" && email.email = @request.auth.email || @request.auth.type = \"Admin\"\n"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("utgt2drhzwbv29j")

  collection.listRule = "@request.auth.type = \"Applicant\" && email.email = @request.auth.email || @request.auth.type = \"Admin\"\n"

  return dao.saveCollection(collection)
})
