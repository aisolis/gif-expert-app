import { useState } from 'react';

const AddCategory = ( { onNewCategory } : any ) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ( { target } : any) => {
        setinputValue(target.value);
    };

    const onSubmit = ( event : any ) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if(newInputValue.length === 0) return;
        onNewCategory(newInputValue);
        setinputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="buscar categoria"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}

export default AddCategory
