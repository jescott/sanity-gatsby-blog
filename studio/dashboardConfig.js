export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e31c48dcc495c5e0e34cee6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jnq4giz6',
                  apiId: '9e997adc-96e4-41ed-b643-700d2ca29f53'
                },
                {
                  buildHookId: '5e31c48dfb4839827e7c0486',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sxp5cj66',
                  apiId: 'ed31628e-5efa-4886-b38c-e782d5b01d2b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jescott/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sxp5cj66.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
