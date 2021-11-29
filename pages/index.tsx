import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";

import styles from "../styles/Home.module.css";

import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: { id: coffeeStore.id.toString() },
    };
  });
  return paths;
}

const Home: NextPage = (props) => {
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
        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto Stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore) => (
                <Card
                  key={coffeeStore.id}
                  name={coffeeStore.name}
                  imgUrl={coffeeStore.imgUrl}
                  href={`/coffee-store/${coffeeStore.id}`}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
