/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'th3kp3iw',
    name: 'approved',
    type: 'bool',
    required: false,
    presentable: false,
    unique: false,
    options: {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'th3kp3iw',
    name: 'status',
    type: 'bool',
    required: false,
    presentable: false,
    unique: false,
    options: {}
  }))

  return dao.saveCollection(collection)
})
