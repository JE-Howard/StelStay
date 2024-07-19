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
    required: true,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      noDecimal: true
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
      min: 10,
      max: 10,
      noDecimal: true
    }
  }))

  return dao.saveCollection(collection)
})
