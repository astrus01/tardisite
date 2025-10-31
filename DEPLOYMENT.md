# Deployment Guide for tardis5356.com

## Setting Up GitHub Pages with Custom Domain

### Step 1: Install Git LFS (for the large video file)

GitHub has a 100MB file size limit. Your video file needs Git Large File Storage (LFS):

1. **Install Git LFS:**
   - Windows: Download from https://git-lfs.github.com/
   - Mac: `brew install git-lfs`
   - Linux: `sudo apt install git-lfs` or `sudo yum install git-lfs`

2. **Initialize Git LFS in your repository:**
   ```bash
   git lfs install
   ```

3. **Track your video file:**
   ```bash
   git lfs track "assets/echofinal.mp4"
   ```

### Step 2: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to github.com and create a new repository
   - Name it something like `tardis-website` or `tardis5356-site`

2. **Initialize Git and push:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TARDIS Robotics website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and `/ (root)` folder
6. Click **Save**

### Step 4: Set Up Custom Domain (tardis5356.com)

1. In the same **Pages** settings, add your domain `tardis5356.com` in the **Custom domain** field
2. Check **Enforce HTTPS** (after DNS propagates)

3. **Configure DNS with your domain provider:**
   - Add an **A record** pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - OR add a **CNAME record** pointing to: `YOUR_USERNAME.github.io`

4. **Create a `CNAME` file in your repo:**
   ```
   tardis5356.com
   ```
   This file should be in the root directory.

### Step 5: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate
- GitHub will verify your domain automatically
- Once verified, HTTPS will be available

## Alternative: Host Video Externally

If Git LFS causes issues, you can host the video on:
- **YouTube** (embed it)
- **Vimeo** (free tier available)
- **Cloudflare Stream** (has free tier)
- **AWS S3** + CloudFront

Then update the video source in `index.html` to point to the external URL.

## Testing

1. Visit `https://tardis5356.com` after DNS propagates
2. Test all pages work correctly
3. Check mobile responsiveness
4. Verify video plays correctly

## Updates

To update the site:
```bash
git add .
git commit -m "Update description"
git push
```

Changes should go live within a few minutes.

