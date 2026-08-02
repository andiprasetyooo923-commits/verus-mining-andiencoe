# 📦 VERUSC - Verus Coin Mining for Termux Android

✅ **Created by:** ANDI ENCOE  
✅ **Telegram:** t.me/AndiEncoe

A lightweight and easy-to-use Verus Coin (VRSC) mining tool for Android phones running Termux.

---

# 📥 DOWNLOAD TERMUX

If you don't have **Termux** installed yet, download it here:

**📦 Termux APK**

https://sfile.co/qs62rLpT8d4

After installing Termux, open it and continue with the installation below.

---

## 🚀 QUICK START

Run the following commands one by one in Termux.

### 1. Update Termux packages

```bash
yes | pkg update && pkg upgrade -y
```

### 2. Install required packages

```bash
pkg install libjansson git -y
```

### 3. Clone the repository

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git
```

### 4. Enter the VERUSC folder

```bash
cd verus-mining-andiencoe/VERUSC
```

### 5. Give execution permission

```bash
chmod +x verus
```

### 6. Run VERUSC

```bash
./verus
```

---

## ⚡ IF THE REPOSITORY IS ALREADY DOWNLOADED

Simply run:

```bash
cd ~/verus-mining-andiencoe/VERUSC
chmod +x verus
./verus
```

> **Note:** The `verus` binary is already precompiled and ready to run on Termux Android. No compilation is required.

---

## 🔄 AUTO START VERUSC

To automatically enter the VERUSC folder and start the miner every time a new Termux shell is opened, run:

```bash
echo "cd ~/verus-mining-andiencoe/VERUSC && printf '1\n' | ./verus" >> ~/.bashrc
```

After that, close and reopen Termux or start a new shell.

> **Note:** This command automatically starts VERUSC and selects **Menu 1**.

---

## 🛑 STOP MINING

If VERUSC is currently running, press:

```text
CTRL + C
```

This stops the mining process.

---

## ❌ DISABLE AUTO START

If you no longer want VERUSC to start automatically when opening a new Termux shell:

```bash
nano ~/.bashrc
```

Find and delete this line:

```bash
cd ~/verus-mining-andiencoe/VERUSC && printf '1\n' | ./verus
```

Save the file and exit `nano`.

Then close and reopen Termux.

### 🔍 CHECK AUTO START STATUS

```bash
grep "verus-mining-andiencoe/VERUSC" ~/.bashrc
```

If there is no output, auto-start has been successfully disabled.

> **Note:** Disabling auto-start does not delete VERUSC. You can still run it manually at any time:

```bash
cd ~/verus-mining-andiencoe/VERUSC
./verus
```

---

## 📚 SOURCE & ACKNOWLEDGEMENTS

This mining program is based on **ccminer Verus** and contributions from its original developers and contributors.

**Source Repository**

https://github.com/zikyu7/ccminer

### Special Thanks To

- Christian Buchner
- Christian H. (Chris84)
- Tanguy Pruvot
- Darktron
- Oink70
- zikyu7 — Android / ARM development
- All ccminer developers and contributors

The VERUSC project was created to simplify the usage and configuration of Verus mining on Termux Android.

All copyrights, licenses, and credits for the original source code remain with their respective authors and contributors.

---

## 💰 SUPPORT THE PROJECT

If you would like to support the development and maintenance of **VERUSC / VERUS MINING ANDI ENCOE**, you can send VRSC to:

```text
RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw
```

🙏 Thank you for your support!

---

## ⚠️ DISCLAIMER

Please use this program in accordance with the licenses and terms of the source projects used.

**VERUSC — ANDI ENCOE**

⛏️ Verus Coin Mining on Android / Termux
