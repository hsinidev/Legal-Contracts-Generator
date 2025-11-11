# 📄 Legal Contracts: AI-Powered Document Generator

<div align="center">
  <img src="public/favicon.svg" alt="Legal Contracts Logo" width="120"/>
</div>

<h3 align="center">
  Instantly create, customize, and download professional legal agreement templates with a secure, client-side, AI-enhanced experience.
</h3>

<p align="center">
  <a href="#" target="_blank"><strong>View Live Demo »</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License">
</p>

<!-- PROJECT SCREENSHOT -->
<div align="center">
  <!-- Placeholder for a project screenshot or GIF -->
  <img src="https://via.placeholder.com/800x450.png?text=Legal+Contracts+App+Screenshot" alt="Project Screenshot">
</div>

---

**Legal Contracts** is a modern web application designed to empower freelancers, startups, and small businesses by simplifying the creation of essential legal documents. It features a vast gallery of over 100 templates, an intuitive form, AI-powered assistance for complex sections, and a guarantee of privacy with 100% client-side document generation.

## Table of Contents

- [✨ Key Features](#-key-features)
- [⚙️ How It Works](#️-how-it-works)
- [📁 Project Structure](#-project-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#️-getting-started)
- [⚖️ Legal Disclaimer](#️-legal-disclaimer)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [✍️ Author](#️-author)

## ✨ Key Features

-   ** expansive Template Gallery:** Choose from over 100 meticulously categorized templates, from corporate and HR to intellectual property and real estate.
-   **🤖 AI-Powered Drafting:** Overcome writer's block. Automatically generate a detailed "Scope of Work" from a simple description using the integrated AI assistant.
-   **🔒 Absolute Privacy:** Your data is yours. All document generation happens directly in your browser. No data is ever sent to or stored on a server.
-   **📄 Instant DOCX Download:** Generate and download your customized agreement as a universally compatible Microsoft Word (.docx) file, ready for review and signing.
-   **🔍 Smart Dynamic Forms:** The user interface intelligently adapts, showing only the fields relevant to your selected document for a clean, uncluttered experience.
-   **📱 Fully Responsive UI:** A seamless, professional experience across desktop, tablet, and mobile devices, wrapped in an immersive and comfortable cosmic theme.
-   **📚 Rich Informational Resources:** Access built-in modals with a comprehensive guide to boilerplate documents, a full FAQ, and clear terms of service.

## ⚙️ How It Works

Creating your document is a simple, three-step process:

1.  **🔎 Select Your Template:**
    -   Browse the extensive gallery or use the real-time search bar to find the perfect legal document for your needs.

2.  **✍️ Fill in the Details:**
    -   Complete the guided form with the required information (e.g., party names, dates, amounts).
    -   For relevant contracts, use the **"Generate with AI"** button to draft a comprehensive Scope of Work.

3.  **⬇️ Generate & Download:**
    -   Click the **"Generate & Download DOCX"** button. The application will instantly merge your inputs with the template and trigger a download of the finished document.

## 📁 Project Structure

The project is organized with a clean and scalable structure to make development and maintenance straightforward.

```
/
├── public/
│   ├── templates/      # Over 100 SVG icons for the template gallery
│   └── favicon.svg     # Application favicon
├── components/
│   ├── ContractForm.tsx # Main component with gallery and form logic
│   ├── Layout.tsx       # Main layout with header, footer, and modals
│   └── Modal.tsx        # Reusable modal component
├── constants/
│   ├── SeoArticle.ts    # Content for the SEO guide
│   └── TemplateData.ts  # All template metadata and boilerplate text
├── services/
│   └── DocxGenerator.ts # Simulated DOCX generation logic
├── types.ts             # Shared TypeScript types and enums
├── App.tsx              # Root application component
├── index.html           # Main HTML entry point
└── ...
```

## 🛠️ Tech Stack

This project is built with a modern, robust, and scalable technology stack:

| Category      | Technology                                                                          |
|---------------|-------------------------------------------------------------------------------------|
| **Frontend**  | [React 18](https://reactjs.org/)                                                    |
| **Language**  | [TypeScript](https://www.typescriptlang.org/)                                       |
| **Styling**   | [Tailwind CSS](https://tailwindcss.com/)                                            |
| **AI**        | [@google/genai](https://www.npmjs.com/package/@google/genai) (for Gemini API)         |
| **Docs**      | Client-side JavaScript (Blob API)                                                   |

## 🚀 Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/legal-contracts-generator.git
    cd legal-contracts-generator
    ```

2.  **Install dependencies:**
    This project uses a standard web setup. You will need a local server to run it. If you have Node.js, you can use `npx`:
    ```bash
    # Install a simple server like 'serve' if you don't have one
    npm install -g serve
    ```

3.  **Set up your API Key:**
    To use the AI generation feature, you need a Gemini API key. This project assumes the key is available as `process.env.API_KEY`. You will need to configure this in your local environment.

4.  **Run the application:**
    ```bash
    serve .
    ```
    The application will be available at `http://localhost:3000` (or another port if 3000 is in use).

## ⚖️ Legal Disclaimer

> [!WARNING]
> This tool is provided "as is" without any warranties, express or implied. The generated documents are **templates** and should **not** be considered a substitute for advice from a licensed legal professional. The creators of Legal Contracts are not liable for any damages or losses arising from the use of this software. You are solely responsible for ensuring any legal document you create is appropriate and legally sound for your situation.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for new templates, features, or improvements, please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is distributed under the MIT License.

## ✍️ Author

**HSINI MOHAMED**

-   **GitHub:** [@hsinidev](https://github.com/hsinidev)
-   **Website:** [doodax.com](https://doodax.com)
-   **Email:** [hsini.web@gmail.com](mailto:hsini.web@gmail.com)
