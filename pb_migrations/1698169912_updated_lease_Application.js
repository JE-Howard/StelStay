/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'rsgt8qha',
    name: 'year_required',
    type: 'number',
    required: true,
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
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  // remove
  collection.schema.removeField('rsgt8qha')

  return dao.saveCollection(collection)
})
