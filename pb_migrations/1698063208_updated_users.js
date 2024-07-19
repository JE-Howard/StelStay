/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'users_name',
    name: 'first_name',
    type: 'text',
    required: true,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      pattern: ''
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'voeeu0xu',
    name: 'last_name',
    type: 'text',
    required: true,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      pattern: ''
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'roddlqp1',
    name: 'type',
    type: 'select',
    required: true,
    presentable: false,
    unique: false,
    options: {
      maxSelect: 1,
      values: [
        'Student',
        'Admin'
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'users_name',
    name: 'first_name',
    type: 'text',
    required: false,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      pattern: ''
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'voeeu0xu',
    name: 'last_name',
    type: 'text',
    required: false,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      pattern: ''
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'roddlqp1',
    name: 'type',
    type: 'select',
    required: false,
    presentable: false,
    unique: false,
    options: {
      maxSelect: 1,
      values: [
        'Student',
        'Admin'
      ]
    }
  }))

  return dao.saveCollection(collection)
})
