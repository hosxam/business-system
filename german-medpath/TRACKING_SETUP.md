# Tracking Setup

How to track traffic, downloads, and sales with the tools you already have.

---

## 1. Ko-fi Sales Data

Ko-fi provides a basic dashboard for sales and downloads.

**How to access:**
1. Go to https://ko-fi.com/hossamhassan86778
2. Log in
3. Click "Shop" → "Orders" to see purchases
4. Click "Shop" → "Downloads" to see free product downloads

**What it shows:**
- Total sales per product
- Total revenue
- Download count for free products
- Date of each transaction

**Limitations:**
- No traffic source data (no UTM support in dashboard)
- No visitor count
- No page view data

**What to log manually:**
Every time you check, record in GROWTH_DASHBOARD.md:
- Number of free roadmap downloads
- Number of paid sales (per product)
- Total revenue

---

## 2. GitHub Pages Traffic

GitHub Pages has limited analytics unless configured.

**Currently available:**
GitHub Pages provides basic traffic data automatically:
- Go to https://github.com/hosxam/business-system
- Click "Settings" → "Pages"
- Scroll to "GitHub Pages" section → Click "View traffic"
- Shows: visits per day, unique visitors, top pages, top referrers

**Note:** You must have GitHub account access for this. The data is basic but useful.

**What to check weekly:**
- Total page views for german-medpath/index.html
- Referrers (which sites send visitors)
- Top pages (which articles get the most views)

---

## 3. Google Analytics / Plausible Setup (Future)

If you want better tracking later, add one of these:

### Plausible (Recommended for simplicity)
- Privacy-friendly, no cookie banner needed
- Simple to install: add one `<script>` tag
- Price: ~$12/month or self-hosted
- Shows: page views, referrers, UTM data, countries, devices

### Google Analytics 4 (Free, but complex)
- Free for up to 10M events/month
- Shows: detailed traffic sources, user behavior, conversions
- Downside: requires cookie consent banner in some regions
- Setup: Create GA4 property, get measurement ID, paste in head tag

Both analytics tools show UTM campaign data, which is critical for knowing which platform drives sales.

---

## 4. Manual Traffic Logging (Until Analytics)

Without analytics, use this manual system:

### Daily log (5 min at end of day)
1. Check Ko-fi dashboard — record sales and downloads
2. Check LinkedIn profile — record post impressions
3. Check Facebook groups — see if any post has engagement
4. Check Reddit account — see if unlocked
5. Check Gmail — record clinic replies
6. Update GROWTH_DASHBOARD.md with all numbers

### Weekly log (10 min on Sunday)
1. Check GitHub Pages traffic data
2. Compare Ko-fi sales to the week before
3. Calculate cost per platform (time spent vs results)
4. Decide which platforms to double down on

### What "working" looks like after 7 days
| Metric | Target | What it means |
|--------|--------|---------------|
| Free roadmap downloads | At least 1-5 | Someone clicked your link |
| Ko-fi sales | At least 1 | Someone saw enough value to pay |
| LinkedIn impressions | Above 100 per post | Profile growing, content resonating |
| Facebook comments on your posts | 3-10 per post | Community engagement |
| Reddit account unlocked | Yes | Can start Reddit distribution |
| Clinic email replies | At least 1 | Interest from clinics |

---

## 5. Attribution: Which Platform Produced Sales

Without UTM data in Ko-fi, use these heuristics:

| If a sale happens... | Most likely source |
|---------------------|-------------------|
| Within 24 hours of a LinkedIn post | LinkedIn |
| Within 24 hours of a Facebook group post | Facebook |
| Within 24 hours of a Reddit post | Reddit |
| Without any recent social activity | Organic search or referral |
| After a clinic email was sent | Clinic outreach |

**Pro tip:** When you post content on different platforms, space them at least 24 hours apart. This makes it easier to attribute which platform drove the sale.

---

## 6. Git-Based Tracking (Bonus)

Git commits serve as a timeline of what was posted and when.

For every content distribution action:
1. GROWTH_DASHBOARD.md is updated with the date and action
2. Committed to git
3. The commit message describes what was done

This creates an immutable log of every distribution attempt, independent of any platform's analytics.
