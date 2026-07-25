# ⛏️ Verus Miner Android
Miner VerusCoin (VRSC) khusus Termux Android, ringan dan mudah dipakai.

## Fitur
- 2 Pool Terbaik: LuckPool Asia + Vipor Singapura
- Pilih inti CPU otomatis
- Menu cepat ganti pool / inti
- Simpan data dompet otomatis

## 🚀 Cara Pakai
```bash
# Update & install kebutuhan
pkg update && pkg upgrade -y
pkg install git clang -y

# Download repo
git clone https://github.com/andiprasetyooo923/verus-mining-andiencoe.git
cd verus-mining-andiencoe/VERUSC

# Kompilasi & jalankan
clang verus.c -o verus
chmod +x verus ccminer
./verus
