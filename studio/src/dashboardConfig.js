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
                  buildHookId: '5e7a6bf67841f31be3f2caca',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1pdssg3m',
                  apiId: '008832ed-c918-4626-874e-6126eb7f273f'
                },
                {
                  buildHookId: '5e7a6bf6287d41ed8232e98d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r6j7vyxt',
                  apiId: '24e84d40-e050-4423-8dd6-582a3d84a486'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kellymhli/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r6j7vyxt.netlify.com', category: 'apps' }
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
