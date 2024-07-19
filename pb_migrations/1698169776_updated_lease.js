/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('xgfqym6h3f664as')

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'ohkelrrn',
    name: 'bill_payer',
    type: 'relation',
    required: false,
    presentable: false,
    unique: false,
    options: {
      collectionId: '0r57icagtdxsbhs',
      cascadeDelete: false,
      minSelect: null,
      maxSelect: 1,
      displayFields: null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('xgfqym6h3f664as')

  // remove
  collection.schema.removeField('ohkelrrn')

  return dao.saveCollection(collection)
})
