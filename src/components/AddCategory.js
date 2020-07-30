import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {  // e: evento
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ) {
            setCategorias( category => [inputValue, ...category] );
            setInputValue('');
            console.log('Submit Hecho');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />  
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory
