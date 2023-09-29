import Image from 'next/image'

export default function Home() {
  async function getData() {
    const response = await fetch('https://api.jikan.moe/v4')
    const data = await response.json()
    console.log(data.data)
  }

  return (
    <div>
      <h1>Anime Planet</h1>
    </div>
  )
}
