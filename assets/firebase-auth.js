// ────────────────────────────────────────────────────────
// Firebase 공용 모듈 — 모든 미니앱에서 import해서 사용
// ────────────────────────────────────────────────────────
import { initializeApp }          from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
  from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc, deleteDoc }
  from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey:            'AIzaSyC-CfCYCaNa3--RTXChQIY7c-EVURyuO1I',
  authDomain:        'grayrockclub-51ed3.firebaseapp.com',
  projectId:         'grayrockclub-51ed3',
  storageBucket:     'grayrockclub-51ed3.firebasestorage.app',
  messagingSenderId: '1014728880013',
  appId:             '1:1014728880013:web:ad27fb41c8834c870c97c4',
};

const app    = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);

const provider = new GoogleAuthProvider();

// ── 인증 ──────────────────────────────────────────────
export function loginWithGoogle() { return signInWithPopup(auth, provider); }
export function logout()          { return signOut(auth); }
export function onAuthChange(cb)  { return onAuthStateChanged(auth, cb); }
export function currentUser()     { return auth.currentUser; }

// ── Firestore 헬퍼 ────────────────────────────────────
// path 예시: 'vocabulary/book'  →  users/{uid}/vocabulary/book
export async function saveCloud(path, data) {
  const user = auth.currentUser;
  if (!user) return false;
  const parts = path.split('/');
  // Firestore는 컬렉션/문서 교대 구조여야 함
  // 짝수 depth로 맞추기 위해 마지막 세그먼트를 문서 ID로 사용
  const ref = doc(db, 'users', user.uid, ...parts);
  await setDoc(ref, data, { merge: false });
  return true;
}

export async function loadCloud(path) {
  const user = auth.currentUser;
  if (!user) return null;
  const parts = path.split('/');
  const ref = doc(db, 'users', user.uid, ...parts);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

export async function deleteCloud(path) {
  const user = auth.currentUser;
  if (!user) return;
  const parts = path.split('/');
  await deleteDoc(doc(db, 'users', user.uid, ...parts));
}
