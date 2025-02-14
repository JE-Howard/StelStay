/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('bfl8e7fxqsk1ssd')

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'qhvgopil',
    name: 'student',
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('bfl8e7fxqsk1ssd')

  // remove
  collection.schema.removeField('qhvgopil')

  return dao.saveCollection(collection)
})
