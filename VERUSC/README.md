📦 VERUSC - Verus Coin Mining for Termux Android

✅ Created by: ANDI ENCOE
✅ Telegram: t.me/AndiEncoe

A lightweight and easy-to-use Verus Coin (VRSC) mining tool for Android phones running Termux.

---

🚀 QUICK START

Run the following commands one by one in Termux.

1. Update Termux packages

pkg update && pkg upgrade -y

2. Install required packages

pkg install libjansson git -y

3. Clone the repository

git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

4. Enter the VERUSC folder

cd verus-mining-andiencoe/VERUSC

5. Give the binary execution permission

chmod +x verus

6. Run VERUSC

./verus

---

⚡ IF THE REPOSITORY IS ALREADY DOWNLOADED

Simply run:

cd ~/verus-mining-andiencoe/VERUSC
chmod +x verus
./verus

«Note: The "verus" file is already provided as a precompiled binary ready to run on Termux Android. Users do not need to compile it again.»

---

🔄 AUTO START VERUSC

To automatically enter the VERUSC folder and run the miner every time a new Termux shell is opened, run:
cd ~/verus-mining-andiencoe/VERUSC && printf '1\n' | ./verus

After that, close and reopen Termux or start a new shell.

VERUSC will automatically run:

cd ~/verus-mining-andiencoe/VERUSC
./verus

---

🛑 STOP MINING

If VERUSC is currently running, press:

CTRL + C

This stops the running mining process.

---

❌ DISABLE AUTO START

If you no longer want VERUSC to automatically start when opening a new Termux shell:

nano ~/.bashrc

Find and delete this line:

cd ~/verus-mining-andiencoe/VERUSC && ./verus

Save the file and exit "nano".

Then close and reopen Termux.

Check Auto Start Status

To check whether the auto-start line has been removed:

grep "verus-mining-andiencoe/VERUSC" ~/.bashrc

If there is no output, auto-start has been successfully disabled.

«Note: Disabling auto-start does not delete the VERUSC program. You can still run it manually anytime with:»

cd ~/verus-mining-andiencoe/VERUSC
./verus

---

📚 SOURCE & ACKNOWLEDGEMENTS

This mining program is based on development from ccminer Verus and contributions from its original developers and contributors.

🔗 Source: https://github.com/zikyu7/ccminer

Special Thanks To

- Christian Buchner
- Christian H. (Chris84)
- Tanguy Pruvot
- Darktron
- Oink70
- zikyu7 — Android/ARM development
- All ccminer developers and contributors

The VERUSC project was created to simplify the usage and configuration of Verus mining on Termux Android.

All copyrights, licenses, and credits for the original source code remain with their respective authors and contributors.

---

💰 SUPPORT THE PROJECT

If you would like to support the development and maintenance of VERUSC / VERUS MINING ANDI ENCOE, you can send VRSC to the following wallet:

RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw

🙏 Thank you for your support!

---

⚠️ DISCLAIMER

Please use this program in accordance with the licenses and terms of the source projects used.

VERUSC — ANDI ENCOE
⛏️ Verus Coin Mining on Android/Termux
