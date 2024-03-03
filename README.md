## Color Picker Extension for Chromium based browser (Google Chrome, Microsoft Edge, Opera mini) - Using in Development Mode

This README provides instructions on how to use the color picker Chrome extension in development mode. 

### Prerequisites

* **Git**: [https://git-scm.com/downloads](https://git-scm.com/downloads)
* **Node.js & npm**: [https://nodejs.org/en](https://nodejs.org/en)
* **Google Chrome browser**

### Steps

1. **Clone the Repository:**

   Open your terminal and navigate to your desired directory. 
   Replace `<username>` with your GitHub username and run the following command:

   ```bash
   git clone https://github.com/<username>/<repository-name>.git
   ```

   Replace `<repository-name>` with the actual name of the color picker Chrome extension you want to use.

2. **Load the Extension in Development Mode:**

   * Open Google Chrome.
   * Go to **chrome://extensions**.
   * Enable **Developer mode** by clicking the toggle switch in the top right corner.
   * Click **Load unpacked**.
   * Select the folder containing the extension's code (usually the root folder of the cloned repository).

3. **Run the Extension:**

   Navigate to any webpage in Chrome.
   The extension should be active and ready for use (specific instructions might vary depending on the extension's implementation).

**Additional Notes:**

* You can modify the extension's code in the cloned repository and reload it in Chrome to see your changes reflected.
* Remember to disable developer mode and install the extension from the Chrome Web Store for regular use.

**Disclaimer:**

These instructions are generic and might need adjustments depending on the specific color picker Chrome extension you choose. Refer to the extension's documentation for specific details and functionalities.