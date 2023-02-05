import { useEffect, useRef } from 'react'

type TypewriterEffectProps = {
  timeout?: Number
  pause?: Number
  deletionRate?: Number
  words: Array<String>
}

const TypewriterEffect = (props: TypewriterEffectProps) => {
  const { timeout = 100, pause = 850, deletionRate = 3, words } = props

  const el = useRef(null)

  useEffect(() => {
    let timeoutId
    const elCopy = el.current

    const typingEffect = ({
      timeout,
      words,
      pause,
      arrayIndex,
      stringIndex,
      deletionRate,
      isAddChar = true,
    }) => {
      // base cases
      if (
        arrayIndex >= words.length ||
        arrayIndex < 0 ||
        words.length === 0 ||
        el.current === undefined ||
        (arrayIndex === words.length - 1 && isAddChar === false)
      ) {
        return
      }

      const word = words[arrayIndex]

      const addChar = () => {
        el.current.innerText = word.substring(0, stringIndex + 1)
        if (stringIndex + 1 === word.length) {
          typingEffect({
            timeout,
            pause,
            words,
            arrayIndex,
            stringIndex,
            deletionRate,
            isAddChar: false,
          })
        } else {
          typingEffect({
            timeout,
            pause,
            words,
            arrayIndex,
            stringIndex: stringIndex + 1,
            deletionRate,
            isAddChar,
          })
        }
      }

      const removeChar = () => {
        el.current.innerText = word.substring(0, stringIndex + 1)
        if (stringIndex === 0) {
          typingEffect({
            timeout,
            pause,
            words,
            arrayIndex: arrayIndex + 1,
            stringIndex: 0,
            isAddChar: true,
            deletionRate,
          })
        } else {
          typingEffect({
            timeout,
            pause,
            words,
            arrayIndex,
            stringIndex: stringIndex - 1,
            isAddChar,
            deletionRate,
          })
        }
      }

      // run corresponding action to update animation
      if (stringIndex + 1 === word.length && isAddChar === false) {
        timeoutId = setTimeout(removeChar, pause)
      } else if (isAddChar) {
        timeoutId = setTimeout(addChar, timeout)
      } else {
        timeoutId = setTimeout(removeChar, Math.floor(timeout / deletionRate))
      }
    }

    typingEffect({
      timeout,
      pause,
      words,
      arrayIndex: 0,
      stringIndex: 0,
      isAddChar: true,
      deletionRate,
    })

    return () => {
      // suspend active timeout
      if (timeoutId !== undefined) clearTimeout(timeoutId)
      elCopy.innerText = ''
    }

    // eslint-disable-next-line
  }, [])

  return <span ref={el}></span>
}

export default TypewriterEffect
