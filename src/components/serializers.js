import React from "react"
//import Figure from "./Figure";
//import MainImage from "./MainImage";
import ReactPlayer from "react-player";
//import InstagramEmbed from "react-instagram-embed";
//import LatexRenderer from "./Latex";
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import { Link } from "gatsby"

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return <p>{props.children}</p>
      }
    },
    youtube: ({node}) => {
      const { url } = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} />)
    }
  },
  
  marks: {
    
    internalLink: ({ mark, children }) => {
      const href = `/${mark.reference._type}/${mark.reference.slug.current}`
      {
        console.log(mark)
      }
      return <Link to={href}>{children}</Link>
    },

    link: ({ mark, children }) => {
      const { blank, href } = mark
      return blank ? (
        <a href={href} target="_blank" rel="noopener">
          {children}
          🎡
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    },
  },
}

export default serializers
