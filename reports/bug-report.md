# Bug Report

## The password is revealed after submit.

* The URL contains all submitted fields, including the password: `password=QATEST&confirmPassword=QATEST`. Do not show form data in the URL. **High** 

## Mandatory fields

* Required validation should be added to the mandatory fields. **High**

## Missing mobile style

* The page does not have a proper mobile version/style. **High**

## Confirm Password

* The field is always showing the password. Wrong field type. It must be `type="password"`. **High**

## Gender

* Missing non-binary option. **High**
* Gender options text is bold and should be changed to regular. **Medium**
* The radio buttons are not centrally aligned with the text label on the right. **Low**

## Date of Birth

* Rename the label to `Birthday` instead of `Date ofBirth`. **Low**
* The valid date format mus be `YYYY-MM-DD` `1990-01-01`. Now we have `mm/dd/yyyy` **Medium**
* I can pick a date from the future. **High**
* The use of `(optional)` and `(mandatory)` in the field labels is not the standard practice. It is not wrong, but the users need to read more words to understand what they need to do. If this is changed with `*` in red color, it will be easier to understand which fields are required and which are not. **Low / Recommendation**
* Input "date" needs to be fixed. You can't write a date correctly from the first time. There is a bug if the month is 10, 11, or 12. You need to use the upper arrows from the keyboard to choose the correct month. If I need to write 11 and press 1, after that the focus is moving to the day and I can't write 11. The day field is the same. Can't write double-digit numbers. **High**

## Phone number

* You have to guess what format this field expects. Add a placeholder with the correct format. **Low**

## Remove `id="adminPassword"`

* After the `<form>`, there is a `<span id="adminPassword" style="display: none;">admin123 - You should not see this</span>`. This needs to be removed. **High**

## LinkedIn field

* The LinkedIn field should be optional. Instead, it is required. **High**

## LinkedIn and GitHub

* I used `https://example.com/` in the LinkedIn and GitHub fields and the form was accepted. There is no check to validate if the link is from LinkedIn/GitHub or not. **Medium**

## Submit the form

* After the form is submitted, there is no confirmation message to verify that the profile was created successfully. **Medium**

## Empty Last name

* The browser alert message says "First name must be filled out" when the Last name field is empty. This should be changed to "Last name must be filled out". **Medium**