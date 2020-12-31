exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allSanityPost.edges || []
  const project = result.data.allSanityProject.edges || []

  posts.forEach((edge, index) => {
    const path = `/post/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/post.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  project.forEach((edge, index) => {
    const path = `/project/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { slug: edge.node.slug.current },
    })
  })
}
