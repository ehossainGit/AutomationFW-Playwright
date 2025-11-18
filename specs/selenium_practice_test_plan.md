# Selenium Practice Page — Test Plan

URL: https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php

## Executive summary

This document contains a concise, shareable test plan for validating the Name, Email, Gender and Login button and associated error messages on the Selenium Practice page hosted at the URL above.

Goal: Verify presence, basic functionality and validation behavior for the Name and Email inputs, Gender selection (radio buttons), and the Login button (click behavior and error messages). Tests assume a fresh browser session and the page fully loaded.

Assumptions
- Tests start from a fresh/blank browser context with no pre-filled form data.
- The page is reachable and fully loaded before each scenario starts.
- If the page UI uses different labels or IDs, testers should prefer visible text (labels/placeholders) or semantic selectors (role, name) over brittle IDs.

Success criteria
- All controls (Name, Email, Gender radios, Login button) are present and interactable.
- Email validation rejects malformed emails and accepts valid emails.
- Login action triggers appropriate success or error responses; when required fields are missing, an error message is shown.

Failure conditions
- Any required control is missing or not interactable.
- Email accepted when invalid, or valid email rejected.
- No visible error when clicking Login with required fields empty.

## Selector guidance (use visible-label-first strategy)
Prefer queries that target visible text or semantic roles. Example selectors to try:

- Name input: input[placeholder*="Name"] OR input[name="name"] OR input#name
- Email input: input[type="email"] OR input[name*="email"] OR input#email
- Gender radios: input[type="radio"][name*="gender"] OR label:has-text("Male") / label:has-text("Female")
- Login button: button:has-text("Login") OR input[type="submit"]:has-text("Login") OR button[type="button"]:has-text("Submit")
- Error message: element containing visible error text such as "Please enter" or near the field label; query by role=alert if present

If tests use Playwright, prefer page.getByLabel("Name") and page.getByRole("button", { name: /login/i }) when possible.

---

## Test scenarios

### 1. Presence and basic interaction — Name field

Objective: Verify the Name field is visible, can accept text, and clears/retains text as expected.

Assumptions: Fresh page load.

Steps:
1. Navigate to the URL.
2. Locate the Name input using label text "Name" or a visible placeholder.
3. Click the Name input and type: "Alice Tester".
4. Verify the input's value equals "Alice Tester".
5. Clear the input (select all + delete) and verify the field is empty.

Expected result:
- Step 2: Name input is visible and enabled.
- Step 4: Value matches the typed text.
- Step 5: Field is empty after clearing.

Success criteria: Tester can type and clear the Name field. Failure: field missing, readonly, or value not set.

---

### 2. Email validation — valid email accepted

Objective: Verify a well-formed email is accepted by the form and does not produce a client-side validation error.

Assumptions: Fresh page load.

Steps:
1. Navigate to the URL.
2. Locate the Email input (prefer input[type="email"] or label "Email").
3. Type a valid email: "test.user@example.com".
4. Move focus away from the field (click another element) to trigger any inline validation.
5. Verify no client-side error message appears for the email field.

Expected result:
- No validation error for the valid email.

Success criteria: Form accepts the email and does not show validation errors. Failure: page shows an "invalid email" or similar error.

Edge cases:
- Long email addresses near typical length limits.
- Internationalized emails (if supported).

---

### 3. Email validation — invalid email rejected

Objective: Verify malformed emails produce a validation error.

Assumptions: Fresh page load.

Steps:
1. Navigate to the URL.
2. Locate the Email input.
3. Type an invalid email: "not-an-email".
4. Move focus away from the field.
5. Verify an inline error message is shown or the browser reports invalid input (e.g., HTML5 constraint validation) when trying to submit.
6. (Optional) Attempt to click the Login/Submit button and verify submission is blocked or an alert/error appears.

Expected result:
- A visible error message (or browser validation indicator) that indicates the email is invalid, and the form should not submit.

Success criteria: Invalid format prevented or flagged. Failure: invalid email allowed through silently.

---

### 4. Gender selection (radio) behavior

Objective: Verify gender radio buttons are present and mutually exclusive.

Assumptions: Fresh page load.

Steps:
1. Navigate to the URL.
2. Locate Gender options (labels: "Male", "Female", and/or others).
3. Select "Male" and verify its radio becomes checked.
4. Select "Female" and verify "Male" becomes unchecked and "Female" is checked.

Expected result:
- Radio buttons are visible and only one can be selected at a time.

Success criteria: Radios behave like exclusive choices. Failure: multiple radios can be checked or radios missing.

Edge cases:
- No default selection: verify expected behavior (explicit requirement may vary).

---

### 5. Login button presence, click behavior, and error handling

Objective: Verify the Login button exists, triggers submission, and produces error messages when required fields are missing.

Assumptions: Fresh page load.

Steps:
1. Navigate to the URL.
2. Locate the Login button by visible text ("Login" or "Submit").
3. Verify the button is visible and enabled.
4. Click Login with both Name and Email empty.
5. Observe whether an error message appears on the page or browser HTML5 validation prevents submission.
6. Fill Name but leave Email empty; click Login and verify an error message appears for Email.
7. Fill Email with invalid value; click Login and verify validation prevents success and shows an error.
8. Fill Name and a valid Email and select a Gender; click Login and observe the post-click result (success message, page navigation, or positive side effect).

Expected results:
- Step 4/5: An error message should inform the user that required fields are missing.
- Steps 6/7: Validation must be specific to the missing/invalid field.
- Step 8: With valid inputs the form should accept the submission or perform the expected action (this may be a demo action on the practice page).

Success criteria: Login button triggers validation and submission only when form is valid. Failure: no validation, submission with missing required fields, or no feedback.

Notes: On some demo practice pages, clicking the demo submit may not perform a real server-side login but still should show client-side validation.

---

## Negative & boundary tests (shortlist)

1. Very long Name value (2k chars) — observe truncation or errors.
2. Empty Name, valid Email — clicking Login should show Name-required error if Name is required.
3. Email with spaces, or Unicode characters — verify handling.
4. Rapid toggling of Gender radios — ensure state stability.
5. Submit while network offline (if the form performs a network call) — observe graceful error handling.

## Test data examples

- Valid name: "Alice Tester"
- Valid email: "test.user@example.com"
- Invalid email: "user@domain" or "not-an-email"

## How to run (recommended for manual testing)

1. Open a fresh browser profile (incognito) and navigate to the page.
2. Follow each scenario independently.
3. Record actual vs expected outcomes and capture DOM selector evidence when behavior deviates from expected.

## Automation notes (Playwright)

- Use `page.getByLabel('Name')`, `page.getByLabel('Email')`, `page.getByRole('radio', { name: /male/i })` and `page.getByRole('button', { name: /login|submit/i })` where available.
- Assert error messages using `page.getByRole('alert')` or by checking visible text near inputs.
- Prefer tests that are idempotent; reset page between scenarios.

---

## Completion & next steps

- This file contains a complete set of manual and automation-ready scenarios for verifying Name, Email, Gender and Login behavior on the practice page.
- Next: I can convert these into Playwright `.spec.ts` files with concrete selectors and automated assertions. If you want, I can create those tests and run them locally.




