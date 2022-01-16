import { useEffect,useState } from "react";
import Banner from "./banner";
import BlogSection from "./Blogs/BlogSection";
import axios from "axios";
import Navbar from "./navbar";
import Trendingsection from "./Trending/TrendingSection";
//import blogs from './Blogs/blogList'
import icon1 from './Trending/icon1.png';
import Search from "./Search";

const   Home = () => {
   const [info, setInfo] = useState({});
   const [login, setLogin] = useState(false);
   const [input,setInput] = useState("");
   const [items,setItems] =useState([]);
   const [trend,setTrend] = useState([]);
 
    useEffect(() => {

      async function fetchData(){
        return fetch('http://127.0.0.1:8000/api/listblog')
        .then(data=>data.json())
      };
      
      fetchData()
      .then(items=>{
        setItems(items)
        setTrend(items)
        console.log("!!!!!!!!",items);
        })










      let value = JSON.parse(localStorage.getItem('token'));
      let token ='Bearer ';
      if(value!==null){
        token = token +value.token;
      }
    console.log(token);
    if(token !==null){
       
      get();
    }else{
      setLogin(false);
    }

    async function get(){
      let response = await axios.post('http://127.0.0.1:8000/api/me',null,{
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json",
          "Authorization": token 
        }
      }).then  ( await function (response) {
        //console.log("response",response.data);
        setLogin(true);
        setInfo(response.data);
      })
      .catch(function (error) {
        console.log(error);
        localStorage.removeItem('token');
      });
    }

 
    }, [])

    async function change(input){
      if(input==""){
        let result = await fetch('http://127.0.0.1:8000/api/lisblog');
      result = await result.json();
      setItems(result);  
      }else{
      let result = await fetch('http://127.0.0.1:8000/api/search/'+input);
      result = await result.json();
      setItems(result);
    }
    }



    var trendings = [
        {
        id : 1,
        thumbnail: icon1,
        author: "bili jackson",
        title: "top languages for web devlopment",
        date : "2 May,2021"
      },
      {
        id : 2,
        thumbnail: icon1,
        author: "Mel Meneoroe",
        title: "top machine learning frameworks",
        date : "2 May,2021"
      },
      {
        id : 3,
        thumbnail: icon1,
        author: "oliver bob",
        title: "increasing use of tensorflow",
        date : "2 May,2021"
      },
      

      
  
    ]
    return ( <div>
        <Navbar info={info} login={login} />
      <Banner className="d-none d-lg-block d-xl-none" /> 
      <Trendingsection trendings ={trendings} blogs={trend}  /> 
      
      <hr  />    
      <div className="container">
            <div className="row">
                <input type="text" className="form-control"  onChange={(e)=>{setInput(e.target.value);change(e.target.value)}} placeholder="Search blogs..."/>
            </div>
        </div>
      <br />
      <BlogSection  blogs={items} info={info} login={login}   />
      
      

    </div> );
}
 
export default Home;