/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('0r57icagtdxsbhs')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'lqxubzxy',
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
    id: '3qycyenq',
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
    id: 'zgri8nhv',
    name: 'email',
    type: 'email',
    required: true,
    presentable: false,
    unique: false,
    options: {
      exceptDomains: null,
      onlyDomains: null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'yzpuswno',
    name: 'id_number',
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
    id: 'kylyzxzj',
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
    id: 'uamnrmfo',
    name: 'address',
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
    id: '6whl7gny',
    name: 'students_email',
    type: 'relation',
    required: true,
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('0r57icagtdxsbhs')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'lqxubzxy',
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
    id: '3qycyenq',
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
    id: 'zgri8nhv',
    name: 'email',
    type: 'email',
    required: false,
    presentable: false,
    unique: false,
    options: {
      exceptDomains: null,
      onlyDomains: null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'yzpuswno',
    name: 'id_number',
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
    id: 'kylyzxzj',
    name: 'phone_number',
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
    id: 'uamnrmfo',
    name: 'address',
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
    id: '6whl7gny',
    name: 'students_email',
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
