import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "lodash"

export const query = graphql`
  {
    allSanityProject {
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
`
const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Proyectos" />
    <h1>Proyectos</h1>
    {data.allSanityProject.edges.map(({ node: project }) => (
      <Link
        to={`/project/${kebabCase(project.slug.current)}`}
        tw="flex justify-between border-b border-indigo-500"
      >
        <h4 tw="text-xl text-indigo-500 py-4 flex items-baseline justify-end">
          {project.title}
        </h4>
      </Link>
    ))}
  </Layout>
)

export default BlogPage
