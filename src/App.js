import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [ascending, setAscending]=useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const sortedList=useMemo(()=>{
    return ascending ? [...listItems.sort((a,b)=>a-b)]:[...listItems.sort((a,b)=>b-a)]
  },[listItems, ascending])

  const toggleSort=useCallback(()=>{
    setAscending((prevAscending)=>!prevAscending);
  },[])

  return (
    <div className="app">
      <DemoList title={listTitle} items={sortedList} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleSort}>Change to {ascending ? 'Descending': 'Ascending'}</Button>
    </div>
  );
}

export default App;
