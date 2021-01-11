import data from 'store/data/tweets'

const getRandomItems = (source, n) => {
  return source
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, n)
}

export default async (_, res) => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const { results } = await response.json()
    let tratados = results.map(({ id, name, status, image, gender }) => {
      const tweets = getRandomItems(
        data,
        Math.floor(Math.random() * (10 - 4) + 3)
      )
      return {
        id,
        name,
        status,
        image,
        gender,
        tweets,
      }
    })

    res.status(200).json(tratados)
  } catch (error) {
    res.status(500).json(error)
  }
}
