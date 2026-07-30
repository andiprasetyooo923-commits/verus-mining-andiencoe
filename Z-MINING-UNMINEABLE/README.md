# ⛏️ Z-MINING-UNMINEABLE

Easy CPU Mining on **Android / Termux** using **unMineable (RandomX)**.

✅ **Created by:** ANDI ENCOE  
✅ **Telegram:** @AndiENCOE

---

## 📌 DEVELOPER INFORMATION

- **Version:** Z-MINING-UNMINEABLE
- **Algorithm:** RandomX
- **Mining Software:** XMRig
- **Platform:** Android / Termux

---

## ✨ MAIN FEATURES

- ✅ Easy setup and configuration
- ✅ Supports unMineable RandomX mining
- ✅ Supports multiple cryptocurrencies
- ✅ Adjustable CPU core usage
- ✅ Custom worker/device name
- ✅ Lightweight and easy to use
- ✅ Ready to run directly on Termux

---

## 📋 MINIMUM REQUIREMENTS

- Android phone with at least 2 GB RAM
- Latest version of Termux
- Stable internet connection
- RandomX-compatible CPU
- Disable Battery Saver / Battery Optimization for Termux

---

# 🚀 INSTALLATION & USAGE

Open Termux and run the following commands one by one.

### 1. Update Termux Packages

```bash
yes | pkg update && pkg upgrade -y
```

### 2. Install Required Packages

```bash
pkg update && pkg upgrade -y
pkg install git -y
pkg install libuv -y
pkg install hwloc openssl -y
```

### 3. Clone the Repository

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git
```

### 4. Enter the Z-MINING-UNMINEABLE Directory

```bash
cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLE
```

### 5. Grant Execute Permission

```bash
chmod +x miner xmrig-notls
```

### 6. Start the Miner

```bash
./miner
```

Follow the on-screen instructions:

- Enter the coin code (**UPPERCASE**)
- Enter your wallet address
- Enter your worker/device name
- Enter the number of CPU cores to use

---

## 🔄 RUN AGAIN

If the repository has already been downloaded:

```bash
cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLE
./miner
```

---

## 🔄 AUTO START

To automatically start **Z-MINING-UNMINEABLE** whenever a new Termux shell is opened, run:

```bash
echo 'cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLE && printf "1\n" | ./miner' >> ~/.bashrc
```

After that, close and reopen Termux or start a new shell.

Z-MINING-UNMINEABLE will automatically run:

```bash
cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLE
./miner
```

> **Note:** Auto-start will launch the miner every time a new Termux shell is opened. Make sure you only add this command once to `~/.bashrc`.

---

## 🛑 STOP MINING

If the miner is currently running, press:

```text
CTRL + C
```

This stops the mining process.

---

## ❌ DISABLE AUTO START

If you no longer want the miner to automatically start when opening a new Termux shell:

```bash
nano ~/.bashrc
```

Find and delete this line:

```bash
cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLE && ./miner
```

Save the file and exit **nano**.

Then close and reopen Termux.

### 🔍 CHECK AUTO START STATUS

To verify that auto-start has been removed:

```bash
grep "Z-MINING-UNMINEABLE" ~/.bashrc
```

If there is no output, auto-start has been successfully disabled.

> **Note:** Disabling auto-start does not remove the miner. You can still run it manually at any time.

```bash
cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLE
./miner
```

---

## 💡 SUPPORTED COINS

Examples:

- LTC
- DOGE
- TRX
- SHIB
- USDT
- XRP
- ADA
- SOL
- XMR

...and many other cryptocurrencies supported by **unMineable** using the **RandomX** algorithm.

---

## ⚠️ IMPORTANT NOTES

- Always enter the coin code in **UPPERCASE**.
- Do not add spaces before or after the coin code.
- Leave at least **one CPU core** free for better device stability.
- Stop mining immediately if your phone becomes excessively hot.
- Avoid mining while charging to help reduce heat buildup.

---

## 📚 SOURCE & ACKNOWLEDGEMENTS

### Core Mining Software

**XMRig**

The mining engine used by this project is based on **XMRig**.

### Original Repository

https://github.com/xmrig/xmrig

🙏 Special thanks to the **XMRig** developers and all open-source contributors.

This project only simplifies the installation, configuration, and usage process.

All copyrights, credits, and licenses for third-party software remain with their respective authors and projects.

---

## ⚠️ DISCLAIMER

Please use this program in accordance with the licenses and terms of the source projects used.

All third-party software, source code, copyrights, and licenses remain the property of their respective developers and contributors.

This project does not claim ownership of third-party mining software.

---

## 💰 SUPPORT THE PROJECT

If you would like to support the development and maintenance of **Z-MINING-UNMINEABLE**, you can send your donation to:

```text
(TRX)THbREaD5o9Ru48PpELKZngjW4NPpLzbp34
```

🙏 Thank you for your support!

---

## 👤 CREATOR

**Z-MINING-UNMINEABLE — ANDI ENCOE**

**Telegram:** @AndiENCOE

⛏️ **Easy CPU Mining on Android / Termux**
