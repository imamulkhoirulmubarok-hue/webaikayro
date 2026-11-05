# Kayro AI: design tokens dan cek kontras (Fase 2)

Cek kontras WCAG dihitung dengan script (rasio, ambang 4.5:1 teks normal, 3:1 teks besar dan elemen UI).

## Token asli (dari ui-ux-pro-max)
| Token | Nilai | Catatan |
|---|---|---|
| --kayro-canvas | #0F0F23 | latar halaman |
| --kayro-surface | #1B1B30 | kartu, panel |
| --kayro-muted | #27273B | latar sekunder |
| --kayro-ink | #F8FAFC | teks utama (18.0:1 di canvas) |
| --kayro-ink-soft | #94A3B8 | teks sekunder (7.4:1 di canvas) |
| --kayro-border | #4338CA | GAGAL: 2.39:1 di canvas |
| --kayro-accent | #E11D48 | 4.02:1 di canvas, hanya teks besar. Dengan teks putih 4.70:1, lolos |
| --kayro-destructive | #EF4444 | teks di canvas 5.01:1 lolos. Teks putih 3.76:1, hanya teks besar |

## Usulan perbaikan (belum disetujui user)
| Token | Nilai usulan | Rasio | Alasan |
|---|---|---|---|
| --kayro-border | #6366F1 | 4.22:1 di canvas | Lolos 3:1 untuk garis UI (WCAG 1.4.11) |
| --kayro-accent-text | #F43F5E | 5.14:1 di canvas | Dipakai untuk teks/link berwarna di atas canvas |
| --kayro-accent (latar tombol) | #E11D48 | 4.70:1 dengan teks putih | Tetap dipakai untuk latar tombol |
| --kayro-destructive (latar tombol) | #DC2626 | 4.83:1 dengan teks putih | Menggantikan #EF4444 untuk tombol hapus |

Catatan: #EF4444 tetap boleh untuk teks di atas canvas (5.01:1).
