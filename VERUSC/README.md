# 📦 VERUSC - Verus Coin Mining for Android / Termux

A lightweight and easy-to-use **Verus Coin (VRSC)** mining tool for Android using **Termux**.

✅ **Created by:** ANDI ENCOE  
✅ **Telegram:** https://t.me/AndiENCOE

---

## ✨ FEATURES

- ✅ Automatic CPU detection
- ✅ Displays CPU model & total CPU cores
- ✅ Adjustable CPU core usage
- ✅ Supports LuckPool & Vipor
- ✅ Add custom mining pools
- ✅ Automatic pool connection check
- ✅ Multiple mining modes (Default, Hybrid & Solo)
- ✅ Create custom mining modes
- ✅ Automatically saves settings
- ✅ Automatic reconnection
- ✅ Simple terminal interface
- ✅ Ready to run on Android / Termux

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
pkg install git libjansson -y
```

### 3. Clone Repository

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git
```

### 4. Enter VERUSC Directory

```bash
cd ~/verus-mining-andiencoe/VERUSC
```

### 5. Grant Execute Permission

```bash
chmod +x verus
```

### 6. Start VERUSC

```bash
./verus
```

---

## 📋 MAIN MENU

```
1. Start Mining
2. Change Wallet & Worker
3. Change Used CPU Cores
4. Change / Add Pool
5. Select / Add Mining Mode
6. Exit
```

---

## 🌐 SUPPORTED POOLS

Built-in pools:

- LuckPool Asia
- Vipor Asia

You can also add any custom Verus mining pool.

---

## ⚙️ MINING MODES

- Default
- Hybrid
- Solo
- Custom Mode

---

## 🔄 RUN AGAIN

```bash
cd ~/verus-mining-andiencoe/VERUSC
./verus
```

> **Note:** The `verus` binary is already precompiled for Android / Termux. No compilation is required.

---

## 🚀 AUTO START

```bash
echo 'cd ~/verus-mining-andiencoe/VERUSC && printf "1\n" | ./verus' >> ~/.bashrc
```

Restart Termux after running the command.

VERUSC will automatically:

- Open the VERUSC directory
- Start the miner
- Automatically select **Menu 1**

---

## 🛑 STOP MINING

Press:

```text
CTRL + C
```

---

## ❌ DISABLE AUTO START

Open:

```bash
nano ~/.bashrc
```

Delete this line:

```bash
cd ~/verus-mining-andiencoe/VERUSC && printf "1\n" | ./verus
```

Save the file, then restart Termux.

Check Auto Start:

```bash
grep "verus-mining-andiencoe/VERUSC" ~/.bashrc
```

---

## 📚 SOURCE & ACKNOWLEDGEMENTS

Mining Core:

**ccminer Verus**

Original Repository:

https://github.com/zikyu7/ccminer

Special thanks to:

- Christian Buchner
- Christian H. (Chris84)
- Tanguy Pruvot
- Darktron
- Oink70
- zikyu7
- All ccminer developers and contributors

This project simplifies the installation and configuration of Verus mining on Android / Termux.

---

## 💰 SUPPORT THE PROJECT

If you would like to support this project, you can donate VRSC to:

```text
RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw
```

🙏 Thank you for your support!

---

## ⚠️ DISCLAIMER

Please use this project in accordance with the licenses of the original software.

All third-party software, copyrights, and licenses remain the property of their respective authors.

---

## 👤 CREATOR

**ANDI ENCOE**

**Telegram:** https://t.me/AndiENCOE

---

# 📦 VERUSC

**Verus Coin Mining for Android / Termux**
