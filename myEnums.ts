enum seatTypes {
  AISLE, //  Use can pass as key : value paire
  MIDDLE,
  WINDOW,
  FORTH,
}

let seatBooked = seatTypes.AISLE;

/// But Always use seatTypes with const because it not generate extra code in compile Time

const enum seatBooking {
  AISAL,
  MIDDLE,
  WINDOW,
}

// RECOMMENEDED: ALWAYS USE ENUMS WITH CONST

let userSeat = seatBooking.AISAL;
