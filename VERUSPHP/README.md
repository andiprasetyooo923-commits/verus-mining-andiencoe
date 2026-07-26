# 🚀 VERUSPHP · Bot Mining Verus Coin
**Bot Mining Verus Khusus Android / Termux · Versi VRSPHP**

---

## 📌 INFORMASI PEMBUAT
- **Nama**: ANDI ENCOE
- **Telegram**: [t.me/AndiENCOE](https://t.me/AndiENCOE)
- **Versi**: VRSPHP
- **Bahasa**: PHP
---
📚 SUMBER & UCAPAN TERIMA KASIH

Program mining inti: **ccminer Verus**
- Christian Buchner
- Christian H. (Chris84)
- Tanguy Pruvot
- Darktron
- Oink70
- **zikyu7** — pengembangan untuk Android/ARM

🔗 https://github.com/zikyu7/ccminer

🙏 Terima kasih kepada **zikyu7** dan seluruh pengembang serta kontributor asli.

Proyek ini hanya mempermudah penggunaan dan konfigurasi. Seluruh hak cipta dan kredit tetap milik pembuat aslinya.


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

# 3. Unduh repositori ini (LINK SUDAH SESUAI REPO KAMU)
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

# 4. Masuk ke folder VERUSPHP
cd verus-mining-andiencoe/VERUSPHP

# 5. Jalankan bot mining
php bot.php
