/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  // remove
  collection.schema.removeField('ymqmkbzr')

  // remove
  collection.schema.removeField('ko4je2zu')

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'ymqmkbzr',
    name: 'Lease_Start',
    type: 'date',
    required: false,
    presentable: false,
    unique: false,
    options: {
      min: '',
      max: ''
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'ko4je2zu',
    name: 'Lease_End',
    type: 'date',
    required: false,
    presentable: false,
    unique: false,
    options: {
      min: '',
      max: ''
    }
  }))

  // remove
  collection.schema.removeField('th3kp3iw')

  return dao.saveCollection(collection)
})
