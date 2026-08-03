# ⛏️ VERUSC - Verus Coin Mining for Android / Termux

Easy Verus Coin (VRSC) CPU Mining on **Android / Termux**.

✅ **Created by:** ANDI ENCOE  
✅ **Telegram:** t.me/AndiENCOE

---

## 📌 DEVELOPER INFORMATION

- **Version:** 22.3
- **Algorithm:** VerusHash 2.0
- **Mining Software:** ccminer
- **Platform:** Android / Termux

---

## ✨ FEATURES

- ✅ Easy setup and configuration
- ✅ Automatic CPU detection
- ✅ Adjustable CPU core usage
- ✅ Automatic miner setup
- ✅ Built-in mining pool tester
- ✅ Automatic reconnect
- ✅ Automatic public IP detection
- ✅ Live Verus Coin (VRSC) price
- ✅ Version lock & update checker
- ✅ Display running mining command
- ✅ Lightweight and easy to use

---

# 📥 DOWNLOAD TERMUX

If you don't have **Termux** installed yet, download it here:

**📦 Termux APK**

https://sfile.co/qs62rLpT8d4

After installing Termux, continue with the installation below.

---

# 🚀 INSTALLATION

Open **Termux** and run:

### 1. Update packages

```bash
yes | pkg update && pkg upgrade -y
```

### 2. Install required packages

```bash
pkg install git libjansson curl -y
```

### 3. Clone repository

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git
```

### 4. Enter VERUSC

```bash
cd ~/verus-mining-andiencoe/VERUSC
```

### 5. Give permission

```bash
chmod +x verus
```

### 6. Start VERUSC

```bash
./verus
```

---

## ⚡ RUN AGAIN

If the repository has already been downloaded:

```bash
cd ~/verus-mining-andiencoe/VERUSC
./verus
```

---

## 🔄 AUTO START

Automatically start VERUSC every time Termux is opened.

```bash
echo 'cd ~/verus-mining-andiencoe/VERUSC && printf "1\n" | ./verus' >> ~/.bashrc
```

Close and reopen Termux.

---

## 🛑 STOP MINING

Press:

```text
CTRL + C
```

---

## ❌ DISABLE AUTO START

Edit `.bashrc`

```bash
nano ~/.bashrc
```

Delete this line:

```bash
cd ~/verus-mining-andiencoe/VERUSC && printf "1\n" | ./verus
```

Save the file.

Check:

```bash
grep "VERUSC" ~/.bashrc
```

If nothing is displayed, auto start has been removed successfully.

---

## 📋 MAIN MENU

```
1. Start Mining
2. Change Wallet & Worker
3. Adjust Core Usage
4. Change Mining Pool
5. Select Mining Mode
6. Exit
```

---

## 🌐 DEFAULT POOLS

- Luckpool Asia
- Vipor Asia
- Custom Pool

---

## ⚠️ NOTES

- Use a valid VRSC wallet.
- Leave at least one CPU core free for better stability.
- Stop mining if the phone becomes excessively hot.
- Disable battery optimization for Termux.

---

## 📚 SOURCE & ACKNOWLEDGEMENTS

VERUSC uses **ccminer** as its mining engine.

Original project:

https://github.com/zikyu7/ccminer

Special thanks to all ccminer developers and contributors.

This project simplifies the installation and configuration process for Android / Termux.

---

## 💰 SUPPORT THE PROJECT

Donate VRSC:

```text
RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw
```

Thank you for your support.

---

## ⚠️ DISCLAIMER

Please use this project in accordance with the licenses of the original software.

All third-party software remains the property of its respective authors.

---

## 👤 CREATOR

**ANDI ENCOE**

**Telegram:** t.me/AndiENCOE

⛏️ **Easy Verus Coin Mining on Android / Termux**
