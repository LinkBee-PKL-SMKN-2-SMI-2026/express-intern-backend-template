# WMS (Warehouse Management System) - Training API

Repositori ini adalah fondasi untuk evaluasi teknis backend. Klien tidak peduli seberapa keras kamu berusaha; mereka hanya peduli apakah sistem berjalan dengan aman, cepat, dan tanpa bug.

## ⚠️ Aturan Main (Rules of Engagement)
Kegagalan mematuhi aturan di bawah ini berarti **Pull Request (PR) otomatis ditolak (Rejected)** tanpa perlu dibaca isinya.

1. **Dilarang keras melakukan PUSH ke `main`.**
   Semua pekerjaan dilakukan di branch terpisah dengan format: `feat/nama-fitur` atau `fix/nama-bug`.
2. **Atomic Commits.**
   Gunakan standar *Conventional Commits* (`feat: ...`, `fix: ...`, `chore: ...`). Jika ada commit dengan pesan "update" atau "beresin error", PR akan ditolak.
3. **Linter adalah Tuhan.**
   Jika GitHub Actions / Linter menunjukkan tanda silang merah, jangan pernah berani menekan tombol "Request Review". Tech Lead tidak akan membaca kode yang ditolak oleh mesin.
4. **Hukum Bertanya (The 3-Step Rule).**
   Dilarang mengirim pesan "Kak, ini error kenapa ya?". Jika kamu stuck, kamu hanya boleh bertanya jika menyertakan:
   - **Konteks:** "Saya sedang mencoba..."
   - **Aksi:** "Saya sudah mencoba solusi A, membaca dokumentasi B, dan mengubah C..."
   - **Bukti:** "Tapi log error di baris X menampilkan Y." (Sertakan screenshot / log).

## Tech Stack Wajib
- Node.js (Express) & TypeScript
- Prisma ORM
- PostgreSQL (via Docker Compose)
- Winston / Pino (Logging)
- Zod / Joi (Input Validation)