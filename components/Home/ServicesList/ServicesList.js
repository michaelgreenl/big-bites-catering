import styles from './servicesList.module.scss';

const ServicesList = () => {
  return (
    <>
      <div className={`${styles.servicesList} ${styles['servicesList--1']}`}>
        <span className={styles.text}>
          Weddings
          <hr className={styles.separator} />
          Corporate Events
        </span>
        <span className={styles.text}>
          Social Gatherings
          <hr className={styles.separator} />
          Movie Sets
        </span>
        <span className={styles.text}>
          Galas
          <hr className={styles.separator} />
          Birthday Parties
        </span>
        <span className={styles.text}>
          Open Houses
          <hr className={styles.separator} />
          Private Events
        </span>
        <span className={styles.text}>Holiday Parties</span>
      </div>
      <div className={`${styles.servicesList} ${styles['servicesList--2']}`}>
        <span className={styles.text}>
          Weddings
          <hr className={styles.separator} />
          Corporate Events
          <hr className={styles.separator} />
          Social Gatherings
        </span>
        <span className={styles.text}>
          Birthday Parties
          <hr className={styles.separator} />
          Movie Sets
          <hr className={styles.separator} />
          Holiday Parties
        </span>
        <span className={styles.text}>
          Galas
          <hr className={styles.separator} />
          Open Houses
          <hr className={styles.separator} />
          Private Events
        </span>
      </div>
      <div className={`${styles.servicesList} ${styles['servicesList--3']}`}>
        <span className={styles.text}>
          Weddings
          <hr className={styles.separator} />
          Corporate Events
          <hr className={styles.separator} />
          Social Gatherings
          <hr className={styles.separator} />
          Birthday Parties
        </span>
        <span className={styles.text}>
          Movie Sets
          <hr className={styles.separator} />
          Holiday Parties
          <hr className={styles.separator} />
          Galas
          <hr className={styles.separator} />
          Open Houses
          <hr className={styles.separator} />
          Private Events
        </span>
      </div>
      <div className={`${styles.servicesList} ${styles['servicesList--4']}`}>
        <span className={styles.text}>
          Weddings
          <hr className={styles.separator} />
          Corporate Events
          <hr className={styles.separator} />
          Social Gatherings
          <hr className={styles.separator} />
          Birthday Parties
          <hr className={styles.separator} />
          Movie Sets
          <hr className={styles.separator} />
          Holiday Parties
          <hr className={styles.separator} />
          Galas
          <hr className={styles.separator} />
          Open Houses
          <hr className={styles.separator} />
          Private Events
        </span>
      </div>
    </>
  );
};

export default ServicesList;
