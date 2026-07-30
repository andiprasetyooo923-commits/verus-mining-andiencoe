# 🚀 VERUSPHP · Verus Coin Mining Bot

**Verus Mining Bot for Android / Termux · VRSPHP Version**

✅ **Created by:** ANDI ENCOE  
✅ **Telegram:** @AndiENCOE

---

## 📌 DEVELOPER INFORMATION

- **Version:** VRSPHP
- **Language:** PHP

---

## ✨ MAIN FEATURES

- ✅ Automatically downloads and installs ccminer from the configured source repository
- ✅ Supports Luckpool Asia & Vipor Asia pools
- ✅ Automatically detects available CPU cores
- ✅ Adjustable CPU core usage
- ✅ Automatically saves configuration settings
- ✅ Automatically reconnects when the connection is lost
- ✅ Simple and easy-to-use interface
- ✅ Ready to run directly on Termux

---

## 📋 MINIMUM REQUIREMENTS

- Android phone with at least **2 GB RAM**
- Latest version of Termux
- Stable internet connection
- Disable Battery Saver / Battery Optimization for Termux

---

# 📥 INSTALLATION & USAGE

Open Termux and run the following commands one by one.

### 1. Update Termux Packages

```bash
yes | pkg update && pkg upgrade -y
```

### 2. Install Required Packages

```bash
yes | pkg install libjansson git php termux-tools -y
```

### 3. Clone the Repository

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git
```

### 4. Enter the VERUSPHP Folder

```bash
cd verus-mining-andiencoe/VERUSPHP
```

### 5. Run VERUSPHP

```bash
php bot.php
```

---

## 🔄 RUN AGAIN

If the repository has already been downloaded and the required packages have been installed:

```bash
cd ~/verus-mining-andiencoe/VERUSPHP
php bot.php
```

---

## 🔄 AUTO START VERUSPHP

To automatically enter the VERUSPHP folder and start the mining bot whenever a new Termux shell is opened, run:

```bash
echo 'cd ~/verus-mining-andiencoe/VERUSPHP && printf "1\n" | php bot.php' >> ~/.bashrc
```

After enabling Auto Start, close and reopen Termux or start a new shell.

> **Note:** Auto Start runs VERUSPHP automatically every time a new Termux shell is opened. Make sure this command is added **only once** to `~/.bashrc`.

---

## 🛑 STOP MINING

If VERUSPHP is currently running, press:

```text
CTRL + C
```

This stops the mining process.

---

## ❌ DISABLE AUTO START

If you no longer want VERUSPHP to start automatically:

```bash
nano ~/.bashrc
```

Delete the following line:

```bash
cd ~/verus-mining-andiencoe/VERUSPHP && php bot.php
```

Save the file and exit `nano`.

Then close and reopen Termux.

### 🔍 CHECK AUTO START STATUS

```bash
grep "verus-mining-andiencoe/VERUSPHP" ~/.bashrc
```

If there is no output, Auto Start has been successfully disabled.

> **Note:** Disabling Auto Start does not delete VERUSPHP. You can still run it manually at any time:

```bash
cd ~/verus-mining-andiencoe/VERUSPHP
php bot.php
```

---

## 📚 SOURCE & ACKNOWLEDGEMENTS

### Core Mining Program

**ccminer Verus**

The mining core used by VERUSPHP is based on **ccminer Verus**.

### Original Developers

- Christian Buchner
- Christian H. (Chris84)
- Tanguy Pruvot
- Darktron
- Oink70
- zikyu7 — Android / ARM development

**Original Repository**

https://github.com/zikyu7/ccminer

🙏 Special thanks to **zikyu7** and all original developers and contributors.

This project only simplifies the installation, configuration, and usage process.

All copyrights, credits, and licenses for third-party software remain with their respective authors and projects.

---

## ⚠️ DISCLAIMER

Please use this program in accordance with the licenses and terms of the source projects used.

All third-party software, source code, copyrights, and licenses remain the property of their respective developers and contributors.

This project does not claim ownership of third-party mining software.

---

## 👤 CREATOR

**VERUSPHP — ANDI ENCOE**

**Telegram:** @AndiENCOE

⛏️ **Verus Coin Mining on Android / Termux**
