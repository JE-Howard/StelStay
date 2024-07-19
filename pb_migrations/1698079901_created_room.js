/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    id: 'bfl8e7fxqsk1ssd',
    created: '2023-10-23 16:51:41.158Z',
    updated: '2023-10-23 16:51:41.158Z',
    name: 'room',
    type: 'base',
    system: false,
    schema: [
      {
        system: false,
        id: 's49lvd9l',
        name: 'Appartment',
        type: 'relation',
        required: false,
        presentable: false,
        unique: false,
        options: {
          collectionId: '881bsb1yqtkixkm',
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
  const collection = dao.findCollectionByNameOrId('bfl8e7fxqsk1ssd')

  return dao.deleteCollection(collection)
})
