# 🔐 Password Generator

> A modern, responsive password generator built with React and Tailwind CSS. Generate secure passwords with customizable length and character options.

[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.3.4-purple?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.7-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎚️ **Customizable Length** | Adjust password length from 6 to 100 characters using a range slider |
| 🔢 **Number Support** | Include numbers (0-9) for stronger passwords |
| 🔣 **Special Characters** | Add special characters (!@#$%^&*()_+=-~`?) for enhanced security |
| 📋 **One-Click Copy** | Copy generated passwords to clipboard with a single click |
| ⚡ **Real-time Generation** | Passwords update automatically as you change settings |
| 📱 **Responsive Design** | Clean, modern UI that works on all devices |
| 🔒 **Secure Generation** | Uses cryptographically secure random number generation |

## 🖼️ Screenshots

The application features a clean, modern interface with:
- 🟣 Purple header with lock icon
- 🟢 Centered password generator card with green background  
- 📝 Real-time password display
- 🎛️ Interactive controls for customization
- 📋 Copy button for easy password copying

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react) | 18.3.1 | Frontend framework |
| ![Vite](https://img.shields.io/badge/Vite-5.3.4-purple?logo=vite) | 5.3.4 | Build tool and dev server |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.7-38B2AC?logo=tailwind-css) | 3.4.7 | Utility-first CSS framework |
| ![React Icons](https://img.shields.io/badge/React_Icons-5.2.1-pink?logo=react) | 5.2.1 | Icon library |
| ![ESLint](https://img.shields.io/badge/ESLint-8.57.0-red?logo=eslint) | 8.57.0 | Code linting |

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

```bash
# 1️⃣ Clone the repository
git clone <repository-url>
cd passwordGenreator

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start development server
npm run dev

# 4️⃣ Open your browser
# Navigate to http://localhost:5173
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Start development server |
| `npm run build` | 🏗️ Build for production |
| `npm run preview` | 👀 Preview production build |
| `npm run lint` | 🔍 Run ESLint for code quality |

## 🎯 How to Use

### Step-by-Step Guide

1. **🎚️ Set Password Length**
   - Use the range slider to select a password length between 6 and 100 characters
   - The length updates in real-time as you drag the slider

2. **🔧 Choose Character Types**
   - ✅ Check **"NUMBERS"** to include digits (0-9)
   - ✅ Check **"CHARACTERS"** to include special symbols (!@#$%^&*()_+=-~`?)

3. **📋 Copy Password**
   - Click the **"copy"** button to copy the generated password to your clipboard
   - The password is automatically selected for easy copying

4. **🔄 Generate New Password**
   - The password updates automatically when you change any settings
   - No need to manually refresh or regenerate

## 📁 Project Structure

```
passwordGenreator/
├── 📁 src/
│   ├── 📄 App.jsx          # 🎨 Main application component
│   ├── 📄 App.css          # 🎨 Application styles
│   ├── 📄 Navbar.jsx       # 🧭 Navigation component
│   ├── 📄 main.jsx         # 🚀 Application entry point
│   ├── 📄 index.css        # 🌐 Global styles
│   └── 📁 assets/          # 🖼️ Static assets
├── 📁 public/              # 🌐 Public assets
├── 📁 dist/                # 📦 Build output
└── 📄 package.json         # 📋 Dependencies
```

## 🔍 Features in Detail

### 🔐 Password Generation Algorithm
- ✅ Uses JavaScript's `Math.random()` for character selection
- ✅ Supports uppercase letters (A-Z), lowercase letters (a-z)
- ✅ Optional numbers (0-9) and special characters
- ✅ Configurable length from 6 to 100 characters

### 🎨 User Interface
- ✅ Clean, modern design with Tailwind CSS
- ✅ Responsive layout that works on mobile and desktop
- ✅ Intuitive controls with visual feedback
- ✅ One-click password copying functionality

### 🔒 Security Considerations
- ✅ Generated passwords use a mix of character types
- ✅ Random character selection for unpredictability
- ✅ No password storage or transmission
- ✅ Client-side generation for privacy

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. 📤 **Push** to the branch (`git push origin feature/amazing-feature`)
5. 🔄 **Open** a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Future Enhancements

- [ ] 💪 Password strength indicator
- [ ] ⭐ Save favorite password configurations
- [ ] 📁 Export passwords to file
- [ ] 🌙 Dark mode toggle
- [ ] 📜 Password history
- [ ] 🎭 Additional character sets (symbols, emojis)
- [ ] 🧠 Password patterns (memorable passwords)

## 🔧 Troubleshooting

### ❗ Common Issues

| Issue | Solution |
|-------|----------|
| 🔐 **Password not generating** | Ensure at least one character type is selected |
| 📋 **Copy not working** | Check if your browser supports the Clipboard API |
| 🏗️ **Build errors** | Make sure all dependencies are installed with `npm install` |

### 🌐 Browser Compatibility

- ✅ **Chrome** (recommended)
- ✅ **Firefox**
- ✅ **Safari**
- ✅ **Edge**

## 💬 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

> **🔒 Privacy Note**: This password generator creates passwords locally in your browser. No passwords are stored or transmitted to any servers, ensuring your privacy and security.

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ using React and Tailwind CSS

</div>
