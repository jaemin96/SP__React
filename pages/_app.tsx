import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../public/scss/style.scss';
import { store } from '../Redux/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
