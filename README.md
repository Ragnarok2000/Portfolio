# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

# 🧑‍💻 Abhay's Portfolio

Welcome to my personal portfolio website! Built with React, this project showcases my skills, experience, and contact information in a clean, responsive layout.

## 🚀 Live Demo

[Visit Portfolio](https://ragnarok2000.github.io/Portfolio)

## 📦 Tech Stack

- React
- React Router DOM
- React Anchor Link Smooth Scroll
- CSS (Responsive design)
- Web3Forms (for contact form handling)
- Git & GitHub

## 📄 Features

- Responsive contact form with Web3Forms integration
- Mobile-friendly layout with smooth scroll navigation
- Interactive hover effects and transitions
- Easy to customize and extend

## 📬 Contact Form Integration

This portfolio uses [Web3Forms](https://web3forms.com) to handle form submissions without a backend.

### Setup

1. Go to [Web3Forms](https://web3forms.com) and get your access key.
2. Add this to your form:

```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
  <!-- other form fields -->
</form>
