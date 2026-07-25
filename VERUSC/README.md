# 📦 VERUSC - Mining Verus Coin untuk Termux Android
✅ **Dibuat oleh**: ANDI ENCOE
✅ **Telegram**: t.me/AndiEncoe

Alat mining VRSC otomatis, ringan dan mudah dipakai di HP Android.

---

##📚 SUMBER PROGRAM
 
- Program mining inti: ccminer buatan pengembang asli & zikyu7

- Proyek ini hanya memudahkan cara pakai, semua hak cipta tetap milik pembuat aslinya.

---

## 🚀 CARA PAKAI LANGSUNG
Salin perintah ini satu per satu di Termux:

```bash
# 1. Perbarui & pasang kebutuhan
pkg update && pkg upgrade -y
pkg install gcc libjansson git -y

# 2. Ambil file dari repositori ini
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

# 3. Masuk ke folder program
cd verus-mining-andiencoe/VERUSC

# 4. Kompilasi & jalankan
gcc verus.c -o verus
./verus
