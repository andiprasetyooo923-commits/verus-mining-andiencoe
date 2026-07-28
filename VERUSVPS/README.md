⛏️ VERUS VPS — Verus Coin (VRSC) Mining

A lightweight Verus Coin (VRSC) mining tool designed for VPS / Linux servers running on x86-64 architecture.

✅ Created by: ANDI ENCOE
✅ Telegram: https://t.me/AndiEncoe

---

✨ FEATURES

- ✅ Verus Coin (VRSC) mining
- ✅ Designed for VPS / Linux servers
- ✅ Supports x86-64 architecture
- ✅ Hellminer-based mining
- ✅ Ready-to-run binary
- ✅ No compilation required
- ✅ Supports background mining with "screen"

---

💻 REQUIREMENTS

Recommended Systems

- Ubuntu 22.04 / 24.04 x86-64
- Debian x86-64
- Other compatible Linux x86-64 distributions

Check VPS Architecture

Run:

uname -m

If the output is:

x86_64

your VPS is compatible with this binary.

«⚠️ Note: This binary is compiled for Linux x86-64 and is not intended for ARM64 VPS.»

---

🚀 INSTALLATION

1. Clone the Repository

git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

2. Enter the VERUSVPS Directory

cd verus-mining-andiencoe/VERUSVPS

3. Make the Binary Executable

chmod +x verus

4. Run the Miner

./verus

Press:

CTRL + C

to stop mining.

---

🖥️ RUN VERUSVPS WITH SCREEN

For VPS users, it is recommended to run VERUSVPS inside a "screen" session.

This allows the miner to continue running after you disconnect from the VPS.

1. Install Screen

For Ubuntu / Debian:

apt update && apt install screen -y

2. Enter the VERUSVPS Directory

cd ~/verus-mining-andiencoe/VERUSVPS

3. Create a Screen Session

screen -S verusvps

4. Run the Miner

./verus

VERUSVPS is now running inside the "screen" session.

---

🔄 DETACH FROM SCREEN

To leave the "screen" session while keeping the miner running:

Press:

CTRL + A

then press:

D

You can now disconnect from the VPS.

«Note: The miner will continue running in the background while the "screen" session remains active.»

---

🔙 RECONNECT TO VERUSVPS

To return to the running miner:

screen -r verusvps

---

📋 CHECK SCREEN SESSIONS

To see active screen sessions:

screen -ls

Example:

There is a screen on:
    12345.verusvps    (Detached)
1 Socket in /run/screen/S-root.

---

🛑 STOP MINING

Reconnect to the screen session:

screen -r verusvps

Then press:

CTRL + C

After the miner stops, exit the screen session:

exit

---

⛏️ MINING POOL

The binary is preconfigured with the mining settings required to connect to the pool.

When the miner successfully connects, you should see messages similar to:

Connecting to pool
authorized miner
accepted extra nonce subscription

---

📚 PROGRAM SOURCE

The mining core used by VERUSVPS is Hellminer / hminer.

Original Source Repository

https://github.com/hellcatz/hminer

🙏 Special thanks to the original Hellminer developers and all contributors involved in the development of the mining software.

This project only simplifies the usage, configuration, and setup process for Verus mining on VPS / Linux servers.

Copyrights, credits, and licenses for third-party components remain with their respective authors and projects.

---

⚠️ DISCLAIMER

Please use this program in accordance with the licenses and terms of the source projects used.

All third-party software, source code, copyrights, and licenses remain the property of their respective developers and contributors.

This project does not claim ownership of third-party mining software.

Mining performance may vary depending on the VPS CPU, virtualization environment, operating system, temperature, network connection, and pool conditions.

«Important: If the VPS is rebooted, the "screen" session will be closed and VERUSVPS must be started again manually.»

---

👤 CREATOR

ANDI ENCOE

Telegram: https://t.me/AndiEncoe

⛏️ VERUS VPS

Verus Coin (VRSC) Mining on VPS / Linux

⛏️ Happy Mining! 🚀
