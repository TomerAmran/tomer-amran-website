const React = require('react')

const App = () => {
    const [count, setCount] = React.useState(0)
    return (
        <div>   
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>click me</button>
        </div>
    )
}

export default App;