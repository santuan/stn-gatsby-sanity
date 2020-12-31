import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "lodash"

export const query = graphql`
  {
    allSanityPost {
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
    <SEO title="Home" />
    <h1>Blog</h1>
    {data.allSanityPost.edges.map(({ node: post }) => (
      <Link
        to={`/post/${kebabCase(post.slug.current)}`}
        tw="flex justify-between border-b border-indigo-500"
      >
        <h4 tw="text-xl text-indigo-500 py-4 flex items-baseline justify-end">
          {post.title}
        </h4>
      </Link>
    ))}
  </Layout>
)

export default BlogPage
