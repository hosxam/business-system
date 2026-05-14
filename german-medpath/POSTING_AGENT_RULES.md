# Posting Agent Rules

_These rules govern ALL automated or semi-automated posting. Violations require manual review._

---

## 1. Status Gate

> **Never post content marked Pending.**
>
> Only post content marked Approved in POSTING_QUEUE.md.
> If a draft's status is anything other than "Approved", do not touch it.

---

## 2. Daily Max Limits

| Platform | Action | Max/day | Notes |
|----------|--------|---------|-------|
| LinkedIn | Posts | 1 | Never exceed 1 post per calendar day |
| Facebook | Group posts | 1 | One post total across ALL groups per day |
| Facebook | Comments | 5 | Spread across groups. Never 5 in the same group. |
| Reddit | Comments | 3 | Only after account restriction lifts. Max 3/day first week. |
| Reddit | Posts | 1 per 48h | Only after account is established (7+ days, 5+ comments) |
| Clinic emails | Sends | 0 | Never send without explicit per-email approval |
| LinkedIn | Connection requests | 5 | Manual only. Never automate. |

---

## 3. Link Rules

| Context | Can include link? | Notes |
|---------|------------------|-------|
| LinkedIn posts | Yes | LinkedIn allows links. Use UTM. |
| Facebook group posts | Yes | Only if approved. Free resource links only. |
| Facebook comments | No | Never. If someone asks, request approval first. |
| Reddit comments | No | Not until account is 14+ days old and established. |
| Reddit posts | No | Not until account is 14+ days old and trusted. |
| Clinic emails | Yes | Only after per-email approval. Use UTM. |
| LinkedIn bio/featured | Yes | Always. This is the primary link source. |

---

## 4. No-Go Zones

**Never do these under any circumstances:**

- Post the same text in multiple groups or threads
- DM users automatically
- Send bulk email
- Use fake accounts, upvotes, or engagement
- Argue with users who disagree or criticize
- Make legal promises about immigration or Approbation approval
- Make medical claims or diagnoses
- Post anything that misrepresents who you are (always be Najm/Dr. Hossam)
- Delete and repost content that got low engagement
- Bypass platform restrictions (Reddit 3-7 day lock, LinkedIn new account limits, Facebook group approval queues)

---

## 5. Content Rules

- Always lead with educational value. The help comes first, the link comes later (if at all).
- Keep tone helpful and neutral. No promotional language ("best guide ever", "you NEED this").
- Acknowledge that the Approbation process varies. Never say "this is exactly how it works for everyone."
- If sharing state information, mention that requirements change and should be verified with the Landesartztekammer.
- For clinic emails, always identify yourself as a doctor writing content, not as a marketing agency.

---

## 6. Error Handling

| Scenario | Action |
|----------|--------|
| Post submission fails | Log the error. Do NOT retry automatically. Flag for manual review. |
| Account gets rate-limited | Stop all posting on that platform for 24h. Log it. |
| Comment gets removed by mods | Accept it. Do not repost. Log the removal. Adjust future drafts. |
| Group post is pending approval | Log the status. Move on. Do not post again in the same group. |
| Clinic email bounces | Record it. Flag for manual review. Do not resend. |
| LinkedIn post gets low impressions | Log it. Continue with next scheduled post. Do not delete. |

---

## 7. Logging Requirements

Every action must update POSTING_QUEUE.md:

| Field | What to write |
|-------|--------------|
| Status | Posted / Failed / Bounced |
| Posted date | YYYY-MM-DD |
| Result | What happened (e.g. "Post visible on profile", "Comment submitted", "Email sent") |
| Notes | Any observations (e.g. "Group post pending admin approval", "Got 2 likes") |

After updating POSTING_QUEUE.md, also update GROWTH_DASHBOARD.md section 3 (Daily Metrics Tracker) with the day's totals.

---

## 8. Manual Override

You can override any rule in this document only if:
1. You explicitly say "override rule X for this post"
2. I explicitly approve the override
3. The override is logged in the Notes field of the draft

---

## 9. Suspension Protocol

If any account gets suspended, shadowbanned, or restricted:
1. Stop ALL posting on that platform immediately
2. Log the suspension in GROWTH_DASHBOARD.md
3. Do not attempt to appeal or create a new account without asking
4. Reassess whether the platform is worth continuing on
