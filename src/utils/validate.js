export const required = value => value ? undefined : 'Required';
export const maxLength = length => value => value.length < length ? undefined : 'Long length';
export const email = value => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) ? undefined : 'Invalid email addres';