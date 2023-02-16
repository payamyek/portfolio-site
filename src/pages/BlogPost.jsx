import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router-dom";
import toc from "../posts/toc.json";

const BlogPost = (props) => {
  // url parameter
  const { id } = useParams();

  const [md, setMd] = useState('')

  useEffect(() => {
    const fn = async () => {
      // find filename
      const result = toc.filter((item) => item.title === decodeURI(id))

      if (!result.length)
        return

      // load markdown
      const mdModule = await import(`../posts/${result[0].fileName}`)
      const resp = await fetch(mdModule.default)
      const respText = await resp.text()
      setMd(respText)
    }
    fn()
  }, [id])

  return (
    <ReactMarkdown children={md} />
  )
}

export default BlogPost