import React from 'react';
import styles from './Business.module.css';

function Business() {
  const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  }
  return (
    <>
      <img alt="Marginoto Pizzeria" className={styles.cardImage} src={business.imageSrc} />
      <h1 className={styles.cardTitle}>{business.name}</h1>
      <section>
        <div className={styles.cardInfo}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{business.state} {business.zipCode}</p>
        </div>
        <div className={styles.cardInfo}>
          <p>{business.category}</p>
          <span className={styles.cardInfoGold}>{business.rating}</span><br />
          <p className={styles.cardInfoGold}>{business.reviewCount}</p>
        </div>
     </section>
    </>
  );
}

export default Business;