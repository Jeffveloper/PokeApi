import '../styles/globals.css';
import '../styles/typography.css';

import MainHeader from '../components/molecules/MainHeader';
import MainFooter from '../components/atoms/MainFooter';

import CurrentPageContext from '../context/currentPage.context';

function MyApp({ Component, pageProps }) {
	return (
		<CurrentPageContext>
			<div className="globalStyles realtive">
				<MainHeader />
				<Component {...pageProps} />
				<MainFooter />
			</div>
		</CurrentPageContext>
	);
}

export default MyApp;
