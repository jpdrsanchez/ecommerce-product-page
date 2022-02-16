import { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'

import GlobalStyles from 'styles/global'
import Header from 'components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
      </Head>
      <GlobalStyles />
      <Header
        leftArea={
          <>
            <Image
              src="/assets/logo.svg"
              alt="Sneakers"
              width={138}
              height={20}
            />
            <div>Menu</div>
          </>
        }
        rightArea={
          <>
            <div>Cart</div>
            <div>User</div>
          </>
        }
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
