import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PortableText from '../components/portableText'

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      _rawBody(resolveReferences: { maxDepth: 10 })
      tech {
        title
      }
      author {
        name
      }
      slug {
        current
      }
      publishedAt(fromNow: true, locale: "es")
    }
  }
`

export default ({ data }) => (
  <Layout>
    <Link to="/project">Back to proyectos</Link>
    <h1>{data.sanityProject.title}</h1>
    <h1>{data.sanityProject.author.name}</h1>
    <h1>{data.sanityProject.tech.title}</h1>
    <time>{data.sanityProject.publishedAt}</time>
    {data.sanityProject._rawBody && <PortableText blocks={data.sanityProject._rawBody} />}

  </Layout>
)
