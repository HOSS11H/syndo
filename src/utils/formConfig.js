import ModalInput from '../components/UI/Input/Input';
import {
    requiredRule,
    requiredLengthRule,
    isNumberRule,
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
function createFormFieldConfig(label, name, type, placeholder, defaultValue = '', options = null , valid= false , touched = false) {
    return {
        renderInput: (handleChange, value, isValid, error, key) => {
            return (
                <ModalInput
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    placeholder={placeholder}
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

// object representation of investment form
export const investmentForm = {
    name: {
        ...createFormFieldConfig('Cardholder name', 'name', 'text', 'john doe'),
        validationRules: [
            requiredRule('Name'),
        ],
    },
    cardNumber: {
        ...createFormFieldConfig('Card number', 'cardNumber', 'password', '**** **** **** ****'), 
        validationRules: [
            requiredRule('Card number'),
        ],
    },
    expiryDate: {
        ...createFormFieldConfig('Expiry date', 'expiryDate', 'date', '12/23'), 
        validationRules: [
            requiredRule('Expiry date'),
        ],
    },
    cvv: {
        ...createFormFieldConfig('CVV', 'cvv', 'text', '***'), 
        validationRules: [
            requiredRule('cvv'),
            requiredLengthRule('cvv', 3),
            isNumberRule('cvv'),
        ],
    },
};

export const searchForm = {
    search: {
        ...createFormFieldConfig('', 'search', 'text'),
    },
    status: {
        ...createFormFieldConfig('status', 'status', 'select', '',
            [
                {
                    value: 'status 1',
                    label: 'status 1',
                } , 
                {
                    value: 'status 2',
                    label: 'status 2',
                } , 
            ] ,
            true,
            true
        ),
    },
    type: {
        ...createFormFieldConfig('type', 'type', 'select', '',
            [
                {
                    value: 'status 1',
                    label: 'status 1',
                } , 
                {
                    value: 'status 2',
                    label: 'status 2',
                } , 
            ] ,
            true,
            true
        ),
    },
    mostFunded: {
        ...createFormFieldConfig('most funded', 'mostFunded', 'select', '',
            [
                {
                    value: 'status 1',
                    label: 'status 1',
                } , 
                {
                    value: 'status 2',
                    label: 'status 2',
                } , 
            ] ,
            true,
            true
        ),
    },
};