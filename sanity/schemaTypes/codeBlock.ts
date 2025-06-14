export default {
  name: 'codeBlock',
  title: 'Code Block',
  type: 'object',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TypeScript', value: 'typescript'},
          {title: 'Bash', value: 'bash'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'JSON', value: 'json'},
          {title: 'YAML', value: 'yaml'},
          {title: 'GO', value: 'go'},
          {title: 'Rust', value: 'rust'},
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'code',
      title: 'Code',
      type: 'text',
    },
  ],
}
