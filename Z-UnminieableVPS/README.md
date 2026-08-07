# ⛏️ Z-UNMINIEABLEVPS — Unmineable CPU Mining

Lightweight **RandomX CPU miner** for **VPS / Linux x86-64** using **XMRig + unMineable**.

✅ **Created by:** ANDI ENCOE  
✅ **Telegram:** t.me/AndiEncoe

---

## ✨ FEATURES

- ✅ Supports multiple coins
- ✅ RandomX / XMRig
- ✅ Automatic configuration
- ✅ Custom wallet & worker
- ✅ Adjustable CPU cores
- ✅ Auto reconnect
- ✅ Supports `screen`

---

## 🚀 INSTALLATION

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git
cd verus-mining-andiencoe/Z-UnminieableVPS
chmod +x miner
./miner
```

---

## 🖥️ RUN WITH SCREEN

```bash
apt update && apt install screen -y
cd ~/verus-mining-andiencoe/Z-UnminieableVPS
screen -S unmineable
./miner
```

**Detach:** `CTRL + A` lalu `D`

**Reconnect:**

```bash
screen -r unmineable
```

**Check screen:**

```bash
screen -ls
```

**Stop mining:** `CTRL + C`

---

## 💻 CHECK ARCHITECTURE

```bash
uname -m
```

Compatible:

```text
x86_64
```

---

## ⛏️ DEFAULT POOL

```text
stratum+ssl://rx.unmineable.com:443
```

Coin, wallet, worker, CPU cores, dan pool dapat diubah melalui menu miner.

---

## ⚠️ NOTES

- Use a valid wallet.
- Make sure your VPS allows CPU mining.
- Adjust the number of CPU cores as needed.
- Use `screen` so the miner keeps running after disconnecting.
---

## 👤 CREATOR

**ANDI ENCOE**  
Telegram: t.me/AndiEncoe

⛏️ **Happy Mining!**
