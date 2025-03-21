interface User {
  readonly userId: number;
  email: string;
  googleId?: string;
  startTrial: () => string;
  getCoupons(couponName: string, value: number): string;
}

// In Interface You can inherit classes using extend Keyword, You can change its type
// In Type Aliase, you use & sign, You can't change its type

interface Admin extends User {
  role: "Manager" | "Team Lead" | "Senior Dev";
}
let mostNewUser: Admin = {
  // Now you need to pass new + old variable
  role: "Manager",
  userId: 23230,
  email: "thezuraiz@gmail.com",
  startTrial() {
    return "";
  },
  //   googleId: OPTIONAL PARAMETER
  getCoupons(couponName: "newYear", discount: 20) {
    // You can use different paramenter name but type is strict
    return "";
  },
};
