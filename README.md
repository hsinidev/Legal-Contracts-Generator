<div align="center">
# 🚀 Legal Contracts Generator
### *Modern, High-Performance JavaScript Solution & Developer Suite*

<p align="center">
  [![Architect](https://img.shields.io/badge/Architect-Hsini%20Mohamed-0055ff?style=for-the-badge&logo=github&logoColor=white)](https://hsini.dev)
  [![Portfolio](https://img.shields.io/badge/Portfolio-hsini.dev-00c853?style=for-the-badge&logo=google-chrome&logoColor=white)](https://hsini.dev)
  [![Language](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge)](https://github.com/hsinidev)
  [![Framework](https://img.shields.io/badge/Framework-JavaScript-6366f1?style=for-the-badge)](https://github.com/hsinidev)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</p>

<img src="public/favicon.svg" alt="Legal Contracts Logo" width="120"/>

</div>

---
## 🌟 Executive Overview

**Legal Contracts Generator** is a production-grade **TypeScript** platform engineered for high reliability, clean architectural separation, and frictionless developer workflow.

## ⚡ Key Highlights & Capabilities

- **Scalable Architecture**: Modular, decoupled components adhering to clean code principles.
- **Optimized Runtime**: Ultra-fast execution with minimal memory and CPU overhead.
- **Developer Tooling**: Standardized linting, formatting, and rapid local iteration setup.
- **Production Ready**: Built-in error resilience, validation, and structured logging.

---
## 🏗️ Architecture & Technology Stack

- **Primary Language**: `TypeScript`
- **Framework / Runtime**: `JavaScript`
- **Design Pattern**: Modular Clean Architecture / Domain-Driven Design
- **License**: MIT Open Source Attribution

## 📖 Deep-Dive Technical Documentation

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

## 🤝 Contributing

Contributions are welcome! If you have suggestions for new templates, features, or improvements, please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request




**HSINI MOHAMED**

-   **GitHub:** [@hsinidev](https://github.com/hsinidev)
-   **Website:** [doodax.com](https://doodax.com)
-   **Email:** [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

---
## 🚀 Quick Start & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/hsinidev/Legal-Contracts-Generator.git
cd Legal-Contracts-Generator
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch the Application
```bash
npm run dev
```


---

## 👨‍💻 System Architect & Author

<table align="center" style="border: none; background: transparent; width: 100%;">
  <tr>
    <td align="center" width="160" style="border: none; padding: 12px;">
      <img src="https://avatars.githubusercontent.com/u/232697467?v=4" width="120" height="120" style="border-radius: 50%; box-shadow: 0 8px 24px rgba(99,102,241,0.3); border: 2.5px solid #6366f1;" alt="Hsini Mohamed" />
      <br /><br />
      <b>Hsini Mohamed</b><br />
      <sub>Morocco 🇲🇦</sub>
    </td>
    <td style="border: none; padding: 12px; vertical-align: middle;">
      <h3 style="margin-top: 0;">🚀 System Architect & Full-Stack Engineer</h3>
      <p style="font-size: 0.95rem; line-height: 1.6; color: #475569;">
        Specializing in high-performance autonomous AI systems, deterministic multi-agent swarms, enterprise cloud architecture, and modern full-stack engineering.
      </p>
      <p>
        <a href="https://hsini.dev"><img src="https://img.shields.io/badge/Portfolio-hsini.dev-2563eb?style=flat-square&logo=google-chrome&logoColor=white" alt="Portfolio" /></a>
        <a href="mailto:contact@hsini.dev"><img src="https://img.shields.io/badge/Email-contact@hsini.dev-ea4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
        <a href="https://github.com/hsinidev"><img src="https://img.shields.io/badge/GitHub-@hsinidev-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
        <a href="https://linkedin.com/in/hsinidev/"><img src="https://img.shields.io/badge/LinkedIn-hsinidev-0077b5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
      </p>
    </td>
  </tr>
</table>

---

## 📄 License & Attribution

This project is distributed under the **MIT License**. See [`LICENSE`](LICENSE) for complete terms.

<div align="center">
  <sub>⚡ Designed, architected, and maintained with engineering precision by <b><a href="https://hsini.dev">Hsini Mohamed</a></b>.</sub>
</div>
