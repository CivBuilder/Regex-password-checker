/// Chris Catechis
/// 15 October 2022
/// This basic JS program checks that a password is of the appropriate regex:
/// has 8 or more characters, has both uppercase and lowercase letters, has
/// at least a number and at least one special character.

const goodPassword = "Pass_w0rd.";
const badPassword0 = "Passw0rd";
const badPassword1 = "Pass_word.";
const badPassword2 = "pass_w0rd.";
const badPassword3 = "PASS_W0RD.";

checkPassword = (input) => {
    const allowedRegex = /^(?=.*[0-9])(?=.*[_.])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9_.].{8,100}$/;

    if (input.match(allowedRegex)) {
        console.log("Your password is fine");
    }

    else {
        console.log("Get a better password, scrub.");
    }
}

checkPassword(goodPassword);
checkPassword(badPassword0);
checkPassword(badPassword1);
checkPassword(badPassword2);
checkPassword(badPassword3);