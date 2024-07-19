/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    id: '0r57icagtdxsbhs',
    created: '2023-10-19 13:31:32.572Z',
    updated: '2023-10-19 13:31:32.572Z',
    name: 'bill_payer',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: 'lqxubzxy',
        name: 'first_name',
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
        id: '3qycyenq',
        name: 'last_name',
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
        id: 'zgri8nhv',
        name: 'email',
        type: 'email',
        required: false,
        presentable: false,
        unique: false,
        options: {
          exceptDomains: null,
          onlyDomains: null
        }
      },
      {
        system: false,
        id: 'yzpuswno',
        name: 'id_number',
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
        id: 'kylyzxzj',
        name: 'phone_number',
        type: 'number',
        required: true,
        presentable: false,
        unique: false,
        options: {
          min: 10,
          max: 10,
          noDecimal: true
        }
      },
      {
        system: false,
        id: 'uamnrmfo',
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
  const collection = dao.findCollectionByNameOrId('0r57icagtdxsbhs')

  return dao.deleteCollection(collection)
})
