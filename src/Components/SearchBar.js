import React,{useState} from 'react'
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({placeholder, data}) {
const [filteredData, setFilteredData] = useState([]);
const [wordEntered, setWordEntered] = useState("");


const handleData=(event)=>{
  const getData = event.target.value;
  setWordEntered(getData)
  const getDataFilter = data.filter((value) =>{
    return value.title.toLowerCase().includes(getData.toLowerCase());
  });

  if (getData === ""){
    setFilteredData([]);
  } else{
    setFilteredData(getDataFilter);
  }
};

const clearInput =()=>{
  setFilteredData([]);
  setWordEntered("");
};
return (
  <div className='search'>
      <div className='searchInputs'>
          <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleData}/>
          <div className='searchIcon'>
            {filteredData.length === 0 ? (<SearchIcon/>) : (<CloseIcon id="clearBtn" onClick={clearInput} /> ) }
            
          </div>
      </div>
      {filteredData.length !=0 && (
        <div className='dataResult'>
        {filteredData.slice(0,10).map((value, key) => {
          return (
            <a className="dataItem" href={value.link} target="_blank" >
              <p>{value.title}</p>
            </a>

          )
        })}
      </div>
)}
  </div>
);
}

export default SearchBar;

  