// backend/db.js
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const dbPromise = open({
  filename: "users.db",
  driver: sqlite3.Database,
});

export async function initDb() {
  const db = await dbPromise;
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT
    )
  `);
}
