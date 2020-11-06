import Layout from './com/layout';;
const About=(props)=>{
  return( 
  <div>
  <Layout>
    <div>
      <div id="con">
         <h1>{props.value}</h1>
      </div>
      <br/>
      <br/>
<h1>Share your own thoughts or words. 
  Quotes Generator is the best quote maker app to 
  create your quote. Create beautiful inspirational text.
   share your
    thoughts........... 
  </h1>
      <style jsx global>
     {`
     h1{
     color:#D2691E;
      }
     body{
     background:bisque;
     }
     #con {
      height: 300px;
      width: 350px;
      border: 2px solid black;
      background-color:black;
      font-style: oblique;
      font-size: 30px;
      text-align: center;
      margin: auto;
      padding: auto;
     
    }
    `}</style>
    </div>
    </Layout>
    </div>
    );
}
  
export default About;
