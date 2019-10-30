import React from 'react'
import { Badge } from 'antd'

interface Props {
  condition: boolean
  text: {
    yes: string
    no: string
  }
}

const BooleanStatus: React.FC<Props> = ({ condition, text }) => {
  const status = condition ? 'success' : 'error'
  const str = condition ? text.yes : text.no
  return <Badge status={status} text={str} />
}

export default BooleanStatus
