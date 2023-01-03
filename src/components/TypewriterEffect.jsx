import { useEffect, useRef } from 'react'

const TypewriterEffect = (props) => {
  const {
    timeout = 100,
    pause = 850,
    deletionRate = 3,
    words,
  } = props

  const el = useRef(null)

  useEffect(() => {
    let currentTimeoutId
    const elCopy = el.current

    const typingEffect = (
      elem, timeout, pause, words, index, stringPos, isAddChar = true) => {

      // base cases
      if (index >= words.length || index < 0 || words.length === 0 || elem ===
        undefined) {
        return
      } else if (index === words.length - 1 && isAddChar === false) {
        return
      }

      const word = words[index]

      const addChar = () => {
        elem.innerText = word.substring(0, stringPos + 1)
        if (stringPos + 1 === word.length) {
          typingEffect(elem, timeout, pause, words, index, stringPos, false)
        } else {
          typingEffect(elem, timeout, pause, words, index, stringPos + 1,
            isAddChar)
        }
      }

      const removeChar = () => {
        elem.innerText = word.substring(0, stringPos + 1)
        if (stringPos === 0) {
          typingEffect(elem, timeout, pause, words, index + 1, 0, true)
        } else {
          typingEffect(elem, timeout, pause, words, index, stringPos - 1,
            isAddChar)
        }
      }

      if (stringPos + 1 === word.length && isAddChar === false) {
        currentTimeoutId = setTimeout(removeChar, pause)
      } else if (isAddChar) {
        currentTimeoutId = setTimeout(addChar, timeout)
      } else {
        currentTimeoutId = setTimeout(removeChar,
          Math.floor(timeout / deletionRate))
      }
    }

    typingEffect(el.current, timeout, pause, words, 0, 0, true)

    return () => {
      // suspend active timeout
      if (currentTimeoutId !== undefined)
        clearTimeout(currentTimeoutId)
      elCopy.innerText = ''
    }
  }, [pause, timeout, words, deletionRate])

  return (
    <span ref={el}></span>
  )
}

export default TypewriterEffect