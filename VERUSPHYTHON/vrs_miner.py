#!/usr/bin/env python3
import os
import sys
import json
import time
import subprocess
from pathlib import Path

# === WARNA ===
M1 = "\033[1;31m"
M2 = "\033[1;32m"
M3 = "\033[1;33m"
M4 = "\033[1;34m"
M5 = "\033[1;35m"
M6 = "\033[1;36m"
M7 = "\033[1;37m"
M8 = "\033[0m"

# === DATA KONFIG ===
FILE_CFG = Path.home() / ".vrs_93741.dat"
PEMBUAT = "ANDI ENCOE"
INFO_TELE = "t.me/AndiEncoe"
ALAMAT_DUKUNGAN = "RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw"
REPO_SUMBER = "https://github.com/zikyu7/ccminer.git"
FILE_BIN = "./ccminer"

def bersih_teks(x):
    return str(x).strip()

def jalankan_perintah(cmd):
    subprocess.run(cmd, shell=True, capture_output=True)

def cek_perangkat():
    jenis = "HP ANDROID / TERMUX"
    cpu_nama = "CPU BELUM TERBACA"
    total_inti = os.cpu_count() or 4
    if os.path.exists("/proc/cpuinfo"):
        with open("/proc/cpuinfo", "r") as f:
            for baris in f:
                if "Hardware\t:" in baris:
                    cpu_nama = baris.split(":", 1)[1].strip()
                elif "model name\t:" in baris and cpu_nama == "CPU BELUM TERBACA":
                    cpu_nama = baris.split(":", 1)[1].strip()
    if not os.path.exists("/system"):
        jenis = "VPS / SERVER LINUX"
    return jenis, cpu_nama, total_inti

def siapkan_program():
    if Path(FILE_BIN).exists() and os.access(FILE_BIN, os.X_OK):
        print(f"\n{M2}✅ ALAT TAMBANG SUDAH SIAP!{M8}\n")
        return
    print(f"\n{M3}🔄 SEDANG MENYIAPKAN FILE...{M8}")
    jalankan_perintah("pkg update -y && pkg install libjansson git -y 2>/dev/null || apt update -y && apt install libjansson-dev git -y")
    jalankan_perintah("rm -rf .tmp_628 && git clone --depth 1 " + REPO_SUMBER + " .tmp_628")
    if not Path(".tmp_628/ccminer").exists():
        print(f"{M1}❌ GAGAL! CEK KONEKSI INTERNET.{M8}")
        sys.exit(1)
    jalankan_perintah("cp .tmp_628/ccminer . && chmod +x ccminer && rm -rf .tmp_628")
    print(f"{M2}✅ SELESAI SIAP PAKAI!{M8}\n")

def tampil_banner():
    os.system("clear")
    print(f"""{M6}╔════════════════════════════════════════════════════════════╗
║{M1}  ██╗   ██╗██████╗  ███████╗           {M6}                 ║
║{M1}  ██║   ██║██╔══██╗ ██╔════╝           {M6}                 ║
║{M1}  ██║   ██║██████╔╝ ███████╗           {M6}                 ║
║{M1}  ╚██╗ ██╔╝██╔══██╗ ╚════██║           {M6}                 ║
║{M1}   ╚████╔╝ ██║  ██║ ███████║           {M6}                 ║
║{M1}    ╚═══╝  ╚═╝  ╚═╝ ╚══════╝           {M6}                 ║
║                     {M5}⛏️ TAMBANG VERUS PYTHON ⛏️{M6}                      ║
╠════════════════════════════════════════════════════════════╣
║  {M2}✅ DIBUAT OLEH : {M7}{PEMBUAT:<40}{M6}       ║
║  {M2}✅ INFO KONTAK : {M7}{INFO_TELE:<40}{M6}       ║
╚════════════════════════════════════════════════════════════╝{M8}\n""")

def info_spesifikasi():
    jenis, cpu, total = cek_perangkat()
    saran = total - 1 if total >= 4 else total
    print(f"{M4}╔════════════════════════════════════════════╗")
    print(f"║             📊 INFO PERANGKAT               ║")
    print(f"╠════════════════════════════════════════════╣")
    print(f"║  📱 JENIS : {jenis.ljust(40)} ║")
    print(f"║  🧠 CPU   : {cpu.ljust(40)} ║")
    print(f"║  ⚙️ INTI  : {str(total).ljust(39)}║")
    print(f"║  💡 SARAN : MAKS {str(saran).ljust(35)}║")
    print(f"╚════════════════════════════════════════════╝{M8}\n")
    return total, saran

def simpan_pengaturan(data):
    with open(FILE_CFG, "w") as f:
        json.dump(data, f)

def baca_pengaturan():
    if Path(FILE_CFG).exists():
        with open(FILE_CFG, "r") as f:
            return json.load(f)
    return None

def pilih_pool_tambang():
    print(f"{M3}🔗 PILIH POOL MINING:{M8}\n{M7}1. Luckpool Asia\n2. Vipor Asia{M8}")
    pilih = bersih_teks(input(f"{M6}PILIHAN KAMU: {M8}"))
    return "stratum+tcp://ap.vipor.net:5040" if pilih == "2" else "stratum+tcp://ap.luckpool.net:3956"

def pilih_jumlah_inti(total, saran):
    print(f"{M3}🧠 PILIH JUMLAH INTI CPU:{M8}")
    daftar_opsi = sorted(set(range(2, total+1, 2)) | {total-1 if total%2 else total})
    for nomor, nilai in enumerate(daftar_opsi, 1):
        print(f"{M7}{nomor}. {nilai} inti{M8}")
    try:
        idx = int(bersih_teks(input(f"{M6}PILIHAN KAMU: {M8}"))) - 1
        return daftar_opsi[idx] if 0 <= idx < len(daftar_opsi) else saran
    except:
        print(f"{M1}⚠️ PILIHAN SALAH! PAKAI {saran} INTI.{M8}")
        return saran

def tampilkan_dukungan():
    print(f"\n{M3}╔════════════════════════════════════════════════════════════╗")
    print(f"║                     💖 DUKUNG SAYA 💖                        ║")
    print(f"╠════════════════════════════════════════════════════════════╣")
    print(f"║  {M2}{ALAMAT_DUKUNGAN}{M3}                                    ║")
    print(f"╚════════════════════════════════════════════════════════════╝{M8}\n")
    input(f"{M6}Tekan Enter untuk kembali ke menu...{M8}")

def utama():
    tampil_banner()
    siapkan_program()
    total_inti, saran_inti = info_spesifikasi()
    data_simpan = baca_pengaturan()

    if data_simpan:
        print(f"{M4}📋 PENGATURAN TERSEDIA:{M8}")
        print(f"{M7}👛 DOMPET: {data_simpan['dompet'][:12]}... | 🏷️ {data_simpan['worker']} | 🧠 {data_simpan['inti']}{M8}\n")
        print(f"{M7}📌 MENU UTAMA:{M8}")
        print(f"{M7}1. MULAI TAMBANG SEKARANG")
        print(f"{M7}2. GANTI POOL MINING")
        print(f"{M7}3. UBAH JUMLAH INTI CPU")
        print(f"{M7}4. GANTI SEMUA DATA BARU")
        print(f"{M7}5. SUPPORT SAYA 💖{M8}\n")
        
        while True:
            pilih_menu = bersih_teks(input(f"{M6}PILIH MENU: {M8}"))
            if pilih_menu == "1":
                break
            elif pilih_menu == "2":
                data_simpan["pool"] = pilih_pool_tambang()
                break
            elif pilih_menu == "3":
                data_simpan["inti"] = pilih_jumlah_inti(total_inti, saran_inti)
                break
            elif pilih_menu == "4":
                data_simpan = None
                break
            elif pilih_menu == "5":
                tampilkan_dukungan()
                tampil_banner()
                print(f"{M4}📋 PENGATURAN TERSEDIA:{M8}")
                print(f"{M7}👛 DOMPET: {data_simpan['dompet'][:12]}... | 🏷️ {data_simpan['worker']} | 🧠 {data_simpan['inti']}{M8}\n")
                print(f"{M7}📌 MENU UTAMA:{M8}")
                print(f"{M7}1. MULAI TAMBANG SEKARANG")
                print(f"{M7}2. GANTI POOL MINING")
                print(f"{M7}3. UBAH JUMLAH INTI CPU")
                print(f"{M7}4. GANTI SEMUA DATA BARU")
                print(f"{M7}5. SUPPORT SAYA 💖{M8}\n")
            else:
                print(f"{M1}Pilihan tidak ada, coba lagi ya!{M8}\n")

    if not data_simpan:
        dompet = bersih_teks(input(f"{M6}👛 ALAMAT DOMPET VRSC: {M8}")).split(".")[0]
        nama_worker = bersih_teks(input(f"{M6}🏷️ NAMA WORKER: {M8}")) or "RIG-SANTAI"
        pool = pilih_pool_tambang()
        inti = pilih_jumlah_inti(total_inti, saran_inti)
        data_simpan = {"dompet": dompet, "worker": nama_worker, "pool": pool, "inti": inti}

    simpan_pengaturan(data_simpan)
    perintah_jalan = f"{FILE_BIN} -a verus -o {data_simpan['pool']} -u {data_simpan['dompet']}.{data_simpan['worker']} -p x -t {data_simpan['inti']}"

    while True:
        tampil_banner()
        print(f"{M2}🚀 MULAI MENAMBANG SEKARANG!{M8}\n{M7}PERINTAH: {perintah_jalan}{M8}\n{M1}⚠️ TEKAN Ctrl+C UNTUK BERHENTI{M8}\n")
        try:
            subprocess.run(perintah_jalan, shell=True)
        except KeyboardInterrupt:
            print(f"\n{M2}✅ PROGRAM DIMATIKAN AMAN.{M8}")
            sys.exit(0)
        print(f"\n{M1}⚠️ KONEKSI TERPUTUS! COBA LAGI 5 DETIK...{M8}")
        time.sleep(5)

if __name__ == "__main__":
    utama()
