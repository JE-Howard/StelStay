/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('881bsb1yqtkixkm')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'uvkqd1of',
    name: 'building_id',
    type: 'relation',
    required: true,
    presentable: false,
    unique: false,
    options: {
      collectionId: 'ctcmb4dhgib5lve',
      cascadeDelete: false,
      minSelect: null,
      maxSelect: 1,
      displayFields: null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'wk3wzayj',
    name: 'apartment_number',
    type: 'number',
    required: true,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      noDecimal: true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'uxb6hwqr',
    name: 'floor_number',
    type: 'number',
    required: true,
    presentable: false,
    unique: false,
    options: {
      min: null,
      max: null,
      noDecimal: true
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: '2lagkecg',
    name: 'number_of_rooms',
    type: 'select',
    required: true,
    presentable: false,
    unique: false,
    options: {
      maxSelect: 1,
      values: [
        'single',
        'two',
        'three'
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('881bsb1yqtkixkm')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'uvkqd1of',
    name: 'building_id',
    type: 'relation',
    required: false,
    presentable: false,
    unique: false,
    options: {
      collectionId: 'ctcmb4dhgib5lve',
      cascadeDelete: false,
      minSelect: null,
      maxSelect: 1,
      displayFields: null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'wk3wzayj',
    name: 'apartment_number',
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
    id: 'uxb6hwqr',
    name: 'floor_number',
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
    id: '2lagkecg',
    name: 'number_of_rooms',
    type: 'select',
    required: false,
    presentable: false,
    unique: false,
    options: {
      maxSelect: 1,
      values: [
        'single',
        'two',
        'three'
      ]
    }
  }))

  return dao.saveCollection(collection)
})
