import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app! stoat" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>12345
        </p>
          <h1>First Post</h1>
      <h2>
        <Link href="www.cisco.com">
          <a>Goto cisco.com</a>
        </Link>
      </h2>
      </main>

      <Footer />
    </div>
  )
}
