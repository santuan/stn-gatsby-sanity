import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PortableText from '../components/portableText'


export const query = graphql`
  query($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      _rawBody(resolveReferences: { maxDepth: 10 })
      categories {
        title
      }
      title
      slug {
        current
      }
      publishedAt(fromNow: true, locale: "es")
      author {
        name
      }
    }
  }
`


export default ({ data }) => (
  <Layout>
    <Link to="/blog">Back to blog</Link>
    <h1>{data.sanityPost.title}</h1>
    <p>{data.sanityPost.author.name}</p>
    <p>{data.sanityPost.categories.title}</p>
    <time>{data.sanityPost.publishedAt}</time>
    {data.sanityPost._rawBody && <PortableText blocks={data.sanityPost._rawBody} />}

  </Layout>
)
