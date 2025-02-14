/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: '1azt3nqj',
    name: 'email',
    type: 'relation',
    required: true,
    presentable: false,
    unique: false,
    options: {
      collectionId: '_pb_users_auth_',
      cascadeDelete: true,
      minSelect: null,
      maxSelect: 1,
      displayFields: null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: '1azt3nqj',
    name: 'email',
    type: 'relation',
    required: false,
    presentable: false,
    unique: false,
    options: {
      collectionId: '_pb_users_auth_',
      cascadeDelete: false,
      minSelect: null,
      maxSelect: 1,
      displayFields: null
    }
  }))

  return dao.saveCollection(collection)
})
