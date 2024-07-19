/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    id: 'ar16moc673fd1yx',
    created: '2023-10-25 13:00:23.638Z',
    updated: '2023-10-25 13:00:23.638Z',
    name: 'fines',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: 'pj31fofn',
        name: 'details',
        type: 'relation',
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: '3xe5lky2345mw2y',
          cascadeDelete: false,
          minSelect: null,
          maxSelect: 1,
          displayFields: null
        }
      },
      {
        system: false,
        id: 'ynzxdlmh',
        name: 'student_email',
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
      }
    ],
    indexes: [],
    listRule: null,
    viewRule: null,
    createRule: null,
    updateRule: null,
    deleteRule: null,
    options: {}
  })

  return Dao(db).saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('ar16moc673fd1yx')

  return dao.deleteCollection(collection)
})
