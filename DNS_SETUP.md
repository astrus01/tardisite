# DNS Configuration for tardis5356.com

## Current Issue
Your domain is currently pointing to AWS servers, but it needs to point to GitHub Pages.

## Solution: Update DNS Records

### Option 1: Use A Records (Recommended for apex domain)

Go to your domain registrar (where you bought tardis5356.com) and update your DNS:

**Delete existing A records** pointing to AWS IPs (52.33.207.7, 44.230.85.241)

**Add these 4 A records** (all pointing to GitHub Pages):
- **Host/Name:** `@` or `tardis5356.com` (leave blank if that's the option)
- **Type:** A
- **Value:** `185.199.108.153`
- **TTL:** 3600 (or default)

Repeat for these 3 additional IPs:
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### Option 2: Use CNAME (Simpler, but some registrars don't allow for apex domains)

If your registrar supports CNAME for the root domain:

- **Host/Name:** `@` or `tardis5356.com`
- **Type:** CNAME
- **Value:** `astrus01.github.io`
- **TTL:** 3600

## After Updating DNS

1. **Wait 5-60 minutes** for DNS to propagate
2. Go to: https://github.com/astrus01/tardisite/settings/pages
3. Under "Custom domain", enter: `tardis5356.com`
4. Click **Save**
5. Check **Enforce HTTPS** (wait a few minutes after DNS is verified)

## Verify DNS is Working

Run this command to check if DNS updated:
```bash
nslookup tardis5356.com
```

You should see GitHub Pages IPs (185.199.108.x) instead of AWS IPs (52.33.207.x).

## Common Domain Registrars

**Namecheap:**
- Go to Domain List → Manage → Advanced DNS
- Delete old A records
- Add new A records

**GoDaddy:**
- DNS Management → Delete old records
- Add new A records

**Google Domains:**
- DNS → Delete old records
- Add new A records

**Cloudflare:**
- DNS → Delete old A records
- Add new A records (make sure it's not proxied, DNS only)

## Troubleshooting

- **Still not working after 1 hour?** DNS can take up to 48 hours, but usually works within minutes
- **GitHub still shows error?** Make sure the CNAME file is in your repo (it is!)
- **HTTPS not working?** Wait for DNS to verify, then enable "Enforce HTTPS"

