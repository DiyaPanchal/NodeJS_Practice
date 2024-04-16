import os from "os";

export function getTotalMemory(req, res) {
  const totalMemory = os.totalmem();
  return res.send(`Total Memory: ${totalMemory}`);
}

export function getFreeMemory(req, res) {
  const freeMemory = os.freemem();
  return res.send(`Free Memory: ${freeMemory}`);
}

export function getCPUs(req, res) {
  const CPUs = os.cpus();
  return res.send(`CPUs: ${JSON.stringify(CPUs)}`);
}
