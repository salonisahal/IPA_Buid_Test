# My_test55 — Routes & Navigation

## How to run
cd /home/hewlett/projects/frontend_generator_backend/frontend_generator_backend/frontend_runs/run_6d8477e5_20260611_183431/project
npm install --legacy-peer-deps
npx expo start --web --port 46173
Open: http://localhost:46173
For iOS: npx expo run:ios (requires Xcode / iOS Simulator on macOS)

## Routes
| Route | File | Description |
|-------|------|-------------|
| / | app/index.tsx | Redirects to main tab |
| /dashboard | app/(tabs)/dashboard.tsx | Home dashboard screen |
| /schedule | app/(tabs)/schedule.tsx | Schedule view with calendar | 
| /messages | app/(tabs)/messages.tsx | Messages list |
| /profile | app/(tabs)/profile.tsx | Profile overview |
| /detail/[id] | app/detail/[id].tsx | Subject/lesson details |
| /login | app/login.tsx | Login screen |
| /confirm | app/(modal)/confirm.tsx | Modal confirmation sheet |
| /+not-found | app/+not-found.tsx | 404 fallback |
| /_layout | app/_layout.tsx | Root stack and providers |
| /(tabs)/_layout | app/(tabs)/_layout.tsx | Tabs layout |

## Navigation map
- app/index.tsx → Redirects to /(tabs)/dashboard.
- Tabs: Home (dashboard), Schedule, Messages, Profile.
- Dashboard subject cards → push /detail/[id].
- Dashboard schedule cards → push /detail/[id].
- Schedule lesson cards → push /detail/[id].
- Messages list rows → push /detail/[id].
- Profile list rows → push /detail/[id] or modal /confirm.
- Detail screen → “Add to schedule” opens modal /confirm.
- Confirm modal → Confirm/Cancel → back.
- Profile “Sign out” → push /login.
- Login “Sign In” → replace /(tabs)/dashboard; Back → router.back().
- Not found → Go Home → replace /(tabs)/dashboard.

## Shared components
- components/ScreenHeader.tsx — Large title header with optional action.
- components/Card.tsx — Rounded card container with optional press handling.
- components/ListRow.tsx — iOS-style list row with icon/avatar and chevron.
- components/Badge.tsx — Small count badge.
- components/EmptyState.tsx — Centered empty-state message with icon.

## Hooks
- hooks/useTheme.ts — Color scheme-aware theme tokens.
- hooks/useHaptics.ts — Haptic helper actions (tap/select/success/etc).

## Design tokens
- primary: light #FF7A45 / dark #FF8A5B
- surface: light #F7F7FA / dark #000000
- card: light #FFFFFF / dark #1C1C1E
- muted: light #A9A9B0 / dark #8E8E93
- accent: light #4CC788 / dark #32B977
- danger: light #FF3B30 / dark #FF453A
- success: light #34C759 / dark #30D158
- border: light #E6E6EA / dark #38383A
- separator: light #E5E5EA / dark #38383A
- label: light #111111 / dark #FFFFFF
- secondaryLabel: light #6C6C70 / dark #AEAEB2
- tealHero: light #0C6B5F / dark #0A5148
- purpleCard: light #7C86FF / dark #5D67FF
- blueCard: light #2233A8 / dark #1A2A86
- orangeCard: light #FF8A5B / dark #FF9B70
