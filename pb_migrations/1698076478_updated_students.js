/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('6i4e6le4mih24xu')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'xz0jni4j',
    name: 'email',
    type: 'relation',
    required: false,
    presentable: true,
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('6i4e6le4mih24xu')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'xz0jni4j',
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
