/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

  // remove
  collection.schema.removeField('4ftpjjg3')

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: '4ftpjjg3',
    name: 'phone_number',
    type: 'number',
    required: true,
    presentable: true,
    unique: false,
    options: {
      min: null,
      max: null,
      noDecimal: true
    }
  }))

  return dao.saveCollection(collection)
})
