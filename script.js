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

// Phase 2: Phone Verification & Promo Codes

// Validate a phone number
function validatePhone(phone) {
    const phoneRegex = /^\d{3}[-.]?\d{3}[-.]?\d{4}$/;
    return phoneRegex.test(phone);
}

// Validate a promo code
function validatePromoCode(promo) {
    const promoRegex = /^SUMMER$/i;
    return typeof promo === "string" && promoRegex.test(promo);
}

// Test phone numbers
console.log("Phone Validation:");
console.log(validatePhone("555-234-5678")); // true
console.log(validatePhone("555.345.6789")); // true
console.log(validatePhone("5554567890"));   // true
console.log(validatePhone("555-567-8901")); // true
console.log(validatePhone("555-678-901"));  // false

// Test promo codes
console.log("Promo Code Validation:");
console.log(validatePromoCode("SUMMER")); // true
console.log(validatePromoCode("summer")); // true
console.log(validatePromoCode("SuMmEr")); // true
console.log(validatePromoCode("SUMMER2026")); // false
console.log(validatePromoCode("")); // false
console.log(validatePromoCode(null)); // false
