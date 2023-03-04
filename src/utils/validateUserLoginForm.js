export const validateUserLoginForm = (values) => {
    const {username, password} = values;
    const errors = {};
    
    const usernameMinLength = 6;
    const usernameMaxLength = 15;
    const passwordMinLength = 8;

    if(!username) {
        errors.username ='Required'
    } else if(username.length < usernameMinLength) {
        errors.username = `Username must be at least ${usernameMinLength} characters`;
    } else if(username.length > usernameMaxLength) {
        errors.username = `Username must be ${usernameMaxLength} characters or less`;
    }
    
    if(!password) {
        errors.password ='Required'
    } else if(password.length < passwordMinLength) {
        errors.password = `Password must be at least ${passwordMinLength} characters`;
    }
    return errors;
}