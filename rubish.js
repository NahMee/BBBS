/** @param {NS} ns */
export async function main(ns) {

    const grabtarget = ns.getHostname();
    const target = (grabtarget);

	const trash = ["csec.js", "foodnstuff.js", "iron.js", "joesguns.js", "max.js", "n00dles.js",
		"nectar.js", "neo.js", "phantasy.js", "sigma.js", "sushi.js", "tea.js", "zero.js"];

	for (let i = 0; i < trash.length; i++) 
	ns.rm(trash[i], target);

}