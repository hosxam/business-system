# Daily Operator Prompt

_Send this exact message every day to run the system._

---

## The Prompt

```
[Date: YYYY-MM-DD]

Run the GermanMedPath daily operator.

1. Open APPROVE_TODAY.md and GROWTH_DASHBOARD.md
2. Review today's proposed actions
3. Check which platform sessions are still active (browser)
4. Check Reddit unlock status
5. Prepare POSTING_QUEUE.md updates
6. Show me APPROVE_TODAY.md with today's proposed actions
7. Ask me for approvals
8. After I approve: post approved items if technically possible
9. Log results
10. Summarize what happened

Start.
```

## What I Do With This Prompt

### Step 1: Check Status
I open all tracking files and check:
- What's scheduled for today (from APPROVAL_QUEUE.md and POSTING_QUEUE.md)
- What's already been posted today (from GROWTH_DASHBOARD.md section 3)
- What platform limits apply today (from POSTING_AGENT_RULES.md)

### Step 2: Prepare Today's Queue
I update APPROVE_TODAY.md with:
- Items that were already Approved and due
- New suggested items for today
- Reddit unlock status
- Notes on what I can technically execute

### Step 3: Show You
I send APPROVE_TODAY.md to you with the exact text, links, and risk levels.

### Step 4: Execute Approvals
You reply with:
```
APPROVE LI-01 FC-01 FC-02
```

I update POSTING_QUEUE.md statuses and attempt to post via browser.

### Step 5: Log and Report
After execution, I update:
- POSTING_QUEUE.md (status, posted date, result)
- GROWTH_DASHBOARD.md (daily metrics row)
- Any relevant notes

I then report back:
- What was posted successfully
- What failed and why
- What to expect tomorrow
- What needs approval next

---

## What I Need From You

| You Say | I Do |
|---------|------|
| "Run daily operator" | Full routine: check, prepare, show, execute, log |
| "APPROVE ID1 ID2" | Mark approved, attempt posting |
| "REJECT ID3" | Mark rejected, remove from queue |
| "EDIT ID4: change this text to..." | Edit draft text, keep Pending |
| "Post approved only" | Post only items marked Approved, skip rest |
| "Skip today" | Do nothing. Wait for next trigger. |

---

## One-Liner Version

For when you don't want to type the full prompt:

```
Run daily operator [Date]
```

---

## Checklist I Follow Each Run

- [ ] Read current date
- [ ] Read operating system files
- [ ] Read POSTING_AGENT_RULES.md for limits
- [ ] Check if any Approved items are past due
- [ ] Check browser sessions (still logged in?)
- [ ] Update APPROVE_TODAY.md
- [ ] Show you the queue
- [ ] Wait for your approval commands
- [ ] Execute approved items
- [ ] Log everything
- [ ] Report summary
