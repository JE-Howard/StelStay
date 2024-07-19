/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('ar16moc673fd1yx')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'pj31fofn',
    name: 'details_id',
    type: 'relation',
    required: false,
    presentable: false,
    unique: false,
    options: {
      collectionId: '3xe5lky2345mw2y',
      cascadeDelete: false,
      minSelect: null,
      maxSelect: 1,
      displayFields: null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('ar16moc673fd1yx')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'pj31fofn',
    name: 'details',
    type: 'relation',
    required: false,
    presentable: false,
    unique: false,
    options: {
      collectionId: '3xe5lky2345mw2y',
      cascadeDelete: false,
      minSelect: null,
      maxSelect: 1,
      displayFields: null
    }
  }))

  return dao.saveCollection(collection)
})
