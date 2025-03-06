import { useState } from 'react'

function App(): JSX.Element {
  const [words, setWords] = useState<string[]>([])

  const WindowSpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new WindowSpeechRecognition()
  recognition.onresult = (e) => {
    const result = e.results[0][0].transcript
    setWords((prev) => [...prev, result])
  }

  const handleClick = () => {
    recognition.start()
  }

  return (
    <>
      <div onClick={handleClick}>음성인식 시작</div>
      <div>{words.toString()}</div>
    </>
  )
}
export default App
