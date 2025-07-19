import { integer, pgTable, varchar } from "drizzle-orm/pg-core";


export const users = pgTable('users', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    firstName: varchar({length: 50}),
    lastName: varchar({ length: 50 }),
    middleName: varchar({length: 50 }),
    email: varchar(),
    password: varchar({length: 255}),
    createdAt: integer().default(new Date().getTime()),
    googleId: varchar({ length: 100 }).unique(),
});