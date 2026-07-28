#!/bin/bash

# ==============================================
# ⛏️  C O E V R S   M I N E R  | CEPAT ⛏️
# ✅ LANGSUNG PAKAI FILE JADI, TANPA KOMPILASI LAMA
# ✅ COCOK ANDROID/ARM64, SESUAI VERUS.IO
# ✅ TELEGRAM : t.me/AndiENCOE
# ✅ ALAMAT DUKUNGAN : RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw
# ==============================================

# === WARNA ===
MERAH='\033[1;31m'
HIJAU='\033[1;92m'
BIRU='\033[1;96m'
UNGU='\033[1;95m'
PUTIH='\033[1;97m'
KUNING='\033[1;93m'
RESET='\033[0m'

# === DATA TETAP ===
ALAMAT_DUKUNGAN="RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw"
NAMA_ALAT="hp-01"
JUMLAH_INTI=7
VERSI="VERUSHASH V2.2"
FILE_MINER="./verus"
# LINK FILE JADI STABIL DARI RILIS RESMI
LINK_VERUS="https://github.com/monkins1010/ccminer/releases/download/v3.8.3/ccminer_verus_arm64"

# === DATA BISA DIUBAH ===
DOMPET_PENGGUNA="$ALAMAT_DUKUNGAN"

# === ALAMAT POOL ===
LUCKPOOL="stratum+tcp://na.luckpool.net:3956"
VIPOR="stratum+tcp://ap.vipor.net:5040"

# === SIAPKAN FILE CEPAT ===
siapkan_file() {
    echo -e "\n${BIRU}🔍 Cek file penambang...${RESET}"
    if [ -f "$FILE_MINER" ]; then
        echo -e "${HIJAU}✅ File sudah ada!${RESET}"
        [ ! -x "$FILE_MINER" ] && chmod +x "$FILE_MINER"
        return 0
    fi

    echo -e "${KUNING}⚠️ Mengunduh file siap pakai (sedikit detik)...${RESET}"
    pkg update -y && pkg install wget -y >/dev/null 2>&1
    wget --no-check-certificate -q "$LINK_VERUS" -O "$FILE_MINER"

    if [ -f "$FILE_MINER" ] && [ -s "$FILE_MINER" ]; then
        chmod +x "$FILE_MINER"
        echo -e "${HIJAU}✅ Siap dipakai!${RESET}\n"
        return 0
    else
        echo -e "${MERAH}❌ Gagal unduh! Coba ulangi atau ganti sinyal${RESET}"
        rm -f "$FILE_MINER" 2>/dev/null
        return 1
    fi
}

# === INFO HP ===
cek_perangkat() {
    OS_VERSI=$(getprop ro.build.version.release 2>/dev/null)
    JENIS_SISTEM="Android ${OS_VERSI:-Termux}"
    NAMA_CPU=$(grep -m1 'Hardware' /proc/cpuinfo | cut -d: -f2 | sed 's/^ *//')
    TOTAL_INTI=$(nproc --all 2>/dev/null || echo "8")
    SARAN_INTI=$(( TOTAL_INTI - 1 ))
    [ "$JUMLAH_INTI" -gt "$TOTAL_INTI" ] && JUMLAH_INTI="$SARAN_INTI"

    echo -e "\n${BIRU}╭─────────────────────────────────────╮${RESET}"
    echo -e "${BIRU}│${RESET} 📊  I N F O  P E R A N G K A T  ${BIRU}│${RESET}"
    echo -e "${BIRU}├─────────────────────────────────────┤${RESET}"
    echo -e "${BIRU}│${RESET} 📱 JENIS : ${PUTIH}${JENIS_SISTEM}${RESET}"
    echo -e "${BIRU}│${RESET} 🧠 CPU  : ${PUTIH}${NAMA_CPU:0:30}${RESET}"
    echo -e "${BIRU}│${RESET} ⚙️ TOTAL: ${PUTIH}${TOTAL_INTI} CORE${RESET}"
    echo -e "${BIRU}│${RESET} 💡 SARAN: ${HIJAU}MAKSIMAL ${SARAN_INTI} CORE${RESET}"
    echo -e "${BIRU}╰─────────────────────────────────────╯${RESET}\n"
}

# === TAMPILAN UTAMA ===
tampil_banner() {
clear
echo -e "${UNGU}╔═════════════════════════════════════════════════════╗${RESET}"
echo -e "${UNGU}║${RESET}                ⛏️  C O E V R S  ⛏️                  ${UNGU}║${RESET}"
echo -e "${UNGU}╚═════════════════════════════════════════════════════╝${RESET}"
echo ""
echo -e "${HIJAU}✅ VERSI     : ${PUTIH}${VERSI}${RESET}"
echo -e "${HIJAU}✅ SUPPORT   : ${PUTIH}${ALAMAT_DUKUNGAN}${RESET}"
echo -e "${HIJAU}✅ DOMPET    : ${PUTIH}${DOMPET_PENGGUNA}${RESET}"
echo -e "${HIJAU}✅ NAMA ALAT : ${PUTIH}${NAMA_ALAT}${RESET}"
echo -e "${HIJAU}✅ INTI CPU  : ${PUTIH}${JUMLAH_INTI} CORE${RESET}"
cek_perangkat
echo -e "${BIRU}───────────────────────────────────────────────────────${RESET}"
echo ""
}

# === MENU ===
menu_utama() {
tampil_banner
echo -e "${PUTIH}🔽 P I L I H A N   M E N U :${RESET}"
echo -e "   ${KUNING}1.${RESET} ⛏️ MULAI TAMBANG DI LUCKPOOL"
echo -e "   ${KUNING}2.${RESET} ⛏️ MULAI TAMBANG DI VIPOR"
echo -e "   ${KUNING}3.${RESET} ✏️ GANTI ALAMAT DOMPET SAYA"
echo -e "   ${KUNING}4.${RESET} ✏️ UBAH NAMA ALAT (UNTUK POOL)"
echo -e "   ${KUNING}5.${RESET} ⚙️ UBAH JUMLAH INTI CPU"
echo -e "   ${KUNING}6.${RESET} 🔄 KEMBALI KE SETTINGAN AWAL"
echo -e "   ${KUNING}7.${RESET} ❌ KELUAR DARI PROGRAM"
echo ""
read -p "👉 KETIK ANGKA [1-7] LALU ENTER: " PILIH
}

# === MULAI TAMBANG ===
mulai_tambang() {
    siapkan_file || { read -p "👉 TEKAN ENTER KEMBALI..."; return; }
    tampil_banner
    echo -e "${HIJAU}✅ Menghubungkan ke $2...${RESET}\n"
    "$FILE_MINER" -a verus -o "$1" -u "${DOMPET_PENGGUNA}.${NAMA_ALAT}" -p x -t "$JUMLAH_INTI" 2>&1 | while read -r BARIS; do
        [[ "$BARIS" == *"kh/s"* || "$BARIS" == *"hash/s"* ]] && echo -e "${KUNING}⚡ KECEPATAN: ${BARIS}${RESET}"
        [[ "$BARIS" == *"Connected"* || "$BARIS" == *"difficulty set to"* ]] && echo -e "${HIJAU}✅ KONEKSI BERHASIL!${RESET}"
        [[ "$BARIS" == *"accepted"* ]] && echo -e "${HIJAU}✅ BERHASIL! Bukti Diterima 🎉${RESET}"
        [[ "$BARIS" == *"rejected"* ]] && echo -e "${MERAH}❌ DITOLAK: ${BARIS##rejected, }${RESET}"
    done
    read -p "👉 TEKAN ENTER KEMBALI..."
}

# === JALAN PROGRAM ===
while true; do
    menu_utama
    case "$PILIH" in
        1) mulai_tambang "$LUCKPOOL" "LUCKPOOL" ;;
        2) mulai_tambang "$VIPOR" "VIPOR" ;;
        3) read -p "Masukkan alamat dompet Verus: " DOMPET_PENGGUNA
           echo -e "${HIJAU}✅ Dompet berhasil diubah!${RESET}"; sleep 1.5 ;;
        4) read -p "Nama alat (tanpa spasi): " NAMA_ALAT
           echo -e "${HIJAU}✅ Nama alat: ${NAMA_ALAT}${RESET}"; sleep 1.5 ;;
        5) read -p "Jumlah inti (maksimal 7): " JUMLAH_INTI
           [ "$JUMLAH_INTI" -gt 7 ] && JUMLAH_INTI=7
           echo -e "${HIJAU}✅ Inti diubah jadi $JUMLAH_INTI CORE${RESET}"; sleep 1.5 ;;
        6) DOMPET_PENGGUNA="$ALAMAT_DUKUNGAN"; NAMA_ALAT="hp-01"; JUMLAH_INTI=7
           echo -e "${HIJAU}✅ Kembali ke pengaturan awal!${RESET}"; sleep 2 ;;
        7) echo -e "\n${MERAH}👋 Keluar program${RESET}"; exit 0 ;;
        *) echo -e "${MERAH}❌ Pilihan salah!${RESET}"; sleep 1.2 ;;
    esac
done
