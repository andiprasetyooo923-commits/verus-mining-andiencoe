#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/stat.h>
#include <sys/sysinfo.h>
#include <ctype.h>

#define MERAH   "\033[1;31m"
#define HIJAU   "\033[1;32m"
#define KUNING  "\033[1;33m"
#define BIRU    "\033[1;34m"
#define UNGU    "\033[1;35m"
#define CYAN    "\033[1;36m"
#define PUTIH   "\033[1;37m"
#define RESET   "\033[0m"

#define FILE_KONFIG ".verus_config.json"
#define NAMA_PEMBUAT  "ANDI ENCOE"
#define TELEGRAM_LINK "t.me/AndiEncoe"

char nama_perangkat[128] = "HP Android";
char model_cpu[128] = "CPU Tidak Dikenal";

void bersihkan_input(char *input) {
    char *awal = input;
    while(isspace((unsigned char)*awal)) awal++;
    if(*awal == 0) { *input = 0; return; }
    char *akhir = input + strlen(input) - 1;
    while(akhir > input && isspace((unsigned char)*akhir)) akhir--;
    akhir[1] = '\0';
    memmove(input, awal, strlen(awal)+1);
}

void baca_info_perangkat() {
    FILE *f;
    char baris[256];
    char brand[64] = "", model[64] = "";

    // Coba baca dari file sistem dulu
    f = fopen("/system/build.prop", "r");
    if(f) {
        while(fgets(baris, sizeof(baris), f)) {
            char *cari_brand = strstr(baris, "ro.product.brand=");
            char *cari_model = strstr(baris, "ro.product.model=");
            char *cari_device = strstr(baris, "ro.product.device=");
            
            if(cari_brand) sscanf(cari_brand, "ro.product.brand=%[^\n]", brand);
            if(cari_model) sscanf(cari_model, "ro.product.model=%[^\n]", model);
            if(cari_device && strlen(model)==0) sscanf(cari_device, "ro.product.device=%[^\n]", model);
        }
        fclose(f);
    }

    // Gabungkan nama merk + model
    if(strlen(brand) > 0 && strlen(model) > 0) {
        snprintf(nama_perangkat, sizeof(nama_perangkat), "%s %s", brand, model);
    } else if(strlen(model) > 0) {
        strcpy(nama_perangkat, model);
    } else {
        strcpy(nama_perangkat, "Perangkat Android / Termux");
    }

    // Baca info CPU
    f = fopen("/proc/cpuinfo", "r");
    if(f) {
        while(fgets(baris, sizeof(baris), f)) {
            char *cari_cpu = strstr(baris, "Hardware\t:");
            char *cari_arch = strstr(baris, "Processor\t:");
            if(cari_cpu) sscanf(cari_cpu, "Hardware\t: %[^\n]", model_cpu);
            else if(cari_arch && strlen(model_cpu)==0) sscanf(cari_arch, "Processor\t: %[^\n]", model_cpu);
        }
        fclose(f);
    }
}

void siapkan_ccminer() {
    struct stat st;
    if(stat("./ccminer", &st) == 0 && access("./ccminer", X_OK) == 0 && !S_ISDIR(st.st_mode)) {
        printf(HIJAU "✅ CCMINER SUDAH TERSEDIA!\n\n" RESET);
        return;
    }
    printf(KUNING "🔄 MENYIAPKAN CCMINER DARI SUMBER ZIKYU7...\n" RESET);
    system("pkg update -y > /dev/null 2>&1");
    system("pkg install libjansson nano git -y > /dev/null 2>&1");
    system("rm -rf ccminer-repo");
    system("git clone https://github.com/zikyu7/ccminer.git ccminer-repo --depth 1");
    system("cd ccminer-repo && chmod +x ccminer start.sh");
    system("cp ccminer-repo/ccminer .");
    system("chmod +x ccminer");
    system("rm -rf ccminer-repo");
    if(stat("./ccminer", &st) != 0 || access("./ccminer", X_OK) != 0 || S_ISDIR(st.st_mode)) {
        printf(MERAH "❌ GAGAL! CEK KONEKSI INTERNET.\n" RESET);
        exit(1);
    }
    printf(HIJAU "✅ CCMINER SIAP DIGUNAKAN!\n\n" RESET);
}

void tampilkan_banner() {
    printf(CYAN);
    printf("╔════════════════════════════════════════════════════════════════╗\n");
    printf("║" MERAH "  ██╗   ██╗██████╗  ███████╗           " CYAN "                     ║\n");
    printf("║" MERAH "  ██║   ██║██╔══██╗ ██╔════╝           " CYAN "                     ║\n");
    printf("║" MERAH "  ██║   ██║██████╔╝ ███████╗           " CYAN "                     ║\n");
    printf("║" MERAH "  ╚██╗ ██╔╝██╔══██╗ ╚════██║           " CYAN "                     ║\n");
    printf("║" MERAH "   ╚████╔╝ ██║  ██║ ███████║           " CYAN "                     ║\n");
    printf("║" MERAH "    ╚═══╝  ╚═╝  ╚═╝ ╚══════╝           " CYAN "                     ║\n");
    printf("║                     " UNGU "⛏️  VRS MINING C  ⛏️" CYAN "                              ║\n");
    printf("╠════════════════════════════════════════════════════════════════╣\n");
    printf("║  " HIJAU "✅ DIBUAT OLEH : " PUTIH "%s" CYAN "                                ║\n", NAMA_PEMBUAT);
    printf("║  " HIJAU "✅ TELEGRAM    : " PUTIH "%s" CYAN "                     ║\n", TELEGRAM_LINK);
    printf("╚════════════════════════════════════════════════════════════════╝\n\n" RESET);
}

void info_perangkat(int *total_inti, int *saran_inti) {
    baca_info_perangkat();
    *total_inti = get_nprocs();
    if(*total_inti <= 0) *total_inti = 8;
    *saran_inti = (*total_inti >= 4) ? (*total_inti - 1) : *total_inti;
    printf(BIRU "╔════════════════════════════════════════════════════════════╗\n");
    printf("║                     📊 INFO PERANGKAT                       ║\n");
    printf("╠════════════════════════════════════════════════════════════╣\n");
    printf("║  📱 PERANGKAT : %-42s ║\n", nama_perangkat);
    printf("║  🧠 CPU       : %-42s ║\n", model_cpu);
    printf("║  ⚙️ TOTAL INTI : %d inti                                      ║\n", *total_inti);
    printf("║  💡 SARAN PAKAI: MAKSIMAL %d inti                            ║\n", *saran_inti);
    printf("╚════════════════════════════════════════════════════════════╝\n\n" RESET);
}

int simpan_konfigurasi(char *dompet, char *worker, char *pool, int inti) {
    FILE *f = fopen(FILE_KONFIG, "w");
    if(!f) return 0;
    fprintf(f, "{\"dompet\":\"%s\",\"worker\":\"%s\",\"pool\":\"%s\",\"inti\":%d}", dompet, worker, pool, inti);
    fclose(f);
    return 1;
}

int baca_konfigurasi(char *dompet, char *worker, char *pool, int *inti) {
    FILE *f = fopen(FILE_KONFIG, "r");
    if(!f) return 0;
    char baris[256];
    fread(baris, 1, 256, f);
    fclose(f);
    char *ptr = strstr(baris, "\"dompet\":\"");
    if(ptr) sscanf(ptr, "\"dompet\":\"%[^\"]\"", dompet);
    ptr = strstr(baris, "\"worker\":\"");
    if(ptr) sscanf(ptr, "\"worker\":\"%[^\"]\"", worker);
    ptr = strstr(baris, "\"pool\":\"");
    if(ptr) sscanf(ptr, "\"pool\":\"%[^\"]\"", pool);
    ptr = strstr(baris, "\"inti\":");
    if(ptr) sscanf(ptr, "\"inti\":%d", inti);
    return 1;
}

void menu_pool(char *pool) {
    int pilih;
    printf(KUNING "\n🔗 PILIH POOL MINING:\n" RESET);
    printf(PUTIH "1. Luckpool Asia (Paling Stabil)\n");
    printf("2. Vipor Asia (Sudah Teruji Lancar)\n" RESET);
    printf(CYAN "Pilihan: " RESET);
    scanf("%d", &pilih);
    getchar();
    if(pilih == 2) strcpy(pool, "stratum+tcp://ap.vipor.net:5040");
    else strcpy(pool, "stratum+tcp://ap.luckpool.net:3956");
    printf(HIJAU "✅ Pool: %s\n\n" RESET, (pilih==2)?"Vipor Asia":"Luckpool Asia");
}

int menu_ubah_inti(int total_inti, int saran_inti) {
    int pilihan[32], jumlah_opsi = 0, pilih, val;
    printf(KUNING "\n🧠 PILIH JUMLAH INTI:\n" RESET);
    for(int i=2; i<=total_inti; i+=2) pilihan[jumlah_opsi++] = i;
    int tambah = (total_inti % 2 == 0) ? (total_inti -1) : total_inti;
    int ada = 0;
    for(int i=0; i<jumlah_opsi; i++) if(pilihan[i] == tambah) ada = 1;
    if(!ada && tambah >=2) pilihan[jumlah_opsi++] = tambah;
    for(int i=0; i<jumlah_opsi-1; i++) {
        for(int j=i+1; j<jumlah_opsi; j++) {
            if(pilihan[i] > pilihan[j]) { int t=pilihan[i]; pilihan[i]=pilihan[j]; pilihan[j]=t; }
        }
    }
    for(int i=0; i<jumlah_opsi; i++) printf(PUTIH "%d. %d inti\n" RESET, i+1, pilihan[i]);
    printf(CYAN "Pilihan kamu: " RESET);
    scanf("%d", &pilih);
    getchar();
    if(pilih >=1 && pilih <= jumlah_opsi) val = pilihan[pilih-1];
    else {
        printf(MERAH "⚠️ Pilihan tidak valid! Pakai saran %d inti.\n" RESET, saran_inti);
        val = saran_inti;
    }
    printf(HIJAU "✅ Dipakai: %d inti\n\n" RESET, val);
    return val;
}

int main() {
    char dompet[128] = "", worker[64] = "", pool[128] = "stratum+tcp://ap.luckpool.net:3956";
    int total_inti, saran_inti, inti_pakai, pilih;
    char perintah[512];
    system("clear");
    tampilkan_banner();
    siapkan_ccminer();
    info_perangkat(&total_inti, &saran_inti);
    if(baca_konfigurasi(dompet, worker, pool, &inti_pakai)) {
        printf(BIRU "📋 PENGATURAN TERSIMPAN:\n" RESET);
        printf(PUTIH "👛 Dompet: %s...\n🏷️ Worker: %s\n🧠 Inti: %d\n🏊 Pool: %s\n\n" RESET, dompet, worker, inti_pakai, strstr(pool,"luckpool")?"Luckpool Asia":"Vipor Asia");
        printf(KUNING "📌 MENU UTAMA:\n" RESET);
        printf(PUTIH "1. Mulai Mining Sekarang\n");
        printf("2. Ganti Pool Saja\n");
        printf("3. Ubah Jumlah Inti Saja\n");
        printf("4. Isi Data Baru Semua\n\n" RESET);
        printf(CYAN "Pilihan kamu: " RESET);
        scanf("%d", &pilih);
        getchar();
        switch(pilih) {
            case 2: menu_pool(pool); break;
            case 3: inti_pakai = menu_ubah_inti(total_inti, saran_inti); break;
            case 4: goto input_data;
            default: break;
        }
    } else {
input_data:
        printf(KUNING "\n📝 ISI DATA MINING BARU:\n" RESET);
        printf(CYAN "👛 Alamat Dompet VRSC: " RESET);
        fgets(dompet, sizeof(dompet), stdin);
        bersihkan_input(dompet);
        char *titik = strchr(dompet, '.');
        if(titik) *titik = '\0';
        printf(CYAN "🏷️ Nama Worker: " RESET);
        fgets(worker, sizeof(worker), stdin);
        bersihkan_input(worker);
        if(strlen(worker)==0) strcpy(worker, "Rig001");
        menu_pool(pool);
        inti_pakai = menu_ubah_inti(total_inti, saran_inti);
    }
    simpan_konfigurasi(dompet, worker, pool, inti_pakai);
mulai_mining:
    system("clear");
    tampilkan_banner();
    sprintf(perintah, "./ccminer -a verus -o %s -u %s.%s -p x -t %d", pool, dompet, worker, inti_pakai);
    printf(HIJAU "🚀 MEMULAI MINING...\n" RESET);
    printf(PUTIH "Perintah: %s\n\n" RESET, perintah);
    printf(MERAH "⚠️ TEKAN Ctrl+C UNTUK BERHENTI\n\n" RESET);
    while(1) {
        int status = system(perintah);
        printf(MERAH "\n⚠️ TERPUTUS! COBA LAGI DALAM 5 DETIK...\n" RESET);
        sleep(5);
    }
    return 0;
}
