/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('xgfqym6h3f664as')

  // remove
  collection.schema.removeField('ffzxiecr')

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'n9vdt9hq',
    name: 'room_id',
    type: 'relation',
    required: false,
    presentable: false,
    unique: false,
    options: {
      collectionId: 'bfl8e7fxqsk1ssd',
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

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'ffzxiecr',
    name: 'room_id',
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

  // remove
  collection.schema.removeField('n9vdt9hq')

  return dao.saveCollection(collection)
})
