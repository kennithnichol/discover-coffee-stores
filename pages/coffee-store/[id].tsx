import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import cls from "classnames";

import styles from "./coffee-store.module.css";

import { CoffeeStore, fetchCoffeeStores } from "../../lib/coffee-stores";

type Props = {
  coffeeStores: CoffeeStore[];
  params: any;
};
export async function getStaticProps(staticProps: Props) {
  const coffeeStores: CoffeeStore[] = await fetchCoffeeStores();
  const { params } = staticProps;
  return {
    props: {
      coffeeStore: coffeeStores.find((coffeeStore: CoffeeStore) => {
        return coffeeStore.fsq_id.toString() === params.id; // dynamic id
      }),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { location, name, imgUrl } = props.coffeeStore;

  const handleUpvoteButton = () => {
    console.log("upvote");
  };

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={
              "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            }
            width={600}
            height={360}
          />
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/icons/places.svg" width="24" height="24" />
            <p className={styles.text}>{location.address}</p>
          </div>
          {location.neighborhood && (
            <div className={styles.iconWrapper}>
              <Image src="/icons/nearme.svg" width="24" height="24" />
              <p className={styles.text}>{location.neighborhood}</p>
            </div>
          )}
          <div className={styles.iconWrapper}>
            <Image src="/icons/star.svg" width="24" height="24" />
            <p className={styles.text}>1</p>
          </div>
          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up Vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
