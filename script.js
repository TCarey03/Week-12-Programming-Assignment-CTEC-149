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

// Phase 3: Capturing Groups & Phone Reformatting

function formatPhoneNumber(phone) {

    // Regular expression with three capturing groups
    const phoneRegex = /^(\d{3})[-.]?(\d{3})[-.]?(\d{4})$/;

    // Check if the phone number is valid
    if (!validatePhone(phone)) {
        return null;
    }

    // Reformat the phone number
    return phone.replace(phoneRegex, "($1) $2-$3");
}

// Test phone number formatting
console.log("Phone Number Formatting:");

console.log(formatPhoneNumber("555-234-5678"));
console.log(formatPhoneNumber("555.345.6789"));
console.log(formatPhoneNumber("5554567890"));
console.log(formatPhoneNumber("555-678-901"));

// Phase 4: Registration Pipeline Integration

function processRegistration(user) {

    // Create an array to store errors
    const errors = [];

    // Validate the user's name
    if (!validateName(user.name)) {
        errors.push("Invalid name");
    }

    // Validate the username
    if (!validateUsername(user.username)) {
        errors.push("Invalid username");
    }

    // Validate the phone number
    if (!validatePhone(user.phone)) {
        errors.push("Invalid phone");
    }

    // Check for errors
    if (errors.length > 0) {
        return {
            success: false,
            errors: errors
        };
    }

    // Check whether the promo code is valid
    const discountApplied =
        Boolean(user.promoCode) && validatePromoCode(user.promoCode);

    // Return successful registration
    return {
        success: true,
        data: {
            name: user.name,
            username: user.username,
            phone: formatPhoneNumber(user.phone),
            discountApplied: discountApplied
        }
    };
}

// Sample user registration data
const sampleUsers = [
    {
        name: "Alex Johnson",
        username: "alex_j",
        phone: "555-234-5678",
        promoCode: "SUMMER"
    },
    {
        name: "B",
        username: "cool_user_123",
        phone: "555.345.6789",
        promoCode: "summer"
    },
    {
        name: "Charlie Brown",
        username: "charlie!brown",
        phone: "5554567890",
        promoCode: "SUMMER2026"
    },
    {
        name: "Dana Scully",
        username: "da",
        phone: "555-567-8901",
        promoCode: "SuMmEr"
    },
    {
        name: "Edward Nygma",
        username: "the_riddler_super_fan",
        phone: "555-678-901",
        promoCode: null
    },
    {
        name: "Fiona Gallagher",
        username: "fiona_g",
        phone: "555-789-0123",
        promoCode: ""
    }
];

// Process all registrations
console.log("Registration Results:");

for (const user of sampleUsers) {
    const result = processRegistration(user);
    console.log(user.name, result);
}
