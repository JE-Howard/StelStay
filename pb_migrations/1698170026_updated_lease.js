/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('xgfqym6h3f664as')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'epca5o9e',
    name: 'student_id',
    type: 'relation',
    required: true,
    presentable: false,
    unique: false,
    options: {
      collectionId: '_pb_users_auth_',
      cascadeDelete: false,
      minSelect: 1,
      maxSelect: null,
      displayFields: null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'ohkelrrn',
    name: 'bill_payer_id',
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

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'epca5o9e',
    name: 'username',
    type: 'relation',
    required: true,
    presentable: false,
    unique: false,
    options: {
      collectionId: '_pb_users_auth_',
      cascadeDelete: false,
      minSelect: 1,
      maxSelect: null,
      displayFields: null
    }
  }))

  // update
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
})
