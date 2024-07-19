/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    id: '3xe5lky2345mw2y',
    created: '2023-10-25 12:58:40.221Z',
    updated: '2023-10-25 12:58:40.221Z',
    name: 'community_rules',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: 'mnm6xfet',
        name: 'rule',
        type: 'editor',
        required: false,
        presentable: false,
        unique: false,
        options: {
          convertUrls: false
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
  const collection = dao.findCollectionByNameOrId('3xe5lky2345mw2y')

  return dao.deleteCollection(collection)
})
