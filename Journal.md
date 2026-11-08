Phase 1: Name & Username Validation

In this phase, I created two functions called validateName() and validateUsername(). Both functions use regular expressions and the .test() method to check whether the input is valid.

The name function checks that a name contains only English letters and spaces and is at least two characters long. The username function checks that usernames contain between 3 and 12 characters and only use letters, numbers, and underscores.

The practical difference between using ^ and $ anchors and not using them is that anchors make sure the entire string is checked. Without anchors, JavaScript could find a matching section inside a longer string and still return true. Using anchors makes sure the whole username follows the requirements.
