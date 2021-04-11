import { Provider } from 'react-redux';
import Layout from '../components/Layout';
// import store from '../store';
import { wrapper } from '../store';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(App);
