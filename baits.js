/** @param {NS} ns */
export async function main(ns) {
  const ram = 32768;
  const home = ns.getHostname();
  const avmon = ns.getServerMoneyAvailable(home);
  const cost = ns.getPurchasedServerCost(ram);

  for (let i = 0; i < 25; i++) {
    if (avmon >= cost) {
      let hostname = ns.purchaseServer("PowerServer-" + i, ram);
    } else {
      ns.print("Not Enough Money Available", cost);
      break;
    }
  }

  ns.print("DONE");
}