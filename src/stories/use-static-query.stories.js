import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default {
  title: "Use Static Query",
}

// Supposed to display just an h1 that says "Gatsby Default Data"
export const Reproduction = () => {
  const data = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <h1>{data.site.siteMetadata.title}</h1>
}
