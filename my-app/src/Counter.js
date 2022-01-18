import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0)

    return(
        <div>
            <h1>Вы нажали кнопку {count} раз</h1>
            <button onClick={() => setCount(count + 1)}>Нажми меня</button>
        </div>
    )
}

export default Counter