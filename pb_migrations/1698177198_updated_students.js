/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('6i4e6le4mih24xu')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: '1bumznkl',
    name: 'faculty',
    type: 'select',
    required: false,
    presentable: false,
    unique: false,
    options: {
      maxSelect: 1,
      values: [
        'Economics',
        'Science',
        'Engineering',
        'Social Sciences',
        'Health Sciences'
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('6i4e6le4mih24xu')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: '1bumznkl',
    name: 'faculty',
    type: 'select',
    required: true,
    presentable: false,
    unique: false,
    options: {
      maxSelect: 1,
      values: [
        'Economics',
        'Science',
        'Engineering',
        'Social Sciences',
        'Health Sciences'
      ]
    }
  }))

  return dao.saveCollection(collection)
})
