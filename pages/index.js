import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>Microservices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          This is home page
        </h1>
      </main>
    </div>
  )
}
