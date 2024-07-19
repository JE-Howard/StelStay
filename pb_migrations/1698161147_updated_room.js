/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('bfl8e7fxqsk1ssd')

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: '08a2mzvh',
    name: 'lease',
    type: 'relation',
    required: false,
    presentable: false,
    unique: false,
    options: {
      collectionId: 'xgfqym6h3f664as',
      cascadeDelete: false,
      minSelect: null,
      maxSelect: 1,
      displayFields: null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('bfl8e7fxqsk1ssd')

  // remove
  collection.schema.removeField('08a2mzvh')

  return dao.saveCollection(collection)
})
