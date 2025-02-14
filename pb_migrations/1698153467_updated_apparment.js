/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('881bsb1yqtkixkm')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'uvkqd1of',
    name: 'building_id',
    type: 'relation',
    required: false,
    presentable: false,
    unique: false,
    options: {
      collectionId: 'ctcmb4dhgib5lve',
      cascadeDelete: false,
      minSelect: null,
      maxSelect: 1,
      displayFields: null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('881bsb1yqtkixkm')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'uvkqd1of',
    name: 'building_name',
    type: 'relation',
    required: false,
    presentable: false,
    unique: false,
    options: {
      collectionId: 'ctcmb4dhgib5lve',
      cascadeDelete: false,
      minSelect: null,
      maxSelect: 1,
      displayFields: null
    }
  }))

  return dao.saveCollection(collection)
})
