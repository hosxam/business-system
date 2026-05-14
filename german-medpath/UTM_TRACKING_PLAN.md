# UTM Tracking Plan

Standard UTM format: `?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN`

---

## Campaign Names

| Campaign | Purpose | Active dates |
|----------|---------|-------------|
| `roadmap_launch` | Free roadmap promotion | May 14 — ongoing |
| `fsp_guide` | FSP guide article traffic | May 14 — ongoing |
| `clinic_outreach` | Clinic cold email campaign | May 14 — May 30 |
| `toolkit_bridge` | ToolKit Pro to GermanMedPath crosslink | May 14 — ongoing |

---

## UTM Links Defined

### LinkedIn Bio

**URL:**
`https://ko-fi.com/s/2de8b617f9?utm_source=linkedin&utm_medium=profile&utm_campaign=roadmap_launch`

**Where to paste:**
- Featured section of LinkedIn profile
- About section (as a link)

### LinkedIn Post — Bundesland comparison

**URL:**
`https://ko-fi.com/s/2de8b617f9?utm_source=linkedin&utm_medium=post&utm_campaign=roadmap_launch`

**Where to paste:**
- In the post when you mention "free comparison"

### Facebook Group Post — Simple Approbation Roadmap

**URL:**
`https://ko-fi.com/s/2de8b617f9?utm_source=facebook&utm_medium=group_post&utm_campaign=roadmap_launch`

**Where to paste:**
- In the group post body

### Facebook Comments (if someone asks for a link)

**URL:**
`https://ko-fi.com/s/2de8b617f9?utm_source=facebook&utm_medium=comment&utm_campaign=roadmap_launch`

### Reddit Comment (when unlocked, if someone asks)

**URL:**
`https://ko-fi.com/s/2de8b617f9?utm_source=reddit&utm_medium=comment&utm_campaign=roadmap_launch`

### Reddit Post (when unlocked, in post body)

**URL:**
`https://ko-fi.com/s/2de8b617f9?utm_source=reddit&utm_medium=post&utm_campaign=roadmap_launch`

### Clinic Follow-up Email — sample article

**URL:**
`https://hosxam.github.io/business-system/german-medpath/articles/06-fsp-guide.html?utm_source=email&utm_medium=followup&utm_campaign=clinic_outreach`

**Where to paste:**
- In the body of the clinic follow-up email as the sample link

### Clinic Bounce Replacement Email

**URL:**
`https://hosxam.github.io/business-system/german-medpath/articles/06-fsp-guide.html?utm_source=email&utm_medium=bounce_replacement&utm_campaign=clinic_outreach`

### ToolKit Pro Banner — link to GermanMedPath

**URL:**
`https://hosxam.github.io/business-system/german-medpath/?utm_source=toolkit_pro&utm_medium=site_banner&utm_campaign=toolkit_bridge`

**Where to paste:**
- In the ToolKit Pro index.html banner section (to be added)

---

## UTM Usage Rules

1. **Each platform gets its own source.** Never reuse the same UTM on different platforms.
2. **Medium describes the specific placement.** `post` vs `comment` vs `profile` vs `group_post`.
3. **Campaign groups related efforts.** Don't create new campaigns unless it's a new initiative.
4. **Case sensitive.** All lowercase, use underscores.
5. **Test before posting.** Paste the full URL in a browser and verify it resolves to the correct Ko-fi page.
6. **Ko-fi does not show UTM data natively.** To see UTM data, you need Google Analytics or similar on the Ko-fi page. Without that, UTMs are useful for manual tracking — you know which link was given to which platform.

---

## Manual Tracking Table

Even without analytics, you can identify which platform converts by using unique Ko-fi product links:

| Link | Platform | Unique identifier |
|------|----------|-----------------|
| Free roadmap + UTM linkedin_post_roadmap_launch | LinkedIn post | Unique Ko-fi variation |
| Free roadmap + UTM facebook_group_post_roadmap_launch | Facebook group post | Unique Ko-fi variation |
| Free roadmap + UTM email_followup_clinic_outreach | Clinic email | Unique Ko-fi variation |

*Note: Ko-fi links cannot be dynamically modified for tracking without a URL shortener or custom domain. For now, use unique comment/draft text that you can identify by memory.*
