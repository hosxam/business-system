# Post Execution Workflow

_Step-by-step instructions for posting approved content via browser automation._

---

## Prerequisites

Before executing any post:

1. OpenClaw browser tool is available (confirmed in runtime config)
2. The target platform is open in a logged-in browser tab
3. The POSTING_QUEUE.md item status is "Approved"
4. The daily max for that platform has not been exceeded (check POSTING_AGENT_RULES.md)

---

## Workflow: LinkedIn Post

### Steps

```
1. Open linkedin.com in browser
2. Navigate to profile feed or click "Start a post"
3. Verify the posting dialog is open (snapshot confirms "Post" button visible)
4. If post text needs to be typed:
   - Use evaluate to set textContent on the contenteditable div
   - Dispatch 'input' event after setting text
5. Add the UTM link in the post body or in the first comment
6. Click "Post" button
7. Wait 3-5 seconds
8. Verify post appears on profile (navigate to profile, check feed)
9. Log result in POSTING_QUEUE.md
```

### Risk Mitigation

- If the post dialog doesn't open, try clicking the "Start a post" area first, then retry
- If the evaluate-based text setting doesn't persist, type manually via the act tool
- After posting, take a screenshot of the profile to confirm

---

## Workflow: Facebook Comment

### Steps

```
1. Open facebook.com in browser
2. Navigate to the target group (e.g., "Doctors Going to Germany")
3. Find a relevant post where the comment applies
4. Click the comment box below the post
5. If a textarea is visible:
   - Use evaluate to set value and dispatch 'input' event
   - OR type directly using act:type with a slow delay
6. Click Submit/Enter
7. Wait 2-3 seconds
8. Verify comment appears below the post
9. Log result in POSTING_QUEUE.md
```

### Risk Mitigation

- Facebook uses React. evaluate-based value setting may not persist.
- If evaluate fails, use act:type with slowly=true and small delayMs
- Never comment more than once per 3 minutes (looks natural)
- If the comment box uses a combobox (rare for comments), fall back to manual

---

## Workflow: Facebook Group Post

### Steps

```
1. Open facebook.com in browser
2. Navigate to the target group
3. Click "Write something..." or the post creation area
4. Wait for the post editor to open
5. Set post text (same approach as LinkedIn: evaluate + dispatch input event)
6. If a link is included, paste the URL after the text
7. Click "Post" button
8. Wait for confirmation
9. Check if post appears in the group feed or shows "Pending approval"
10. Log result in POSTING_QUEUE.md
```

### Risk Mitigation

- Facebook group posts often go to admin approval. Log whether it's pending or live.
- If the post doesn't show immediately, it's likely pending. Do not repost.
- Do not post in the same group more than once per day.

---

## Workflow: Reddit Comment

### Steps

```
1. Open reddit.com in browser
2. Navigate to the target thread (e.g., r/medicalschoolEU)
3. Click the comment box below the relevant parent comment
4. Type approved text via evaluate or act:type
5. Click "Comment" button
6. Wait 3-5 seconds
7. Verify comment appears
8. Log result in POSTING_QUEUE.md
```

### Risk Mitigation

- Reddit's editor is simpler than Facebook's. evaluate-based textContent + input event dispatch usually works.
- If the comment shows "Comment" in gray (disabled), check for content policy issues.
- Do not comment more than 3 times per day for the first week.

---

## Workflow: Gmail (Clinic Email)

### Steps

```
1. Open mail.google.com in browser
2. Click "Compose"
3. Fill recipient email (copy from GROWTH_DASHBOARD.md)
4. Fill subject line (from approved draft)
5. Fill email body (paste approved text, fill in [Clinic Name])
6. Add UTM link to the body
7. PAUSE before clicking Send
8. Confirm with user: "Ready to send to [Clinic Name]?"
9. Only after explicit approval: click Send
10. Log result in POSTING_QUEUE.md
```

### Risk Mitigation

- **Never** send without a final pause and confirmation
- Send one email at a time with at least 2 minutes between sends
- If Gmail flags the email as suspicious, stop and report
- Log the timestamp of each send in GROWTH_DASHBOARD.md

---

## Post-Execution Logging

After every successful post, update:

### POSTING_QUEUE.md
```
Change status from "Approved" to "Posted"
Fill Posted date: YYYY-MM-DD
Fill Result: e.g., "Post visible on profile", "Comment submitted"
Fill Notes: Any observations
```

### GROWTH_DASHBOARD.md (section 3: Daily Metrics Tracker)
```
Find today's date row
Increment LinkedIn posts, Facebook comments, Facebook posts, Reddit comments, Reddit posts as applicable
```

---

## Error Recovery

| Error | Response |
|-------|----------|
| Post button unclickable | Try clicking it again after 2 seconds. If still fails, log as Failed and manually review. |
| evaluate-based text not persisting | Switch to act:type with slowly=true. If that fails, flag for manual. |
| "Your account is too new" (Reddit) | Log restriction status. Do not retry. Wait 24h. |
| "Content violates community rules" | Log the error. Remove the draft from queue permanently. |
| Browser tab crashes | Restart browser. Check if account is still logged in. Retry once. |
| Rate limited (429/Too Many Requests) | Stop all activity on that platform for 24 hours. Log it. |

---

## Session Check

Before first execution run, confirm which sessions are active:

- [ ] LinkedIn session active
- [ ] Facebook session active (groups accessible)
- [ ] Reddit session active (check restriction status)
- [ ] Gmail session active
