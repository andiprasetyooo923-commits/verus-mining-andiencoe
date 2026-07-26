# ⛏️ TAMBANG VERUS PYTHON
**Alat Tambang Verus Santai Khusus Android / Termux & VPS / Server Linux**
> Dibuat khusus untuk memudahkan penambangan koin Verus (VRSC) di HP Android maupun VPS tanpa ribet.

---

## ✨ Fitur Utama
✅ Tampilan menu rapi & mudah dipakai pemula
✅ Otomatis mengunduh & menyiapkan alat tambang ccminer
✅ Dukungan Penuh: **Android/Termux** & **VPS/Server Linux**
✅ Mendukung 2 Pool Terbaik: **Luckpool Asia** & **Vipor Asia**
✅ Bisa atur jumlah inti CPU sesuai kebutuhan
✅ Menyimpan pengaturan otomatis, tidak perlu isi ulang setiap kali buka
✅ Menu khusus dukungan pembuat
✅ Bisa ganti pool, ubah inti, atau buat data baru kapan saja
✅ Menggunakan **Lingkungan Virtual (venv)** agar paket tidak bentrok
✅ Bebas error & dioptimalkan untuk arsitektur ARM & x86/x64

---

## 📋 Info Pembuat
- **Nama**: ANDI ENCOE
- **Kontak Telegram**: [t.me/AndiEncoe](https://t.me/AndiEncoe)

  ---

💻 Untuk VPS / Server Linux (Debian/Ubuntu)
# 1. Perbarui paket sistem
sudo apt update && sudo apt upgrade -y

# 2. Pasang alat pendukung yang dibutuhkan
sudo apt install python3 python3-venv git libjansson-dev -y

# 3. Atur alias python (opsional)
alias python=python3

# 4. Unduh kode dari repositori ini
git clone https://github.com/andiprasetyooo923/verus-mining-andiencoe.git

# 5. Masuk ke folder program
cd verus-mining-andiencoe/VERUSPYTHON

# 6. Buat lingkungan virtual (venv) - CUKUP SEKALI SAJA
python3 -m venv venv

# 7. Aktifkan venv - WAJIB dilakukan setiap kali mau menjalankan program
source venv/bin/activate

# ✅ Jika di baris awal muncul tulisan (venv), berarti sudah siap!

# 8. Jalankan alat tambang
python vrs_miner.py

---

  
