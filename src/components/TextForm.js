import React,{useState}from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
        // console.log("clicked" + text)
        // setText("what is now")
        let newtext=text.toUpperCase()
        setText(newtext);
        props.showalert("To uppercase ","Success")
    }
    const handleOnchange=(event)=>{
        // console.log("changed")
        setText(event.target.value)
    }
    const handleLOclick=()=>{
        // console.log("clicked" + text)
        // setText("what is now")
        let newtext=text.toLowerCase()
        setText(newtext);
        
    }
    const handleVowelclick=()=>{
        // console.log("clicked" + text)
        // setText("what is now")
        let arr=text.split(" ").join("")
        let arr2=Array.from(arr)
        let count1=0,count2=0;
        // console.log(arr2)
        
        arr2.forEach(element => {
            if (element==="a"||element==="e"||element==="i"||element==="o"||element==="u"||element==="A"||element==="E"||element==="I"||element==="O"||element==="U")
            {
                count1+=1

                setcountvo(count1)
                
            }
            else{
                count2+=1;
                setcountco(count2)
            }
        });
        // console.log(sum)
    }
    const handleCopy=()=>{
        // let value=document.getElementById("exampleFormControlTextarea1").value
        
        props.showalert("Text has been copied ","Success")
        navigator.clipboard.writeText(text)
        
    }


    const [text,setText]=useState("enter the text");
    const [countvo,setcountvo]=useState(0);
    const [countco,setcountco]=useState(0);
  return (
    <>
    <div>
      <h1 className='mb-4'>{props.heading}</h1>
<div className=" my-3 mb-3 ">
  
  <textarea className="form-control" value ={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
    <button disabled={text.length===0} className="btn btn-primary mx-2"onClick={handleUpclick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2"onClick={handleLOclick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2"onClick={handleVowelclick}>For Vowels and Consonents</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2"onClick={handleCopy}>Copy Text</button>
   
    </div>
    <div className="my-3">
        <h2>Your Text summary</h2>
        <p>{text.split(/\s+/g).filter((element)=>{return element.length!==0}).length} words of length {text.length}</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
        <h3>Number of Vowels</h3>
        <p>Vowels : {countvo}</p>
        <h3>Number of Consonents</h3>
        <p>Consonants : {countco}</p>

    </div>
    </>
  )
}
