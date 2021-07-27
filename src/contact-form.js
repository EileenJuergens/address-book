import './contact-form.css'
import { Field, reduxForm } from 'redux-form'
import { useDispatch } from 'react-redux'
import ReduxInputField from './redux-input-field'
import Button from './button'
import { createContact } from './reducers/contactReducer'


function ContactFrom({ handleSubmit, pristine, reset, submitting }) {
    const dispatch = useDispatch()

    const handleSubmitForm = (newContact) => {
        dispatch(createContact(newContact))
        dispatch(reset('contactForm'))
    }


    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className='contact-form'>
            <div className='contact-form__fields-container'>
                <div className='contact-form__fields-row'>
                    <div className='contact-form__select-box'>
                        <Field
                            name="firstName"
                            component={ReduxInputField}
                            label="first name"
                            placeholder="Insert first name" />
                    </div>
                    <div className='contact-form__select-box'>
                        <Field
                            name="lastName"
                            component={ReduxInputField}
                            label="last name"
                            placeholder="Insert last name" />
                    </div>
                </div>
                <div className='contact-form__fields-row'>
                    <div className='contact-form__select-box'>
                        <Field
                            name="streetName"
                            component={ReduxInputField}
                            label="address"
                            placeholder="Insert address" />
                    </div>
                    <div className='contact-form__select-box'>
                        <Field
                            name="zipCode"
                            component={ReduxInputField}
                            type="number"
                            label="zip code"
                            placeholder="Insert ZIP code" />
                    </div>
                    <div className='contact-form__select-box'>
                        <Field
                            name="city"
                            component={ReduxInputField}
                            label="city"
                            placeholder="Insert city" />
                    </div>
                </div>
                <div className='contact-form__fields-row'>
                    <div className='contact-form__select-box'>
                        <Field
                            name="phoneNumber"
                            component={ReduxInputField}
                            type="number"
                            label="phone number"
                            placeholder="Insert phone number" />
                    </div>
                    <div className='contact-form__select-box'>
                        <Field
                            name="email"
                            component={ReduxInputField}
                            label="email"
                            placeholder="Insert email" />
                    </div>
                </div>
            </div>
            <div className='contact-form__buttons-container'>
                <Button type="submit" disabled={pristine || submitting}>
                    Create new contact
                </Button>
                <Button type="button" btnType='secondary' disabled={pristine || submitting} onClick={reset}>
                    Reset form
                </Button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'contactForm'
})(ContactFrom)