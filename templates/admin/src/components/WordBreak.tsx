import React from 'react'

const WordBreak: React.FC<{ text: string }> = ({ text }) => (
  <div>
    <span title={text}>{text}</span>
    <style jsx>{`
      span {
        word-break: break-all;
      }
    `}</style>
  </div>
)

export default WordBreak
