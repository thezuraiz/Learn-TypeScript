interface User {
  readonly userId: number;
  email: string;
  googleId?: string;
  startTrial: () => string;
  getCoupons(couponName: string, value: number): string;
}

let mostNewUser: User = {
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
