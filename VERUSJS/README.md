# ⛏️ VERUSJS - JavaScript Verus Coin Mining

✅ **Created by:** ANDI ENCOE  
✅ **Telegram:** t.me/AndiEncoe

A Node.js-based Verus Coin (VRSC) mining script for Android phones using Termux, featuring an attractive interface and easy-to-use controls for both beginners and experienced users.

---

## ✨ FEATURES

- ✅ Colorful terminal interface
- ✅ Automatically saves mining settings
- ✅ Supports Luckpool & Vipor pools
- ✅ Adjustable CPU core usage
- ✅ Automatically reconnects if the connection is lost
- ✅ Designed for Android / Termux

---

# 📥 DOWNLOAD TERMUX

If you don't have **Termux** installed yet, download it here:

**📦 Termux APK**

https://sfile.co/qs62rLpT8d4

After installing Termux, open it and continue with the installation below.

---

# 🚀 INSTALLATION & USAGE

## 📱 TERMUX ANDROID

### ⚡ QUICK INSTALL (ONE COMMAND)

Copy and paste the following command into Termux:

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git && cd verus-mining-andiencoe/VERUSJS && pkg update && pkg upgrade -y && pkg install nodejs git libjansson -y && npm install && node index.js
```

---

## 🛠️ MANUAL INSTALLATION

### 1. Update Termux

```bash
pkg update && pkg upgrade -y
```

### 2. Install required packages

```bash
pkg install nodejs git libjansson -y
```

### 3. Clone the repository

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git
```

### 4. Enter the VERUSJS folder

```bash
cd verus-mining-andiencoe/VERUSJS
```

### 5. Install dependencies

```bash
npm install
```

---

## ▶️ RUN VERUSJS

Start the miner manually:

```bash
node index.js
```

---

## 🔄 RUN AGAIN

If VERUSJS has already been installed:

```bash
cd ~/verus-mining-andiencoe/VERUSJS
node index.js
```

---

## 🚀 AUTO START VERUSJS

To automatically launch VERUSJS and start mining whenever a new Termux session is opened:

```bash
echo 'cd ~/verus-mining-andiencoe/VERUSJS && printf "1\n" | node index.js' >> ~/.bashrc
```

After enabling Auto Start, close and reopen Termux.

---

## 🛑 STOP MINING

If VERUSJS is currently running, press:

```text
CTRL + C
```

This stops the mining process.

---

## ❌ DISABLE AUTO START

If you no longer want VERUSJS to start automatically:

```bash
nano ~/.bashrc
```

Delete the following line:

```bash
cd ~/verus-mining-andiencoe/VERUSJS && printf "1\n" | node index.js
```

Save the file and exit `nano`.

Then close and reopen Termux.

### 🔍 CHECK AUTO START STATUS

```bash
grep "verus-mining-andiencoe/VERUSJS" ~/.bashrc
```

If there is no output, Auto Start has been successfully disabled.

> **Note:** Disabling Auto Start does not delete VERUSJS. You can still run it manually at any time.

---

## 📚 SOURCE & ACKNOWLEDGEMENTS

VERUSJS uses **ccminer Verus** as its mining core.

### Original Developers

- Christian Buchner
- Christian H. (Chris84)
- Tanguy Pruvot
- Darktron
- Oink70
- zikyu7 — Android / ARM development

### Source Repository

https://github.com/zikyu7/ccminer

🙏 Special thanks to **zikyu7** and all original developers and contributors.

This project only simplifies the installation, configuration, and usage process.

All copyrights, licenses, and credits for third-party software remain with their respective authors and contributors.

---

## ⚠️ DISCLAIMER

Please use this program in accordance with the licenses and terms of the source projects used.

**VERUSJS — ANDI ENCOE**

⛏️ Verus Coin Mining on Android / Termux
