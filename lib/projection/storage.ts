import { promises as fs } from "node:fs";
import path from "node:path";
import type { LeadPayload } from "./types";

const DATA_PATH = path.join(process.cwd(), "data", "leads.json");

export async function storeLead(lead: LeadPayload) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });

  let existing: LeadPayload[] = [];
  try {
    const raw = await fs.readFile(DATA_PATH, "utf8");
    existing = JSON.parse(raw) as LeadPayload[];
  } catch {
    existing = [];
  }

  existing.push(lead);
  await fs.writeFile(DATA_PATH, JSON.stringify(existing, null, 2), "utf8");
}
