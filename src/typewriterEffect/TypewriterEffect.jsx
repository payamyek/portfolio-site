import { useEffect } from 'react'

const TypewriterEffect = (props) => {
  const {
    timeout = 80,
    pause = 650,
    words
  } = props;


  useEffect(() => {
    const elem = document.querySelector(`#typewriter-effect`);
    typingEffect(elem, timeout, pause, words);
  })

  const _typingEffect = (elem, timeout, pause, words, index, stringPos, isAddChar) => {
    if (index >= words.length || index < 0 || words.length === 0 || elem === undefined) {
      return;
    } else if (index === words.length - 1 && isAddChar ===false) {
      return;
    }

    const word = words[index];

    const addChar = () => {
      elem.innerText = word.substring(0, stringPos + 1);
      if (stringPos + 1 === word.length) {
        _typingEffect(elem, timeout, pause, words, index, stringPos, false);
      } else {
        _typingEffect(elem, timeout, pause, words, index, stringPos + 1, isAddChar);
      }
    }

    const removeChar = () => {
      elem.innerText = word.substring(0, stringPos + 1);
      if (stringPos === 0) {
        _typingEffect(elem, timeout, pause, words, index + 1, 0, true);
      } else {
        _typingEffect(elem, timeout, pause, words, index, stringPos - 1, isAddChar);
      }
    }

    if (stringPos + 1 === word.length && isAddChar === false) {
      setTimeout(removeChar, pause);
    } else if (isAddChar) {
      setTimeout(addChar, timeout);
    } else {
      setTimeout(removeChar, Math.floor(timeout/2));
    }
  }

  const typingEffect = (elem, timeout, pause, words) => {
    _typingEffect(elem, timeout, pause, words, 0, 0, true);
  }

  return (
    <span id="typewriter-effect"></span>
  )
}

export default TypewriterEffect;