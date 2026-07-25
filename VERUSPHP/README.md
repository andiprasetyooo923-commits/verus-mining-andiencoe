# 🚀 VERUSPHP · Bot Mining Verus Coin
**Bot Mining Verus Khusus Android / Termux · Versi VRSPHP**

---

## 📌 INFORMASI PEMBUAT
- **Nama**: ANDI ENCOE
- **Telegram**: [t.me/AndiENCOE](https://t.me/AndiENCOE)
- **Versi**: VRSPHP
- **Bahasa**: PHP

---

## ✨ FITUR UTAMA
✅ Otomatis unduh & pasang `ccminer` dari repo resmi
✅ Dukung Pool **Luckpool Asia** & **Vipor Asia** (paling stabil)
✅ Otomatis deteksi jumlah inti CPU perangkat
✅ Bisa pilih jumlah inti yang ingin dipakai
✅ Simpan konfigurasi otomatis, tidak perlu input ulang
✅ Otomatis sambung ulang jika koneksi terputus
✅ Tampilan sederhana & mudah digunakan
✅ Siap dijalankan langsung di Termux

---

## 📋 SYARAT MINIMUM
- HP Android minimal RAM 2GB
- Aplikasi **Termux** terbaru
- Koneksi internet stabil
- Izin **Penghemat Baterai** dimatikan untuk Termux

---

## 📥 CARA INSTALASI & MENJALANKAN
Buka Termux, jalankan perintah satu per satu:

```bash
# 1. Perbarui sistem paket
yes | pkg update && pkg upgrade -y

# 2. Pasang paket yang dibutuhkan
yes | pkg install libjansson git php termux-tools -y

# 3. Unduh repositori ini
git clone https://github.com/andiprasetyooo923/verus-mining-andiencoe.git

# 4. Masuk ke folder VERUSPHP
cd verus-mining-andiencoe/VERUSPHP

# 5. Jalankan bot mining
php bot.php
