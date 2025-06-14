import codeBlock from './codeBlock'
const blockContent = {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
      options: {hotspot: true},
    },
    codeBlock,
  ],
}

export default blockContent
