// Common numeric constants used throughout the application
export const COMMON_NUMBERS = {
  // Function line limits
  MAX_FUNCTION_LINES: 50,

  // Time intervals (milliseconds)
  ANIMATION_DELAY: 100,
  TYPEWRITER_DELAY: 25,
  TYPEWRITER_COMPLETE_DELAY: 500,
  WEBSOCKET_RETRY_DELAY: 3000,
  SCROLL_TIMEOUT: 100,

  // Time units
  MILLISECONDS_PER_SECOND: 1000,
  SECONDS_PER_MINUTE: 60,
  MINUTES_PER_HOUR: 60,
  HOURS_PER_DAY: 24,

  // Layout and spacing
  GRID_COLUMNS: 4,
  CONTAINER_PADDING: 16,
  BORDER_RADIUS: 8,

  // Game numbers (Keno example) - these are example game data, not magic numbers
  // eslint-disable-next-line no-magic-numbers
  KENO_NUMBERS: [1, 2, 4, 6, 7, 8, 13, 13, 20, 25, 28, 39],
  // eslint-disable-next-line no-magic-numbers
  KENO_SELECTED: [2, 4, 25, 39],

  // Scroll and velocity thresholds
  SCROLL_THRESHOLD: 5,
  MIN_SCROLL_VELOCITY: 0.1,
  MAX_SCROLL_VELOCITY: 2,
  SCROLL_END_VELOCITY: 0.05,
  FOOTER_AREA_THRESHOLD: 0.9, // Last 10% of page

  // Retry and connection limits
  MAX_RETRIES: 3,
  MAX_RECONNECT_ATTEMPTS: 10,
  CONNECTION_TIMEOUT: 5,

  // Percentages
  FULL_PERCENTAGE: 100,

  // Array indices
  FIRST_INDEX: 0,

  // Negative values
  NEGATIVE_OFFSET: -4,

  // UI specific numbers
  ICON_SIZE: 16,
  TOOLTIP_OFFSET: 4,
  DROPDOWN_OFFSET: 4,
  POPOVER_OFFSET: 4,
  HOVER_CARD_OFFSET: 4,
  MENUBAR_NEGATIVE_OFFSET: -4,
  MENUBAR_POSITIVE_OFFSET: 8,
  PROGRESS_MAX: 100,
  SIDEBAR_MIN_WIDTH: 60,
  SIDEBAR_MAX_WIDTH: 60,
  SIDEBAR_HOURS: 24,
  SIDEBAR_DAYS: 7,
  SIDEBAR_PERCENTAGE_40: 40,
  SIDEBAR_PERCENTAGE_50: 50,

  // Animation and layout numbers
  LAYOUT_PERCENTAGE_10: 10,
  LAYOUT_PERCENTAGE_12: 12,
  LAYOUT_PERCENTAGE_15: 15,
  LAYOUT_PERCENTAGE_70: 70,
  LAYOUT_PERCENTAGE_80: 80,

  // Test numbers
  TEST_COUNT_3: 3,
  TEST_COUNT_4: 4,
  TEST_COUNT_5: 5,

  // Rating and volatility numbers
  STAR_RATING_1: 1,
  STAR_RATING_2: 2,
  STAR_RATING_3: 3,
  STAR_RATING_4: 4,
  STAR_RATING_5: 5,

  // Common time and utility constants
  DECIMAL_PRECISION: 0.1,
  TWO_ELEMENTS: 2,

  // Additional UI constants
  DAYS_PER_WEEK: 7,
  TEN_UNITS: 10,
  PERCENTAGE_40: 40,
  PERCENTAGE_50: 50,

  // String duplicate thresholds
  STRING_DUPLICATE_THRESHOLD: 5,
  TEST_DUPLICATE_THRESHOLD: 6,
} as const;
