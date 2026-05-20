# Interface & Themes

CURA has a distinctive visual identity — a Filofax-inspired design system with physical texture, earthy tones, and a leather sidebar. Two themes are available, and the interface is designed to feel like a physical object on your desk rather than a typical software UI.

## Themes

### Margin — Dark Theme

Parchment ink on dark leather. Warm, focused, distraction-free.

- Dark background with warm undertones
- Cream and amber typography
- Deep leather sidebar
- Paper grain texture overlay on the main content area

Best for: night-time work, focus sessions, low-light environments.

### Daylight — Light Theme

Dark ink on cream paper. Readable in bright environments.

- Cream/off-white content area
- Dark typography
- Warm leather sidebar in lighter tones
- Paper grain texture still present

Best for: daytime work, bright monitors, print-minded users.

### Switching Themes

Use the theme toggle in the top-right of the app window. Your preference is saved in `localStorage` and persists across sessions.

## The Sidebar

The sidebar uses a **Filofax leather** aesthetic with per-tab accent colours:

| Tab | Accent colour |
|---|---|
| AI Chat | Warm amber |
| Tasks | Earthy green |
| Contacts | Slate purple |
| Finance | Teal |
| Briefing | Tan |
| Calendar | Dusty rose |
| Suggestions | Ochre |

The active tab is highlighted with its accent colour. Inactive tabs use muted tones that don't compete for attention.

## Paper Grain Texture

The main content area has a subtle paper grain texture overlay. This is a design choice, not a bug — it gives CURA's interface a tactile quality that separates it from generic productivity software. The grain is visible but not distracting, and does not affect readability.

## System Tray

CURA lives in your Windows system tray. This means:

- **Auto-launch** — CURA starts when Windows boots
- **Close hides, not quits** — pressing the window's × button hides CURA to the tray; it does not exit
- **Left-click tray icon** — toggle show / hide the main window
- **Right-click tray icon** — opens a context menu with two options:
  - **Show CURA** — brings the main window to the front
  - **Exit CURA** — fully quits the application

### Why tray behaviour?

CURA's value comes from running continuously in the background — syncing email, checking reminders, updating calendar. Quitting the app stops all of this. The tray design ensures CURA stays active without occupying taskbar space.

## Window Behaviour

- The main window opens at its last position and size
- Minimising (taskbar) hides the window; it remains accessible from the tray
- Fully re-sized window dimensions are preserved across sessions

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + 1–7` | Switch between tabs |
| `N` | New task (from Tasks tab) |
| `B` | Board view (Tasks tab) |
| `L` | Lines view (Tasks tab) |
| `Enter` | Open selected item |
| `Space` | Mark selected task done |
| `Esc` | Close modal / cancel |
| `Ctrl + K` | Open CURA AI chat |
