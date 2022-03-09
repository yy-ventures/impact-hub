import Layout from '../components/Layout/Layout'
import '../styles/global.scss'
import '../components/Shared/Navbar/Navbar.scss'
import '../components/Home/HomeHero/HomeHero.scss'
import '../components/Home/HomeWelcome/HomeWelcome.scss'
import '../components/Home/HomeOffer/HomeOffer.scss'
import '../components/Home/HomeImpacts/HomeImpacts.scss'
import '../components/Shared/Cookies/Cookies.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
