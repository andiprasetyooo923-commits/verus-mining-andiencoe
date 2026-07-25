<?php
// ==============================================
//  VERUS MINING BOT · VERSI PERBAIKAN
//  Dibuat Oleh : ANDI ENCOE
//  Telegram    : t.me/AndiENCOE
//  VERSI       : VRSPHP
// ==============================================

define('FILE_KONFIG', '.verus_config.json');
define('REPO', 'https://github.com/zikyu7/ccminer.git');

function warna($teks, $kode) {
    $w = [
        'merah'  => "\033[1;31m",
        'hijau'  => "\033[1;32m",
        'kuning'=> "\033[1;33m",
        'biru'   => "\033[1;34m",
        'ungu'  => "\033[1;35m",
        'cyan'  => "\033[1;36m",
        'putih' => "\033[1;37m",
        'reset' => "\033[0m"
    ];
    return $w[$kode] . $teks . $w['reset'];
}

function bersihkan_input($in) {
    return trim(preg_replace('/\s+/', ' ', $in));
}

function banner() {
    echo warna("\n╔════════════════════════════════════════╗\n", 'cyan');
    echo warna("║       VERUS MINING BOT                ║\n", 'ungu');
    echo warna("╠════════════════════════════════════════╣\n", 'cyan');
    echo warna("║ Dibuat : ANDI ENCOE                   ║\n", 'hijau');
    echo warna("║ Telegram: t.me/AndiENCOE               ║\n", 'hijau');
    echo warna("║ Versi   : VRSPHP                       ║\n", 'hijau');
    echo warna("╚════════════════════════════════════════╝\n\n", 'cyan');
}

function siapkan() {
    if(is_file('./ccminer') && is_executable('./ccminer')) {
        echo warna("[OK] MINER VERUS SUDAH SIAP!\n\n", 'hijau');
        return true;
    }

    echo warna("[INFO] MENYIAPKAN SISTEM & FILE...\n", 'kuning');
    
    // Perbaiki agar tidak muncul pesan Broken pipe
    shell_exec('pkg update --yes > /dev/null 2>&1');
    shell_exec('pkg upgrade --yes > /dev/null 2>&1');
    shell_exec('pkg install --yes libjansson nano git php termux-tools > /dev/null 2>&1');

    shell_exec('rm -rf tmp-repo ccminer');

    $clone = shell_exec('git clone '.REPO.' tmp-repo --depth 1 2>&1');
    if(strpos($clone, 'fatal') !== false || !is_dir('tmp-repo')) {
        echo warna("[ERROR] GAGAL UNDUH REPO! CEK KONEKSI\n", 'merah');
        exit(1);
    }

    // ✅ PERBAIKI: FILE ccminer LANGSUNG DI FOLDER UTAMA, BUKAN DI DALAM SUBFOLDER!
    if(is_file('tmp-repo/ccminer')) {
        copy('tmp-repo/ccminer', './ccminer');
        chmod('./ccminer', 0755);
    } else {
        echo warna("[ERROR] FILE MINER TIDAK DITEMUKAN!\n", 'merah');
        shell_exec('rm -rf tmp-repo');
        exit(1);
    }

    shell_exec('rm -rf tmp-repo');

    if(is_file('./ccminer') && is_executable('./ccminer')) {
        echo warna("[OK] BERHASIL DIPASANG DENGAN BENAR!\n\n", 'hijau');
        return true;
    } else {
        echo warna("[ERROR] GAGAL MENYIAPKAN FILE!\n", 'merah');
        exit(1);
    }
}

function info_perangkat(&$total_inti, &$saran_inti, &$nama_hp, &$cpu_model) {
    $nama_hp = "ANDROID / TERMUX";
    $cpu_model = trim(shell_exec("getprop ro.product.model 2>/dev/null || echo 'TIDAK DIKENAL'"));
    
    $total_inti = (int)shell_exec('nproc 2>/dev/null') ?: 4;
    $saran_inti = ($total_inti >= 2) ? $total_inti - 1 : 1;

    echo warna("--- INFO PERANGKAT ---\n", 'biru');
    echo warna("Perangkat: $nama_hp ($cpu_model)\n", 'putih');
    echo warna("Total Inti: $total_inti | Saran: $saran_inti\n\n", 'putih');
}

function menu_pilih_inti($total_inti, $saran_inti) {
    echo warna("PILIH JUMLAH INTI (1-$total_inti): ", 'kuning');
    $pilih = (int)trim(fgets(STDIN));
    $res = ($pilih >=1 && $pilih <= $total_inti) ? $pilih : $saran_inti;
    echo warna("[OK] DIPAKAI: $res INTI\n\n", 'hijau');
    return $res;
}

function menu_pool(&$pool) {
    echo warna("PILIH POOL: 1.Luckpool 2.Vipor: ", 'kuning');
    $pilih = trim(fgets(STDIN));
    $pool = ($pilih == '2') ? 'stratum+tcp://ap.vipor.net:5040' : 'stratum+tcp://ap.luckpool.net:3956';
    echo warna("[OK] POOL: ".($pilih=='2'?'VIPOR':'LUCKPOOL')." ASIA\n\n", 'hijau');
}

function simpan($dompet, $worker, $pool, $inti) {
    file_put_contents(FILE_KONFIG, json_encode([
        'dompet' => $dompet,
        'worker' => $worker,
        'pool'   => $pool,
        'inti'   => $inti
    ], JSON_PRETTY_PRINT));
}

function baca(&$dompet, &$worker, &$pool, &$inti) {
    if(!is_file(FILE_KONFIG)) return false;
    $data = json_decode(file_get_contents(FILE_KONFIG), true);
    if(!$data) return false;
    
    $dompet = $data['dompet'] ?? '';
    $worker = $data['worker'] ?? 'WORKER1';
    $pool   = $data['pool'] ?? 'stratum+tcp://ap.vipor.net:5040';
    $inti   = $data['inti'] ?? 2;
    return true;
}

function menu_utama($dompet, $worker, $pool, $inti) {
    $nama_pool = strpos($pool, 'luckpool') ? 'LUCKPOOL ASIA' : 'VIPOR ASIA';
    echo warna("--- DATA KONFIGURASI ---\n", 'biru');
    echo warna("Alamat Dompet: ".substr($dompet, 0, 16)."...\n", 'putih');
    echo warna("Nama Worker: $worker\n", 'putih');
    echo warna("Pool: $nama_pool\n", 'putih');
    echo warna("Jumlah Inti: $inti\n\n", 'putih');
    
    echo warna("PILIH MENU: 1.Mulai 2.Ganti Pool 3.Ganti Inti 4.Ganti Worker 5.Data Baru: ", 'kuning');
    return (int)trim(fgets(STDIN));
}

// ==============================================
//  EKSEKUSI UTAMA
// ==============================================
system('clear');
banner();
siapkan();
info_perangkat($total_inti, $saran_inti, $nama_hp, $cpu_model);

$dompet = $worker = $pool = '';
$inti_pakai = 0;

if(baca($dompet, $worker, $pool, $inti_pakai)) {
    $pilih = menu_utama($dompet, $worker, $pool, $inti_pakai);
    switch($pilih) {
        case 2: menu_pool($pool); break;
        case 3: $inti_pakai = menu_pilih_inti($total_inti, $saran_inti); break;
        case 4: echo warna("NAMA WORKER BARU: ",'putih'); 
                $worker = bersihkan_input(fgets(STDIN)) ?: 'WORKER1'; 
                break;
        case 5: goto input_baru;
        default: break;
    }
} else {
input_baru:
    echo warna("ALAMAT DOMPET (AWAL R): ",'putih');
    $dompet = bersihkan_input(fgets(STDIN));
    while(strlen($dompet) < 30 || substr($dompet, 0, 1) !== 'R') {
        echo warna("[SALAH! HARUS AWAL R: ", 'merah');
        $dompet = bersihkan_input(fgets(STDIN));
    }

    echo warna("NAMA WORKER: ",'putih');
    $worker = bersihkan_input(fgets(STDIN)) ?: 'WORKER1';
    menu_pool($pool);
    $inti_pakai = menu_pilih_inti($total_inti, $saran_inti);
}

simpan($dompet, $worker, $pool, $inti_pakai);

shell_exec('termux-wake-lock');

$cmd = "./ccminer -a verus -o $pool -u $dompet.$worker -p x -t $inti_pakai";

echo warna("\nMINING DIMULAI! TEKAN CTRL+C UNTUK BERHENTI\n", 'hijau');
echo warna("PERINTAH: $cmd\n\n", 'putih');
echo warna("--- LOG MINING ---\n", 'kuning');

while(true) {
    passthru($cmd);
    echo warna("\n[INFO] KONEKSI PUTUS! MENYAMBUNG ULANG 5 DETIK...\n", 'merah');
    sleep(5);
}
?>
