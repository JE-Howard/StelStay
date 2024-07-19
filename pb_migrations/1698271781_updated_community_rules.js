/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3xe5lky2345mw2y")

  // remove
  collection.schema.removeField("mnm6xfet")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3xe5lky2345mw2y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mnm6xfet",
    "name": "rule",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
})
