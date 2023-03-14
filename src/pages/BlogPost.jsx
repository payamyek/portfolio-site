import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from "react-router-dom";
import rehypeHighlight from 'rehype-highlight';
import toc from "../posts/toc.json";

const BlogPost = (props) => {
  // url parameter
  const { id } = useParams();

  // markdown
  const [md, setMd] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    // prevent race conditions
    let subscribed = false;

    (async () => {
      // find filename
      const result = toc.filter((item) => item.title === decodeURI(id))

      // safeguards
      if (!result.length || !result[0].fileName) {
        navigate("/blog/error")
        return
      }

      // load markdown
      const module = await import(`../posts/${result[0].fileName}`)
      const resp = await fetch(module.default)
      const respText = await resp.text()

      // update state 
      if (!subscribed) {
        setMd(respText)
      }
    })();

    return () => { subscribed = true }
  }, [id, navigate])

  return (
    <ReactMarkdown rehypePlugins={[rehypeHighlight]} children={md} className="text-justify whitespace-pre-line text-[1.1rem]" />
  )
}

export default BlogPost