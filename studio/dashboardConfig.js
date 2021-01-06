export default {
  widgets: [
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
                  buildHookId: '5ff5c811bd7765102e45ccc4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wi1pyfy5',
                  apiId: 'b6d5557e-26e0-4f62-b7ab-54edddc4a840'
                },
                {
                  buildHookId: '5ff5c8114534ce10d553f7c6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-o6w72det',
                  apiId: 'eb13a0e6-765c-4bf3-a099-b0abdda47935'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/seo359/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-o6w72det.netlify.app', category: 'apps'}
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
