import { useState } from "react";
import Select from 'react-select';
//import $ from 'jquery';
require("jquery-validation");


const AddBlogForm = () => {

    const options = [
        { value: 'Computer Science', label: 'Computer Science' },
        { value: 'Fashion', label: 'Fashion' },
        { value: 'History', label: 'History' },
        { value: 'Politics', label: 'Politics' },
    
      ]

    const [title,setTitle]=useState("");
    const [author,setAuthor]=useState("");
    const [date,setDate]=useState("");
    const [category,setCategory] = useState("");
    const [readtime,setReadtime] = useState("");
    const [blogtext,setBlogtext]=useState("");
    const [thumbnail,setThumbnail]=useState("");
    const [photo,setPhoto]=useState("");
    const [trending,setTrendig]=useState("");
    
     async function AddBlog(event){
         event.preventDefault();
         console.log("----------->>>",title,author,date,"---",category,"---",blogtext,trending);   
         const formData = new FormData();
         formData.append("title",title);
         formData.append("author",author);
         formData.append("date",date);
         formData.append("category",category);
         formData.append("readtime",readtime);
         formData.append("blogtext",blogtext);
         formData.append("thumbnail",thumbnail);
         formData.append("photo",photo);
         formData.append("trending",trending);
         let result=await fetch('http://127.0.0.1:8000/api/addblog',
            {
                body:formData,
                method:"post"
            }
         );
         
        }
        function refresh(){
            window.location.reload(false);
        }
         function handleClick(event){
            AddBlog(event);
          //  refresh();    
         }


   /*  $("form[name='AddBlog']").validate({
        // Specify validation rules
        rules: {
          // The key name on the left side is the name attribute
          // of an input field. Validation rules are defined
          // on the right side
              title: {
            required: true,
          },
          
          author: {
            required: true,
          },
          date: {
            required: true,
            
          },
          blogtext: {
            required: true,
            
          },
          thumbnail:{
            required:true,
            extension: "png|jpg|jpeg"
        },photo:{
            required:true,
            extension: "png|jpg|jpeg"
        }
        },
        // Specify validation error messages
        messages: {
            title: "Please enter title",
            author: "Please enter author",
            date: "Please enter date",
            blogtext: "Please enter text",

            thumbnail:{
            required:"input is required",                  
            extension:"select valid input file format"
            },
            photo:{
            required:"input is required",                  
            extension:"select valid input file format"
            },
          
            
        }
       
});*/




    return ( 
        <div style={{color:"#0D226B",fontWeight:"bold"}}>
            <div>
                <h1>Add Blog</h1>
            </div>
            <form   name="AddBlog" >
                <div className="form-goup">
                    <label >Title</label>
                    <input style={{ width:"80%" }} type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}  className="form-control" placeholder="Enter title" required/>
                </div> 
                <div className="form-goup">
                    <label >Author</label>
                    <input style={{ width:"80%" }} type="text" name="author" value={author} onChange={(e)=>{setAuthor(e.target.value)}} className="form-control" placeholder="Enter author" required/>
                </div>
                <div className="form-goup">
                    <label >Date</label>
                    <input style={{ width:"80%" }} type="date" name="date" value={date} onChange={(e)=>{setDate(e.target.value)}} className="form-control" placeholder="Enter date" required/>
                </div>
              {/*   <div className="form-goup">
                    <label>Category</label>
                    <select style={{ width:"80%" }} type="text" name="category" value={category} onChange={(e)=>{setCategory(e.target.value)}} className="form-control" required>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Politics">Politics</option>
                    <option value="History">History</option>
                    <option value="Health">Health</option>
                    </select>
                </div> */}
                
                <div style={{ width:"80%"  }} >
                    <label > Category</label>
                    <Select  options={options} onChange={(e)=>setCategory(e.value)} />
                </div>
                <div className="form-goup">
                    <label >Read time</label>
                    <input style={{ width:"80%" }} type="text" name="readtime" value={readtime} onChange={(e)=>{setReadtime(e.target.value)}} className="form-control" placeholder="Enter author" required/>
                </div>
                <div className="form-group">
                    <label >Blog text</label>
                    <textarea style={{ width:"80%" }} name="blogtext" className="form-control rounded-0" value={blogtext} onChange={(e)=>{setBlogtext(e.target.value)}} id="exampleFormControlTextarea2" cols="10" rows="10" required></textarea>
                </div>

                 <div className="form-group">
                     <label >Choose file for thumbnail</label><br/>
                    <input type="file" onChange={(e)=>setThumbnail(e.target.files[0])} name="thumbnail" placeholder="file for photo"/> 
                </div>
                <div className="form-group">
                     <label >Choose file for photo</label><br/>
                    <input type="file" onChange={(e)=>setPhoto(e.target.files[0])}  name="photo" placeholder="file for photo"/> 
                </div>
            
                <div>
                    <input  style={{ width:"20px" ,marginRight:"10px" }}  name="trending"  type="checkbox"  onChange={(e)=>{setTrendig(e.target.checked)}} required/>
                    <label   >Trending</label>
                </div>
                <div className="form-goup"  > 
                          <input style={{width:"80%"}} id="inpt" onClick={handleClick} type="submit"  name="Sign Up" className="form-control" />
                      </div>
            </form>
        </div>
     );
}
 
export default AddBlogForm;