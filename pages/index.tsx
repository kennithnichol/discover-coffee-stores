import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";

import styles from "../styles/Home.module.css";

import { CoffeeStore, fetchCoffeeStores } from "../lib/coffee-stores";

export async function getStaticProps() {
  const coffeeStores = await fetchCoffeeStores();
  return {
    props: {
      coffeeStores,
    },
  };
}

type Props = {
  coffeeStores: CoffeeStore[];
};

const Home: NextPage<Props> = (props) => {
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
            <h2 className={styles.heading2}>Comox Valley Stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore: CoffeeStore) => (
                <Card
                  key={coffeeStore.fsq_id}
                  name={coffeeStore.name}
                  imgUrl={
                    coffeeStore.imgUrl ||
                    "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  }
                  href={`/coffee-store/${coffeeStore.fsq_id}`}
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
