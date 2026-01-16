# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Your portfolio code ready

## 🔧 Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Repository name: `portfolio` or `kranthi-katamouni-portfolio` (or your preferred name)
4. Description: "AI Engineer Portfolio Website"
5. Choose **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README (you already have one)
7. Click **"Create repository"**

### Step 2: Initialize Git and Push Code

Open terminal/command prompt in your project folder:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Add remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** section (left sidebar)
4. Under **"Source"**:
   - Select **"main"** branch
   - Select **"/ (root)"** folder
5. Click **"Save"**
6. Wait 1-2 minutes for GitHub to build your site

### Step 4: Access Your Live Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

For example:
```
https://kranthik0.github.io/portfolio/
```

## 🔄 Updating Your Site

After making changes:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Update: Description of changes"

# Push to GitHub
git push
```

Changes will be live in 1-2 minutes automatically!

## 🎯 Custom Domain (Optional)

To use a custom domain (e.g., `kranthikatamouni.com`):

1. In repository **Settings** → **Pages**
2. Under **"Custom domain"**, enter your domain
3. Add a `CNAME` file in your repository root:
   ```
   yourdomain.com
   ```
4. Update DNS records with your domain provider:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `YOUR_USERNAME.github.io`

## 📝 Important Notes

### File Paths
- Make sure all file paths are **relative** (e.g., `./assets/css/style.css`)
- GitHub Pages serves from root, so paths should work as-is

### HTTPS
- GitHub Pages automatically provides HTTPS
- Your site will be secure by default

### Build Process
- This is a static site, no build process needed
- Just push HTML, CSS, and JS files directly

## 🐛 Troubleshooting

### Site Not Loading
- Check repository is **Public**
- Verify Pages is enabled in Settings
- Wait 2-3 minutes after enabling
- Check repository name matches URL

### Images Not Showing
- Verify image paths are correct
- Check file names match exactly (case-sensitive)
- Ensure images are committed to repository

### Styles Not Working
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path in HTML
- Verify CSS file is in repository

### 404 Errors
- Ensure `index.html` is in root directory
- Check file names match exactly
- Verify all files are committed

## 🔗 Quick Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Settings](https://github.com/settings/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## ✅ Deployment Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site accessible at GitHub Pages URL
- [ ] All images loading correctly
- [ ] All styles working
- [ ] Navigation functioning
- [ ] Mobile responsive working
- [ ] Contact form (if implemented) working
- [ ] Custom domain configured (optional)

---

**Need Help?** Check GitHub Pages documentation or open an issue in your repository.


