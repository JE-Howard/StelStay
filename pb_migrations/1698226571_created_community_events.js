/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    id: '56rn9mhjikffou2',
    created: '2023-10-25 09:36:11.426Z',
    updated: '2023-10-25 09:36:11.426Z',
    name: 'community_events',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: 'zh0gc2lo',
        name: 'event_type',
        type: 'select',
        required: false,
        presentable: false,
        unique: false,
        options: {
          maxSelect: 1,
          values: [
            'Games Night',
            'Bring and Braai',
            'Live Music',
            'Fun Run'
          ]
        }
      },
      {
        system: false,
        id: 'xmqbnzbd',
        name: 'event_date',
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
        id: 'jpmx4bwd',
        name: 'event_time',
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
        id: 'zaaekpdt',
        name: 'event_location',
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
  const collection = dao.findCollectionByNameOrId('56rn9mhjikffou2')

  return dao.deleteCollection(collection)
})
