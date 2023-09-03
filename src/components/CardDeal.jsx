/* eslint-disable no-unused-vars */
import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

function CardDeal() {
  return (
    <div>
      <section id='' className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>
          in few easy steps.</h2>
          <Button />
        </div>

        <div classname={layout.sectionImg}>
          <img src={card} alt='card' classname='w-[100%] h-[100%]' />
        </div>
      </section>
    </div>
  )
}

export default CardDeal