/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    id: '6i4e6le4mih24xu',
    created: '2023-10-19 16:09:16.900Z',
    updated: '2023-10-19 16:09:16.900Z',
    name: 'students',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: '1ipktja8',
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
        id: 'ylaorzgc',
        name: 'student_number',
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
        id: '1bumznkl',
        name: 'faculty',
        type: 'select',
        required: true,
        presentable: false,
        unique: false,
        options: {
          maxSelect: 1,
          values: [
            'Economics',
            'Science',
            'Engineering',
            'Social Sciences',
            'Health Sciences'
          ]
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
  const collection = dao.findCollectionByNameOrId('6i4e6le4mih24xu')

  return dao.deleteCollection(collection)
})
