// ============================================================
//  DAILY QR SCHEDULE — this is the only file you need to edit.
// ============================================================
//
//  How the link for a given day is chosen (first match wins):
//    1. DATES     — an exact date you list (YYYY-MM-DD)
//    2. WEEKDAYS  — a link for that day of the week
//    3. ROTATION  — a list that cycles one link per day
//    4. FALLBACK  — used if nothing above applies
//
//  Leave any section empty ( {} or [] ) to skip it.
//  Tokens {date} {yyyy} {mm} {dd} {weekday} are replaced
//  with that day's date, e.g. "https://x.com/?d={date}".

window.DAILY_QR = {

  // Which time zone decides when "today" starts.
  // Everyone who scans gets the same link, wherever they are.
  TIMEZONE: "America/New_York",

  // 1. Specific dates (optional)
  DATES: {
    // "2026-12-25": "https://example.com/holiday-hours",
  },

  // 2. Day of week (optional) — remove the // to use a line
  WEEKDAYS: {
    // Monday:    "https://example.com/monday",
    // Tuesday:   "https://example.com/tuesday",
    // Wednesday: "https://example.com/wednesday",
    // Thursday:  "https://example.com/thursday",
    // Friday:    "https://example.com/friday",
    // Saturday:  "https://example.com/saturday",
    // Sunday:    "https://example.com/sunday",
  },

  // 3. Rotating list — link 1 shows on ROTATION_START,
  //    link 2 the next day, and so on, then starts over.
  ROTATION_START: "2026-10-18",
  ROTATION: [
    "https://drive.google.com/file/d/1GeKJprEDhKs0uJ3Mse2v0H4SHKy1NiVc/view?usp=sharing",
    "https://drive.google.com/file/d/1O7Kwd1UtEOsEYyh_1NdIRmttRJd0bYEn/view?usp=sharing",
    "https://drive.google.com/file/d/1l7P9PpdJ1chQtbbXEfNCBZ5KzttihYyF/view?usp=sharing",
    "https://drive.google.com/file/d/1Q2hwCeiJXn0aZq-BQQwpwsIsX7hxyngD/view?usp=sharing",
    "https://drive.google.com/file/d/178BtKffBEimcH16zCrzuzDWULPrntLOz/view?usp=sharing",
    "https://drive.google.com/file/d/1Xoqu4tzSSVPBqy_wWGnbsFyqKlZBFHdc/view?usp=sharing",
  ],

  // 4. Fallback
  FALLBACK: "https://example.com",
};
