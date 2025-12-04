import { text } from "drizzle-orm/pg-core";
import { integer, pgTable, varchar, json } from "drizzle-orm/pg-core";

export const sessionChatTable = pgTable("sessionChatTable", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  sessionId: varchar({ length: 255 }).notNull(),
  notes: text().notNull(),
  conversation: json().array(),
  selectedDoctor: json(),
  report: json(),
  createdBy: varchar().notNull(),
  createdOn: varchar().notNull(),
});

export type sessionChat = typeof sessionChatTable.$inferSelect;
