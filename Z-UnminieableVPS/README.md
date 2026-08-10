# ⛏️ Z-UNMINIEABLEVPS — Unmineable CPU Mining

Lightweight **RandomX CPU miner** for **Linux VPS / x86-64** using **XMRig + unMineable**.

✅ **Created by:** ANDI ENCOE  
✅ **Telegram:** t.me/AndiEncoe

---

# ✨ FEATURES

- ✅ Supports multiple coins
- ✅ RandomX / XMRig
- ✅ Automatic configuration
- ✅ Custom wallet and worker
- ✅ Adjustable CPU cores
- ✅ Auto reconnect
- ✅ Supports `screen`
- ✅ Lightweight and easy to use

---

# 🚀 INSTALLATION

Clone the repository and start the miner:

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git && \
cd verus-mining-andiencoe/Z-UnminieableVPS && \
chmod +x miner && \
./miner
```

Follow the instructions shown by the miner to configure:

```text
Coin
Wallet
Worker
CPU Cores
Pool
```

---

# 📖 HOW TO USE

Start the miner:

```bash
./miner
```

Press:

```text
CTRL + C
```

to stop the miner.

---

# 🖥️ RUN WITH SCREEN

Install `screen`:

```bash
apt update && apt install screen -y
```

Enter the miner folder:

```bash
cd ~/verus-mining-andiencoe/Z-UnminieableVPS
```

Create a screen session:

```bash
screen -S unmineable
```

Start the miner:

```bash
./miner
```

### Detach Screen

Press:

```text
CTRL + A
D
```

The miner will continue running in the background.

### Reconnect to Screen

```bash
screen -r unmineable
```

### Check Active Screen Sessions

```bash
screen -ls
```

### Stop Mining

Reconnect to the screen session:

```bash
screen -r unmineable
```

Then press:

```text
CTRL + C
```

---

# 💻 CHECK ARCHITECTURE

Check your VPS architecture:

```bash
uname -m
```

Compatible architecture:

```text
x86_64
```

---

# ⛏️ DEFAULT POOL

```text
stratum+ssl://rx.unmineable.com:443
```

Coin, wallet, worker, CPU cores, and pool can be changed through the miner configuration menu.

---

# ⚙️ CPU USAGE

Adjust the CPU core usage according to your VPS resources.

Example:

```text
1 Core   = Low
2 Cores  = Light
4 Cores  = Medium
6 Cores  = High
8+ Cores = Very High
```

Avoid using all CPU resources if the VPS is also running other services.

---

# ⚠️ NOTES

- Use a valid wallet address.
- Make sure your VPS allows CPU mining.
- Check your VPS CPU usage and temperature if available.
- Adjust the number of CPU cores as needed.
- Use `screen` to keep the miner running after disconnecting from SSH.
- Make sure your VPS has a stable internet connection.
- Mining performance depends on CPU, VPS resources, network, and pool conditions.

---

# ⚠️ DISCLAIMER

This project is provided for educational and personal use.

Please use this project in accordance with the licenses and terms of the original software.

XMRig and other third-party software remain the property of their respective developers and contributors.

ANDI ENCOE is not affiliated with XMRig or unMineable.

---

# 👤 CREATOR

**ANDI ENCOE**

Telegram:

```text
t.me/AndiEncoe
```

---

# ⛏️ Z-UNMINIEABLEVPS

**Unmineable RandomX CPU Mining for Linux VPS**

Made with ❤️ by **ANDI ENCOE**

⛏️ **Happy Mining!**
