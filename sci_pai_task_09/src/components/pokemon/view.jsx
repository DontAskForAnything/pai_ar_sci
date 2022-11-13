import { useState } from 'react';
import types from './types.json';
import pokedex from './pokedex.json';
import Tile from './tile';
import CButton from '../utils/toggle_button';
function Pokedex() {
    const [showNames, setShowNames]= useState(true);
    const [searchText, setSearchText]= useState("");
    const [hide, setHide] = useState(false);

    const [sortAsc, setSortAsc]= useState(false);
    const [sortDes, setSortDes]= useState(false);
    const [sortIdAsc, setSortIdAsc]= useState(false);
    const [sortIdDes, setSortIdDes]= useState(false);
    const [clearArray, setClearArray]= useState(pokedex);   
    const [activeFilter, setActiveFilter]= useState([]);

    function ButtonHandler(){setShowNames(!showNames)}
    function HiderHandler(){setHide(!hide)}
    function SearchHandler(event){ setClearArray(pokedex.filter(el => el.name.english.toLocaleLowerCase().startsWith(event.target.value.toLocaleLowerCase()))); setSearchText(event.target.value)}
    function ASCAlphabeticSorting(){setClearArray((el) => [...el.sort(function(a, b){return a.name.english.localeCompare(b.name.english)})]); setSortAsc(true); setSortDes(false); setSortIdDes(false); setSortIdAsc(false)}
    function DSCAlphabeticSorting(){setClearArray((el) => [...el.sort(function(a, b){return b.name.english.localeCompare(a.name.english)})]); setSortAsc(false);setSortDes(true); setSortIdDes(false); setSortIdAsc(false)}
    function ASCAIdSorting(){setClearArray((el) => [...el.sort(function(a, b){return a.id - b.id })]); setSortAsc(false); setSortDes(false); setSortIdDes(false); setSortIdAsc(true)}
    function DSCIdSorting(){setClearArray((el) => [...el.sort(function(a, b){return b.id - a.id })]); setSortAsc(false); setSortDes(false); setSortIdDes(true); setSortIdAsc(false)}

    function FilterManagement(type){
        let tab = activeFilter
        if(tab.includes(type)){tab = tab.filter(item => !(item === type))}
        else{tab.push(type)}
        setActiveFilter(tab);
        setClearArray(pokedex.filter((el) => {return tab.every(elt => el.type.includes(elt))}).sort(function(a, b) {
            return a.type.length - b.type.length}))
        setSortAsc(false); setSortDes(false); setSortIdDes(false); setSortIdAsc(false);
    }

    return (
    <div>
    {!hide ?      
    <div className="buttons">
       <div>
        <button type="button"  className="xButton" onClick={HiderHandler}>{"X"}</button>
        <CButton active={!showNames} function={ButtonHandler} text={showNames ? "Pokaż informacje!" : "Ukryj informacje!"} />
        <input type="text" placeholder='Znajdź pokemona!' onChange={SearchHandler} className="search-box" value={searchText}/>
       </div>
       <div>
       <CButton active={sortAsc} function={ASCAlphabeticSorting} text={sortAsc ? "Posortowane!" : "Sortuj A - Z"} />
       <CButton active={sortDes} function={DSCAlphabeticSorting} text={sortDes ? "Posortowane!" : "Sortuj Z - A"} />
       </div>
       <div>
       <CButton active={sortIdAsc} function={ASCAIdSorting} text={sortIdAsc ? "Posortowane!" : "Sortuj 1 - 100"} />
       <CButton active={sortIdDes} function={DSCIdSorting} text={sortIdDes ? "Posortowane!" : "Sortuj 100 - 1"} />
    </div>
    </div> : 
    <div className="buttons">
        <button type="button" style={{width:"30px",height:"30px"}} className="xButton" onClick={HiderHandler}>{"X"}</button>
    </div>
    }
    <div className="buttonsDown">
        <div className="center">
            {types.map((el, id)=>{
                return( <button type="button" style={{ backgroundColor: activeFilter.includes(el.english) ? "grey" : "#fff"}} key={id} onClick ={() => FilterManagement(el.english)} className="showNamesButton">{el.english}</button>)
            })}
        </div>

    </div>

    <div className="pokemon-list">
        {clearArray.map((el, id)=>{
            return(<Tile name={el.name.english} id={el.id} type={el.type} showDetails={showNames} key={id}/>)
        })}
    </div>
    </div>
  );
}

export default Pokedex;
