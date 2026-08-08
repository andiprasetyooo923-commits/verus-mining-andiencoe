# ⛏️ Z-MINING-UNMINEABLE

Easy CPU Mining on **Android / Termux** using **unMineable (RandomX)**.

✅ **Created by:** ANDI ENCOE  
✅ **Telegram:** https://t.me/AndiENCOE

---

## ✨ FEATURES

- ✅ Easy setup and configuration
- ✅ Supports unMineable RandomX
- ✅ Supports multiple cryptocurrencies
- ✅ Adjustable CPU core usage
- ✅ Custom worker/device name
- ✅ Lightweight and easy to use
- ✅ Ready to run on Termux

---

## 📋 REQUIREMENTS

- Android phone (2 GB RAM or higher recommended)
- Latest version of Termux
- Stable internet connection
- RandomX-compatible CPU
- Disable Battery Saver / Battery Optimization for Termux

---

# 📥 DOWNLOAD TERMUX

If you don't have **Termux** installed yet, download it here:

**📦 Termux APK**

https://sfile.co/qs62rLpT8d4

After installing Termux, open it and continue with the installation below.

---

# 🚀 INSTALLATION

### 1. Update Termux

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

### 3. Clone Repository

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git
```

### 4. Enter Project Folder

```bash
cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLE
```

### 5. Grant Execute Permission

```bash
chmod +x UNMINEABLE run
```

### 6. Start Mining

```bash
./run
```

Follow the on-screen instructions:

- Coin Code (UPPERCASE)
- Wallet Address
- Worker Name
- CPU Core Count

---

# 🔄 RUN AGAIN

```bash
cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLE
./miner
```

---

# 🚀 AUTO START

Run this command once:

```bash
echo 'cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLE && printf "1\n" | ./run' >> ~/.bashrc
```

Then restart Termux.

---

# 🛑 STOP MINING

Press:

```text
CTRL + C
```

---

# ❌ DISABLE AUTO START

Open:

```bash
nano ~/.bashrc
```

Delete this line:

```bash
cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLE && printf "1\n" | ./miner
```

Save the file, then restart Termux.

Check whether Auto Start has been removed:

```bash
grep "Z-MINING-UNMINEABLE" ~/.bashrc
```

If there is no output, Auto Start has been successfully disabled.

---

# 💰 SUPPORTED COINS

Examples:

- LTC
- DOGE
- TRX
- SHIB
- XRP
- USDT
- ADA
- SOL
- XMR

...and many more cryptocurrencies supported by **unMineable**.

---

# ⚠️ NOTES

- Use **UPPERCASE** coin codes.
- Leave at least **1 CPU core** free.
- Stop mining if the phone becomes too hot.
- Avoid mining while charging for long periods.

---

# 📚 SOURCE

**Mining Software:** XMRig

Original Repository:

https://github.com/xmrig/xmrig

Special thanks to the **XMRig** developers and all contributors.

This project only simplifies the installation and configuration process.

---

# ⚠️ DISCLAIMER

Please use this project in accordance with the licenses of the original software.

All copyrights, source code, and licenses of third-party software remain the property of their respective authors.

---

# ❤️ SUPPORT THE PROJECT

If you'd like to support this project, you can send a donation to:

**TRON (TRX)**

```text
THbREaD5o9Ru48PpELKZngjW4NPpLzbp34
```

Thank you for your support! 🙏

---

# 👤 CREATOR

**ANDI ENCOE**

**Telegram:** https://t.me/AndiENCOE

---

# ⛏️ Z-MINING-UNMINEABLE

**Easy CPU Mining on Android / Termux**
