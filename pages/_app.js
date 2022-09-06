import '../styles/globals.css'

import Layout from '../Components/Layout';
import GlobalStyle from '../Components/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
