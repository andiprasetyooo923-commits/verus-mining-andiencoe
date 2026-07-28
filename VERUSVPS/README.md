# ⛏️ VERUS VPS — Verus Coin (VRSC) Mining

A lightweight **Verus Coin (VRSC)** mining tool designed for **VPS / Linux servers** running on **x86-64 architecture**.

✅ **Created by:** ANDI ENCOE  
✅ **Telegram:** https://t.me/AndiEncoe

---

## ✨ FEATURES

- ✅ Verus Coin (VRSC) mining
- ✅ Designed for VPS / Linux servers
- ✅ Supports x86-64 architecture
- ✅ Hellminer-based mining
- ✅ Ready-to-run binary
- ✅ No compilation required
- ✅ Supports background mining using `screen`

---

## 💻 REQUIREMENTS

### Recommended Systems

- Ubuntu 22.04 / 24.04 x86-64
- Debian x86-64
- Other compatible Linux x86-64 distributions

### Check VPS Architecture

Run:

```bash
uname -m
```

If the output is:

```text
x86_64
```

your VPS is compatible with this binary.

> **Note:** This binary is compiled for **Linux x86-64** and is **not compatible with ARM64** VPS.

---

# 🚀 INSTALLATION

### 1. Clone the Repository

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git
```

### 2. Enter the VERUSVPS Directory

```bash
cd verus-mining-andiencoe/VERUSVPS
```

### 3. Make the Binary Executable

```bash
chmod +x verus
```

### 4. Run VERUSVPS

```bash
./verus
```

To stop mining, press:

```text
CTRL + C
```

---

## 🖥️ RUN VERUSVPS WITH SCREEN

It is recommended to run VERUSVPS inside a **screen** session so the miner continues running even after you disconnect from the VPS.

### 1. Install Screen

Ubuntu / Debian:

```bash
apt update && apt install screen -y
```

### 2. Enter the VERUSVPS Directory

```bash
cd ~/verus-mining-andiencoe/VERUSVPS
```

### 3. Create a Screen Session

```bash
screen -S verusvps
```

### 4. Run the Miner

```bash
./verus
```

VERUSVPS is now running inside the **screen** session.

---

## 🔄 DETACH FROM SCREEN

To leave the screen session while keeping the miner running:

Press:

```text
CTRL + A
```

Then press:

```text
D
```

You can now safely disconnect from the VPS.

> **Note:** The miner continues running as long as the **screen** session remains active.

---

## 🔙 RECONNECT TO THE MINER

To return to the running screen session:

```bash
screen -r verusvps
```

---

## 📋 CHECK ACTIVE SCREEN SESSIONS

To display all active screen sessions:

```bash
screen -ls
```

Example:

```text
There is a screen on:
    12345.verusvps    (Detached)
1 Socket in /run/screen/S-root.
```

---

## 🛑 STOP MINING

Reconnect to the screen session:

```bash
screen -r verusvps
```

Stop the miner by pressing:

```text
CTRL + C
```

Then exit the screen session:

```bash
exit
```

---

## ⛏️ MINING POOL

The binary is already preconfigured with the required mining pool settings.

When the miner successfully connects, messages similar to the following will appear:

```text
Connecting to pool
authorized miner
accepted extra nonce subscription
```

---

## 📚 PROGRAM SOURCE

The mining core used by **VERUSVPS** is based on **Hellminer (hminer)**.

### Original Repository

https://github.com/hellcatz/hminer

🙏 Special thanks to the original **Hellminer** developers and all contributors.

This project only simplifies the installation, configuration, and usage process for Verus mining on VPS / Linux servers.

All copyrights, licenses, and credits for third-party software remain with their respective authors and projects.

---

## ⚠️ DISCLAIMER

Please use this program in accordance with the licenses and terms of the source projects used.

All third-party software, source code, copyrights, and licenses remain the property of their respective developers and contributors.

This project does not claim ownership of third-party mining software.

Mining performance may vary depending on the VPS hardware, CPU, virtualization environment, operating system, temperature, network connection, and mining pool conditions.

> **Important:** If the VPS is rebooted, the **screen** session will be closed. You must start VERUSVPS manually again after the system is back online.

---

## 👤 CREATOR

**ANDI ENCOE**

**Telegram:** https://t.me/AndiEncoe

**VERUS VPS**

**Verus Coin (VRSC) Mining on VPS / Linux**

⛏️ **Happy Mining! 🚀**
