import React, {useState} from 'react'

export default function  TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!","success");
  }

  const handleClearClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText)
    props.showAlert("Cleared text!","success");
  }

// setText("new text") // correct way to change the state
  const handleOnChange = (event)=>{
    //console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#34304d'}}> 
    <h1>{props.heading}</h1>  
    <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode==='dark'?'grey':'white',
      color: props.mode==='dark'?'white':'#34304d'}}  id="myBox" rows="8"></textarea>
    </div>
     <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
     <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#34304d'}}>
    <h2> Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something"}</p>
  </div>
  </>
  )
}
