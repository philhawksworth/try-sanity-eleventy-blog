export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee0e46447c49b6cb7c66fd4',
                  title: 'Sanity Studio',
                  name: 'try-sanity-eleventy-blog-studio',
                  apiId: 'badf0bdc-e71f-4147-a8cf-ee5ecf04fb5f'
                },
                {
                  buildHookId: '5ee0e4643d7644393899e79f',
                  title: 'Blog Website',
                  name: 'try-sanity-eleventy-blog',
                  apiId: '3b944873-4df1-467e-b788-6b8b1e884eca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/philhawksworth/try-sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://try-sanity-eleventy-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
