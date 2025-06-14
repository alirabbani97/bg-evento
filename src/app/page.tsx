import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Find events around you.</h1>
      <p>Browse more than 10,000 events around you.</p>

      <form>
        <input placeholder='Search for events in any city...' spellCheck={false}>
        </input>

      </form>


      <section>

        <p>Popular</p>
        <div>
          <Link href={"/events/karachi"}>Karachi</Link>
          <Link href={"/events/lahore"}>Lahore</Link>
        </div>
      </section>
    </main>
  )
}
