
import reactLogo from './assets/react.svg'
import './App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);
  const changePhoto = () => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=jduBxjEpg2x-ba0eMChz5vJJLW42YDHzY5vnBGdyoCs`)
      .then((response) => {
        console.log(response);
        setResult(response.data.results)
      })
  }
  return (
    <div className="cd" >
      <div className="main" >
        <h2 className={"box"}>Image Search App</h2>
        <TextField label="Images" color="secondary" type={"search"} style={{ marginLeft: "20%", width: "800px" }} focused value={photo} onChange={(e) => {
          setPhoto(e.target.value)
        }} /><br></br><br></br>
        <Button variant="contained" color="success" style={{ marginLeft: "40%" }} type='submit' onClick={changePhoto} >
          Search Images
        </Button>
        <div className="container">
          <div class="row text-center text-lg-start">
            {
              result.map(ele => (
                <div class="col-lg-3 col-md-4 col-6">
                  <img class="img-fluid img-thumbnail d-block mb-4 h-100" src={ele.urls.small} alt='' />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
