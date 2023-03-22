//This function takes a single argument called speed and checks whether the driver is exceeding the speed limit or not.
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
  //if the driver's speed is less than or equal to the speed limit. If so, it logs "Ok" to the console.
    if (speed <= speedLimit) {
      console.log("Ok");
      //if the driver's speed is greater than the speed limit, the function calculates the number of demerit points the driver should receive .
    } else {
      const points = Math.floor((speed - speedLimit) / kmPerPoint);
      //If the number of points is greater than or equal to 12, the function logs "License suspended" to the console.
      if (points >= 12) {
        console.log("License suspended");
        //Otherwise, it logs the number of points to the console using string concatenation.
      } else {
        console.log("Points: " + points);
      }
    }
  }
  checkSpeed(80); // Output: "Points: 2"
