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
                  buildHookId: '5f2ca5d660b7124816df328b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pokf7hnz',
                  apiId: 'dfba585e-a2c4-40d1-8fab-a33d3d26176e'
                },
                {
                  buildHookId: '5f2ca5d63796e75d2cc15527',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-38vk267m',
                  apiId: '0f14dd31-bfb8-4651-a225-5c00bb7a6bb7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/milan-josipovic/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-38vk267m.netlify.app', category: 'apps' }
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
