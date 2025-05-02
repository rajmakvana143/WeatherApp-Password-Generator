import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import "./PassWord.css"
import { useEffect, useRef, useState } from "react";

export default function PassWordGenrate() {

    let [password , setPassword]  = useState("");
    let [range , setRange] = useState(8);
    let [isCharcter , setIsCharcter] = useState(false);
    let [isNumber , setIsNumber] = useState(false);

    
    function passwordGenrate(){
        let pass = ""
        let string  = "ABCDEFGHIJKMLNOPQRSTUVWXYZ";

        if(isCharcter){
            string =  string + "!@#$%^&*" 
        }

        if(isNumber){
            string =  string + "1234567890" 
        }
        
        for(let i = 1 ; i <= range ; i++){
            let char = Math.floor(Math.random() * string.length + 1);
            pass = pass +  string.charAt(char)
        }

        setPassword(pass)
    }

    useEffect(() => {
        passwordGenrate()
    } , [isCharcter, range , isNumber])
    
    let passwordRef = useRef();

    function handleCopy(e){
        window.navigator.clipboard.writeText(password)
    }

  return (
    <>

      <div className="feild">

        <h2>PassWord Genrator </h2>

        <div className="input-feild">
          <TextField
            id="outlined-basic"
            label="Genrated Password"
            variant="outlined"
            value={password}
            ref={passwordRef}
          />
          <Button variant="contained" endIcon={<ContentCopyIcon />} onClick={handleCopy}>
            Copy
          </Button>
        </div>

        <div className="input-div">
        <input type="range"  id="range" value={range} min={5} max={20} onChange={(e) => setRange(e.target.value)}/> 
        <label htmlFor="range">
            {range} Character
        </label>
        </div>

        <div className="input-div">
            <Checkbox id="Charcter" value={isCharcter} onChange={() => setIsCharcter(!isCharcter)} />
            <label htmlFor="Charcter">Charachter</label>
            <Checkbox id="Number" value={isNumber} onChange={() => setIsNumber(!isNumber)} />
            <label htmlFor="Number">Number</label>
        </div>

      </div>

    </>
  );
}
