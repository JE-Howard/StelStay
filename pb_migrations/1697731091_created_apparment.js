/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    id: '881bsb1yqtkixkm',
    created: '2023-10-19 15:58:11.648Z',
    updated: '2023-10-19 15:58:11.648Z',
    name: 'apparment',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: 'uvkqd1of',
        name: 'building',
        type: 'relation',
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: 'ctcmb4dhgib5lve',
          cascadeDelete: false,
          minSelect: null,
          maxSelect: 1,
          displayFields: null
        }
      },
      {
        system: false,
        id: 'wk3wzayj',
        name: 'apartment_number',
        type: 'number',
        required: false,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          noDecimal: false
        }
      },
      {
        system: false,
        id: 'uxb6hwqr',
        name: 'floor_number',
        type: 'number',
        required: false,
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
  const collection = dao.findCollectionByNameOrId('881bsb1yqtkixkm')

  return dao.deleteCollection(collection)
})
