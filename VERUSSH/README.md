# ⛏️ COEVRS MINER

A Bash-based Verus Coin (VRSC) mining launcher designed for Android phones using Termux.

✅ Created by: ANDI ENCOE
✅ Telegram: t.me/AndiENCOE
✅ License: MIT License for original code created by ANDI ENCOE

---

## 📱 VERUSSH / COEVRS

COEVRS is a simple Bash-based launcher for VerusHash mining on Android / Termux.

It uses an ARM-based ccminer mining core and provides an easy terminal menu for configuring the wallet, worker name, CPU cores, and mining pool.

---

## ✨ FEATURES

- ✅ VerusHash mining
- ✅ Android / Termux support
- ✅ LuckPool support
- ✅ Vipor support
- ✅ Change receiving wallet address
- ✅ Change worker name
- ✅ Configure CPU core usage
- ✅ Automatic CPU information detection
- ✅ Display total CPU cores
- ✅ Mining connection status
- ✅ Accepted / rejected share status
- ✅ Reset settings to default
- ✅ Simple terminal interface

---

## 📱 REQUIREMENTS

- Android phone
- Termux
- ARM / ARM64 compatible device
- Internet connection
- Verus wallet address
- Compatible VerusHash mining core

---

## 🚀 INSTALLATION

Clone the main repository:

git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

Enter the VERUSSH folder:

cd verus-mining-andiencoe/VERUSSH

Give execution permission:

chmod +x coe.sh

Run COEVRS:

./coe.sh

---

## 📋 COEVRS MENU

1. ⛏️ START MINING ON LUCKPOOL
2. ⛏️ START MINING ON VIPOR
3. ✏️ CHANGE MY WALLET ADDRESS
4. ✏️ CHANGE WORKER NAME
5. ⚙️ CHANGE CPU CORE COUNT
6. 🔄 RESET TO DEFAULT SETTINGS
7. ❌ EXIT PROGRAM

---

## ⛏️ SUPPORTED POOLS

### LuckPool

stratum+tcp://na.luckpool.net:3956

### Vipor

stratum+tcp://ap.vipor.net:5040

---

## 💰 WALLET

The receiving wallet can be changed directly from the COEVRS menu.

Default support wallet:

RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw

To use your own wallet, select:

3. CHANGE MY WALLET ADDRESS

The wallet address is used as the mining username.

---

## 🏷️ WORKER NAME

Default worker name:

hp-01

The worker name can be changed through:

4. CHANGE WORKER NAME

Mining username format:

WALLET.WORKER

Example:

RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw.hp-01

---

## ⚙️ CPU CONFIGURATION

COEVRS automatically detects the number of CPU cores available on the device.

Example:

TOTAL : 8 CORE
RECOMMENDED : MAXIMUM 7 CORE

The CPU core count can be changed through:

5. CHANGE CPU CORE COUNT

For better stability, it is recommended to leave at least one CPU core available for the Android system.

---

## 🔧 MINING CORE SOURCE

COEVRS uses an ARM-based ccminer mining core.

Clone the ARM branch:

git clone --single-branch -b ARM https://github.com/monkins1010/ccminer.git

Source repository:

https://github.com/monkins1010/ccminer

Branch used:

ARM

🙏 Special thanks to monkins1010 and all original ccminer developers and contributors.

---

## 🔄 RESET SETTINGS

To restore the default COEVRS settings, select:

6. RESET TO DEFAULT SETTINGS

Default settings:

Wallet : RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw
Worker : hp-01
CPU    : 7 cores

---

## ⚠️ DISCLAIMER

COEVRS is a Bash-based launcher and configuration script for VerusHash mining.

All copyrights, credits, and licenses for third-party software remain with their respective developers and projects.

The MIT License included in this repository applies only to the original code and materials created by ANDI ENCOE.

Please review and follow the license and terms of the third-party mining software used by this project.

Mining performance depends on the device, CPU, operating system, temperature, network connection, and pool conditions.

---

## ❤️ SUPPORT THE PROJECT

If this project is useful to you, you can support the development and maintenance of the project.

Created by: ANDI ENCOE

Telegram: t.me/AndiENCOE

---

# ⛏️ COEVRS MINER

### VERUSHASH V2.2

Android / Termux

Made by ANDI ENCOE

⛏️ Happy Mining!
