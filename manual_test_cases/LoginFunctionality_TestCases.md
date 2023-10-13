# Login Functionality Test Cases

## Positive Login Tests
1. **Test Case**: Successful login with valid credentials
   - **Steps**:
     1. Enter a valid username.
     2. Enter a valid password.
     3. Click the login button.
   - **Expected Result**: User should be successfully logged in, and the page should navigate to the "Products" page.

## Error Handling Tests
2. **Test Case**: Display error message for invalid credentials
   - **Steps**:
     1. Enter an invalid username.
     2. Enter an invalid password.
     3. Click the login button.
   - **Expected Result**: An error message should be displayed, indicating that the username and password do not match any user in this service.

3. **Test Case**: Unable to log in with a locked-out user account
   - **Steps**:
     1. Enter a locked-out user's username.
     2. Enter the password associated with the locked-out user.
     3. Click the login button.
   - **Expected Result**: User should not be able to log in, and an error message should be displayed, indicating that the user has been locked out.

## Login Form Validation Tests
4. **Test Case**: Display an error for an empty username
   - **Steps**:
     1. Leave the username field empty.
     2. Enter a valid password.
     3. Click the login button.
   - **Expected Result**: An error message should be displayed, indicating that the username is required.

5. **Test Case**: Display an error for an empty password
   - **Steps**:
     1. Enter a valid username.
     2. Leave the password field empty.
     3. Click the login button.
   - **Expected Result**: An error message should be displayed, indicating that the password is required.

6. **Test Case**: Display an error for an invalid username and valid password
   - **Steps**:
     1. Enter a valid password.
     2. Enter an invalid username.
     3. Click the login button.
   - **Expected Result**: An error message should be displayed, indicating that the username and password do not match any user in this service.

7. **Test Case**: Display an error for a valid username and invalid password
   - **Steps**:
     1. Enter a valid username.
     2. Enter an invalid password.
     3. Click the login button.
   - **Expected Result**: An error message should be displayed, indicating that the username and password do not match any user in this service.
