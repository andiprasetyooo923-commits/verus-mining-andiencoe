const _0x5b8c=['\x76\x65\x72\x75\x73\x20\x6D\x69\x6E\x69\x6E\x67','\x73\x65\x73\x69\x2E\x6A\x73\x6F\x6E','\x70\x61\x63\x6B\x61\x67\x65\x2E\x6A\x73\x6F\x6E','\x41\x4E\x44\x49\x20\x45\x4E\x43\x4F\x45','\x4C\x55\x43\x4B\x50\x4F\x4F\x4C\x20\x41\x53\x49\x41','\x73\x74\x72\x61\x74\x75\x6D\x2B\x74\x63\x70\x3A\x2F\x2F\x61\x70\x2E\x6C\x75\x63\x6B\x70\x6F\x6F\x6C\x2E\x6E\x65\x74\x3A\x33\x39\x35\x36','\x63\x63\x6D\x69\x6E\x65\x72','\x67\x69\x74\x20\x63\x6C\x6F\x6E\x65\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x7A\x69\x6B\x79\x75\x37\x2F\x63\x63\x6D\x69\x6E\x65\x72\x2E\x67\x69\x74\x20\x74\x65\x6D\x70\x5F\x63\x63\x6D\x69\x6E\x65\x72','\x63\x70\x20\x2D\x72\x20\x74\x65\x6D\x70\x5F\x63\x63\x6D\x69\x6E\x65\x72\x2F\x2A\x20\x2E\x20\x26\x26\x20\x72\x6D\x20\x2D\x72\x66\x20\x74\x65\x6D\x70\x5F\x63\x63\x6D\x69\x6E\x65\x72','\x63\x68\x6D\x6F\x64\x20\x2B\x78\x20\x63\x63\x6D\x69\x6E\x65\x72','\x70\x6B\x67\x20\x75\x70\x64\x61\x74\x65\x20\x26\x26\x20\x70\x6B\x67\x20\x75\x70\x67\x72\x61\x64\x65\x20\x2D\x79','\x70\x6B\x67\x20\x69\x6E\x73\x74\x61\x6C\x6C\x20\x6C\x69\x62\x6A\x61\x6E\x73\x73\x6F\x6E\x20\x6E\x61\x6E\x6F\x20\x67\x69\x74\x20\x2D\x79','\x6E\x70\x6D\x20\x69\x6E\x73\x74\x61\x6C\x6C','\x63\x6F\x6E\x66\x69\x67\x2E\x6A\x73\x6F\x6E'];
const _0x6c9d=(_0x1a2b,_0x3c4d)=>{const _0x7d8e=_0x5b8c[_0x1a2b];return _0x3c4d!==undefined?_0x7d8e+_0x3c4d:_0x7d8e;};

import cfonts from 'cfonts';
import { spawn, execSync } from 'child_process';
import fs from 'fs/promises';
import readline from 'readline';
import os from 'os';

// === PEMANGGILAN CHALK YANG SUDAH DIPERBAIKI ===
import chalk from 'chalk';

const _0x8e9f=readline.createInterface({input:process.stdin,output:process.stdout});
const _0x9f0g=_0x6c9d(1);
const _0x0g1h=_0x6c9d(2);

// === FUNGSI DETEKSI SPESIFIKASI PERANGKAT (SESUAI HP ASLI) ===
async function getSystemInfo() {
  try {
    let namaPerangkat = 'Perangkat Tidak Dikenal';
    let cpuModel = 'CPU Tidak Dikenal';
    let coreCount = 0;
    const totalMemGb = (os.totalmem() / 1024 / 1024 / 1024).toFixed(1);

    // 1. Baca NAMA HP & MEREK ASLI dari file sistem Android
    try {
      const buildProp = await fs.readFile('/system/build.prop', 'utf8');
      const cariModel = buildProp.match(/ro\.product\.model\s*=\s*(.+)/) || buildProp.match(/ro\.model\s*=\s*(.+)/);
      const cariMerek = buildProp.match(/ro\.product\.brand\s*=\s*(.+)/) || buildProp.match(/ro\.brand\s*=\s*(.+)/);
      
      if (cariModel) {
        namaPerangkat = cariModel[1].trim();
        if (cariMerek) namaPerangkat = `${cariMerek[1].trim()} ${namaPerangkat}`;
      }
    } catch {}

    // 2. Baca NAMA PROSESOR & JUMLAH INTI
    try {
      const cpuInfo = await fs.readFile('/proc/cpuinfo', 'utf8');
      const daftarProsesor = cpuInfo.trim().split(/\n\n+/).filter(blok => blok.includes('processor\t:'));
      coreCount = daftarProsesor.length;

      const namaCocok = cpuInfo.match(/model name\s*:\s*(.+)/) || cpuInfo.match(/Hardware\s*:\s*(.+)/) || cpuInfo.match(/Processor\s*:\s*(.+)/);
      if (namaCocok) cpuModel = namaCocok[1].trim();
    } catch {}

    // Cadangan jika gagal baca
    if (coreCount <= 0) { try { coreCount = os.cpus().length; } catch { coreCount = 8; } }
    if (coreCount <= 0) coreCount = 8;
    const saranInti = Math.max(2, coreCount - 2);

    // Gabungkan tampilan nama perangkat + chipset
    const tampilanLengkap = namaPerangkat !== 'Perangkat Tidak Dikenal' 
      ? `${namaPerangkat} | ${cpuModel}` 
      : cpuModel;

    return { 
      namaPerangkat, 
      cpuModel: tampilanLengkap, 
      coreCount, 
      totalMemGb, 
      saranInti 
    };
  } catch {
    return { 
      namaPerangkat: 'HP Android', 
      cpuModel: 'MediaTek MT6765G', 
      coreCount: 8, 
      totalMemGb: '3.7', 
      saranInti: 6 
    };
  }
}

// === JUDUL WARNA PELANGI ===
cfonts.say(_0x6c9d(0),{font:'block',align:'center',colors:['#FF6B6B','#FFD93D','#6BCF7F','#4D96FF','#9B59B6'],letterSpacing:1,lineHeight:1});
console.log('\n'+chalk.hex('#FF6B6B')('╔══════════════════════════════════════════════════════════════╗'));
console.log(chalk.hex('#FFD93D')('║')+'  🚀 VERSI 2.6.1 | DETEKSI HP ASLI | DIBUAT OLEH '+chalk.bold.hex('#6BCF7F')(_0x6c9d(3))+' ║');
console.log(chalk.hex('#4D96FF')('║')+'  ✅ OTOMATIS | ✅ AMAN | ✅ SESUAI PERANGKAT KAMU              '+chalk.hex('#4D96FF')('║'));
console.log(chalk.hex('#9B59B6')('╚══════════════════════════════════════════════════════════════╝\n'));

async function _0x1h2i(){try{await fs.access(_0x0g1h);}catch{await fs.writeFile(_0x0g1h,JSON.stringify({name:'verus-mining-andiencoe',version:'2.6.1',type:'module',dependencies:{'cfonts':'^3.3.0','chalk':'^5.3.0'}},null,4));}}

async function _0x2i3j(){try{return JSON.parse(await fs.readFile(_0x9f0g,'utf8'));}catch{return null;}}
async function _0x3j4k(_0x4k5l,_0x5l6m,_0x6m7n){await fs.writeFile(_0x9f0g,JSON.stringify({alamat:_0x4k5l,nama:_0x5l6m,inti:_0x6m7n},null,4));}

async function _0x7n8o(){try{await _0x1h2i();execSync('yes | '+_0x6c9d(10),{stdio:'inherit'});execSync('yes | '+_0x6c9d(11),{stdio:'inherit'});const _0x8o9p=await fs.access('./'+_0x6c9d(6)).then(()=>true).catch(()=>false);if(!_0x8o9p){execSync(_0x6c9d(7),{stdio:'inherit'});execSync(_0x6c9d(8),{stdio:'inherit'});execSync(_0x6c9d(9),{stdio:'inherit'});}

  const sysInfo = await getSystemInfo();
  console.log(chalk.hex('#FF6B6B')('╔══════════════════════════════════════════════════════════════╗'));
  console.log(chalk.hex('#FFD93D')('║')+'                    📊 '+chalk.bold('SPESIFIKASI PERANGKAT')+'                   '+chalk.hex('#FFD93D')('║'));
  console.log(chalk.hex('#6BCF7F')('╠══════════════════════════════════════════════════════════════╣'));
  console.log(chalk.hex('#4D96FF')(`║  🧠 PERANGKAT & CPU: `)+chalk.white.bold(sysInfo.cpuModel.slice(0,37))+chalk.hex('#4D96FF')(' '.repeat(37-sysInfo.cpuModel.slice(0,37).length)+' ║'));
  console.log(chalk.hex('#9B59B6')(`║  ⚙️ TOTAL INTI CPU :  `)+chalk.white.bold(String(sysInfo.coreCount)+' INTI')+chalk.hex('#9B59B6')(' '.repeat(31-String(sysInfo.coreCount).length-4)+' ║'));
  console.log(chalk.hex('#FF6B6B')(`║  📦 KAPASITAS RAM  :  `)+chalk.white.bold(sysInfo.totalMemGb+' GB')+chalk.hex('#FF6B6B')(' '.repeat(31-String(sysInfo.totalMemGb).length-3)+' ║'));
  console.log(chalk.hex('#FFD93D')(`║  💡 SARAN PENGGUNAAN:  `)+chalk.bold.hex('#6BCF7F')(`MAKSIMAL ${sysInfo.saranInti} INTI (STABIL)`)+chalk.hex('#FFD93D')(' '.repeat(18)+' ║'));
  console.log(chalk.hex('#6BCF7F')('╚══════════════════════════════════════════════════════════════╝\n'));

  const _0x9p0q=await _0x2i3j();if(_0x9p0q){
    console.log(chalk.hex('#4D96FF')('╔══════════════════════════════════════════════════════════════╗'));
    console.log(chalk.hex('#9B59B6')('║')+'                     📋 '+chalk.bold('PENGATURAN TERSIMPAN')+'                   '+chalk.hex('#9B59B6')('║'));
    console.log(chalk.hex('#FF6B6B')('╠══════════════════════════════════════════════════════════════╣'));
    console.log(chalk.hex('#FFD93D')(`║  👛 ALAMAT VERUS   :  `)+chalk.white.bold(_0x9p0q.alamat.slice(0,26))+'...'+chalk.hex('#FFD93D')(' '.repeat(24)+' ║'));
    console.log(chalk.hex('#6BCF7F')(`║  🏷️ NAMA PERANGKAT :  `)+chalk.white.bold(_0x9p0q.nama)+chalk.hex('#6BCF7F')(' '.repeat(36-_0x9p0q.nama.length)+' ║'));
    console.log(chalk.hex('#4D96FF')(`║  🧠 JUMLAH INTI    :  `)+chalk.white.bold(String(_0x9p0q.inti)+' INTI')+chalk.hex('#4D96FF')(' '.repeat(32-String(_0x9p0q.inti).length-4)+' ║'));
    console.log(chalk.hex('#9B59B6')('╚══════════════════════════════════════════════════════════════╝\n'));

    console.log(chalk.bold.hex('#FF6B6B')('🎯 PILIHAN AKSI YANG TERSEDIA:'));
    console.log(chalk.hex('#FFD93D')('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    console.log(chalk.bold.hex('#6BCF7F')(`  🟢  Y  = GUNAKAN PENGATURAN SAAT INI (${_0x9p0q.inti} INTI)`));
    console.log(chalk.hex('#4D96FF')('  🔵  1  = UBAH KE 4 INTI ✅ PALING AMAN & DINGIN'));
    console.log(chalk.hex('#9B59B6')('  🔵  2  = UBAH KE 6 INTI ⚡ SEIMBANG KECEPATAN & SUHU'));
    console.log(chalk.hex('#FF6B6B')('  🔴  3  = UBAH KE 8 INTI 🚀 MAKSIMUM (HATI-HATI PANAS)'));
    console.log(chalk.hex('#FFD93D')('  🟠  T  = BUAT PENGATURAN BARU DARI AWAL'));
    console.log(chalk.hex('#FFD93D')('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n'));

    _0x8e9f.question(chalk.bold.hex('#6BCF7F')('👉 SILAKAN KETIK PILIHANMU: '),_0x0q1r=>{
      const _0x1r2s=_0x0q1r.trim().toLowerCase();
      if(_0x1r2s==='y'){
        if(_0x9p0q.inti > sysInfo.coreCount){
          console.log(chalk.yellow.bold(`⚠️ PERINGATAN: Pengaturan lama ${_0x9p0q.inti} inti lebih banyak dari kemampuan HP! Otomatis pakai ${sysInfo.saranInti} inti\n`));
          _0x2s3t(_0x9p0q.alamat,_0x9p0q.nama,sysInfo.saranInti);
        }else _0x2s3t(_0x9p0q.alamat,_0x9p0q.nama,_0x9p0q.inti);
      }else if(['1','2','3'].includes(_0x1r2s)){
        const _0x3t4u=_0x1r2s==='1'?4:_0x1r2s==='2'?6:8;
        const intiAman = Math.min(_0x3t4u, sysInfo.coreCount);
        if(_0x3t4u > sysInfo.coreCount) console.log(chalk.yellow.bold(`⚠️ PERINGATAN: Maksimal cuma ${sysInfo.coreCount} inti! Otomatis disesuaikan jadi ${intiAman}\n`));
        _0x3j4k(_0x9p0q.alamat,_0x9p0q.nama,intiAman);
        console.log(chalk.green.bold(`✅ BERHASIL DIUBAH! TOTAL INTI SEKARANG: ${intiAman} INTI\n`));
        _0x2s3t(_0x9p0q.alamat,_0x9p0q.nama,intiAman);
      }else _0x4u5v();
    });
  }else _0x4u5v();
}catch(e){console.error(chalk.red.bold('\n❌ KESALAHAN SISTEM:'),chalk.white(e.message),'\n');_0x8e9f.close();}}

async function _0x4u5v(){
  console.log('\n'+chalk.hex('#FF6B6B')('╔══════════════════════════════════════════════════════════════╗'));
  console.log(chalk.hex('#FFD93D')('║')+'               📝 '+chalk.bold('ISI DATA BARU PENGGUNA')+'                       '+chalk.hex('#FFD93D')('║'));
  console.log(chalk.hex('#6BCF7F')('╚══════════════════════════════════════════════════════════════╝\n'));
  _0x8e9f.question(chalk.bold.hex('#4D96FF')('👛 MASUKKAN ALAMAT DOMPET VERUS: '),async _0x5v6w=>{
    _0x5v6w=_0x5v6w.trim().split('.')[0];
    if(!_0x5v6w||_0x5v6w.length<30){console.error(chalk.red.bold('❌ ALAMAT TIDAK VALID! SILAKAN ULANGI.\n'));_0x4u5v();return;}
    _0x8e9f.question(chalk.bold.hex('#9B59B6')('🏷️ NAMA PERANGKAT/WORKER (kosong = miner1): '),async _0x6w7x=>{
      _0x6w7x=_0x6w7x.trim()||'miner1';
      console.log('\n'+chalk.bold.hex('#FF6B6B')('📋 PILIH JUMLAH INTI CPU:'));
      console.log(chalk.hex('#FFD93D')('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
      console.log(chalk.hex('#6BCF7F')('  1️⃣ 4 INTI  → ✅ PALING AMAN, DISARANKAN UNTUK HP'));
      console.log(chalk.hex('#4D96FF')('  2️⃣ 6 INTI  → ⚡ LEBIH CEPAT (JIKA CPU MENDUKUNG)'));
      console.log(chalk.hex('#9B59B6')('  3️⃣ 8 INTI  → 🚀 MAKSIMAL (KHUSUS PERANGKAT KUAT)\n'));
      _0x8e9f.question(chalk.bold.hex('#FFD93D')('👉 KETIK ANGKA PILIHAN: '),async _0x7x8y=>{
        let _0x8y9z=_0x7x8y.trim()==='2'?6:_0x7x8y.trim()==='3'?8:4;
        const totalIntiSistem = (await getSystemInfo()).coreCount;
        const intiAman = Math.min(_0x8y9z, totalIntiSistem);
        if(_0x8y9z > totalIntiSistem) console.log(chalk.yellow.bold(`⚠️ PERINGATAN: KAMU CUMA PUNYA ${totalIntiSistem} INTI! OTOMATIS DIPAKAI ${intiAman}\n`));
        await _0x3j4k(_0x5v6w,_0x6w7x,intiAman);
        console.log(chalk.green.bold(`\n✅ DATA TERSIMPAN! TOTAL INTI YANG DIGUNAKAN: ${intiAman} INTI\n`));
        _0x2s3t(_0x5v6w,_0x6w7x,intiAman);
      });
    });
  });
}

async function _0x2s3t(_0x9z0a,_0x0a1b,_0x1b2c){
  const _0x2c3d={pools:[{name:_0x6c9d(4),url:_0x6c9d(5),timeout:180,disabled:0}],user:`${_0x9z0a}.${_0x0a1b}`,algo:'verus',threads:_0x1b2c,'cpu-priority':5,'retry-pause':10,'api-allow':'192.168.0.0/16','api-bind':'0.0.0.0:4068'};
  await fs.writeFile(_0x6c9d(13),JSON.stringify(_0x2c3d,null,4));
  _0x8e9f.close();

  console.log(chalk.hex('#6BCF7F')('╔══════════════════════════════════════════════════════════════╗'));
  console.log(chalk.hex('#4D96FF')('║')+'                     ⛏️  '+chalk.bold('SIAP MINING!')+'                          '+chalk.hex('#4D96FF')('║'));
  console.log(chalk.hex('#9B59B6')('╠══════════════════════════════════════════════════════════════╣'));
  console.log(chalk.hex('#FF6B6B')(`║  🧠 TOTAL INTI DIGUNAKAN : `)+chalk.white.bold(String(_0x1b2c))+chalk.hex('#FF6B6B')(' '.repeat(24-String(_0x1b2c).length)+' ║'));
  console.log(chalk.hex('#FFD93D')(`║  🏷️ NAMA PERANGKAT     : `)+chalk.white.bold(_0x0a1b)+chalk.hex('#FFD93D')(' '.repeat(30-_0x0a1b.length)+' ║'));
  console.log(chalk.hex('#6BCF7F')(`║  🔗 POOL MINING         : `)+chalk.white.bold(_0x6c9d(4))+chalk.hex('#6BCF7F')(' '.repeat(30-_0x6c9d(4).length)+' ║'));
  console.log(chalk.hex('#4D96FF')(`║  ✍️ DIBUAT OLEH         : `)+chalk.white.bold(_0x6c9d(3))+chalk.hex('#4D96FF')(' '.repeat(30-_0x6c9d(3).length)+' ║'));
  console.log(chalk.hex('#9B59B6')('╚══════════════════════════════════════════════════════════════╝\n'));
  console.log(chalk.hex('#FF6B6B')('⚠️ TEKAN ')+chalk.bold('Ctrl + C')+chalk.hex('#FF6B6B')(' UNTUK BERHENTI KAPAN SAJA\n'));

  const _0x3d4e=spawn('./'+_0x6c9d(6),['--config','config.json'],{stdio:'inherit'});
  _0x3d4e.on('close',()=>{
    console.log(chalk.red.bold('\n🔴 KONEKSI TERPUTUS! COBA LAGI DALAM 5 DETIK...\n'));
    setTimeout(_0x7n8o,5000);
  });
}

_0x7n8o();
      
