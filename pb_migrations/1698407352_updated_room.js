/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfl8e7fxqsk1ssd")

  collection.createRule = "@request.auth.type = \"Admin\""
  collection.updateRule = "@request.auth.type = \"Admin\""
  collection.deleteRule = "@request.auth.type = \"Admin\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bfl8e7fxqsk1ssd")

  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
