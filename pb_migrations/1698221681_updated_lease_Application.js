/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'rsgt8qha',
    name: 'year_required',
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
    id: 'cx2sui9h',
    name: 'student_id',
    type: 'relation',
    required: true,
    presentable: false,
    unique: false,
    options: {
      collectionId: '6i4e6le4mih24xu',
      cascadeDelete: false,
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
    id: 'rsgt8qha',
    name: 'year_required',
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
    id: 'cx2sui9h',
    name: 'student_id',
    type: 'relation',
    required: false,
    presentable: false,
    unique: false,
    options: {
      collectionId: '6i4e6le4mih24xu',
      cascadeDelete: false,
      minSelect: null,
      maxSelect: 1,
      displayFields: null
    }
  }))

  return dao.saveCollection(collection)
})
