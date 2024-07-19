/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: '4ftpjjg3',
    name: 'phone_number',
    type: 'number',
    required: true,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      noDecimal: false
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
    id: '4ftpjjg3',
    name: 'phone_number',
    type: 'number',
    required: true,
    presentable: false,
    unique: false,
    options: {
      min: 10,
      max: 10,
      noDecimal: false
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
      maxSelect: 2,
      values: [
        'Student',
        'Admin'
      ]
    }
  }))

  return dao.saveCollection(collection)
})
