import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/index';
import { HeroCard } from './index';

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className='row row-cols-1 row-cols-md-4 g-4 justify-content-center animate__animated animate__fadeIn'>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero}></HeroCard>
      ))}
    </div>
  );
};

export default HeroList;
