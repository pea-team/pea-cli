import React from 'react'

interface Props {
  text: string
  onClick?: (e: React.SyntheticEvent) => void
}

const Clickable: React.FC<Props> = ({ text, ...props }) => (
  <>
    <span title={text} {...props}>
      {text}
    </span>
    <style jsx>{`
      span {
        color: #1890ff;
        cursor: pointer;
      }
    `}</style>
  </>
)

export default Clickable
