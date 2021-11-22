import styles from './banner.module.css';

const Banner = (props: any) => {
    const {buttonText, handler} = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>Coffee</span>
        <span>Connoisseurs</span>
      </h1>
      <p className={styles.subtitle}>Discover your local coffee shops!</p>
      <button onClick={handler}>{buttonText}</button>
    </div>
  );
};

export default Banner;
