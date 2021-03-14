import React, { useMemo } from 'react';
import queryString from 'query-string';
import { Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/index';
import getHeroesByName from '../../selectors/getHeroesByName';
const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = values;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  return (
    <div className='animate__animated animate__fadeIn'>
      <h1>Search Screen</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Search form</h4>
          <hr />

          <Form onSubmit={handleSearch}>
            <Form.Group controlId='search'>
              <Form.Control
                name='searchText'
                type='text'
                autoComplete='off'
                value={searchText}
                onChange={handleInputChange}
                placeholder='Find your hero'
              />
            </Form.Group>
            <div className='d-grid gap-2'>
              <Button type='submit' variant='outline-primary' className='mt-3'>
                Search...
              </Button>
            </div>
          </Form>
        </div>
        <div className='col-7 container '>
          <h4>Results</h4>
          <hr />
          {q === '' && <div className='alert alert-info'>Search a hero</div>}
          {q !== '' && heroesFiltered.length === 0 && (
            <div className='alert alert-danger'>There is not a hero with {q}</div>
          )}
          <div className='row'>
            <div className='col '>
              {heroesFiltered.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
