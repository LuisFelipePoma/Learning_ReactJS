import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    const url = threeFirstWords
    setImageUrl(url)
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}?size=50` }
}
