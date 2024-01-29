// |===============================================================| //
// |==    Snippet created by braddevans@breadhub-org             ==| //
// |==    ----------------------------------------------------   ==| //
// |==                                                           ==| //
// |== 2 functions originally made in php and adapted to node.js ==| //
// |===============================================================| //


// Snippet Code start
const nhs_multipliers = {'1': 10, '2': 9, '3': 8, '4': 7, '5': 6, '6': 5, '7': 4, '8': 3, '9': 2,}

function nhs_number_validator(nhs_number) {
  const number = String(nhs_number);
  if (nhs_number.length === 10) {
    let current_number = 0;
    let current_sum = 0;
    let current_multiplier = 0;
    let checkNumber = parseInt(number.charAt(9))
    let remainder = 0;
    let total = 0;

    for (let i = 0; i <= 8; i++) {
      current_number = parseInt(number.charAt(i));
      current_multiplier = parseInt(SharedFunctions.nhs_multipliers[i + 1]);
      current_sum = current_sum + (current_number * current_multiplier);
    }

    remainder = current_sum % 11;
    total = 11 - remainder;
    // debug_log("nhs_number_validator: nhs_number: " + number + ", current_sum: " + current_sum + ", checkNumber: " + checkNumber + ", remainder: " + remainder + ", total: " + total);

    switch (total) {
      case 11:
        total = 0;
        break;
      case 10:
        return false;
    }
    return total === checkNumber;
  } else {
    return false;
  }
}
// Snippet Code end
