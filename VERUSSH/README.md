# ⛏️ COEVRS MINER

**VerusHash V2.2 · Android / Termux**

A Bash-based **Verus Coin (VRSC)** mining launcher designed for Android phones using **Termux**.

✅ **Created by:** ANDI ENCOE  
✅ **Telegram:** t.me/AndiENCOE  
✅ **License:** MIT License (applies only to the original code created by ANDI ENCOE)

---

## 📱 VERUSSH / COEVRS

COEVRS is a simple Bash-based launcher for VerusHash mining on Android / Termux.

It uses an ARM-based **ccminer** mining core and provides an easy terminal menu for configuring your wallet, worker name, CPU core count, and mining pool.

---

## ✨ FEATURES

- ✅ VerusHash mining
- ✅ Android / Termux support
- ✅ Supports LuckPool & Vipor
- ✅ Change wallet address
- ✅ Change worker name
- ✅ Adjustable CPU core usage
- ✅ Automatic CPU information detection
- ✅ Displays total CPU cores
- ✅ Mining connection status
- ✅ Accepted / Rejected share monitoring
- ✅ Reset settings to default
- ✅ Simple terminal interface

---

## 📋 REQUIREMENTS

- Android phone
- Latest version of Termux
- ARM / ARM64 compatible device
- Stable internet connection
- Verus (VRSC) wallet address
- Compatible VerusHash mining core

---

# 📥 DOWNLOAD TERMUX

If you don't have **Termux** installed yet, download it here:

**📦 Termux APK**

https://sfile.co/qs62rLpT8d4

After installing Termux, open it and continue with the installation below.

---

# 🚀 INSTALLATION

### 1. Clone the Repository

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git
```

### 2. Enter the VERUSSH Folder

```bash
cd verus-mining-andiencoe/VERUSSH
```

### 3. Give Execution Permission

```bash
chmod +x coe.sh
```

### 4. Run COEVRS

```bash
./coe.sh
```

---

## 🔄 RUN AGAIN

If the repository has already been downloaded:

```bash
cd ~/verus-mining-andiencoe/VERUSSH
./coe.sh
```

---

## 🔄 AUTO START COEVRS

To automatically start COEVRS whenever a new Termux shell is opened, run:

```bash
echo 'cd ~/verus-mining-andiencoe/VERUSSH && printf "1\n" | ./coe.sh' >> ~/.bashrc
```

After enabling Auto Start, close and reopen Termux or start a new shell.

> **Note:** Auto Start launches COEVRS automatically every time a new Termux shell is opened. Make sure this command is added **only once** to `~/.bashrc`.

---

## 🛑 STOP MINING

If COEVRS is currently running, press:

```text
CTRL + C
```

This stops the mining process.

---

## ❌ DISABLE AUTO START

If you no longer want COEVRS to start automatically:

```bash
nano ~/.bashrc
```

Delete the following line:

```bash
cd ~/verus-mining-andiencoe/VERUSSH && ./coe.sh
```

Save the file and exit `nano`.

Then close and reopen Termux.

### 🔍 CHECK AUTO START STATUS

```bash
grep "verus-mining-andiencoe/VERUSSH" ~/.bashrc
```

If there is no output, Auto Start has been successfully disabled.

> **Note:** Disabling Auto Start does not delete COEVRS. You can still run it manually at any time:

```bash
cd ~/verus-mining-andiencoe/VERUSSH
./coe.sh
```

---

## 📋 COEVRS MENU

```text
1. ⛏️ START MINING ON LUCKPOOL
2. ⛏️ START MINING ON VIPOR
3. ✏️ CHANGE MY WALLET ADDRESS
4. ✏️ CHANGE WORKER NAME
5. ⚙️ CHANGE CPU CORE COUNT
6. 🔄 RESET TO DEFAULT SETTINGS
7. ❌ EXIT PROGRAM
```

---

## ⛏️ SUPPORTED POOLS

### LuckPool

```text
stratum+tcp://na.luckpool.net:3956
```

### Vipor

```text
stratum+tcp://ap.vipor.net:5040
```

---

## 💰 WALLET

The receiving wallet can be changed directly from the COEVRS menu.

### Default Support Wallet

```text
RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw
```

To use your own wallet, select:

```text
3. CHANGE MY WALLET ADDRESS
```

The wallet address is used as the mining username.

---

## 🏷️ WORKER NAME

### Default Worker Name

```text
hp-01
```

To change the worker name, select:

```text
4. CHANGE WORKER NAME
```

### Mining Username Format

```text
WALLET.WORKER
```

Example:

```text
RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw.hp-01
```

---

## ⚙️ CPU CONFIGURATION

COEVRS automatically detects the number of available CPU cores.

Example:

```text
TOTAL       : 8 CORE
RECOMMENDED : MAXIMUM 7 CORE
```

To change the CPU core count, select:

```text
5. CHANGE CPU CORE COUNT
```

> **Recommendation:** Leave at least one CPU core available for the Android system to maintain device stability.

---

## 📚 MINING CORE SOURCE

COEVRS uses an ARM-based **ccminer** mining core.

### ARM Branch

```bash
git clone --single-branch -b ARM https://github.com/monkins1010/ccminer.git
```

### Source Repository

https://github.com/monkins1010/ccminer

### Branch Used

```text
ARM
```

🙏 Special thanks to **monkins1010** and all original ccminer developers and contributors.

---

## 🔄 RESET SETTINGS

To restore the default configuration, select:

```text
6. RESET TO DEFAULT SETTINGS
```

### Default Settings

```text
Wallet : RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw
Worker : hp-01
CPU    : 7 Cores
```

---

## ⚠️ DISCLAIMER

COEVRS is a Bash-based launcher and configuration script for VerusHash mining.

All copyrights, credits, and licenses for third-party software remain with their respective developers and projects.

The MIT License included in this repository applies **only** to the original code and materials created by **ANDI ENCOE**.

Please review and comply with the licenses and terms of the third-party mining software used by this project.

Mining performance depends on your device, CPU, operating system, temperature, network connection, and mining pool conditions.

---

## ❤️ SUPPORT THE PROJECT

If you find this project useful, you can support its continued development and maintenance.

**Created by:** ANDI ENCOE

**Telegram:** t.me/AndiENCOE

---

## 👤 CREATOR

**COEVRS MINER**

**VerusHash V2.2**

**Android / Termux**

**Made by ANDI ENCOE**

⛏️ **Happy Mining!**
