/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    id: 'jgfqnhg4bact53r',
    created: '2023-10-25 09:04:00.805Z',
    updated: '2023-10-25 09:04:00.805Z',
    name: 'announcements',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: 'xuev9ha0',
        name: 'message',
        type: 'editor',
        required: false,
        presentable: false,
        unique: false,
        options: {
          convertUrls: false
        }
      },
      {
        system: false,
        id: 'kkdbaw0y',
        name: 'date',
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
        id: 'g9b376mu',
        name: 'attchement',
        type: 'file',
        required: false,
        presentable: false,
        unique: false,
        options: {
          maxSelect: 1,
          maxSize: 5242880,
          mimeTypes: [],
          thumbs: [],
          protected: false
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
  const collection = dao.findCollectionByNameOrId('jgfqnhg4bact53r')

  return dao.deleteCollection(collection)
})
