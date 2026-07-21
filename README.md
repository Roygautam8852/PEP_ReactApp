# React Product Catalog Portal

A modern, fast, and responsive React web application built with **Vite**. The project features a custom client-side authentication system, interactive redirection alerts, and a catalog dashboard showcasing 20 products with local images and category filters. All designs are implemented using plain, standard CSS without variables for maximum compatibility.

---

## 🚀 How to Run the Project

Follow these steps to run the application locally on your machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18 or higher is recommended).

### Installation & Execution
1. Open your terminal and navigate to the project directory:
   ```bash
   cd d:/pep_reactapp
   ```
2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open the local address provided in your terminal (usually `http://localhost:5173/` or `http://localhost:5174/`) in your web browser.

---

## 🔒 Authentication Flow & Redirections
The portal includes a custom simulated authentication state to model a secure user session flow:

1. **Simulated User Database**: 
   - Managed in the parent [app.jsx](file:///d:/pep_reactapp/src/app.jsx) state.
   - Pre-loaded with a default administrator account:
     - **Email**: `admin@example.com`
     - **Password**: `password`
2. **User Not Found Redirect**:
   - If a new user attempts to log in with an email that is not in the registered list, the application displays an alert: `"User not found. Redirecting to Signup page..."`.
   - The user is automatically redirected to the **Signup** view.
3. **Registration Flow**:
   - New users fill in their Name, Email, and Password on the Signup page.
   - Upon submitting, the system appends the user to the memory state, displays an alert: `"Registration successful! Redirecting to Login..."`, and redirects the user back to the **Login** view.
4. **Successful Login**:
   - Logging in with a registered email and password triggers a `"Login successful!"` alert.
   - The user is redirected to the **Dashboard** catalog.

---

## 🛍️ Dashboard Catalog Features
Once logged in, the user enters the product catalog dashboard:
- **20 Product Items**: Displays products across categories like Food, Dairy, Groceries, Clothes, Accessories, Toys, and Footwear.
- **Local Assets**: All product images (like burgers, milk, rice, butter, watches, and running shoes) are stored locally in the `public/` directory (e.g. `/food.png`, `/milk.png`) to ensure fast loading times and network independence.
- **Category Filter Bar**: Allows the user to click category pills (e.g. "Dairy", "Groceries") to dynamically filter the product cards.
- **Interactive Ratings & Details**: Cards render star ratings, pricing, and descriptions.

---

## 📂 Project Structure

Here is the clean directory layout:

```text
pep_reactapp/
├── public/                 # Static assets (20 product images)
│   ├── food.png
│   ├── milk.png
│   └── ...
├── src/
│   ├── components/         # Subcomponents divided by module folders
│   │   ├── login/
│   │   │   ├── login.jsx   # Login page component
│   │   │   └── login.css   # Simple styling for login
│   │   ├── singup/
│   │   │   ├── singup.jsx  # Signup page component
│   │   │   └── singup.css  # Simple styling for signup
│   │   ├── dashboard/
│   │   │   ├── dashboard.jsx # Product catalog rendering
│   │   │   └── dashboard.css # Simple styling for product grid
│   │   └── navbar/
│   │       ├── navbar.jsx  # Navigation bar (right-aligned links)
│   │       └── navbar.css  # Simple styling for header
│   ├── app.jsx             # Main routing parent state component
│   ├── index.css           # Global typography & layout reset
│   └── main.jsx            # React root mount bootstrapper
├── index.html              # Main HTML skeleton
├── vite.config.js          # Vite config settings
├── package.json            # Scripts & project dependencies
└── README.md               # Documentation (this file)
```

---

## 🎨 Visual Design & Technical Choices
- **Plain CSS Layouts**: The CSS files avoid variables (`var(...)` or `:root`) and instead use standard, hardcoded CSS properties and hex values to keep the styling simple, straightforward, and readable.
- **Top-Right Navbar Items**: The Login, Signup, and Logout buttons are aligned to the right side of the navbar, leaving the left side clear for the logo branding.
- **Cosmic Dark Theme**: Built with a deep dark background (`#0d0f1a`) and contrasting card headers (`#141829`) to create a polished, state-of-the-art modern visual aesthetic.
- **Warning Free**: The code is clean of vendor-prefixes and linter warnings for a smooth development experience.
