import { JSONFilePreset } from 'lowdb/node';

// Read or create db.json
const defaultData = { posts: [] };
const db = await JSONFilePreset('db.json', defaultData);

export default db;
