import React from 'react'
import { filterChange } from './reducers/filterReducer'
import { useDispatch } from 'react-redux'
import InputField from './redux-input-field'
import './redux-input-field.css'


const Filter = ({ placeholder }) => {
    const dispatch = useDispatch()

    const handleChange = (event) => {
        event.preventDefault()
        dispatch(filterChange(event.target.value))
    }

    return (
        <input onChange={handleChange} className='input-field' placeholder={placeholder} />
    )
}

export default Filter
