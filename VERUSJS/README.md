⛏️ VERUSJS - Versi JavaScript Mining Verus Coin

✅ Dibuat oleh: ANDI ENCOE
✅ Telegram: t.me/AndiEncoe

Script mining VRSC berbasis Node.js untuk HP Android menggunakan Termux, dengan tampilan menarik dan mudah digunakan untuk pemula maupun pengguna berpengalaman.

---

🔥 KEUNGGULAN

✅ Tampilan berwarna dan tulisan besar
✅ Simpan pengaturan otomatis (tidak perlu isi ulang)
✅ Pilih pool Luckpool / Vipor
✅ Atur jumlah inti CPU sesuai kemampuan HP
✅ Otomatis sambung ulang jika koneksi terputus
✅ Khusus HP Android menggunakan Termux

---

🚀 CARA PASANG & JALANKAN LENGKAP

📱 TERMUX ANDROID

⚡ CARA CEPAT — SATU BARIS LANGSUNG JALAN

Salin semua perintah berikut, lalu tempel langsung di Termux:

git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git && cd verus-mining-andiencoe/VERUSJS && pkg update && pkg upgrade -y && pkg install nodejs git libjansson -y && npm install && node index.js

🛠️ CARA MANUAL

Jika ingin menjalankan satu per satu:

# Update Termux
pkg update && pkg upgrade -y

# Install kebutuhan
pkg install nodejs git libjansson -y

# Clone repository
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

# Masuk ke folder VERUSJS
cd verus-mining-andiencoe/VERUSJS

# Install dependency
npm install

# Jalankan
node index.js

🔄 MENJALANKAN KEMBALI

Jika repository sudah pernah diunduh:

cd ~/verus-mining-andiencoe/VERUSJS
node index.js

---

📚 SUMBER & UCAPAN TERIMA KASIH

Program mining inti: ccminer Verus

- Christian Buchner
- Christian H. (Chris84)
- Tanguy Pruvot
- Darktron
- Oink70
- zikyu7 — pengembangan untuk Android/ARM

🔗 https://github.com/zikyu7/ccminer

🙏 Terima kasih kepada zikyu7 dan seluruh pengembang serta kontributor asli.

Proyek ini hanya mempermudah penggunaan dan konfigurasi. Seluruh hak cipta dan kredit program pihak ketiga tetap menjadi milik pembuat aslinya dan mengikuti lisensi masing-masing.
