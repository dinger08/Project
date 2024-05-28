import NewsList from "./NewsList";
import './globals.css'

export default function News() {
    return (
      <main>
        <nav>
          <div>
          <h2>News Page</h2>
          <p><small>Currently opens news</small></p>
          </div>
        </nav>

        <NewsList />
      </main>
    )
  }