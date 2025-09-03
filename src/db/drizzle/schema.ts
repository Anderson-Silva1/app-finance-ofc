import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const transactionsTable = sqliteTable("transactions", {
  id: text("id").primaryKey().notNull(),
  userId: text("user_id").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  amount: text("amount").notNull(),
  type: text("type").notNull(),
  category: text("category").notNull(),
  pending: integer("pending", { mode: "boolean" }).notNull(),
  createdAt: text("created_at").notNull(),
  updateAt: text("update_at").notNull(),
});

export type transactionsTableSelectMode = InferSelectModel<
  typeof transactionsTable
>;
export type transactionsTableInsertMode = InferInsertModel<
  typeof transactionsTable
>;
