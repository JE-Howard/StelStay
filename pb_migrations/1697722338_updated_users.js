/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'u1obr5kk',
    name: 'field',
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

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: '4ftpjjg3',
    name: 'phone_number',
    type: 'number',
    required: false,
    presentable: false,
    unique: false,
    options: {
      min: 10,
      max: 10,
      noDecimal: false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'hb3c3oww',
    name: 'field1',
    type: 'number',
    required: false,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      noDecimal: false
    }
  }))

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: '7dqoxk5n',
    name: 'billpayer',
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

  // remove
  collection.schema.removeField('voeeu0xu')

  // remove
  collection.schema.removeField('u1obr5kk')

  // remove
  collection.schema.removeField('4ftpjjg3')

  // remove
  collection.schema.removeField('hb3c3oww')

  // remove
  collection.schema.removeField('roddlqp1')

  // remove
  collection.schema.removeField('7dqoxk5n')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'users_name',
    name: 'name',
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

  return dao.saveCollection(collection)
})
