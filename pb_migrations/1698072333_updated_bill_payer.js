/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('0r57icagtdxsbhs')

  // add
  collection.schema.addField(new SchemaField({
    system: false,
    id: '6whl7gny',
    name: 'user_email',
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
  const collection = dao.findCollectionByNameOrId('0r57icagtdxsbhs')

  // remove
  collection.schema.removeField('6whl7gny')

  return dao.saveCollection(collection)
})
