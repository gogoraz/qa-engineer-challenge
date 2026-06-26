# QA Engineer Challenge

Manual and automated tests for the [User Profile Creation](https://qa-assessment.pages.dev/) form

questionnaire-for-new-recruits.docs conteins the answer from the questions.

## Test Design

I used manual test design for the main validation rules and pairwise testing for input combinations.

Pairwise testing was used to reduce the number of repeated test cases. The generated pairwise matrix contains 60 combinations. 

## Reports

### Bug Report
Documents all identified issues found during manual testing of the profile creation form. Each bug includes a description and severity level (High, Medium, Low).

### Test Cases
Manual test cases covering positive and negative scenarios for the profile creation form. Includes validation, field behavior, and form submission checks.

## Automated Tests

Built with [Playwright](https://playwright.dev/). The automated tests cover the most critical scenarios:

### Setup

```bash
npm init
npm init playwright@latest
```

### Run Tests

```bash
# Run all tests
npx playwright test

# Run with UI
npx playwright test --ui

# Run specific test file
npx playwright test tests/profile-form.spec.ts

# Auto generate tests with Codegen.
`npx playwright codegen`
```