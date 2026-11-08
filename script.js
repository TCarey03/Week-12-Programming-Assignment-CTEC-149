// Phase 1: Name & Username Validation

// Validate a person's name
function validateName(name) {
    const nameRegex = /^[a-zA-Z ]{2,}$/;
    return nameRegex.test(name);
}

// Validate a username
function validateUsername(username) {
    const usernameRegex = /^\w{3,12}$/;
    return usernameRegex.test(username);
}

// Test names
console.log("Name Validation:");
console.log(validateName("Alex Johnson")); // true
console.log(validateName("B"));             // false
console.log(validateName("Charlie Brown")); // true
console.log(validateName("Dana Scully"));   // true

// Test usernames
console.log("Username Validation:");
console.log(validateUsername("alex_j"));              // true
console.log(validateUsername("cool_user_123"));       // false (too long)
console.log(validateUsername("charlie!brown"));       // false (illegal character)
console.log(validateUsername("da"));                  // false (too short)
console.log(validateUsername("fiona_g"));             // true
