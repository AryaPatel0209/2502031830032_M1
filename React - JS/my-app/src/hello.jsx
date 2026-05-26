function hello() {
    
    const getName = (yourname) =>{
        return yourname;
    }
    function handleClick(){
        alert("Button was clicked")
    }

    const name = "Arya"
    const name1 = "Priya"

    return(
        <>
            <h1>Hello {getName(name)}</h1>
            <h2>Bye {getName(name1)}</h2>
            <button onClick ={handleClick}>Click Me</button>
            <button onClick={()=> alert("Hello from Inline Function!")}>Say Hello</button>
            
        </>
    )
}

export default hello