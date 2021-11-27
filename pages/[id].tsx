import Head from 'next/head';
import { useRouter } from 'next/router';

const DynamicHome = () => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{router.query.id}</title>
			</Head>
			Page {router.query.id}
		</>
	);
};

export default DynamicHome;
