import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner';
import Card from '../components/card';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Coffee Connoisseurs</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner buttonText="View nearby stores" />
				<div className={styles.heroImage}>
					<Image src="/vercel.svg" width={700} height={400} />
				</div>
				<div className={styles.cardLayout}>
					<Card
						name="DarkHorse Coffee"
						imgUrl="/vercel.svg"
						href="/coffee-store/darkhorse-coffee"
					/>
				</div>
			</main>
		</div>
	);
};

export default Home;
