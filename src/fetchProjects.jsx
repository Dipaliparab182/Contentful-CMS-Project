import { createClient } from 'contentful'
import { useState } from 'react'
import { useEffect } from 'react'

const client = createClient({
  space: 'iy1wfk719bhg',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'sampleprojects',
      })
      const projects = response.items.map((item) => {
        const { title, image, url } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, url, img, id }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}
