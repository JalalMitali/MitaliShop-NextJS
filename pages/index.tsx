import Head from 'next/head'
import Hero from '../components/Hero'
import { useAppSelector } from '../tools/redux/hooks'


export default function Home() {
  const siteName = useAppSelector((state) => state.connect.siteName)
  return (
    <div className='h-screen min-h-screen bg-gray-100'>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/jalal.jpeg" />
      </Head>
      <Hero />
    </div>
  )
}
