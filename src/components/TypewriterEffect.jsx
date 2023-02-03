import { useEffect, useRef, useState } from 'react'

type TypewriterEffectProps = {
  timeout?: Number,
  pause?: Number,
  deletionRate?: Number,
  words: Array<String>,
}

const TypewriterEffect = (props: TypewriterEffectProps) => {
  const {
    timeout = 100,
    pause = 850,
    deletionRate = 3,
    words,
    callback,
  } = props

  const el = useRef(null)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    let timeoutId
    const elCopy = el.current

    const typingEffect = ({
      element,
      timeout,
      words,
      arrayIndex,
      stringIndex,
      isAddChar = true,
    }) => {
      if (finished) {
        elCopy.innerText = words[words.length - 1]
        return
      }

      // base cases
      if (
        arrayIndex >= words.length ||
        arrayIndex < 0 ||
        words.length === 0 ||
        element === undefined ||
        (arrayIndex === words.length - 1 && isAddChar === false)
      ) {
        setFinished(true)
        callback(true)
        return
      }

      const word = words[arrayIndex]

      const addChar = () => {
        element.innerText = word.substring(0, stringIndex + 1)
        if (stringIndex + 1 === word.length) {
          typingEffect({
            element,
            timeout,
            pause,
            words,
            arrayIndex,
            stringIndex,
            isAddChar: false,
          })
        } else {
          typingEffect({
            element,
            timeout,
            pause,
            words,
            arrayIndex,
            stringIndex: stringIndex + 1,
            isAddChar,
          })
        }
      }

      const removeChar = () => {
        element.innerText = word.substring(0, stringIndex + 1)
        if (stringIndex === 0) {
          typingEffect({
            element,
            timeout,
            pause,
            words,
            arrayIndex: arrayIndex + 1,
            stringIndex: 0,
            isAddChar: true,
          })
        } else {
          typingEffect({
            element,
            timeout,
            pause,
            words,
            arrayIndex,
            stringIndex: stringIndex - 1,
            isAddChar,
          })
        }
      }

      if (stringIndex + 1 === word.length && isAddChar === false) {
        timeoutId = setTimeout(removeChar, pause)
      } else if (isAddChar) {
        timeoutId = setTimeout(addChar, timeout)
      } else {
        timeoutId = setTimeout(removeChar, Math.floor(timeout / deletionRate))
      }
    }

    typingEffect({
      element: el.current,
      timeout,
      pause,
      words,
      arrayIndex: 0,
      stringIndex: 0,
      isAddChar: true,
    })

    return () => {
      // suspend active timeout
      if (timeoutId !== undefined) clearTimeout(timeoutId)
      elCopy.innerText = ''
    }
  }, [pause, timeout, words, deletionRate, callback, finished])

  return <span ref={el}></span>
}

export default TypewriterEffect
