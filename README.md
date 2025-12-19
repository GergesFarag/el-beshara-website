# El Beshara Studio — Website & Admin Dashboard

El Beshara is a **modern, multi-language web platform** built for **El Beshara Studio** to professionally showcase its brand, services, and media portfolio, with a **full-featured admin dashboard** for managing all content dynamically.

The project combines a **high-performance public website** with a **powerful admin system**, allowing full control over images, videos, reels, services, promotions, and studio data.

---

## ✨ Project Overview

**El Beshara Studio Website** is designed to:

- Present the studio identity and brand professionally
- Showcase high-quality **images, videos, and reels**
- Support **Arabic & English** languages
- Provide a **secure admin dashboard** for content management
- Scale easily with a modern Next.js architecture

---

## 🚀 Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS / PostCSS
- Redux Toolkit

### Media & Assets
- Cloudinary (images, videos, transformations)
- Next.js Image Optimization

### Localization
- next-intl
- Arabic (RTL) & English (LTR) support

### Deployment
- Vercel (recommended)
- Environment-based configuration

---

## 🧩 Key Features

### 🌍 Public Website
- Home, About, Services, Gallery, and Contact pages
- Media galleries for:
  - Images
  - Videos
  - Reels
- Studio profile & branding
- Fully responsive and SEO-friendly design

---

### 🛠 Admin Dashboard
Admins can fully control the website content through a dedicated dashboard:

- Manage Images
- Manage Videos & Reels
- Manage Services & Categories
- Manage Promotions
- Update Studio Information
- Multi-language content support

Admin routes are located under:

```text
src/app/admin
```

---

### 🌐 Multi-language (i18n)
- Translation files stored in `messages`
- Centralized text and validation localization
- Automatic RTL / LTR direction handling

---


## 🧪 Available Scripts

```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run linting
```

---

## 🖥 Local Development

```bash
git clone https://github.com/marinaeleshaa/el-beshara-website.git
cd el-beshara-website
npm install
npm run dev
```

Open:
https://el-beshara-studio.vercel.app

---

## ☁️ Deployment

### Recommended: Vercel
- Zero-config deployment for Next.js
- Automatic builds and preview deployments
- Environment variables managed via dashboard

### Alternatives
- Docker-based deployment
- Any Node.js-compatible hosting provider

---

## 🔐 Security Notes

- Admin routes are protected
- Sensitive keys are server-side only
- Use environment variables for secrets
- Rotate keys if accidentally exposed

---

## 🔮 Future Improvements

- CI/CD with GitHub Actions
- Role-based admin permissions
- Analytics dashboard
- Media performance optimizations
- Component documentation / Storybook
- Automated testing (unit & e2e)

---

## 👩‍💻 Author

**Marina Eleshaa**  
Frontend Developer  
GitHub: https://github.com/marinaeleshaa

---

## 📄 License

No license specified yet.  
MIT License is recommended for open-source usage.
