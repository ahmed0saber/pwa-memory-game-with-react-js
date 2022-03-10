import { useState } from 'react'
import Card from './card'

function Cards(){
    const [items, setItems] = useState([
        { id: 1, img: './images/cat.png', stat: "" },
        { id: 1, img: './images/cat.png', stat: "" },
        { id: 2, img: './images/colorful.png', stat: "" },
        { id: 2, img: './images/colorful.png', stat: "" },
        { id: 3, img: './images/lizard.png', stat: "" },
        { id: 3, img: './images/lizard.png', stat: "" },
        { id: 4, img: './images/octopus.png', stat: "" },
        { id: 4, img: './images/octopus.png', stat: "" },
        { id: 5, img: './images/owl.png', stat: "" },
        { id: 5, img: './images/owl.png', stat: "" },
        { id: 6, img: './images/pig.png', stat: "" },
        { id: 6, img: './images/pig.png', stat: "" },
        { id: 7, img: './images/rabbit.png', stat: "" },
        { id: 7, img: './images/rabbit.png', stat: "" },
        { id: 8, img: './images/sheep.png', stat: "" },
        { id: 8, img: './images/sheep.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    function restart(){
        for(let i = 0; i < items.length; i++){
            items[i].stat = ""
            setItems([...items])
            setPrev(-1)
        }
    }

    return (
        <>
            <div className="container">
                { items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick} />
                )) }
            </div>
            <button onClick={restart} className="btn">Restart</button>
        </>
    )
}

export default Cards