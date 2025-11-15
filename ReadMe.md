# MATCHINGENGINE Automated Assessment - Repertoire Management Module

This repository contains an end-to-end (E2E) automation assessment project built using **Cypress** and **JavaScript**. It utilizes the **Page Object Model (POM)** and data-driven testing practices to ensure robust and maintainable test scripts.

---

## 🛠️ Project Setup and Stack

| Component | Detail |
| :--- | :--- |
| **Test Runner** | Cypress (v15.5.0) |
| **Language** | JavaScript (ES6+) |
| **Architecture** | Page Object Model (POM) |
| **Key Dependencies**| `cypress`, `cypress-xpath` |
| **Base URL** | `https://www.matchingengine.com/` |

---

## 📂 Project Structure

This project adheres to a standard, clean directory structure for Cypress POM implementations:

| Folder/File | Description |
| :--- | :--- |
| `/cypress/e2e` | Contains the main test scripts (e.g., `TC001_...cy.js`). |
| `/cypress/fixtures` | Stores external data files used in tests (e.g., `expectedProductsSupported.json`). |
| `/cypress/pageObjects` | Stores classes defining element selectors and methods for each web page (POM). |
| `/cypress/support` | Houses custom Cypress commands and general support files. |
| `cypress.config.js` | Main configuration file for Cypress settings. |
| `package.json` | Project metadata, scripts, and dependency definitions. |

---

## 🎯 Test Coverage

| Test Case ID | Description |
| :--- | :--- |
| **TC001** | Navigates to the Repertoire Management Module and verifies the list of supported products against expected data. |

---

## ▶️ Getting Started

### Prerequisites

* Node.js (LTS recommended)
* npm (Node Package Manager)

### 1. Installation

1.  **Clone the repository:**
    ```bash
    git clone [Your Repository URL]
    cd MATCHINGENGINE
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```

### 2. Running Tests

To open the Cypress Test Runner locally:

```bash
npx cypress open

Select "E2E Testing," choose a browser, and click on TC001_repertoireManagementModule.cy.js to execute the tests.