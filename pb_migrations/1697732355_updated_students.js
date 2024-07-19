/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('6i4e6le4mih24xu')

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: '3piajcln',
    name: 'first_name',
    type: 'text',
    required: false,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      pattern: ''
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'ivudynfd',
    name: 'last_name',
    type: 'text',
    required: false,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      pattern: ''
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('6i4e6le4mih24xu')

  // remove
  collection.schema.removeField('3piajcln')

  // remove
  collection.schema.removeField('ivudynfd')

  return dao.saveCollection(collection)
})
