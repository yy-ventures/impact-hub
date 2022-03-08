import Layout from '../components/Layout/Layout'
import '../styles/global.scss'
import '../components/Shared/Navbar/Navbar.scss'
import '../components/Home/HomeHero/HomeHero.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
