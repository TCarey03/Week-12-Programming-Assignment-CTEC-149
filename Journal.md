Phase 1: Name & Username Validation

In this phase, I created two functions called validateName() and validateUsername(). Both functions use regular expressions and the .test() method to check whether the input is valid.

The name function checks that a name contains only English letters and spaces and is at least two characters long. The username function checks that usernames contain between 3 and 12 characters and only use letters, numbers, and underscores.

The practical difference between using ^ and $ anchors and not using them is that anchors make sure the entire string is checked. Without anchors, JavaScript could find a matching section inside a longer string and still return true. Using anchors makes sure the whole username follows the requirements.

------------

Phase 2: Phone Verification & Promo Codes

In this phase, I created two additional functions called validatePhone() and validatePromoCode().

The phone validation function uses a regular expression to check for a valid 10-digit phone number. It accepts hyphens, dots, or no separators between the numbers.

The promo code function checks whether the user entered SUMMER. I used the case-insensitive flag i so the code works regardless of uppercase or lowercase letters.

The i flag is cleaner than using .toLowerCase() or multiple if statements because it allows the regular expression to handle capitalization automatically. This makes the code shorter and easier to understand.
