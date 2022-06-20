const React = require('react')
let hearts = []
const App = () => {
    const [count, setCount] = React.useState(0)
    const random = ()=> {
        return Math.floor(Math.random() * 1000)
    }
    
    const numOfHeartsToAdd = count - hearts.length
    hearts = hearts.concat(Array(numOfHeartsToAdd).fill(1).map((_)=>{
        return (<div style={{position:"absolute",left:`${random()}px`,top:`${random()}px`}}>&#10084;&#65039;</div>)
    }
    ))
    console.log(hearts)
    return (
        <div>   
            <div>
                Click the button and love Niva.
                </div>
            <button onClick={()=> setCount(count+20)}>click me</button>
            {hearts}
        </div>
    )
}

export default App;