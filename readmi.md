# U doma Coffee Landing

[Українська](#ukrainska-versiia) | [English](#english-version)

---

## Українська версія

### Проєкт

U doma Coffee Landing — це односторінковий сайт кав'ярні «У дома» з теплим neighborhood-стилем, м'якою анімацією та адаптивним інтерфейсом.

### Live Demo

- Сайт: https://stanislavnemch.github.io/udoma-coffee-landing/
- Репозиторій: https://github.com/stanislavNemch/udoma-coffee-landing

### Що всередині

- React 19 + TypeScript + Vite 8
- CSS Modules для компонентів
- Глобальні дизайн-токени та теми (light/dark)
- Анімації через motion
- Форма контакту з валідацією
- Підготовлений CI та автодеплой на GitHub Pages

### Розділи сторінки

- Header: логотип, перемикач теми, desktop/mobile навігація
- Hero: бренд-повідомлення, CTA, ілюстрація чашки, animated ticker
- Features: переваги кав'ярні
- Menu: категорії, позиції та ціни
- Contact: контакти, соцмережі, форма бронювання
- Footer: швидка навігація та контактний блок

### Структура проєкту

```text
src/
  features/
    header/
    hero/
    features/
    menu/
    contact/
    footer/
  shared/
    constants/
    lib/
    types/
  App.tsx
  main.tsx
  index.css
.github/
  workflows/
    ci.yml
    deploy-pages.yml
```

### Локальний запуск

```bash
npm install
npm run dev
```

### Продакшн-збірка

```bash
npm run build
npm run preview
```

### GitHub Actions

У репозиторії налаштовано два workflow:

- CI: перевірка збірки на кожен push/PR у main
- Deploy to GitHub Pages: збірка та публікація сайту з dist

Після пушу в main сайт оновлюється автоматично.

### Нотатки по контенту

- Інтерфейс і тексти адаптовано під українську локаль
- VK замінено на Viber
- Валюту в меню переведено на грн

### Roadmap

- Підключити реальний backend/API для форми замість mock-submit
- Додати SEO metadata + Open Graph
- Додати favicon set і web app manifest
- Пройти Lighthouse аудит та доопрацювати accessibility

---

## English Version

### Overview

U doma Coffee Landing is a single-page coffee shop website with a warm neighborhood tone, polished animations, and responsive layout.

### Live Demo

- Website: https://stanislavnemch.github.io/udoma-coffee-landing/
- Repository: https://github.com/stanislavNemch/udoma-coffee-landing

### Tech Stack

- React 19 + TypeScript + Vite 8
- CSS Modules for component-scoped styling
- Global design tokens and light/dark themes
- Motion-based animations
- Contact form with client-side validation
- Ready-to-use CI and GitHub Pages deployment

### Page Sections

- Header: brand, theme toggle, desktop/mobile navigation
- Hero: key message, CTAs, coffee cup illustration, animated ticker
- Features: value propositions
- Menu: categories, items, and prices
- Contact: details, social links, reservation form
- Footer: quick navigation and final contact block

### Project Structure

```text
src/
  features/
    header/
    hero/
    features/
    menu/
    contact/
    footer/
  shared/
    constants/
    lib/
    types/
  App.tsx
  main.tsx
  index.css
.github/
  workflows/
    ci.yml
    deploy-pages.yml
```

### Local Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### GitHub Actions

Two workflows are configured:

- CI: build verification on every push/PR to main
- Deploy to GitHub Pages: build and publish the dist output

Every push to main triggers an automatic website update.

### Content Notes

- UI copy localized for Ukrainian audience
- VK replaced by Viber
- Menu prices switched to UAH format (грн)

### Roadmap

- Replace mock form submit with a real API endpoint
- Add SEO metadata and Open Graph tags
- Add full favicon set and web app manifest
- Run Lighthouse and improve accessibility scores
