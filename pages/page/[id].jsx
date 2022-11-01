import MetaTags from '../../components/atoms/Metatags';
import SinglePageContent from '../../components/molecules/SinglePageContent';
import { useRouter } from 'next/router';

const SinglePageList = () => {
	const id = useRouter().query.id;
	return (
		<>
			<MetaTags title={`PokeApi - Page ${id}`} />
			<main>
				<div className="container mx-auto">
					<SinglePageContent />
				</div>
			</main>
		</>
	);
};

export default SinglePageList;
