/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

  // remove
  collection.schema.removeField('7dqoxk5n')

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

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

  return dao.saveCollection(collection)
})
