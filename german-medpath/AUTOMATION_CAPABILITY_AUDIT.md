# Automation Capability Audit

## Platform Status

### LinkedIn

| Factor | Status |
|--------|--------|
| Account logged in browser | Unknown (last checked in previous session) |
| Posting via API | No — LinkedIn API requires Developer Application approval |
| Posting via browser automation | Possible with OpenClaw browser tool |
| Commenting via automation | Possible but fragile (React UI) |
| Connection requests | Possible via browser |
| Profile updates | Possible via browser |
| Risk of detection | Low for 1 post/day. Higher for automation-like patterns. |

**What can be automated safely:**
- Writing post drafts and queuing them in POSTING_QUEUE.md
- Opening LinkedIn, pasting approved text, submitting (1 post/day max)
- Updating metrics in GROWTH_DASHBOARD.md after posting

**What cannot be automated safely:**
- Connection requests (too many too fast triggers recaptcha)
- Bulk DM or messaging
- Liking/engaging in an automated pattern

---

### Facebook

| Factor | Status |
|--------|--------|
| Account logged in browser | Unknown (last checked in previous session) |
| Posting to groups via API | No — Facebook Graph API requires page/app not personal account |
| Posting via browser automation | Possible but React UI is fragile (evaluate-based setting doesn't persist) |
| Commenting via automation | Same issue — React form state management breaks automation |
| Risk of detection | Medium — Facebook is aggressive about bot behavior |

**What can be automated safely:**
- Writing comment and post drafts and queuing them
- Opening the group, navigating to a relevant post, clicking reply
- Pasting approved comment text (click-to-expand comboboxes need manual fallback)

**What cannot be automated safely:**
- Posting without manual review in the browser
- Making too many comments in quick succession (looks bot-like)
- Facebook's React dropdowns (comboboxes) require click-to-expand interaction

---

### Reddit

| Factor | Status |
|--------|--------|
| Account logged in browser | Yes (confirmed in previous session) |
| Posting via API | No — needs separate OAuth setup |
| Posting via browser automation | Possible after restrictions lift |
| Commenting via automation | Possible — Reddit's editor is simpler than Facebook |
| Risk of detection | Medium — Reddit rate-limits new accounts aggressively |

**What can be automated safely:**
- Queueing drafts until the 3-7 day restriction lifts
- Once unlocked: opening threads, pasting comments, submitting
- No-link comments only for the first 5-10 interactions

**What cannot be automated safely:**
- Posting before the account restriction lifts
- Multiple comments in rapid succession
- Posting links while account is still new

---

### Gmail (Clinic Emails)

| Factor | Status |
|--------|--------|
| Account logged in browser | Yes (confirmed in previous session) |
| Sending via API | Possible (Gmail API) but requires OAuth setup |
| Sending via browser automation | Possible — compose, fill, send |
| Risk | High — each email must be manually reviewed and explicitly approved |

**What can be automated safely:**
- Queueing drafts in POSTING_QUEUE.md with Pending status
- Templates ready for review

**What cannot be automated safely:**
- Sending without explicit approval for EACH email
- Bulk sending (all 12 at once looks like spam)
- Sending before May 19

---

## Rate Limits Summary

| Platform | Action | Max per day | Risk if exceeded |
|----------|--------|-------------|-----------------|
| LinkedIn | Posts | 1/day | Low (shadowban at >3/day) |
| LinkedIn | Comments | 5/day | Medium (rate-limited) |
| LinkedIn | Connection requests | 5/day | High (recaptcha, account block) |
| Facebook | Group posts | 1/day total across groups | Medium (group bans) |
| Facebook | Comments | 5/day | Medium (group ban) |
| Facebook | DMs | 0 (never DM automatically) | High (account suspension) |
| Reddit | Comments | 3/day (first week), 5/day (after) | Medium (rate limit, shadowban) |
| Reddit | Posts | 1 every 48h (first 2 weeks) | Medium (subreddit ban) |
| Email | Clinic emails | 12/day max, 1 at a time | Medium (spam filters) |

---

## What Requires Manual Approval

| Item | Why |
|------|-----|
| Any post with a link | Links are where risk lives. Wrong link = banned from group. |
| Clinic follow-up emails | Legal/commercial risk. Must review each recipient. |
| Facebook group posts | Group admins can ban accounts. Must be context-appropriate. |
| Reddit posts with links | Account is too new. One bad link post can get the account banned. |
| Any draft marked Medium or High risk | Per AGENTS.md: "Don't run destructive commands without asking." |

---

## What Is Safe to Auto-Post After Approval

- LinkedIn posts with no links or educational links (low risk, LinkedIn allows them)
- Facebook comments with no links (educational value only)
- Reddit comments with no links (when account unlocks)

## What Is Risky

- Facebook group posts with links — even free resource links can trigger group moderation
- Clinic emails — could be marked as spam if too many go out at once
- Reddit posts — new account restriction is real, don't test it
- Any platform DM — never automate personal messages

## Recommended Safest Workflow

```
1. I prepare drafts in POSTING_QUEUE.md with "PENDING" status
2. You review and approve by saying "APPROVE [IDs]"
3. I update the status to "APPROVED"
4. For LOW RISK no-link items: I can post via browser automation (paste + submit)
5. For MEDIUM RISK or linked items: I navigate to the page, paste the approved text,
   but pause before submit and confirm with you
6. I log the result and update GROWTH_DASHBOARD.md
```

## Platform Session Status (to check)

Before any automation can run, I need to confirm which sessions are still logged in:

- [ ] LinkedIn — session active?
- [ ] Facebook — session active? (groups accessible?)
- [ ] Reddit — session active? Still restricted?
- [ ] Gmail — session active?
