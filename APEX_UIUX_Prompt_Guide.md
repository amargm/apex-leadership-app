# APEX — Leadership Intelligence App
## Complete UI/UX Design & Build Prompt

> This document is a precise specification for building the APEX Android app .
> Any AI agent or developer given this document must treat every section as non-negotiable unless
> explicitly marked as a variant. Follow this exactly.

---

## 1. PRODUCT CONTEXT

**What it is**: A byte-sized leadership learning app built on real, publicly disclosed case studies.
**Who it is for**: People already in leadership positions — team leads, managers, directors. Not aspirants.
**Core mechanic**: Lessons (case studies) are pushed from a backend/CMS to the user's device. The app is a reading + reflection container. The UI is a permanent placeholder waiting to be filled by the next lesson.
**Tone of product**: Intelligent. Serious. Like a well-edited business publication — not a gamified course app.

---

## 2. AESTHETIC DIRECTION — NON-NEGOTIABLE

### 2.1 Single-Word Art Direction: **INSTRUMENTAL**

The app should feel like a precision instrument. Like a well-machined watch face, a financial terminal, a Bloomberg screen with taste. Everything exists for a reason. Nothing decorates for the sake of decorating.

### 2.2 What This Is NOT
- Not playful. Not pastel. Not friendly-rounded.
- No emojis anywhere in the UI — not in navigation, not in content, not in states, not in notifications.
- No gradient blobs or "glassmorphism" glow effects.
- No card shadows that look soft or floating.
- No UI that resembles Duolingo, Headspace, or any consumer wellness app.
- No purple. No purple-adjacent hues.

### 2.3 The Visual Reference Frame
Think: *The Economist* magazine layout × Bloomberg Terminal restraint × a high-end annual report.
Sharp. Type-led. Grid-disciplined. Every element earns its place.

---

## 3. COLOR SYSTEM

```
Background Primary:     #0A0A0A   (near-black, not pure black)
Background Surface:     #111111   (card and panel backgrounds)
Background Surface 2:   #1A1A1A   (nested elements, inputs)
Border Default:         #242424   (all dividers, card edges)
Border Subtle:          #1C1C1C   (de-emphasized separators)

Text Primary:           #F0EDE8   (warm off-white — NOT pure white)
Text Secondary:         #888888   (labels, metadata, captions)
Text Muted:             #555555   (disabled states, tertiary info)

Accent (Primary):       #C8F04D   (sharp yellow-green — used sparingly)
Accent (Secondary):     #FF6B35   (muted orange — difficulty tags, warnings)
Accent (Tertiary):      #4DB8FF   (cool blue — locked states, progress)

Danger:                 #FF4444
Success:                #6FC97A
```

**Rules for color usage:**
- Accent #C8F04D is used ONLY for: active nav indicator, progress bars, "new lesson" badge, CTA button background, active tab underline, category topic labels.
- Never use accent as a background for large areas.
- Background colors must stay within the defined token set. No freehand hex values.
- All text on dark backgrounds must meet WCAG AA contrast at minimum.

---

## 4. TYPOGRAPHY SYSTEM

### 4.1 Font Stack

```
Display / Wordmark:     'Bebas Neue'         — Google Fonts
Section Headers:        'Bebas Neue'         — All-caps, letter-spaced
Body / Paragraphs:      'Lora'               — Google Fonts (serif, reading-optimized)
UI Labels / Meta:       'DM Sans'            — Google Fonts (clean, not Inter)
Pull Quotes:            'DM Serif Display'   — Google Fonts (italic weight)
```

**Why this stack:**
- Bebas Neue — loud, structural, unmistakably intentional for display.
- Lora — a reading-optimized serif. Long-form case study paragraphs must be in Lora. It respects the reader's eyes.
- DM Sans — for all UI chrome: labels, badges, metadata, tab text. Neutral but not generic.
- DM Serif Display italic — for pull quotes only. Creates authority without decoration.

### 4.2 Type Scale

```
App Wordmark:           Bebas Neue, 32px, letter-spacing 0.12em
Screen Display Title:   Bebas Neue, 20px, letter-spacing 0.10em
Lesson Main Title:      DM Serif Display, 26–28px, line-height 1.25
Section Heading:        Bebas Neue, 15px, letter-spacing 0.14em, uppercase
Body Paragraph:         Lora, 15px, line-height 1.75, color Text Secondary
Pull Quote:             DM Serif Display italic, 17px, line-height 1.55
Card Title:             DM Serif Display, 17px, line-height 1.3
UI Label / Badge:       DM Sans, 10–11px, uppercase, letter-spacing 0.08em
Metadata / Caption:     DM Sans, 11–12px, color Text Secondary
CTA Button:             DM Sans, 13px, font-weight 700, uppercase, letter-spacing 0.06em
Stat Value:             DM Sans, 16px, font-weight 700
Greeting Name:          DM Serif Display, 26px
Tab Label:              DM Sans, 11px, uppercase, letter-spacing 0.09em
```

### 4.3 Reading Typography Rules
- Body paragraphs: always Lora, never sans-serif.
- Line height for body text: 1.72–1.80. Never less.
- Max width for readable text columns: 340px on mobile.
- Paragraph spacing: 14px between paragraphs, never collapsed.
- No fully justified text. Left-aligned only.
- Avoid ALL CAPS for body text. All-caps is reserved for labels, badges, and section headings only.

---

## 5. SPACING & LAYOUT

### 5.1 Base Grid
- Base unit: **8px**
- All spacing values must be multiples of 4px (4, 8, 12, 16, 20, 24, 32, 40, 48)
- Horizontal screen padding: **24px** on both sides. Consistent across all screens.
- Vertical rhythm between major sections: **24px minimum**.

### 5.2 Corner Radius Scale
```
Small (badges, tags):   6px
Medium (cards):         14–16px
Large (bottom sheet, featured cards): 20px
Pill (progress bar):    99px
Bottom nav (on mobile shell): 0px — flush to edges
```

### 5.3 Card Borders
- All cards use a 1px solid border, color `#242424`.
- On hover/press state: border transitions to `rgba(200,240,77,0.3)` — the accent, dimmed.
- No box-shadow on cards. Depth is created through color contrast, not shadows.
- Cards have a left-edge 3px accent bar that appears on hover/active — this is the interactive affordance signal.

---

## 6. ICONOGRAPHY & VISUAL ELEMENTS

### 6.1 Zero Emoji Rule
**No emojis. Anywhere. Ever.**
This is the single most important visual instruction after font choice.

Replace all emoji uses with:
- **Text-only labels**: e.g., "NEW" instead of a star emoji
- **Simple SVG line icons**: 1.5px stroke weight, rounded linecap, monochrome
- **Typographic characters**: e.g., "→", "×", "—" used deliberately as design elements
- **Geometric dots**: 6–8px filled circles as category/status indicators
- **Numbers**: Large display numbers as background watermarks (structural decoration only)

### 6.2 Icon Style (when icons must appear)
- Stroke-only. 1.5px stroke weight. Rounded caps and joins.
- Size: 16px or 20px only.
- Color: always Text Secondary (`#888`) at rest, Text Primary (`#F0EDE8`) on active/focus.
- Source: Lucide Icons or Phosphor Icons (both have an identical visual contract).
- Never use filled icons unless indicating a completed/selected state.

### 6.3 Structural Decoration
The only permitted "decoration" is:
- Large Bebas Neue numerals (e.g., "01", "02") placed at low opacity (3–5%) as watermark background elements behind lesson heroes.
- Thin 1px horizontal rules (`border-top: 1px solid #242424`) as section dividers.
- A left-edge 3px vertical line on active list items and context blocks (the "editorial column rule").
- Category color dot: a single 6px filled circle in the category's accent color. This is the only place color enters as a shape.

---

## 7. SCREEN ARCHITECTURE

The app has five primary screens. Each is described below with layout rules.

---

### SCREEN 1: HOME

**Purpose**: Dashboard. Shows the user's active lesson track, progress context, and any newly pushed lessons.

**Layout — Top to Bottom:**

```
[Status Bar — system UI, 14px time, DM Sans]

[App Header]
  Left: App wordmark "APEX" in Bebas Neue, with the final letter "X" in Accent color
  Right: Notification icon button (24px, stroke icon, 1px border card, 40×40)
         — Has a 7px accent dot indicator when a new lesson is pushed

[Greeting Strip]
  Label: "GOOD MORNING" — DM Sans, 11px, muted, uppercase, letter-spacing 0.1em
  Name: User's name — DM Serif Display, 26px

[Stats Row — 3 equal pills]
  Each pill: Surface background, 1px border, 14px radius, 12px padding
  Content: icon (stroke, 18px) + stat value (DM Sans bold) + label (DM Sans 10px muted uppercase)
  Stats shown: Day Streak / Cases Completed / Time This Week

[Section Label: "FRESH CASES"]
  Left: Bebas Neue, 20px, letter-spacing 0.10em
  Right: "All →" — DM Sans, 12px, Accent color, tappable

[Featured Card Horizontal Scroll]
  — See Section 8: Component Specs → Featured Card

[Section Label: "YOUR TRACK"]
  Left: Bebas Neue, 20px
  Right: "Filter ↓" — DM Sans, 12px, muted

[Lesson List]
  — See Section 8: Component Specs → Lesson List Item
  — States: Default / In Progress / Completed / Locked

[Bottom Navigation]
  — See Section 8: Component Specs → Bottom Nav
```

**Background**: No image, no gradient. Pure `#0A0A0A`.

---

### SCREEN 2: LESSON DETAIL

**Purpose**: Full lesson reading experience. Tabs divide the case into digestible chapters.

**Layout — Top to Bottom:**

```
[Lesson Hero]
  Background: Dark category-tinted gradient (e.g., deep forest green for culture, dark charcoal for strategy)
  Background must be subtle — max 20% departure from base black. Not vivid.
  Watermark: Large Bebas Neue lesson number ("01") at 4% opacity, positioned bottom-right, ~180–200px font size
  
  Back button: "← Back" — DM Sans 13px, muted, 6px padding
  Category Tag: Pill with 1px accent-tinted border, Accent color text, DM Sans 11px uppercase — e.g., "CULTURE TRANSFORMATION"
  Lesson Title: DM Serif Display, 26–28px, line-height 1.25, max-width 85% of screen
  Company Line: Company logo placeholder (22×22px box, 1px border, 6px radius) + "Company · Year · Real Case" — DM Sans 12px muted
  Meta Bar: Divider line + 3 meta items — [read time] [difficulty] [tags] — all DM Sans 12px muted

[Sticky Tab Bar]
  Tabs: Overview / Timeline / Reflect / Takeaways
  Style: DM Sans 11px uppercase, letter-spacing 0.09em
  Active state: Accent color text + 2px bottom border in Accent
  Sticky: yes — remains fixed to top on scroll
  Background: `#0A0A0A` with no blur

[Tab Content Area]
  — See Section 9: Content Component Specs for each tab's internal components
  Horizontal padding: 24px

[No Bottom Nav on Lesson screen]
  Navigation handled by Back button and in-lesson CTAs only.
```

---

### SCREEN 3: LEARNING PATH (Map)

**Purpose**: Shows all lessons in the user's assigned track. Unlocking progression. Backend determines the sequence.

**Layout:**
- Full-height scrollable list with a vertical progress line connecting nodes.
- Each node is a lesson: circle indicator (completed = filled accent, in progress = accent outline pulsing, locked = muted grey).
- Node circles: 40×40px, 1px border.
- Connecting line: 1px solid, starts at accent and fades to `#242424` as it reaches locked nodes.
- Tap on an available node opens Lesson Detail. Tap on locked shows a brief "2 lessons away" label inline.

---

### SCREEN 4: ACHIEVEMENTS / WINS

**Purpose**: Simple, type-led record of what the user has completed. Streak. Stats. Earned markers.

**Layout:**
- No badge imagery. No trophy graphics.
- Achievements are listed as text-based rows with a left-edge rule in Accent on earned items, muted for unearned.
- Streak displayed as a large Bebas Neue number with a label, centered at top.
- Section for stats: a 2-column grid of stat cards (same style as homepage stat pills, larger).

---

### SCREEN 5: PROFILE

**Purpose**: Name, role context, notification preferences, reading font size control.

**Layout:**
- Header: Name + role title in DM Serif Display.
- Below: list-style settings rows, 1px dividers between each.
- No avatar image. Initials in a 48×48 square with 1px border.
- Toggle controls: custom minimal toggle (no system UI toggles). 2px track, 16px thumb, animated.

---

## 8. COMPONENT SPECIFICATIONS

### Featured Card (Horizontal Scroll)

```
Width: 300px (fixed, non-stretching)
Height: auto (banner 140px + body ~120px)
Background: Surface (#111111)
Border: 1px solid #242424, radius 20px
Press state: translateY(-3px), border-color accent at 30% opacity
Overflow: hidden

[Card Banner — 140px height]
  Background: Category-tinted gradient (dark, not vivid)
    - Culture: linear-gradient(135deg, #1a2f1a, #0d1f12)
    - Strategy: linear-gradient(135deg, #2f1a0d, #1f0d05)
    - Crisis: linear-gradient(135deg, #0d1a2f, #05101f)
  Content: A large structural text character or geometric form at 30-35% opacity, NOT an emoji
  Top-right badge: "NEW" or "IN PROGRESS" — DM Sans 10px uppercase, semi-transparent background
    - NEW badge: Accent background, black text, no transparency
  Bottom-left: Company dot (6px circle in category color) + Company name (DM Sans 10px muted uppercase)

[Card Body — 16px padding]
  Topic line: DM Sans 10px, Accent color, uppercase, letter-spacing 0.10em
  Title: DM Serif Display, 17px, line-height 1.3
  Meta row: Read time (DM Sans 11px muted) + Difficulty badge
  Progress bar: 3px track, Accent fill, 99px radius, with percentage label below
```

### Lesson List Item

```
Background: Surface (#111111)
Border: 1px solid #242424, radius 16px
Padding: 16px
Layout: flex row — [Icon Box] [Content] [Arrow]
Left-edge accent bar: 3px wide, visible only on hover/press, Accent color

[Icon Box — 46×46px]
  Background: Category-tinted dark fill
  Border: 1px solid #242424
  Radius: 12px
  Content: A 2-letter abbreviation or a minimal stroke icon, 16px, Text Secondary color
  — NO emoji

[Content Column]
  Topic label: DM Sans 10px, muted, uppercase
  Title: DM Sans 600, 15px, single line, text-overflow ellipsis
  Description: Lora, 13px, line-height 1.5, muted, max 2 lines clamped
  Badges row: small pill badges — category / difficulty / progress label

[Arrow: "›"]
  DM Sans, 16px, muted, aligned center-right

States:
  Default: as above
  Completed: opacity 0.60, icon becomes a stroke checkmark character
  Locked: opacity 0.45, cursor not-allowed, icon becomes a lock stroke icon
  In Progress: left-edge accent bar always visible (not just on hover)
```

### Bottom Navigation

```
Background: rgba(10,10,10,0.92) with backdrop-filter blur(20px)
Border-top: 1px solid #242424
Layout: 4 equal flex items
Padding: 10px sides, 20px bottom (safe area)

Each Nav Item:
  Padding: 8px 4px
  Radius: 12px
  Active background: rgba(200,240,77,0.07)
  Icon: 20px stroke icon, Text Secondary at rest, Accent on active
  Label: DM Sans 10px uppercase, letter-spacing 0.05em, muted at rest, Accent on active

Tabs: Learn / Path / Wins / Profile
```

### Push Notification Panel

```
Position: fixed, centered horizontally, drops from top
Default: translateY(-120%) off screen
Visible: translateY(16px) — appears just below status bar
Transition: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) — slight overshoot spring

Background: #1A1A1A
Border: 1px solid #2A2A2A
Border-radius: 20px
Padding: 16px 18px
Width: calc(100% - 48px) — 24px margin each side
Box-shadow: 0 20px 60px rgba(0,0,0,0.6)

Layout:
  Header row: [App tag — "APEX" DM Sans 11px muted uppercase] [Time — DM Sans 11px muted]
  Title: DM Sans 700, 14px, Text Primary
  Body: DM Sans 400, 13px, Text Secondary, line-height 1.4
  Actions row: [Open button] [Later button]
    Open: Accent background, black text, DM Sans 12px bold uppercase
    Later: Border background, muted text
    Both: radius 10px, padding 9px

Dismiss: auto after 6 seconds or on either button press
```

---

## 9. LESSON CONTENT COMPONENT SPECS

These are the building blocks inside the lesson detail tabs. Every case study will be structured with these components. The CMS/backend must output these component types.

### Context Block (Situation Setup)

```
Background: Surface
Left border: 3px solid Accent Secondary (orange)
Border-radius: 0 14px 14px 0
Padding: 16px 18px

Label: "THE SITUATION" — DM Sans 10px, Accent Secondary color, uppercase, letter-spacing 0.10em
Body: Lora, 14px, line-height 1.6, Text Secondary
```

### Body Paragraph

```
Font: Lora, 15px, line-height 1.75, color Text Secondary (#888)
Strong/Bold within: color Text Primary (#F0EDE8), font-weight 600
Spacing between paragraphs: 14px margin-bottom
No indentation on first line
```

### Pull Quote

```
Margin: 22px vertical
Padding: 20px 22px
Background: linear-gradient(135deg, rgba(200,240,77,0.06), rgba(200,240,77,0.02))
Border: 1px solid rgba(200,240,77,0.15)
Border-radius: 16px

Before pseudo-element: 
  Content: large opening quotation mark character
  Font: DM Serif Display, 60px, Accent color, 50% opacity
  Position: absolute top-(-10px) left-18px

Quote text: DM Serif Display italic, 17px, Text Primary, line-height 1.55, padding-top 8px
Attribution: DM Sans 11px, Text Secondary, uppercase, letter-spacing 0.08em, margin-top 10px
```

### Section Heading (within tabs)

```
Font: Bebas Neue, 16px, letter-spacing 0.12em, Text Primary
Margin: 22px top, 10px bottom
Display: flex with trailing horizontal rule
Trailing rule: flex:1, 1px solid #242424
```

### Key Decisions Grid

```
Layout: 2-column CSS grid, 10px gap
Each card:
  Background: Surface
  Border: 1px solid #242424
  Radius: 14px
  Padding: 14px

Card content:
  Indicator: A 2-character abbreviation or minimal icon, 22px, Text Secondary — NO emoji
  Title: DM Sans 600, 12px, Text Primary
  Description: DM Sans 400, 11px, Text Secondary, line-height 1.4
```

### Timeline

```
Container: position relative
Left edge vertical line:
  Position: absolute, left 17px, top 28px to bottom 20px
  Width: 1px
  Background: linear-gradient(to bottom, Accent, transparent)

Each item: flex row, 14px gap, 20px margin-bottom

Timeline Node (dot):
  Size: 34×34px, border-radius 50%
  Background: Surface
  Border: 2px solid Accent
  Content: step number in Bebas Neue 14px, Accent color

Content block:
  Year: DM Sans 10px, Accent color, uppercase, letter-spacing 0.10em
  Title: DM Sans 600, 14px, Text Primary
  Description: Lora, 13px, Text Secondary, line-height 1.5
```

### Reflection Prompt Card

```
Background: Surface
Border: 1px solid #242424
Radius: 16px
Padding: 18px
Layout: flex row, 14px gap

Number box:
  Size: 28×28px
  Background: Background Primary (#0A0A0A)
  Border: 1px solid #242424
  Radius: 8px
  Content: Number — Bebas Neue 14px, Accent color

Text: Lora, 14px, Text Primary, line-height 1.55
Bold within text: calls attention to the key question clause
Spacing between cards: 12px
```

### Takeaway Item

```
Layout: flex row, 12px gap, aligned flex-start
Separator: 1px solid #242424 between items, not after last item

Indicator dot: 8px × 8px, filled circle, Accent color, margin-top 6px (aligns with cap height)
Text: Lora, 14px, Text Secondary, line-height 1.6
Strong within: Text Primary, font-weight 600
```

### CTA Buttons

```
Primary CTA:
  Background: Accent (#C8F04D)
  Color: #000000
  Font: DM Sans 700, 14px, uppercase, letter-spacing 0.06em
  Width: 100%
  Padding: 16px
  Radius: 16px
  Hover: opacity 0.9, scale(0.99)
  Margin-top: 24px
  Content: text + "→" — no icons, no emoji

Secondary CTA:
  Background: transparent
  Border: 1px solid #242424
  Color: Text Secondary
  Same sizing as primary
  Hover: border-color Text Secondary, color Text Primary
  Margin-top: 10px
```

---

## 10. MOTION & ANIMATION

### Principles
- Motion should be **purposeful, not decorative**.
- One well-choreographed page load beats scattered micro-interactions.
- Never animate things the user didn't initiate (no auto-pulsing, breathing, looping effects).
- Exception: the push notification spring entrance is the hero animation of the app.

### Defined Animations

```
Screen Transition (Home → Lesson):
  Outgoing screen: translateX(-30%) — slides partially left, stays visible behind
  Incoming screen: translateX(0) from translateX(100%)
  Duration: 420ms
  Easing: cubic-bezier(0.76, 0, 0.24, 1) — sharp deceleration

Page Load (staggered fade-up):
  Each major section fades from opacity:0, translateY(16px) to visible
  Stagger delay: 60ms between each element
  Duration: 400ms
  Easing: ease

Push Notification Spring:
  Entrance: translateY(-120%) → translateY(16px)
  Duration: 500ms
  Easing: cubic-bezier(0.34, 1.56, 0.64, 1) — intentional overshoot/spring
  Auto-dismiss: 6 seconds

Hover States (cards, list items):
  Duration: 150–200ms ease
  Featured card hover: translateY(-3px)
  List item hover: translateX(3px) + left border appears

Tab Switch:
  No sliding. Content fades in at opacity 400ms ease.
  Tab indicator underline: width transition 150ms ease
  Scroll to top of lesson screen on tab change

Progress Bar Fill (on load):
  Animates from 0 to actual value over 600ms ease
```

---

## 11. BACKEND / CMS CONTRACT

The app is a **content receiver**. The UI is a permanent shell. Lessons are injected from the backend.

### Lesson Data Model (minimum required fields)

```json
{
  "lesson_id": "string",
  "title": "string",
  "subtitle": "string",
  "company": "string",
  "company_abbreviation": "string (2 chars, for logo placeholder)",
  "year_range": "string (e.g., 2014–2019)",
  "category": "string (e.g., Culture Transformation)",
  "category_color_key": "green | orange | blue | grey",
  "read_time_minutes": "number",
  "difficulty": "accessible | medium | complex",
  "tags": ["string"],
  "source_disclosure": "string (e.g., Publicly disclosed via SEC filing / autobiography)",
  "is_new": "boolean",
  "is_locked": "boolean",
  "unlock_after_count": "number",
  "tabs": {
    "overview": {
      "situation": "string (Context Block text)",
      "body_paragraphs": ["string"],
      "pull_quote": { "text": "string", "attribution": "string" },
      "decisions": [
        { "abbreviation": "string (2 chars)", "title": "string", "description": "string" }
      ]
    },
    "timeline": {
      "events": [
        { "step": "number", "year": "string", "title": "string", "description": "string" }
      ]
    },
    "reflect": {
      "prompts": ["string"]
    },
    "takeaways": {
      "items": [
        { "headline": "string", "body": "string" }
      ]
    }
  }
}
```

### Push Notification Contract

```json
{
  "notification_id": "string",
  "type": "new_lesson | reminder | streak_alert",
  "title": "string (max 50 chars)",
  "body": "string (max 120 chars)",
  "lesson_id": "string (deep-link target)",
  "sent_at": "ISO timestamp"
}
```

The app UI has no hardcoded lesson content. All content must flow from this contract.
The category_color_key maps to the banner gradient. The company_abbreviation appears in the 22×22 logo placeholder box.
The decisions[].abbreviation (2 chars) replaces any emoji in the decisions grid.

---

## 12. STATES & EDGE CASES

### Lesson States
```
default        — Available, unstarted. Full opacity. No progress bar fill.
in_progress    — Left accent bar always visible on list item. Progress bar shows value.
completed      — 60% opacity. Icon becomes stroke checkmark. Badge shows "Completed".
locked         — 45% opacity. cursor: not-allowed. Icon becomes stroke lock. 
                 Tapping shows inline label: "Complete X more lessons to unlock".
new (pushed)   — Has "NEW" badge in Accent on featured card. Notification dot on home header.
```

### Empty State (no lessons yet)
```
Center-aligned.
Large Bebas Neue text: "YOUR FIRST LESSON IS ON ITS WAY"
Sub-label: DM Sans 13px muted — "Check back soon"
No illustration. No emoji. Pure type.
```

### Loading State
```
Skeleton screens only.
Skeleton color: #1A1A1A → #222222 shimmer animation.
Skeleton shapes mirror the actual content shapes.
No spinner. No progress indicator.
Duration assumed < 1.5s.
```

### Error State
```
Single line: "LESSON UNAVAILABLE" — Bebas Neue 20px centered
Sub-text: "Try again later" — Lora 14px muted
Retry button: Secondary CTA style
```

---

## 13. ANDROID-SPECIFIC IMPLEMENTATION NOTES

- Target: Android API 26+ (Android 8.0+)
- Safe area insets must be respected for bottom nav (use WindowInsets).
- Status bar: transparent, dark icons=false (light icons on dark background).
- Navigation bar: matches app background (#0A0A0A).
- Push notifications: use FCM (Firebase Cloud Messaging). Notification channel: "New Lessons" — importance HIGH.
- Deep link from notification: opens Lesson Detail screen directly.
- Fonts loaded via Google Fonts SDK or bundled as assets (preferred for offline use).
- Scroll behavior: fling-scrollable lists with edge glow disabled (replace with fade edge).
- Minimum touch target: 44×44dp for all interactive elements.
- Haptic feedback: light tick on lesson completion CTA only.

---

## 14. DO / DON'T SUMMARY

| DO | DON'T |
|---|---|
| Use Lora for all body/paragraph text | Use sans-serif for reading content |
| Use stroke SVG icons from Lucide/Phosphor | Use emoji as UI elements or content icons |
| Animate with purpose and restraint | Add looping or ambient animations |
| Left-align all text | Center-align body text |
| Use 2-character abbreviations in decision cards | Use emoji as category icons |
| Keep accent color rare and intentional | Spread accent color across UI chrome |
| Use large Bebas Neue watermark numbers as decoration | Use graphic illustrations or decorative images |
| Maintain 1.72–1.80 line height for body text | Use tight line height for paragraphs |
| Respect the 24px horizontal margin consistently | Break horizontal alignment without reason |
| Stack rank all information — most important first | Bury lead content below the fold |
| Category color dots (6px circle) for visual anchoring | Colorful card backgrounds that are vivid or saturated |
| Make lesson cards look like editorial content | Make lesson cards look like a game level selector |

---

*End of APEX UI/UX Specification. Version 1.0. Generated from prototype feedback.*
