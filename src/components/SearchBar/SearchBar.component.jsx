import React, { useState, useRef } from 'react';
import { useYoutube } from '../../utils/hooks/useYoutube';
import { Form, Input, MagnifyingGlass } from './styled';

const SearchBar = () => {
  const formRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState(null);

  // Use Youtube API everytime the search changes
  useYoutube(search);

  const handleForm = (e) => {
    e.preventDefault();
    setSearch(inputValue);
  };

  return (
    <Form ref={formRef} onSubmit={handleForm}>
      <MagnifyingGlass onClick={handleForm}>
        <span role="img" aria-label="magnifying-glass">
          🔎
        </span>
      </MagnifyingGlass>
      <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </Form>
  );
};

export default SearchBar;
