<?php
// ==============================================
//  VERUS MINING BOT
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
    echo warna("║       ⛏️  VERUS MINING BOT  ⛏️         ║\n", 'ungu');
    echo warna("╠════════════════════════════════════════╣\n", 'cyan');
    echo warna("║ ✅ Dibuat : ANDI ENCOE                 ║\n", 'hijau');
    echo warna("║ ✅ Telegram: t.me/AndiENCOE             ║\n", 'hijau');
    echo warna("║ ✅ VERSI   : VRSPHP                     ║\n", 'hijau');
    echo warna("╚════════════════════════════════════════╝\n\n", 'cyan');
}

function siapkan() {
    if(is_file('./ccminer') && is_executable('./ccminer')) {
        echo warna("✅ MINER VERUS SUDAH SIAP!\n\n", 'hijau');
        return true;
    }

    echo warna("🔄 MEMPERBARUI SISTEM & MENGUNDUH...\n", 'kuning');
    
    shell_exec('yes | pkg update > /dev/null 2>&1');
    shell_exec('yes | pkg upgrade > /dev/null 2>&1');
    shell_exec('yes | pkg install libjansson nano git php termux-tools -y > /dev/null 2>&1');

    shell_exec('rm -rf tmp-repo ccminer');

    $clone = shell_exec('git clone '.REPO.' tmp-repo --depth 1 2>&1');
    if(strpos($clone, 'fatal') !== false || !is_dir('tmp-repo')) {
        echo warna("❌ GAGAL MENGUNDUH REPO! Periksa koneksi internet.\n", 'merah');
        exit(1);
    }

    if(is_file('tmp-repo/ccminer/ccminer')) {
        copy('tmp-repo/ccminer/ccminer', './ccminer');
        chmod('./ccminer', 0755);
    } else {
        echo warna("❌ FILE MINER TIDAK DITEMUKAN DI REPO!\n", 'merah');
        shell_exec('rm -rf tmp-repo');
        exit(1);
    }

    shell_exec('rm -rf tmp-repo');

    if(is_file('./ccminer') && is_executable('./ccminer')) {
        echo warna("✅ BERHASIL DIPASANG DENGAN BENAR!\n\n", 'hijau');
        return true;
    } else {
        echo warna("❌ GAGAL MENYIAPKAN FILE MINER!\n", 'merah');
        exit(1);
    }
}

function info_perangkat(&$total_inti, &$saran_inti, &$nama_hp, &$cpu_model) {
    $nama_hp = "Perangkat Android / Termux";
    $cpu_model = trim(shell_exec("getprop ro.product.model 2>/dev/null || echo 'Perangkat Tidak Dikenal'"));
    
    $total_inti = (int)shell_exec('nproc 2>/dev/null') ?: 4;
    $saran_inti = ($total_inti >= 2) ? $total_inti - 1 : 1;

    echo warna("📊 INFO PERANGKAT:\n", 'biru');
    echo warna("  📱 Perangkat: $nama_hp ($cpu_model)\n", 'putih');
    echo warna("  ⚙️ Total Inti: $total_inti · Saran: $saran_inti inti\n\n", 'putih');
}

function menu_pilih_inti($total_inti, $saran_inti) {
    echo warna("🧠 PILIH JUMLAH INTI YANG DIGUNAKAN:\n", 'kuning');
    $opsi = [];
    for($i = 1; $i <= $total_inti; $i++) $opsi[] = $i;
    foreach($opsi as $n => $val) echo warna("  ".($n+1).". $val inti\n", 'putih');
    echo warna("Pilihan (tekan angka lalu Enter): ", 'cyan');
    
    $pilih = (int)trim(fgets(STDIN));
    $res = (isset($opsi[$pilih-1])) ? $opsi[$pilih-1] : $saran_inti;
    echo warna("✅ Akan dipakai: $res inti\n\n", 'hijau');
    return $res;
}

function menu_pool(&$pool) {
    echo warna("🔗 PILIH POOL MINING:\n", 'kuning');
    echo warna("  1. Luckpool Asia (stratum+tcp://ap.luckpool.net:3956)\n", 'putih');
    echo warna("  2. Vipor Asia ✅ TERUJI PALING STABIL\n", 'putih');
    echo warna("Pilihan (1/2): ", 'cyan');
    
    $pilih = trim(fgets(STDIN));
    $pool = ($pilih == '2') ? 'stratum+tcp://ap.vipor.net:5040' : 'stratum+tcp://ap.luckpool.net:3956';
    echo warna("✅ Pool terpilih: ".($pilih=='2'?'Vipor Asia':'Luckpool Asia')."\n\n", 'hijau');
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
    echo warna("📋 DATA KONFIGURASI SAAT INI:\n", 'biru');
    echo warna("  👛 Alamat Dompet : ".substr($dompet, 0, 14)."...\n", 'putih');
    echo warna("  🏷️ Nama Worker   : $worker\n", 'putih');
    echo warna("  🏊 Pool Terpilih : ".(strpos($pool,'luckpool')?'Luckpool':'Vipor')." Asia\n", 'putih');
    echo warna("  ⚙️ Jumlah Inti   : $inti inti\n\n", 'putih');
    
    echo warna("📌 PILIH MENU:\n", 'kuning');
    echo warna("  1. Mulai Mining Sekarang\n", 'putih');
    echo warna("  2. Ganti Pool Mining\n", 'putih');
    echo warna("  3. Ganti Jumlah Inti\n", 'putih');
    echo warna("  4. Ganti Nama Worker\n", 'putih');
    echo warna("  5. Masukkan Data Baru\n", 'putih');
    echo warna("Pilihan (1-5): ", 'cyan');
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
        case 4: echo warna("Masukkan Nama Worker Baru: ",'cyan'); 
                $worker = bersihkan_input(fgets(STDIN)) ?: 'WORKER1'; 
                break;
        case 5: goto input_baru;
        default: break;
    }
} else {
input_baru:
    echo warna("👛 Masukkan Alamat Dompet Verus (diawali huruf R): ",'cyan');
    $dompet = bersihkan_input(fgets(STDIN));
    while(strlen($dompet) < 30 || substr($dompet, 0, 1) !== 'R') {
        echo warna("❌ Alamat salah! Harus diawali R dan 34 karakter: ", 'merah');
        $dompet = bersihkan_input(fgets(STDIN));
    }

    echo warna("🏷️ Masukkan Nama Worker (misal: HP1): ",'cyan');
    $worker = bersihkan_input(fgets(STDIN)) ?: 'WORKER1';
    menu_pool($pool);
    $inti_pakai = menu_pilih_inti($total_inti, $saran_inti);
}

simpan($dompet, $worker, $pool, $inti_pakai);

shell_exec('termux-wake-lock');

$cmd = "./ccminer -a verus -o $pool -u $dompet.$worker -p x -t $inti_pakai";

echo warna("\n🚀 SIAP MINING! Tekan Ctrl+C untuk berhenti\n", 'hijau');
echo warna("Perintah: $cmd\n\n", 'putih');
echo warna("👇 LOG MINING MUNCUL DI BAWAH 👇\n\n", 'kuning');

while(true) {
    passthru($cmd);
    echo warna("\n⚠️ KONEKSI PUTUS / MINER BERHENTI!\n", 'merah');
    echo warna("⏳ Menyambung ulang dalam 5 detik...\n", 'kuning');
    sleep(5);
}
?>
