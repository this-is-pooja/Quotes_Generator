import Layout from "./com/layout";
import Link from 'next/link';
import React,{useState} from 'react';
import Button from "@material-ui/core/Button";
function CreateQuotes(props)
{
const [value,setValue]=useState("keep smiling");
const onChange = event =>{
  setValue(event.target.value);
};
return(
  <Layout>
    <div align = "center">
      <h2 style={{textAlign:"center"}}>write your Quotes...........</h2>
       <textarea id="com" rows='10' cols='30' type='text' onChange={onChange} value={value}/>
      <br/>
      <br/>
      <Link href="/About" passHref >
      <Button variant="contained" color="primary" >publish</Button>
      </Link>
      
      <style jsx global>
        {`
          
          body {
            background:	#ffefd5;
          }
          #com {
            height: 300px;
            width: 350px;
            border: 2px solid black;
            background-color:orange;
            font-style: oblique;
            font-size: 30px;
            text-align: center;
            margin: auto;
            padding: auto;
           
          }
        `}
      </style>
    </div>
  </Layout>
);
}


export default CreateQuotes;
