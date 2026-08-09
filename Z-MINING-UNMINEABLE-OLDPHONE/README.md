# ⛏️ Z-MINING-UNMINEABLE-OLDPHONE

Easy CPU Mining on Android / Termux using unMineable RandomX.

**XMRig • Termux • Old Phone**

✅ Created by: **ANDI ENCOE**  
✅ Telegram: **https://t.me/AndiENCOE**  
✅ Support: **THbREaD5o9Ru48PpELKZngjW4NPpLzbp34**

---

# ✨ FEATURES

- ✅ Easy setup and configuration
- ✅ Supports unMineable RandomX
- ✅ Supports multiple cryptocurrencies
- ✅ English / Bahasa Indonesia
- ✅ Adjustable CPU core usage
- ✅ Custom worker name
- ✅ Custom mining pool
- ✅ XMRig 6.26.0
- ✅ Automatic XMRig download
- ✅ Automatic XMRig compilation
- ✅ ARM64 Android support
- ✅ Termux compatible
- ✅ Saved configuration
- ✅ Simple mining menu
- ✅ Auto Start option

---

# 📁 PROJECT STRUCTURE

```text
Z-MINING-UNMINEABLE-OLDPHONE/
├── README.md
└── run.sh
```

### File Description

- `run.sh` — Main launcher, setup, configuration and mining script
- `README.md` — Project documentation

XMRig and configuration files are created automatically by `run.sh`.

---

# 📋 REQUIREMENTS

- Android phone
- Termux
- ARM64 Android device
- Stable internet connection
- RandomX-compatible CPU
- 2 GB RAM or higher recommended

This project is designed especially for **old Android phones**.

---

# 📥 DOWNLOAD TERMUX

If you don't have **Termux** installed yet, download it here:

**Termux APK**

```bash
https://sfile.co/qs62rLpT8d4
```

After installing Termux, open it and continue with the installation below.

---

# 🚀 INSTALLATION

## 1. Update Termux

```bash
yes | pkg update && pkg upgrade -y
```

## 2. Install Git

```bash
pkg install git -y
```

## 3. Clone Repository

```bash
git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git
```

## 4. Enter Project Folder

```bash
cd ~/verus-mining-andiencoe && cd Z-MINING-UNMINEABLE-OLDPHONE
```

## 5. Give Execute Permission

```bash
chmod +x run.sh
```

## 6. Start Miner

```bash
./run.sh
```

---

# ⏳ FIRST START — PLEASE WAIT

On the first start, `run.sh` will automatically prepare XMRig.

The script will:

1. Check your Android architecture.
2. Install the required Termux packages.
3. Download XMRig 6.26.0.
4. Configure XMRig.
5. Compile XMRig.
6. Create the mining configuration.
7. Start the miner.

You may see:

```text
Downloading XMRig...
Preparing compilation...
Compiling XMRig...
```

# ⚠️ IMPORTANT

**DO NOT CLOSE TERMUX**

**DO NOT PRESS CTRL+C**

**DO NOT INTERRUPT THE PROCESS**

Please wait until the XMRig download and compilation are completely finished.

Old phones may take longer to compile XMRig.

The first installation can take several minutes depending on your phone.

Wait until you see:

```text
XMRig is ready!
```

or:

```text
XMRig siap digunakan!
```

After that, continue with the setup.

---

# 🌐 LANGUAGE

The miner supports two languages:

```text
[1] Bahasa Indonesia
[2] English
```

You can change the language later from the main menu.

The selected language is saved automatically.

---

# ⚙️ FIRST SETUP

The program will ask for several settings.

## 💎 Coin Code

Enter the coin code you want to mine.

Example:

```bash
TRX
```

Use uppercase letters when possible.

---

## 👛 Wallet Address

Enter your mining wallet address.

Example:

```text
Your_Wallet_Address
```

Make sure the wallet address is correct before starting mining.

---

## 👤 Worker Name

Enter a worker/device name.

Example:

```bash
rig01
```

---

## 🧠 CPU Core Count

The script automatically detects the available CPU cores.

Example:

```text
CPU Cores [8]:
```

Enter the number of CPU cores you want to use.

For old phones, it is recommended to start with a lower number of cores.

---

## 🌐 Mining Pool

Default pool:

```bash
rx-asia.unmineable.com:3333
```

Press **Enter** to use the default pool.

You can also enter another RandomX-compatible pool.

---

# 🚀 MAIN MENU

English:

```text
[1] 🚀 START MINING
[2] ⚙  CHANGE SETTINGS
[3] 🌐 CHANGE LANGUAGE
[0] ✕  EXIT
```

Bahasa Indonesia:

```text
[1] 🚀 MULAI MINING
[2] ⚙  UBAH PENGATURAN
[3] 🌐 UBAH BAHASA
[0] ✕  KELUAR
```

---

# 🔄 RUN AGAIN

After the first setup, simply run:

```bash
cd ~/verus-mining-andiencoe && cd Z-MINING-UNMINEABLE-OLDPHONE
./run.sh
```

Your saved settings will be loaded automatically.

You do not need to enter your wallet and mining settings again unless you choose **Change Settings**.

---

# ⚙️ CPU CORE USAGE

Recommended settings for old phones:

```text
1 Core   = Very Light
2 Cores  = Light
4 Cores  = Medium
6 Cores  = High
8+ Cores = Very High
```

For better device stability, it is recommended to leave at least **1 CPU core free** for normal Android operation.

Start with 2–4 cores and increase gradually if your phone stays cool.

---

# 🚀 AUTO START

Auto Start can automatically launch the miner when a new Termux shell starts.

Run this command once:

```bash
echo 'cd ~/verus-mining-andiencoe && cd Z-MINING-UNMINEABLE-OLDPHONE && printf "1\n" | ./run.sh' >> ~/.bashrc
```

Then restart Termux.

Auto Start will:

1. Enter the project folder.
2. Launch `run.sh`.
3. Automatically select option `1`.
4. Start mining.

# ⚠️ IMPORTANT

Make sure option `1` is **START MINING** before enabling Auto Start.

Auto Start is recommended only after you have completed the first setup and saved your wallet and mining settings.

---

# ❌ DISABLE AUTO START

Open `.bashrc`:

```bash
nano ~/.bashrc
```

Remove this line:

```bash
cd ~/verus-mining-andiencoe && cd Z-MINING-UNMINEABLE-OLDPHONE && printf "1\n" | ./run.sh
```

Save the file and restart Termux.

Check Auto Start:

```bash
grep "Z-MINING-UNMINEABLE-OLDPHONE" ~/.bashrc
```

If there is no output, Auto Start has been disabled.

---

# 🛑 STOP MINING

Press:

```text
CTRL + C
```

The miner will stop and return to the project folder.

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

Coin availability may change.

Check the current unMineable supported coin list before mining.

---

# 🌐 MINING

This project uses **unMineable** for pool/service infrastructure and **XMRig** as the RandomX CPU mining engine.

Default pool:

```bash
rx-asia.unmineable.com:3333
```

The pool can be changed from:

```text
[2] ⚙ CHANGE SETTINGS
```

---

# 🛠️ XMRIG

This project uses:

```text
XMRig 6.26.0
```

Official repository:

```bash
https://github.com/xmrig/xmrig
```

Special thanks to the XMRig developers and contributors.

XMRig is an independent open-source project and is not affiliated with ANDI ENCOE.

---

# 🌡️ OLD PHONE

RandomX mining can use high CPU power.

For old phones:

- Start with 2–4 CPU cores.
- Monitor device temperature.
- Keep the phone properly ventilated.
- Avoid covering the phone while mining.
- Stop mining if the device becomes excessively hot.
- Avoid prolonged maximum CPU usage while charging.
- Use a stable power source for long mining sessions.

Mining performance depends on your phone's CPU, cooling system, Android version and system configuration.

---

# ⚠️ IMPORTANT NOTES

- Make sure your wallet address is correct.
- Use the correct Coin Code.
- Choose a reasonable CPU core count.
- Leave at least 1 CPU core free when possible.
- Monitor your device temperature.
- Do not close Termux during the first XMRig download and compilation.
- Do not press CTRL+C during the first XMRig compilation.
- The first installation may take longer on old phones.
- Keep your phone properly ventilated.
- Stop mining if your phone becomes excessively hot.
- Mining performance varies between devices.

---

# ⚠️ DISCLAIMER

This project is provided for educational and personal use.

Please use this project in accordance with the licenses of the original software.

All copyrights, source code, trademarks and licenses of third-party software remain the property of their respective owners.

XMRig is an independent open-source project and is not affiliated with ANDI ENCOE.

The creator is not responsible for damage caused by excessive CPU usage, overheating, improper device operation or misuse of this software.

---

# ❤️ SUPPORT THE PROJECT

If you would like to support this project, you can send a donation to:

## TRON (TRX)

```text
THbREaD5o9Ru48PpELKZngjW4NPpLzbp34
```

Thank you for your support! 🙏

---

# 👤 CREATOR

**ANDI ENCOE**

Telegram:

```bash
https://t.me/AndiENCOE
```

---

# ⛏️ Z-MINING-UNMINEABLE-OLDPHONE

Easy CPU Mining on Android / Termux

**XMRig • Termux • Old Phone**

Made with ❤️ by **ANDI ENCOE**
