# ⛏️ VERUS PYTHON MINER

A lightweight, automatic, and easy-to-use **Verus Coin (VRSC)** mining tool for Android phones using **Termux**.

✅ **Created by:** ANDI ENCOE  
✅ **Telegram:** t.me/AndiEncoe

---

## ✨ FEATURES

- ✅ Supports Luckpool & Vipor pools
- ✅ Adjustable CPU core usage
- ✅ Automatically saves mining settings
- ✅ Designed for Android / Termux
- ✅ Runs directly with Python
- ✅ No Python virtual environment (`venv`) required

---

# 🚀 INSTALLATION & USAGE

## 📱 TERMUX ANDROID

### 1. Update Termux

```bash
pkg update && pkg upgrade -y
```

### 2. Install Required Packages

```bash
pkg install python git libjansson -y
```

### 3. Clone the Repository

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git
```

### 4. Enter the VERUSPHYTHON Folder

```bash
cd verus-mining-andiencoe/VERUSPHYTHON
```

### 5. Run the Miner

```bash
python vrs_miner.py
```

> **Note:** A Python virtual environment (`venv`) is **not required**. The miner runs directly using the Python environment provided by Termux.

---

## ⚡ QUICK INSTALL (ONE COMMAND)

Copy and paste the following command into Termux:

```bash
pkg update && pkg upgrade -y && pkg install python git libjansson -y && git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git && cd verus-mining-andiencoe/VERUSPHYTHON && python vrs_miner.py
```

---

## 🔄 RUN AGAIN

If the repository has already been downloaded and the required packages are already installed:

```bash
cd ~/verus-mining-andiencoe/VERUSPHYTHON
python vrs_miner.py
```

---

## 🔄 AUTO START VERUS PYTHON MINER

To automatically enter the **VERUSPHYTHON** folder and start the miner whenever a new Termux shell is opened, run:

```bash
echo 'cd ~/verus-mining-andiencoe/VERUSPHYTHON && printf "1\n" | python vrs_miner.py' >> ~/.bashrc
```

After enabling Auto Start, close and reopen Termux or start a new shell.

> **Note:** Auto Start runs the miner automatically every time a new Termux shell is opened. Make sure this command is added **only once** to `~/.bashrc`.

---

## 🛑 STOP MINING

If the miner is currently running, press:

```text
CTRL + C
```

This stops the mining process.

---

## ❌ DISABLE AUTO START

If you no longer want the miner to start automatically:

```bash
nano ~/.bashrc
```

Delete the following line:

```bash
cd ~/verus-mining-andiencoe/VERUSPHYTHON && python vrs_miner.py
```

Save the file and exit `nano`.

Then close and reopen Termux.

### 🔍 CHECK AUTO START STATUS

```bash
grep "verus-mining-andiencoe/VERUSPHYTHON" ~/.bashrc
```

If there is no output, Auto Start has been successfully disabled.

> **Note:** Disabling Auto Start does not delete the miner. You can still run it manually at any time:

```bash
cd ~/verus-mining-andiencoe/VERUSPHYTHON
python vrs_miner.py
```

---

## 📚 SOURCE & ACKNOWLEDGEMENTS

### Core Mining Program

**ccminer Verus**

The mining core used by **VERUS PYTHON MINER** is based on **ccminer Verus**.

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

All copyrights, credits, and licenses for third-party software remain with their respective authors and contributors.

---

## ⚠️ DISCLAIMER

Please use this program in accordance with the licenses and terms of the source projects used.

All third-party software, source code, copyrights, and licenses remain the property of their respective developers and contributors.

This project does not claim ownership of third-party mining software.

---

## 👤 CREATOR

**VERUS PYTHON MINER — ANDI ENCOE**

**Telegram:** t.me/AndiEncoe

⛏️ **Verus Coin Mining on Android / Termux**
