# Wingman Academies Website

這是一個使用 React + Material-UI + Tailwind CSS 建立的 Wingman Academies 官方網站。

## 技術棧

- React 18
- Material-UI (MUI) 5
- Tailwind CSS 3
- React Router DOM 6

## 安裝

```bash
npm install
```

## 運行開發服務器

```bash
npm start
```

應用將在 [http://localhost:3000](http://localhost:3000) 運行。

## 頁面結構

- `/` - Launch Page (首頁)
- `/home` - Home Page
- `/story` - Our Story Page
- `/flying` - Pilot Pathway & Fleet Page
- `/theory` - Ground School Theory Page
- `/experiences` - Experiences Page

## 項目結構

```
src/
  ├── components/     # 共享組件
  │   ├── Header.js
  │   └── Footer.js
  ├── pages/         # 頁面組件
  │   ├── LaunchPage.js
  │   ├── HomePage.js
  │   ├── StoryPage.js
  │   ├── FlyingPage.js
  │   ├── TheoryPage.js
  │   └── ExperiencesPage.js
  ├── App.js         # 主應用組件
  ├── index.js       # 入口文件
  └── index.css      # 全局樣式
```

## 構建生產版本

```bash
npm run build
```

## 注意事項

- 圖片目前使用 Unsplash 的佔位圖片，您需要替換為實際的圖片
- 聯繫信息和社交媒體鏈接需要根據實際情況更新
- 某些功能（如聯繫表單）需要進一步實現


