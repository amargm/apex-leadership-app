# APEX — Leadership Intelligence App
## Complete UI/UX Design & Build Specification

> This document is the definitive specification for the APEX Android app.
> Any AI agent or developer must treat every section as non-negotiable.

---

## 1. PRODUCT CONTEXT

**What it is**: A byte-sized leadership learning app built on real, publicly disclosed case studies.
**Who it is for**: People already in leadership positions — team leads, managers, directors. Not aspirants.
**Core mechanic**: Lessons (case studies) are pushed from a backend/CMS. The app is a reading + reflection container.
**Tone**: Intelligent. Serious. Like a well-edited business publication — not a gamified course app.

---

## 2. AESTHETIC DIRECTION — NON-NEGOTIABLE

### 2.1 Art Direction: **INSTRUMENTAL / BRUTALIST**

The app feels like a precision instrument. Like a Bloomberg terminal with taste. A financial data display with editorial grace. Everything exists for a reason. Nothing decorates.

**Key principles:**
- Zero border-radius on all elements (exception: toggle thumb = 8px)
- Ruled borders (1px solid) as primary structural element
- DM Mono for ALL data readouts, labels, metadata
- Corner indices on cards (e.g., "L002")
- Progress bars: 2px thin lines
- Section dividers: Bebas label + rule + DM Mono index number
- Square dots (4px, no border-radius) for category indicators

### 2.2 What This Is NOT
- Not playful. Not pastel. Not friendly-rounded.
- No emojis anywhere in the UI.
- No gradient blobs or "glassmorphism" glow effects.
- No soft shadows or floating cards.
- No rounded corners on any element.
- No UI that resembles Duolingo, Headspace, or any consumer wellness app.
- No purple. No purple-adjacent hues.

### 2.3 The Visual Reference Frame
*The Economist* layout × Bloomberg Terminal × high-end annual report × industrial instrument panel.

---

## 3. COLOR SYSTEM

```
Background:         #050505   (near-black)
Surface:            #0C0C0C   (card/panel bg)
Surface 2:          #121212   (nested elements)
Surface 3:          #161616   (tertiary panels)
Border Default:     #1A1A1A   (all dividers, card edges)
Border Subtle:      #222222   (de-emphasized separators)

Text Primary:       #EDEAE5   (warm off-white)
Text Secondary:     #888888   (labels, metadata)
Text Muted:         #555555   (disabled, tertiary)
Text Dark:          #333333   (low-contrast structural)
Text Darker:        #1E1E1E   (watermarks, ghost text)

Accent:             #C8F04D   (sharp yellow-green — used sparingly)
Accent Dim:         rgba(200,240,77,0.12)   (ghost highlight bg)
Accent Ghost:       rgba(200,240,77,0.04)   (barely-there tint)
Accent Orange:      #FF6B35   (category dot)
Accent Blue:        #4DB8FF   (category dot)

Danger:             #FF4444
Success:            #6FC97A
```

**Rules:**
- Accent #C8F04D is used ONLY for: active nav indicator (top line), progress bars, "NEW" badge bg, CTA button bg, active tab underline, progress percentages.
- Never use accent as large-area background.
- All text must meet WCAG AA contrast minimum.

---

## 4. TYPOGRAPHY SYSTEM

### 4.1 Font Stack

```
Display / Wordmark:     'Bebas Neue'          — structural display
Section Divider Labels: 'Bebas Neue'          — all-caps, letter-spaced
Body / Paragraphs:      'Lora'                — serif, reading-optimized
UI Chrome / Titles:     'DM Sans'             — weights: 400, 500, 600, 700
Pull Quotes / Titles:   'DM Serif Display'    — editorial authority
Data / Labels / Meta:   'DM Mono'             — monospace instrument readouts
```

**Why DM Mono was added:**
DM Mono is the defining typeface of the instrumental aesthetic. ALL metadata, labels, navigation text, stat readouts, badges, timestamps, and category identifiers use DM Mono. It creates the "instrument panel" feel.

### 4.2 Type Scale

```
App Wordmark:           Bebas Neue, 20px, letter-spacing 0.14em
Screen Title:           Bebas Neue, 13px, letter-spacing 0.14em, uppercase
Section Divider Label:  Bebas Neue, 11px, letter-spacing 0.14em, uppercase, #555555
Lesson Main Title:      DM Serif Display, 24px, line-height 1.25
Card Title:             DM Serif Display, 16px, line-height 1.3
Body Paragraph:         Lora, 15px, line-height 1.85, color #777777
Pull Quote:             DM Serif Display, 16px, line-height 1.6
UI Label (buttons):     DM Mono 500, 10px, uppercase, letter-spacing 0.08em
Nav Label:              DM Mono 300, 9px, uppercase, letter-spacing 0.10em
Stat Value:             DM Mono 400, 22px
Stat Label:             DM Mono 300, 8px, uppercase, letter-spacing 0.14em
Corner Index:           DM Mono 300, 8px, letter-spacing 0.10em, #444444
Badge Text:             DM Mono 300, 8px, uppercase, letter-spacing 0.10em
Meta / Caption:         DM Mono 300, 9px, letter-spacing 0.04em, #444444
Greeting Label:         DM Mono 400, 9px, uppercase, letter-spacing 0.12em
Greeting Name:          DM Serif Display, 22px
```

---

## 5. SPACING & STRUCTURE

### 5.1 Spacing Tokens

```
screenPaddingH:     20px (horizontal page margins)
xs:                 4px
sm:                 8px
md:                 12px
base:               16px
lg:                 24px
xl:                 32px
xxl:                48px
```

### 5.2 Border & Radius

```
ALL border-radius:  0px (ZERO — no rounded corners anywhere)
Exception:          Toggle thumb = 8px (functional affordance)

Border widths:
  thin:         1px (structural rules)
  accentBar:    2px (active indicators, progress bars)
```

### 5.3 Structural Elements

**Section Divider Pattern:**
```
[Bebas 11px label] ——————————————————— [DM Mono 8px index "001"]
```
Row: flex, space-between, align center. Rule = flex:1 border-bottom 1px, margin 0 10px.

**Card Pattern:**
```
┌────────────────────────────────┐  ← 1px border #1A1A1A
│ Corner Index (DM Mono 8px)     │
│                                │
│ Content                        │
│                                │
└────────────────────────────────┘
```

**Progress Bar:**
```
[═══════════════────────────────]  ← 2px height, bg #222222, fill accent
```

---

## 6. NAVIGATION — BOTTOM TAB BAR

```
Background:         rgba(5,5,5,0.96)
Top border:         1px solid #1A1A1A
Active indicator:   2px accent line ABOVE the icon (not bg highlight)
Label font:         DM Mono 300, 9px, uppercase, letter-spacing 0.10em
Active label color: #EDEAE5
Inactive color:     #444444
Icon size:          20px
Icon stroke:        1.5px
```

Tabs: Home, Path, Wins, Profile (4 tabs, no more).

---

## 7. SCREEN SPECIFICATIONS

### 7.1 Home Screen

**Structure (top to bottom):**
1. Header: App wordmark (Bebas 20px) with 2px accent underline + greeting block (DM Mono label + DM Serif name)
2. Readout Strip: 3-column instrument panel (stat value + label), bordered container, DM Mono throughout
3. Active Case Block: Signal dot + accent rail + case title + progress bar + meta (shown only if lesson in progress)
4. Section Divider: "CASES" + rule + index
5. Cases Rail: Horizontal ScrollView of FeaturedCard components (280px wide)
6. Section Divider: "TRACK" + rule + index
7. Track List: Bordered container with LessonListItem rows (border-bottom separators)

### 7.2 Lesson Detail Screen

**Structure:**
1. Top Bar: Back arrow in square box + DM Mono case index (e.g., "L001")
2. Hero Section: Watermark (Bebas 100px, opacity 0.03) + status pill + meta tags with pipe dividers + DM Serif title + subtitle + instrument panel (progress %, bar, time remaining)
3. Tab Bar: Tab labels with ruled dividers between them + full-width accent underline on active
4. Tab Content: Section headers with count badges, lesson components (paragraphs, quotes, timelines, etc.)
5. Reflect Tab: Intro text + reflection cards (numbered, with prompts)

### 7.3 Path Screen

**Structure:**
- Header with "X CASES" count badge
- Vertical timeline: square nodes (10px, border, no radius), solid 1px vertical line, DM Mono labels
- 4px square category dots
- 2px progress bars for each node

### 7.4 Wins Screen

**Structure:**
- Streak display: DM Mono large number
- Section dividers with index numbers
- Stats grid: 1px gap between cells (border shows as divider)
- Achievement items: 2px progress bars, DM Mono labels

### 7.5 Profile Screen

**Structure:**
- Square avatar (no border-radius)
- DM Mono role/title label
- Section dividers with index
- Settings groups: square containers, no radius
- Toggle switches: only element with radius (thumb = 8px)

---

## 8. COMPONENT SPECIFICATIONS

### 8.1 FeaturedCard (280px horizontal scroll card)

```
Width:              280px
Border:             1px solid #1A1A1A
Border-radius:      0
Header:             110px, category gradient bg, watermark (Bebas 140px, opacity 0.025)
Badge:              NEW = accent bg, square | IN PROGRESS = border only, square
Category line:      4px square dot + DM Mono 8px label
Body:               border-top 1px, padding 14px
Title:              DM Serif Display, 16px
Meta:               DM Mono 9px (time · difficulty)
Progress:           2px bar + DM Mono percentage
Arrow:              DM Mono "→" bottom-right, #2A2A2A
```

### 8.2 LessonListItem (track list row)

```
Layout:             Grid: 32px index | flex content | 32px status
Border-bottom:      1px #1A1A1A (items inside bordered container)
Index:              DM Mono 14px, #333333 (accent color when active)
Content:            4px square dot + DM Mono 8px category + DM Sans 13px 500 title
Status indicators:  → (default) | 65% (accent, in progress) | ✓ (done) | × (locked)
Active state:       2px accent rail on left
Completed:          Title gets line-through, opacity 0.55
Locked:             Opacity 0.35
```

### 8.3 CTAButton

```
Background:         Accent (#C8F04D)
Border-radius:      0
Font:               DM Mono 500, 10px, uppercase, letter-spacing 0.08em
Color:              #050505
Padding:            12px vertical, 24px horizontal
```

### 8.4 PullQuote

```
Border-left:        2px solid accent
Background:         rgba(200,240,77,0.04) (accent ghost)
Padding:            16px left, 12px vertical
Quote mark:         "(" — DM Mono 20px, accent, opacity 0.4
Text:               DM Serif Display, 16px, italic, line-height 1.6, #EDEAE5
Attribution:        DM Mono 9px, #444444
```

### 8.5 ContextBlock

```
Top accent line:    2px solid accent (full width)
Background:         #0C0C0C
Border:             1px #1A1A1A (sides + bottom)
Label:              DM Mono 8px, accent color, uppercase
Body:               DM Sans 500, 13px, #EDEAE5
```

### 8.6 ReflectionCard

```
Border:             1px #1A1A1A
Accent rail:        2px left border, accent color
Header:             DM Mono 9px numbered label + divider
Prompt:             DM Serif Display, 15px, #EDEAE5
```

### 8.7 KeyDecisionsGrid

```
Layout:             2-column grid, 1px gap (border shows through)
Cell bg:            #0C0C0C
Index:              DM Mono 9px, accent
Title:              DM Sans 500, 12px
```

### 8.8 TimelineComponent

```
Nodes:              10px square, 1px border #1A1A1A, no radius
Active node:        Filled accent
Line:               1px solid #1A1A1A (vertical)
Year label:         DM Mono 9px
Content:            DM Sans 13px, border-bottom 1px
```

### 8.9 TakeawayItem

```
Card:               1px border, no radius
Accent rail:        2px left border
Index header:       DM Mono 9px
Body:               DM Sans 13px, line-height 1.6
```

---

## 9. ANIMATION & INTERACTION

- Press animations: subtle translateY (-2px) or opacity change. No bouncy spring physics.
- Progress bars: no animation on mount (static fill).
- Screen transitions: native stack default (slide from right).
- No parallax, no particle effects, no micro-animations on idle.

---

## 10. TECHNICAL STACK

```
Framework:          Expo ~51.0.0 + React Native 0.74.5
Language:           TypeScript (strict)
Navigation:         @react-navigation/native-stack + bottom-tabs
Fonts:              @expo-google-fonts/bebas-neue, lora, dm-sans, dm-serif-display, dm-mono
Icons:              lucide-react-native (20px, strokeWidth 1.5)
Gradient:           expo-linear-gradient (card headers only)
SVG:                react-native-svg@15.2.0 (PINNED — 15.3.0 breaks RN 0.74)
Android:            minSdkVersion 26, compileSdkVersion 34
Package:            com.apex.leadership
```

### 10.1 Theme Token Files

```
src/theme/colors.ts      — All color tokens
src/theme/typography.ts  — FontFamily enum + TypeScale
src/theme/spacing.ts     — Spacing, Radius (all 0), BorderWidth
src/theme/index.ts       — Barrel export
```

---

## 11. RULES FOR AI AGENTS

1. **Zero border-radius** — Every element is square. Check for stray borderRadius values.
2. **DM Mono for data** — Any number, label, badge, timestamp, nav text, category, index → DM Mono.
3. **DM Serif Display for editorial** — Titles, quotes, greeting names only.
4. **Lora for body** — Long-form reading paragraphs only.
5. **Bebas Neue for structural** — Wordmark, section divider labels only.
6. **DM Sans for UI** — Button labels (if not DM Mono), content titles, descriptions.
7. **1px borders, not shadows** — Structure comes from ruled lines, never box-shadow.
8. **2px for emphasis** — Accent bars, progress fills, active indicators.
9. **No gradients except** card headers (subtle, dark-to-darker category tints).
10. **Opacity for hierarchy** — Completed = 0.55, Locked = 0.35. Never grey out with color change.
