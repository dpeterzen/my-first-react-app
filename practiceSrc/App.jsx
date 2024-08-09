import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Clock1 from "./Clock1";
import FunctionalInput from "./FunctionalInput";
import Form from "./Form";
import Image from "./Image";

// adding class conditionally, turn button border green when selected
const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData1, setFormData1] = useState({ name: '', age: '' })
  const [formData2, setFormData2] = useState({ name: '', age: '' })

  return (
    <>
    <div>
      <p>{selectedItem ? selectedItem : "No item selected"}</p>
      <button 
        className={selectedItem === "item1" ? "selected" : undefined} 
        onClick={() => setSelectedItem('item1')}
      >
        Select Item 1
      </button>
      <button 
        className={selectedItem === "item2" ? "selected" : undefined}
        onClick={() => setSelectedItem('item2')}
      >
        Select Item 2
      </button>
      {selectedItem === 'item1' && <Form formData={formData1} setFormData={setFormData1} />}
      {selectedItem === 'item2' && <Form formData={formData2} setFormData={setFormData2} />}
    </div>
    </>
  );
};
    {/* <div>
      <p>{selectedItem ? selectedItem : "No item selected"}</p>
      <button 
        className={selectedItem === "item1" && "selected"} 
        onClick={() => setSelectedItem('item1')}
      >
        Select Item 1
      </button>
      <button 
        className={selectedItem === "item2" && "selected"}
        onClick={() => setSelectedItem('item2')}
      >
        Select Item 2
      </button>
      {selectedItem && <Form key={selectedItem} selectedItem={selectedItem} />}
    </div> */}
export default App;
