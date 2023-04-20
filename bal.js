/** @param {NS} ns */
export async function main(ns) {
  const bal = ns.getServerMoneyAvailable("home");
  ns.tprint(bal)
}