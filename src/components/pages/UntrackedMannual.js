import React, { useState, useEffect } from 'react';
import Item from '../Item';
import Footer from '../Footer';

const dummyItems = [
  { id: '1', src: '' },
  { id: '2', src: '' },
  { id: '3', src: '' },
  { id: '4', src: '' },
  { id: '5', src: '' }
];

function UntrackedMannual() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleClick = target => {
    const id = target.id;
    const position = selectedItems.indexOf(id);
    const newItems = [...selectedItems];
    position < 0 ? newItems.push(id) : newItems.splice(position, 1);
    setSelectedItems([...newItems]);
  };

  useEffect(() => {}, [selectedItems]);

  const items = dummyItems.map((item, index) => (
    <Item
      key={index}
      id={item.id}
      src={item.src}
      click={handleClick}
      selected={selectedItems.includes(item.id)}
    />
  ));

  return (
    <div className='UntrackedMannual'>
      {items}
      <Footer btnLable={`Add (${selectedItems.length})`} />
    </div>
  );
}

export default UntrackedMannual;
