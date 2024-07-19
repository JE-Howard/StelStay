/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId('2jfdo7xdl284qy9')

  return dao.deleteCollection(collection)
}, (db) => {
  const collection = new Collection({
    id: '2jfdo7xdl284qy9',
    created: '2023-10-18 19:43:02.244Z',
    updated: '2023-10-18 19:44:11.735Z',
    name: 'test',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: 's6o1ylax',
        name: 'name',
        type: 'text',
        required: false,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: ''
        }
      }
    ],
    indexes: [],
    listRule: '',
    viewRule: '',
    createRule: '',
    updateRule: '',
    deleteRule: '',
    options: {}
  })

  return Dao(db).saveCollection(collection)
})
