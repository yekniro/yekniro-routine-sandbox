/**
 * The total in cents for a net amount in cents and a tax rate in basis points (1 % = 100).
 * Rounding: half a cent or more rounds up.
 */
export function totalWithTax(netCents, rateBasisPoints) {
  if (!Number.isInteger(netCents) || netCents < 0) throw new RangeError("netCents must be a non-negative integer");
  if (!Number.isInteger(rateBasisPoints) || rateBasisPoints < 0) throw new RangeError("rateBasisPoints must be a non-negative integer");
  const tax = (netCents * rateBasisPoints) / 10000;
  return netCents + Math.floor(tax); // the seeded defect: truncates instead of rounding half up
}
