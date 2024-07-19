/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfl8e7fxqsk1ssd")

  collection.listRule = "@request.auth.type = \"Resident\" || @request.auth.type = \"Admin\"\n"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfl8e7fxqsk1ssd")

  collection.listRule = "@request.auth.type=\"Resident\""

  return dao.saveCollection(collection)
})
