/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'rsgt8qha',
    name: 'year_required',
    type: 'number',
    required: true,
    presentable: false,
    unique: false,
    options: {
      min: 2024,
      max: 3050,
      noDecimal: true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'rsgt8qha',
    name: 'year_required',
    type: 'number',
    required: true,
    presentable: false,
    unique: false,
    options: {
      min: 2024,
      max: null,
      noDecimal: true
    }
  }))

  return dao.saveCollection(collection)
})
