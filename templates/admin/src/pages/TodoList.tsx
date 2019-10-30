import React from 'react'
import { useFetch, fetcher } from '@peajs/rest'
import Api from '@services/apiService'

interface Todo {
  id: number
  title: string
  completed: boolean
}

export default () => {
  const { loading, data, error } = useFetch<Todo[]>(Api.GetTodos)

  if (loading) return <span>loading...</span>
  if (error) return <span>error!</span>

  setTimeout(() => {
    console.log(fetcher)
    // fetcher[Api.GetTodos].refetch()
  }, 2000)

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
