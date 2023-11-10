import {drizzle} from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import {env} from "~/env.mjs";
import * as schema from "./schema";
import {migrate} from "drizzle-orm/mysql2/migrator";

const connection = await mysql.createConnection({
  uri: env.DATABASE_URL,
});

export const db = drizzle(
  connection,
  {schema, mode: 'default'}
);

try {
  await migrate(db, {migrationsFolder: './migrations'})
  console.log('migrated')
} catch (e) {
  console.log(e)
}




