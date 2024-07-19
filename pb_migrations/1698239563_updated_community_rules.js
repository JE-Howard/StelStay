/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('3xe5lky2345mw2y')

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'rjlv8css',
    name: 'Amount',
    type: 'number',
    required: false,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      noDecimal: false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('3xe5lky2345mw2y')

  // remove
  collection.schema.removeField('rjlv8css')

  return dao.saveCollection(collection)
})
