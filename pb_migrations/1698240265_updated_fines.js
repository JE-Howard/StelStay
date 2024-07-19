/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('ar16moc673fd1yx')

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'exno2gta',
    name: 'Paid',
    type: 'bool',
    required: false,
    presentable: false,
    unique: false,
    options: {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('ar16moc673fd1yx')

  // remove
  collection.schema.removeField('exno2gta')

  return dao.saveCollection(collection)
})
