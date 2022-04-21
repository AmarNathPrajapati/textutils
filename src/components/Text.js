import React,{useState} from 'react';

export default function Text(props) {
    const [Text, setText] = useState('Enter the text here');// state variable that can't be change directly , you have to use setText fuction with parameter "newText";
    const handleOnChange = (event) =>{
        // console.log("on change fired");
        setText(event.target.value);
    }
    const convertUpCase = () =>{
        // console.log("you want to change text into upper case");
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const convertLoCase = () =>{
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase","success")
    }
    const clearText = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text has cleared","success")
    }
    const extractNum = () =>{
        const regex = /[0-9//]/g;
        const digit = Text.match(regex);
        const res = digit.join('');
        setText(res);
        props.showAlert("Number are extracted","success")
    }
    const clearExtraSpace = () =>{
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All extraSpace has removed","success")
    }
    const extractEmail = () =>{
        let newText = Text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        const res = newText.join(' ');
        setText(res);
        // props.showAlert("Emails are extracted","success");
    }
    return (
    <>
        <div className="container" style={{color:props.mode==='dark'?'white':'gray'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'gray'}} ></textarea>
            </div>
            <div className="btn btn-primary my-2 mx-2" onClick={convertUpCase}>Convert to UpperCase</div>
            <div className="btn btn-success my-2 mx-2" onClick={convertLoCase}>Convert to LowerCase</div>
            <div className="btn btn-primary my-2 mx-2" onClick={extractNum}>Extract Number</div>
            <div className="btn btn-primary my-2 mx-2" onClick={extractEmail}>Extract Email</div>
            <div className="btn btn-success my-2 mx-2" onClick={clearExtraSpace}>Remove Extra Space</div>
            <div className="btn btn-danger my-2 mx-2" onClick={clearText}>Clear</div>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'gray'}}>{/*two curly bracket one for javaScript and another for object*/}
            <h2>Your Text Summary here</h2>
            <p><b>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} Characters</b></p>
            <p>You will take {0.0075*Text.split(" ").length} minutes to read.</p>
            <h3>Preview</h3>
            <p>{Text.length>0?Text:"Write something to Preview here"}</p>
        </div>
    </>
    )
}
// fiter function--> jis bhi element ke liye true return karega wahi array me rahega
