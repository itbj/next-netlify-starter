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
          Get started by editing <code>pages/index.js</code> incandescent  전구 chefchaouen ibex  라즈베리  Whirlpool State Park Offce 8F k k   a plethora of IT teams
        </p>
      </main>

      <Footer />
    </div>
  )
}
