import { drizzle } from "drizzle-orm/better-sqlite3";

import Database from "better-sqlite3";
import { resolve } from "path";
import { transactionsTable } from "./schema";

const sqliteDataBasePath = resolve(process.cwd(), "./db.sqlite3");
const sqliteDataBase = new Database(sqliteDataBasePath);

export const drizzleDb = drizzle(sqliteDataBase, {
  schema: {
    posts: transactionsTable,
    // users: usersTable,
    // section: sectionTable,
  },
  logger: true,
});
