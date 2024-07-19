/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('0r57icagtdxsbhs')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'kylyzxzj',
    name: 'phone_number',
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

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'uamnrmfo',
    name: 'address',
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
  const collection = dao.findCollectionByNameOrId('0r57icagtdxsbhs')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'kylyzxzj',
    name: 'phone_number',
    type: 'number',
    required: true,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      noDecimal: true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'uamnrmfo',
    name: 'address',
    type: 'text',
    required: true,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      pattern: ''
    }
  }))

  return dao.saveCollection(collection)
})
