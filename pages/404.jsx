import MetaTags from '../components/atoms/Metatags';
import { NotFound } from '../components/atoms/NotFound';

const NotFoundPage = () => {
	return (
		<>
			<MetaTags title={`PokeApi - Error 404`} />
			<NotFound />
		</>
	);
};

export default NotFoundPage;
