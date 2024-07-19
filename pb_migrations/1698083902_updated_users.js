/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'roddlqp1',
    name: 'type',
    type: 'select',
    required: true,
    presentable: false,
    unique: false,
    options: {
      maxSelect: 1,
      values: [
        'Resident',
        'Admin',
        'Applicant'
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('_pb_users_auth_')

  // update
  collection.schema.addField(new SchemaField({
    system: false,
    id: 'roddlqp1',
    name: 'type',
    type: 'select',
    required: true,
    presentable: false,
    unique: false,
    options: {
      maxSelect: 1,
      values: [
        'Student',
        'Admin'
      ]
    }
  }))

  return dao.saveCollection(collection)
})
