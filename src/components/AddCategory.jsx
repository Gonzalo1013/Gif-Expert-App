import { useState } from "react"




export const AddCategory = ({ onNewCategory}) => {
    
    const [inputValue, setInputValue  ] = useState('')
    
    const onsubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() )
        
        // setCategories(categories => [inputValue, ...categories])
        setInputValue('')
    }



    const onAddChange = ({target}) => {
        setInputValue(target.value)
        
    }


    return (
        <form onSubmit={ (event) => onsubmit(event) }>
            <input
                onChange={ onAddChange } 
                type="text"
                placeholder="Buscar Gif"
                value={inputValue} 
            />
        </form>
    )
}