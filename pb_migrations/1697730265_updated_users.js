/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

  // remove
  collection.schema.removeField('u1obr5kk')

  // remove
  collection.schema.removeField('hb3c3oww')

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

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

  return dao.saveCollection(collection)
})
