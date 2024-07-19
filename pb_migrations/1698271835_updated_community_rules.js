/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3xe5lky2345mw2y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a83armgu",
    "name": "Rule",
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
  const collection = dao.findCollectionByNameOrId("3xe5lky2345mw2y")

  // remove
  collection.schema.removeField("a83armgu")

  return dao.saveCollection(collection)
})
