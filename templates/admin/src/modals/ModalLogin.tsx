import React from 'react'
import { useFetch } from '@peajs/rest'
import Api from '@services/apiService'

interface Todo {
  id: number
  title: string
  completed: boolean
}

export default () => {
  const { loading, data, error } = useFetch<Todo>(Api.GetTodo, {
    params: { id: 1 },
  })

  if (loading) return <span>loading...</span>
  if (error) return <span>error!</span>

  return (
    <div>
      <div>{data.id}</div>
      <div>{data.title}</div>
      <div>{data.completed}</div>
    </div>
  )
}
