import './globals.css'
async function getNews() {
  const res = await fetch('http://localhost:4000/news', {
    next: {
      revalidate: 0 // use 0 to opt out of using cache
    }
  })

  return res.json()
}

export default async function NewsList() {
  const news = await getNews()
  return (
    <>
      {news.map((news) => (
        <div key={news.id} className="card my-5">
          <h3>{news.title}</h3>
          <p>{news.body.slice(0, 200)}...</p>
          <div className={`pill ${news.priority}`}>
            {news.priority} priority
          </div>
        </div>
      ))}
      {news.length === 0 && (
        <p className="text-center">There are no open news, yay!</p>
      )}
    </>
  )
}