/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('bfl8e7fxqsk1ssd')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 's49lvd9l',
    name: 'apartment_id',
    type: 'relation',
    required: false,
    presentable: false,
    unique: false,
    options: {
      collectionId: '881bsb1yqtkixkm',
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

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 's49lvd9l',
    name: 'apartment',
    type: 'relation',
    required: false,
    presentable: false,
    unique: false,
    options: {
      collectionId: '881bsb1yqtkixkm',
      cascadeDelete: false,
      minSelect: null,
      maxSelect: 1,
      displayFields: null
    }
  }))

  return dao.saveCollection(collection)
})
