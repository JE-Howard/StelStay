/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jgfqnhg4bact53r")

  // remove
  collection.schema.removeField("xuev9ha0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c5bhinqw",
    "name": "message",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jgfqnhg4bact53r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xuev9ha0",
    "name": "message",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("c5bhinqw")

  return dao.saveCollection(collection)
})
