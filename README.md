# TARDIS Robotics Website

FTC Team 5356 - TARDIS Robotics website for tardis5356.com

## Important: Git LFS Setup

This repository uses **Git LFS (Large File Storage)** for the video file (`assets/echofinal.mp4`).

### For Anyone Cloning This Repo:

**You MUST install Git LFS first**, otherwise the video won't download:

1. **Install Git LFS:** https://git-lfs.github.com/
2. **Initialize Git LFS:**
   ```bash
   git lfs install
   ```
3. **Then clone the repo:**
   ```bash
   git clone https://github.com/astrus01/tardisite.git
   ```

If you don't install Git LFS, the video file will appear as a small pointer file instead of the actual video.

## Repository Structure

- `index.html` - Homepage
- `team.html` - Our Team page
- `contact.html` - Contact page
- `resources.html` - Resources page
- `styles.css` - Main stylesheet
- `slideshow.js` - Slideshow functionality
- `assets/` - Images and video
- `CNAME` - Custom domain configuration for GitHub Pages

## GitHub Pages Setup

1. Go to Settings → Pages
2. Source: Deploy from branch `main` / (root)
3. Add custom domain: `tardis5356.com`
4. Configure DNS to point to GitHub Pages (see GitHub Pages documentation)

