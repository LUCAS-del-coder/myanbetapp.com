# Myanmar Casino Landing Page

這是緬甸賭場的登陸頁面，部署在 Railway 上。

## 🚀 部署到 Railway

### 方法 1: 使用 Railway CLI

1. 安裝 Railway CLI:
```bash
npm i -g @railway/cli
```

2. 登入 Railway:
```bash
railway login
```

3. 初始化專案:
```bash
railway init
```

4. 部署:
```bash
railway up
```

### 方法 2: 使用 GitHub 連接

1. 將此專案推送到 GitHub
2. 在 Railway 控制台創建新專案
3. 選擇 "Deploy from GitHub repo"
4. 選擇您的倉庫
5. Railway 會自動檢測並部署

### 方法 3: 使用 Railway Web UI

1. 前往 [Railway](https://railway.app)
2. 點擊 "New Project"
3. 選擇 "Deploy from GitHub repo" 或 "Empty Project"
4. 如果選擇 Empty Project，使用 Railway CLI 連接:
```bash
railway link
```

## 📝 環境變數

目前不需要環境變數，但如果您之後需要，可以在 Railway 控制台的 Variables 標籤中設置。

## 🔗 更換連結

請參考 `連結說明.md` 文件來了解如何更換連結。

## 📁 檔案結構

- `index.html` - 主頁面文件
- `server.js` - Express 服務器
- `package.json` - Node.js 依賴配置
- `railway.json` - Railway 部署配置
- `links-config.js` - 連結配置文件（可選）
- `連結說明.md` - 連結更換說明

## 🛠️ 本地開發

```bash
npm install
npm start
```

服務器將在 http://localhost:3000 運行

