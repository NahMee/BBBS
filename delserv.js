/** @param {NS} ns */
export async function main(ns) {

	const servers = ["Targeted-Scripts-0", "Targeted-Scripts-1", "Targeted-Scripts-2", "Targeted-Scripts-3", 
	"Targeted-Scripts-4", "Targeted-Scripts-5", "Targeted-Scripts-6", "Targeted-Scripts-7", "Targeted-Scripts-8", 
	"Targeted-Scripts-13", "Targeted-Scripts-12", "Targeted-Scripts-11", "Targeted-Scripts-10", "Targeted-Scripts-9", 
	"Targeted-Scripts-14", "Targeted-Scripts-15", "Targeted-Scripts-16", "Targeted-Scripts-17", "Targeted-Scripts-18", 
	"Targeted-Scripts-23", "Targeted-Scripts-22", "Targeted-Scripts-21", "Targeted-Scripts-20", "Targeted-Scripts-19", 
	"Targeted-Scripts-24"]

	for (let i = 0; i < servers.length; i++) {
		ns.deleteServer(servers[i]);
	}

}