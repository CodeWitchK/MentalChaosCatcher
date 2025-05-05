# Note-Taking App (React Native + Expo) 👋

_Quick & dirty mobile notes—built in a week to prove I can pick up JS, ramp a React Native codebase, and deploy without a backend._

---

## Getting Started

### Prerequisites

- **Node.js** v14 or newer  
- **npm** (bundled) or **Yarn**  
- **Expo CLI**  
  ```bash
  npm install -g expo-cli
  ```  
- **Expo Go** on your iOS/Android device  

### Installation & Running

```bash
git clone https://github.com/CodeWitchK/MentalChaosCatcher.git
cd my-notes-app
npm install          # or yarn install
npm start            # launches Metro and shows a QR code
```

1. Scan the QR code in **Expo Go**, or  
2. Press `i` for iOS simulator / `a` for Android emulator  

---

## Assumptions & Features

- **Assumptions**  
  - Notes live **only in memory** (no file or DB persistence).  
  - Styling optimized for mobile screens.  
  - Uses Expo’s file-based router.

- **Features**  
  - Add, edit, and delete notes.  
  - Display notes in a scrollable list.
  - List untitled notes, but not blank notes.
  - Timestamps displayed as `MM/DD/YYYY @ h:mm AM/PM`.  
  - Clean, responsive UI built with React Native components.

---

## Backend

- **Local caching only** (React state).  
- **No** Firestore, Firebase, or external authentication.

---

## Known Limitations & Future Improvements

- Notes are lost on app reload or close.  
- No user authentication.  
- Minimal input validation (no character limits).  
- **Future**:  
  
  - Add error handling & form validation.  
  - Introduce animations and polish UI/UX.
  - Implement Firestore backend so notes persist in a real DB  
---

## Optional Demo

A short screen-recording video is **not** included due to time constraints.  
