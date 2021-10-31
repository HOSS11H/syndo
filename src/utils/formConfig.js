import Input from '../components/UI/Input/Input';
import {
    requiredRule,
    minLengthRule,
    maxLengthRule,
    passwordMatchRule,
    isEmailRule,
} from './inputValidationRules';
/**
 * creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 * @param {array} options - options value for the select input
 * @param {boolean} valid - default value for the input (we set them intially for rhe select Inputs)
 * @param {boolean} touched - default value for the input (we set them intially for rhe select Inputs)
 */
function createFormFieldConfig(label, name, type, defaultValue = '', options = null , valid= false , touched = false) {
    return {
        renderInput: (handleChange, value, isValid, error, key) => {
            return (
                <Input
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    isValid={isValid}
                    value={value}
                    handleChange={handleChange}
                    errorMessage={error}
                    options={options}
                />
            );
        },
        label,
        value: defaultValue,
        valid: valid,
        errorMessage: '',
        touched: touched,
    };
}

// object representation of address form
export const addressForm = {
    address: {
        ...createFormFieldConfig('Street address', 'address', 'text'),
        validationRules: [
            requiredRule('Street address'),
            minLengthRule('address', 8),
        ],
    },
    city: {
        ...createFormFieldConfig('city', 'city', 'text'),
        validationRules: [
            requiredRule('city'),
        ],
    },
    state: {
        ...createFormFieldConfig('state', 'state', 'select', 'new-york',
            [
                {
                    value: 'new-york',
                    label: 'New york',
                } , 
                {
                    value: 'london',
                    label: 'London',
                } , 
                {
                    value: 'madrid',
                    label: 'Madrid',
                } , 
                {
                    value: 'paris',
                    label: 'Paris',
                } , 
            ] ,
            true,
            true
        ),
        validationRules: [
            requiredRule('state'),
        ],
    },
    zipCode: {
        ...createFormFieldConfig('zipCode', 'zipCode', 'text'),
        validationRules: [
            requiredRule('zipCode'),
            maxLengthRule('zipCode', 5),
        ],
    },
};
// object representation of payment form
export const paymentForm = {
    payment: {
        ...createFormFieldConfig('payment', 'payment', 'select', 'cash',
            [
                {
                    value: 'cash',
                    label: 'cash',
                } , 
                {
                    value: 'visa',
                    label: 'visa',
                } , 
            ] ,
            true,
            true
        ),
        validationRules: [
            requiredRule('payment method'),
        ],
    },
    name: {
        ...createFormFieldConfig('Name', 'name', 'text'),
        validationRules: [
            requiredRule('Name'),
        ],
    },
};
// object representation of Login form
export const loginForm = {
    email : {
        ...createFormFieldConfig('Email', 'email', 'text'),
        validationRules: [
            requiredRule('email'),
            isEmailRule('email'),
        ],
    },
    password : {
        ...createFormFieldConfig('Password', 'password', 'password'),
        validationRules : [
            requiredRule('password'),
        ]
    }
}
// object representation of Signup form
export const signupForm = {
    email : {
        ...createFormFieldConfig('Email', 'email', 'text'),
        validationRules: [
            requiredRule('email'),
            minLengthRule('email', 4),
            isEmailRule('email'),
        ],
    },
    password : {
        ...createFormFieldConfig('Password', 'password', 'password'),
        validationRules : [
            requiredRule('password'),
            minLengthRule('password', 4),
            maxLengthRule('password', 8),
        ]
    } ,
    confirmPassword : {
        ...createFormFieldConfig('Enter Password Again', 'confirmPassword', 'password'),
        validationRules : [
            passwordMatchRule(),
        ]
    }
}