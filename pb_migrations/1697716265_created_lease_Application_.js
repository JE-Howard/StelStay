/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    id: 'utgt2drhzwbv29j',
    created: '2023-10-19 11:51:05.353Z',
    updated: '2023-10-19 11:51:05.353Z',
    name: 'lease_Application_',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: '1azt3nqj',
        name: 'name',
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
      },
      {
        system: false,
        id: 'eebl0bmg',
        name: 'surname',
        type: 'text',
        required: false,
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
        id: 'vntixxhy',
        name: 'ID_Number',
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
        id: 'ymqmkbzr',
        name: 'Lease_Start',
        type: 'date',
        required: false,
        presentable: false,
        unique: false,
        options: {
          min: '',
          max: ''
        }
      },
      {
        system: false,
        id: 'ko4je2zu',
        name: 'Lease_End',
        type: 'date',
        required: false,
        presentable: false,
        unique: false,
        options: {
          min: '',
          max: ''
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
  const collection = dao.findCollectionByNameOrId('utgt2drhzwbv29j')

  return dao.deleteCollection(collection)
})
