🚀 CARA MENJALANKAN

1. Masuk ke folder project

cd ~/Z-UNMINEABLE-TERMUX

2. Berikan izin eksekusi

chmod +x run.sh
chmod +x xmrig

3. Jalankan Miner

./run.sh

📁 STRUKTUR FILE

Z-UNMINEABLE-TERMUX/
├── config.json
├── run.sh
└── xmrig

⚙️ KONFIGURASI

Pengaturan miner terdapat di:

config.json

Sesuaikan konfigurasi sebelum menjalankan miner.

🛑 MENGHENTIKAN MINER

Tekan:

CTRL + C

Atau:

pkill xmrig

🔄 MENJALANKAN KEMBALI

cd ~/Z-UNMINEABLE-TERMUX && ./run.sh
