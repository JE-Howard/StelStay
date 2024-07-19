/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6i4e6le4mih24xu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ud3r83ea",
    "name": "year_of_study",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "first",
        "second",
        "third",
        "fourth",
        "fifth",
        "sixth"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6i4e6le4mih24xu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ud3r83ea",
    "name": "year_of_study",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "first",
        "second",
        "third",
        "fourth",
        "fith",
        "sixth"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
