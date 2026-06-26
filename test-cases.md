# Test Cases

## TC-001 - Submit form with valid mandatory fields

**Priority:** High
**Type:** Positive

**Description:**
Verify that the form submits successfully when all required fields are filled with valid data. This test also covers several known issues: LinkedIn is marked optional but is required, Confirm password field shows the password as plain text, the success message disappears immediately, and the URL exposes all submitted data including the password.

**Preconditions:**
The user is on the profile creation page.

**Test Data:**

* First name: `Gogi`
* Last name: `Blag`
* Email: `gogi.blag@example.com`
* Password: `Test@1234`
* Confirm password: `Test@1234`
* LinkedIn URL: `https://www.linkedin.com/in/gogi-blag`

**Steps:**

1. Open the profile creation page.
2. Fill all mandatory fields with valid data.
3. Leave optional fields empty.
4. Submit the form.
5. Check if a success message appears.
6. Check the URL after submit.
7. Check the Confirm password field — is the value visible as plain text?

**Expected result:**
Form submits without errors. A confirmation message appears and stays visible. The URL should not contain any form data. The Confirm password field should hide the entered value.

---

## TC-002 - Submit form with empty mandatory fields

**Priority:** High
**Type:** Negative

**Description:**
All mandatory fields are left empty. Form should block submission.

**Preconditions:**
The user is on the profile creation page.

**Test Data:**

* First name: `empty`
* Last name: `empty`
* Email: `empty`
* Password: `empty`
* Confirm password: `empty`

**Steps:**

1. Open the profile creation page.
2. Leave all mandatory fields empty.
3. Submit the form.

**Expected result:**
Form does not submit. A browser alert appears for the first empty mandatory field. Ideally, the input elements should have required validation in the DOM.

---

## TC-003 - First name should accept only letters

**Priority:** High
**Type:** Negative

**Description:**
Ensure the First name field rejects numbers and special characters.

**Preconditions:**
The user is on the profile creation page.

**Test Data:**

* First name: `G0gi!`
* Last name: `Blag`
* Email: `gogi.blag@example.com`
* Password: `Test@1234`
* Confirm password: `Test@1234`
* LinkedIn URL: `https://www.linkedin.com/in/gogi-blag`

**Steps:**

1. Open the profile creation page.
2. Enter numbers or symbols in the First name field.
3. Fill the other mandatory fields with valid data.
4. Submit the form.

**Expected result:**
Form does not submit. First name field shows a browser alert

---

## TC-004 - Last name should accept only letters

**Priority:** High
**Type:** Negative

**Description:**
Validate that the Last name field does not accept numbers or symbols.

**Preconditions:**
The user is on the profile creation page.

**Test Data:**

* First name: `Gogi`
* Last name: `Bl4g#`
* Email: `gogi.blag@example.com`
* Password: `Test@1234`
* Confirm password: `Test@1234`
* LinkedIn URL: `https://www.linkedin.com/in/gogi-blag`

**Steps:**

1. Open the profile creation page.
2. Enter numbers or symbols in the Last name field.
3. Fill the other mandatory fields with valid data.
4. Submit the form.

**Expected result:**
Form does not submit. A browser alert appears, but the message incorrectly refers to the First name field instead of Last name.

---

## TC-005 - Email should accept only valid email format

**Priority:** High
**Type:** Negative

**Description:**
Check that an invalid email format is rejected by the form.

**Preconditions:**
The user is on the profile creation page.

**Test Data:**

* First name: `Gogi`
* Last name: `Blag`
* Email: `not-an-email`
* Password: `Test@1234`
* Confirm password: `Test@1234`
* LinkedIn URL: `https://www.linkedin.com/in/gogi-blag`

**Steps:**

1. Open the profile creation page.
2. Enter an invalid email address in the Email field.
3. Fill the other mandatory fields with valid data.
4. Submit the form.

**Expected result:**
Form does not submit. Validation error appears for the Email field.

---

## TC-006 - Confirm password should match password

**Priority:** High
**Type:** Negative

**Description:**
Ensure the form is blocked when the Confirm password does not match the Password field.

**Preconditions:**
The user is on the profile creation page.

**Test Data:**

* First name: `Gogi`
* Last name: `Blag`
* Email: `gogi.blag@example.com`
* Password: `Test@1234`
* Confirm password: `WrongPass!9`
* LinkedIn URL: `https://www.linkedin.com/in/gogi-blag`

**Steps:**

1. Open the profile creation page.
2. Fill all mandatory fields with valid data.
3. Enter a different value in the Confirm password field.
4. Submit the form.

**Expected result:**
Form does not submit. Browser alert aper "Passwords do not match".

---



## TC-007 - Gender should include "male," "female," "non-binary," or "prefer not to say"

**Priority:** High
**Type:** Negative

**Description:**
Check if all required gender options are available on the page.

**Preconditions:**
The user is on the profile creation page.

**Test Data:**

* Expected gender options: male, female, non-binary, prefer not to say

**Steps:**

1. Open the profile creation page.
2. Check the Gender field options.

**Expected result:**
All four options are present: male, female, non-binary, prefer not to say.

**Actual result:**
Only Tree are  present: male, female and prefer not to say. "non-binary" is missing.
---

## TC-008 - Phone number should not accept more than 10 digits

**Priority:** Medium
**Type:** Negative

**Description:**
Validate that the Phone field rejects input longer than 10 digits.

**Preconditions:**
The user is on the profile creation page.

**Test Data:**

* First name: `Gogi`
* Last name: `Blag`
* Email: `gogi.blag@example.com`
* Password: `Test@1234`
* Confirm password: `Test@1234`
* LinkedIn URL: `https://www.linkedin.com/in/gogi-blag`
* Phone number: `12345678901`

**Steps:**

1. Open the profile creation page.
2. Fill all mandatory fields with valid data.
3. Enter 11 digits in the Phone number field.
4. Submit the form.

**Expected result:**
Form does not submit. Phone number field shows a validation error.

---

## TC-009 - Phone number should accept valid input

**Priority:** Medium
**Type:** Positive

**Description:**
Verify that the Phone field accepts a valid number within the allowed length.

**Preconditions:**
The user is on the profile creation page.

**Test Data:**

* First name: `Gogi`
* Last name: `Blag`
* Email: `gogi.blag@example.com`
* Password: `Test@1234`
* Confirm password: `Test@1234`
* LinkedIn URL: `https://www.linkedin.com/in/gogi-blag`
* Phone number: `1`

**Steps:**

1. Open the profile creation page.
2. Fill all mandatory fields with valid data.
3. Enter a single digit in the Phone number field.
4. Submit the form.

**Expected result:**
Form submits without errors. Phone number field accepts the value.

**Actual result:**
The form shows a format validation error — this is a bug.

---

## TC-012 - LinkedIn should accept only LinkedIn profile URLs

**Priority:** Medium
**Type:** Negative

**Description:**
Check that non-LinkedIn URLs are rejected in the LinkedIn field.

**Preconditions:**
The user is on the profile creation page.

**Test Data:**

* First name: `Gogi`
* Last name: `Blag`
* Email: `gogi.blag@example.com`
* Password: `Test@1234`
* Confirm password: `Test@1234`
* LinkedIn URL: `https://example.com/`

**Steps:**

1. Open the profile creation page.
2. Fill all mandatory fields with valid data.
3. Enter a non-LinkedIn URL in the LinkedIn field.
4. Submit the form.

**Expected result:**
Form does not submit. LinkedIn field shows a validation error. 

**Actual result:**
Form submits successfully. No validation error appears.

---

## TC-013 - GitHub should accept only GitHub profile URLs

**Priority:** Medium
**Type:** Negative

**Description:**
Ensure non-GitHub URLs are not accepted in the GitHub field.

**Preconditions:**
The user is on the profile creation page.

**Test Data:**

* First name: `Gogi`
* Last name: `Blag`
* Email: `gogi.blag@example.com`
* Password: `Test@1234`
* Confirm password: `Test@1234`
* LinkedIn URL: `https://www.linkedin.com/in/gogi-blag`
* GitHub URL: `https://example.com/`

**Steps:**

1. Open the profile creation page.
2. Fill all mandatory fields with valid data.
3. Enter a non-GitHub URL in the GitHub field.
4. Submit the form.

**Expected result:**
Form does not submit. GitHub field shows a validation error.

**Actual result:**
Form submits successfully. No validation error appears.