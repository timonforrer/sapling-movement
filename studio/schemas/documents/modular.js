export default {
  name: 'modular',
  title: 'Modular',
  type: 'document',
  fields: [
    {
      name: 'meta',
      title: 'Meta Info',
      type: 'meta',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
