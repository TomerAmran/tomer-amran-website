const React = require('react')
const App = () => {
    const [count, setCount] = React.useState(0)
    const hearts = Array(count).fill(1).map((_)=>{

        return (<div>&#10084;&#65039;</div>)
    }
    )
    console.log(hearts)
    return (
        <div>   
            <div>
                Click the button and love Niva.
                </div>
            <button onClick={()=> setCount(count+1)}>click me</button>
            {hearts}
        </div>
    )
}

export default App;