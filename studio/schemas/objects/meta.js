export default {
  name: 'meta',
  title: 'Meta Info',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'meta.title'
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
}
