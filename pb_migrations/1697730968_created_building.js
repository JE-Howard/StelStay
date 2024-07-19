/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    id: 'ctcmb4dhgib5lve',
    created: '2023-10-19 15:56:08.585Z',
    updated: '2023-10-19 15:56:08.585Z',
    name: 'building',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: '5o2cpjw9',
        name: 'building_name',
        type: 'text',
        required: true,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: ''
        }
      },
      {
        system: false,
        id: '6z5g2bgr',
        name: 'address',
        type: 'text',
        required: true,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: ''
        }
      },
      {
        system: false,
        id: 'jsen6g5x',
        name: 'province',
        type: 'text',
        required: true,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: ''
        }
      },
      {
        system: false,
        id: 'm7zao3el',
        name: 'country',
        type: 'text',
        required: true,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: ''
        }
      },
      {
        system: false,
        id: 't2nmks5l',
        name: 'num_apartments',
        type: 'number',
        required: true,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          noDecimal: false
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
  const collection = dao.findCollectionByNameOrId('ctcmb4dhgib5lve')

  return dao.deleteCollection(collection)
})
