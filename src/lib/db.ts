import Database from '@tauri-apps/plugin-sql';

// 데이터베이스 인스턴스를 저장할 변수
let db: Database | null = null;

// 데이터베이스 초기화
export async function initDatabase(): Promise<Database> {
  if (db) return db;
  
  // SQLite 데이터베이스 연결
  db = await Database.load('sqlite:memos.db');
  
  // 메모 테이블 생성
  await db.execute(`
    CREATE TABLE IF NOT EXISTS memos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  return db;
}

// 메모 타입 정의
export interface Memo {
  id?: number;
  title: string;
  content: string;
  created_at?: string;
  updated_at?: string;
}

// 모든 메모 가져오기
export async function getAllMemos(): Promise<Memo[]> {
  const database = await initDatabase();
  const result = await database.select<Memo[]>(
    'SELECT * FROM memos ORDER BY created_at DESC'
  );
  return result;
}

// 메모 생성
export async function createMemo(memo: Omit<Memo, 'id' | 'created_at' | 'updated_at'>): Promise<void> {
  const database = await initDatabase();
  await database.execute(
    'INSERT INTO memos (title, content) VALUES (?, ?)',
    [memo.title, memo.content]
  );
}

// 메모 업데이트
export async function updateMemo(id: number, memo: Partial<Omit<Memo, 'id' | 'created_at' | 'updated_at'>>): Promise<void> {
  const database = await initDatabase();
  const updates: string[] = [];
  const values: any[] = [];
  
  if (memo.title !== undefined) {
    updates.push('title = ?');
    values.push(memo.title);
  }
  
  if (memo.content !== undefined) {
    updates.push('content = ?');
    values.push(memo.content);
  }
  
  if (updates.length === 0) return;
  
  updates.push('updated_at = CURRENT_TIMESTAMP');
  values.push(id);
  
  await database.execute(
    `UPDATE memos SET ${updates.join(', ')} WHERE id = ?`,
    values
  );
}

// 메모 삭제
export async function deleteMemo(id: number): Promise<void> {
  const database = await initDatabase();
  await database.execute('DELETE FROM memos WHERE id = ?', [id]);
}

// 특정 메모 가져오기
export async function getMemoById(id: number): Promise<Memo | null> {
  const database = await initDatabase();
  const result = await database.select<Memo[]>(
    'SELECT * FROM memos WHERE id = ?',
    [id]
  );
  return result.length > 0 ? result[0] : null;
}