export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Engineering', value: 'Engineering'},
          {title: 'Devops', value: 'Devops'},
          {title: 'Frontend', value: 'Frontend'},
          {title: 'Self-hosted', value: 'Self-hosted'},
          {title: 'v0', value: 'v0'},
          {title: 'Changelog', value: 'Changelog'},
          {title: 'General', value: 'General'},
        ],
        layout: 'dropdown',
      },
    },
  ],
}
