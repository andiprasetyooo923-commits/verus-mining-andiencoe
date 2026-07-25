# 🚀 VERUSPHP · Bot Mining Verus Coin
**Bot Mining Verus Khusus Android / Termux · Versi VRSPHP**

---

## 📌 INFORMASI PEMBUAT
- **Nama**: ANDI ENCOE
- **Telegram**: [t.me/AndiENCOE](https://t.me/AndiENCOE)
- **Versi**: VRSPHP
- **Bahasa**: PHP

---

##  FITUR UTAMA
✅ Otomatis unduh & pasang ccminer dari repo resmi
✅ Dukung Pool **Luckpool Asia** & **Vipor Asia** (paling stabil)
✅ Otomatis deteksi jumlah inti CPU HP
✅ Bisa pilih jumlah inti yang dipakai
✅ Simpan konfigurasi otomatis, tidak perlu input ulang
✅ Otomatis sambung ulang jika koneksi putus
✅ Tampilan jelas & mudah dipakai
✅ Siap dipakai langsung di Termux

---

## 📥 CARA INSTALASI & PAKAI
Buka Termux, jalankan perintah satu per satu:

```bash
# 1. Update sistem
yes | pkg update && pkg upgrade -y

# 2. Pasang paket yang dibutuhkan
yes | pkg install libjansson git php termux-tools -y

# 3. Klon repo ini
git clone https://github.com/andiprasetyooo923/verus-mining-andiencoe.git
cd verus-mining-andiencoe/VERUSPHP

# 4. Jalankan bot
php bot.php
