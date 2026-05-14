# ClinicNote AI — Product Strategy

## Why Generic Templates Are Not Differentiated

Hundreds of clinical template packs exist. Google "SOAP note template" and you get PDFs, Word docs, Notion templates, and EMR vendor libraries. They are all the same: static forms that doctors must mentally adapt to each patient. None of them _listen_ to what the doctor typed. None of them rearrange, prioritize, or output in multiple formats.

A template pack requires the doctor to:
1. Remember which format fits this visit type
2. Mentally map their findings to the template structure
3. Manually copy-paste across systems
4. Rewrite for referrals, follow-ups, and instructions separately

ClinicNote AI does the mapping for them.

## Why Doctors Can Already Use ChatGPT

Doctors are using ChatGPT for documentation. This is true. A GP can paste a rough note into ChatGPT and say "make this a SOAP note." It works, kind of. But ChatGPT has problems:

- No specialty-specific structure. The doctor has to prompt-engineer every time.
- No visit-type awareness. "Write a SOAP note" gives generic output.
- No missing-field reminders. ChatGPT does not know what you forgot to ask.
- No safety boundaries. ChatGPT will invent findings if asked loosely, or worse, respond to PHI.
- No copy-ready formatting. Output needs manual reformatting.
- No workflow. It is a blank chat, not a tool.

ClinicNote AI is not a chatbot. It is a structured documentation assistant.

## Why ClinicNote AI Is Different

| Feature | ClinicNote AI | ChatGPT | Static templates |
|---------|--------------|---------|-----------------|
| Specialty presets | Yes | No (prompt required) | Yes |
| Visit-type prompts | Dynamic dropdowns | No | No |
| Missing-field reminders | Context-aware | No | No |
| Multiple output formats | One click | Requires re-prompting | Manual rewrite |
| Safety boundaries | Built into UI | None | Not applicable |
| Copy-ready formatting | Structured outputs | Markdown | Manual |
| No prompt engineering | Click, type, generate | Must prompt | Fill form |
| Forward path to AI scribe | Designed for | No | No |

## The Real Problem: OPD Documentation Burden

A typical OPD doctor in a busy clinic sees 30-60 patients per day. For each patient, they must document:

- A running clinical note
- A referral letter (if needed)
- Patient instructions / advice
- A follow-up note

Many doctors do this after hours, on weekends, or skip documentation entirely (which is medico-legally dangerous). The OPD documentation burden contributes to burnout, charting backlog, and incomplete records.

## Target Users

### Primary
- **GP doctors** in polyclinics and community health centers
- **Outpatient specialists** in private clinics (orthopedics, ENT, derma, peds, OB/GYN)
- **Interns** rotating through OPDs who need to learn structured documentation

### Secondary
- **Residents** documenting outpatient encounters
- **Small clinic owners** who cannot afford EMRs or AI scribe subscriptions
- **Locum doctors** who need fast, portable note-taking

## Main Workflow

```
Doctor rough de-identified note
            |
     Specialty + Visit Type
            |
     Structured prompts (reminders)
            |
     Doctor fills what they have
            |
     One-click output:
       ├─ SOAP note
       ├─ Short EMR note
       ├─ Follow-up note
       ├─ Referral letter
       └─ Patient instructions
```

The doctor enters their clinical judgment. The tool structures it. The tool does not invent, diagnose, or advise.

## Safety Boundaries

These are non-negotiable:

1. **No PHI entry allowed** — the UI reminds at every step
2. **No patient data storage** — the app is stateless by design
3. **No audio processing** — the MVP is text-input only
4. **No diagnosis or treatment generation** — only structures what the doctor wrote
5. **No regulatory claims** — this is a productivity tool, not a medical device
6. **Doctor must review all output** — stated in UI and disclaimers

## Monetization Plan

| Tier | Price | Features |
|------|-------|----------|
| Free MVP (launch) | $0 | Basic OPD builder, referral builder, patient instructions, all specialties |
| Early access lifetime | $19 | All future Pro features forever |
| Pro (future) | $5/mo | More specialties, PDF/Word export, clinic branding, saved templates |

Revenue goal: Pre-sell 50 early access licenses ($950) to validate demand before building Pro.

## Future Path Toward AI Scribe Research

ClinicNote AI is built to support a future AI scribe research project. This means:

- The interface is designed for structured data input and output
- The output formats are compatible with research note standards
- The tool explicitly does NOT handle PHI, so research ethics review is separate
- A future version with proper privacy, consent, ethics, and data security infrastructure could function as an AI scribe under institutional oversight

But that is the future. The MVP is an educational/productivity documentation assistant only.

## Strategic Positioning

ClinicNote AI occupies the space between "nothing" and "full AI scribe." Most clinics have nothing. The full AI scribe market is crowded with VC-funded products that cost $200+/month and require integration.

ClinicNote AI is:
- Free for the basics
- No integration needed
- No PHI liability
- Doctor-controlled
- Ready in 5 minutes

This fits the budget and trust constraints of small clinics, especially in emerging markets.

## Brand

- **Name**: ClinicNote AI
- **Tagline**: OPD notes, structured in seconds.
- **Voice**: Professional, doctor-friendly, no hype, honest about limitations
- **Positioning**: A doctor-controlled documentation assistant, not an AI doctor
