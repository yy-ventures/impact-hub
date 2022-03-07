import Head from 'next/head'
import HomeHero from '../components/Home/HomeHero/HomeHero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Impact Hub Dhaka</title>
        <meta name="description" content="Impact Hub Dhaka brings together entrepreneurs, enablers, young talents and professionals from all across Bangladesh to create a vibrant community."/>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <HomeHero/>
    </div>
  )
}
