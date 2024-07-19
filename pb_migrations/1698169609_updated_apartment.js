/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('881bsb1yqtkixkm')

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('881bsb1yqtkixkm')

  // remove
  collection.schema.removeField('2lagkecg')

  return dao.saveCollection(collection)
})
