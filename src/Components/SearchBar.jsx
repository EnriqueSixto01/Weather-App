import React, { useState } from "react";
import { getCities } from "../Actions/actions";
import {connect} from 'react-redux'
import { IoAdd } from "react-icons/io5";
import styles from '../styles/SearchBar.module.css'

function SearchBar({getCity}) {
  const [input, setInput] = useState("");

  function handleOnChange(e) {
    setInput(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    getCity(input)
    setInput("");
  }

  return (
    <form className={styles.searchBar} onSubmit={handleOnSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add a city..."
        value={input}
        onChange={handleOnChange}
      />
     <button className={styles.button}><IoAdd/></button>
    </form>
  );
}

function mapDispatchToProps(dispatch){
    return{
        getCity: nombre => dispatch(getCities(nombre))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);
