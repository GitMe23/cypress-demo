# QA Engineer Interview

The purpose of these tasks is to evaluate your ability to write effective and comprehensive test cases and assess your general understanding of ensuring software product quality.

You are going to be writing Cypress tests for the `downloads.focusrite.com` page. This is a page which contains all the downloadable content related to focusrite products.

This is a skeleton repository which includes an example test accessing `downloads.focusrite.com` It's important to understand that while the requirements for each task are outlined, we expect you to handle edge cases, validations, and potential pitfalls.

You're encouraged to use Google or any other resources you typically rely on in your daily work. For each of the tasks, aim to write one or multiple Cypress test cases which address the provided use cases.

Good luck!

## To run the tests

```bash
npm install
npm run cypress:open
```

---

## Task 1: Testing the Product Range Page

**Use Case:** As a user, I want to find my product on the downloads page

### Requirements

1. The user can navigate to the page of a specific product range
2. The user can see the list of all products in the product range

## Task 2: Testing the Downloads

**Use Case:** As a user, I want to download the available software for my product

### Requirements

1. The user can navigate to the page of a specific product and view all available downloads
2. All products should have downloadable software for either mac or windows
3. The user can download the software for their operating system
