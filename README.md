# Example Cypress-JS test automation framework

This is an example Cypress front-end test framework that uses a web page, `downloads.focusrite.com`, for demonstration. The page contains several product ranges with downloadable content for each product in the range.

## To run the tests...
Clone the repository:
```bash
git clone https://github.com/GitMe23/cypress-downloads-starter.git
```

In the same git repository, install Node package manager:
```bash
npm install
```
Run Cypress:
```bash
npm run cypress:open
```
---
Cypress should now open and ask you to choose a browser.<br><br>
Click on the downloads-range-spec option to begin running the tests.

### Example use cases...

* The user can navigate to the page of a specific product range
* The user can see the list of all products in the product range
* The user can navigate to the page of a specific product and view all available downloads
* All products should have downloadable software for either mac or windows
* The user can download the software for their operating system
