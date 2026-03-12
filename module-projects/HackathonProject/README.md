# [DM-DriveAnalyzer](https://github.com/DamienHall/DM-DriveAnalyzer/tree/main)
This is a C# / .NET application that runs on the Raspberry Pi for the Drive Migration Tool. When ran this application will mount plugged in drives (USB, HDD, SSD) and read their data to then send that data over the network to an FTP server of your choice. This project is meant to make the migration of drive data super easy, all you have to do is plug in the devices, run the script and according to your settings it will automatically move the data to your FTP server!

## Compatibility:
Any Raspberry Pi should be able to run this program, the only requirement is that the Raspberry Pi is running Ubuntu as its operating system. Ubuntu is required as the bash scripts used are using Ubuntu commands that may not be compatible with other Linux OS's.

How your RPi connects to your storage system is up to you, ethernet will always be the fastest method of transfer (outside of P2P...) however if your RPi has WIFI you can also use that. When setting up the RPi make sure you have the correct netplan configuration and the correct FTPIP setup in your settings.json!

### Recommended Setup:
All developement took place on a Raspberry Pi Model 3 V1.2. While this model does have WIFI it is extremely slow so I have connected it to my computer via ethernet with wifi sharing activated. Make sure that you are using the Microsoft packages for your .NET package installation, I am using the dotnet SDK 8.0. For more information on my configuration check `How to run the program` section below.

## How to run the program:

### General Usage:
1. Download the [latest release from github](https://github.com/DamienHall/DM-DriveAnalyzer/releases).
2. Unzip the file: `tar -xvzf DM-DriveAnalyzer-linux-arm64.tar.gz -C DM-DriveAnalyzer`.
3. Update your visudo file to allow the scripts in the scripts folder to execute with sudo privileges: `sudo visudo`, at the bottom of the file add the following: *Replace ***username*** and ***path to project***!
    ```
    <username> ALL=(ALL) NOPASSWD: \
        <path to project>/DM-DriveAnalyzer/scripts/mountstorage.sh, \
        <path to project>/DM-DriveAnalyzer/scripts/unmountstorage.sh, \
        <path to project>/DM-DriveAnalyzer/scripts/checkpttype.sh, \
        <path to project>/DM-DriveAnalyzer/scripts/checkfstype.sh
    ```
4. cd into the project folder: `cd DM-DriveAnalyzer`.
5. chmod the DM-DriveAnalyzer file: `chmod +x DM-DriveAnalyzer`.
6. Run the application: `./DM-DriveAnalyzer`.

### For Developement:
>__Credit to Tobias J on Stack Overflow__ - The Microsoft packages fix for Ubuntu was taken from this [Stack Overflow post by Tobias J](https://stackoverflow.com/a/73899341). Check out the link to learn more about his **Nov 2024 update** for .NET 9 Microsoft Packages!

1. Configure apt to use Microsoft packages instead of default Ubuntu ones for .NET packages:
    1. `cd /etc/apt/preferences.d/`
    2. `touch 99microsoft-dotnet.pref`
    3. `nvim 99microsoft-dotnet.pref`
    4. Add the following to your new 99microsoft-dotnet.pref file:
    ```
    Package: dotnet* aspnet* netstandard*
    Pin: origin "archive.ubuntu.com"
    Pin-Priority: -10
    
    Package: dotnet* aspnet* netstandard*
    Pin: origin "security.ubuntu.com"
    Pin-Priority: -10
    ```
2. Now update and install the dotnet SDK 8.0: `sudo apt update && sudo apt install -y dotnet-sdk-8.0`.
3. Download the repo: `git clone https://github.com/DamienHall/DM-DriveAnalyzer`.
4. Update your visudo file to allow the scripts in the scripts folder to execute with sudo privileges: `sudo visudo`, at the bottom of the file add the following: *Replace ***username*** and ***path to project***!
    ```
    <username> ALL=(ALL) NOPASSWD: \
        <path to project>/DM-DriveAnalyzer/scripts/mountstorage.sh, \
        <path to project>/DM-DriveAnalyzer/scripts/unmountstorage.sh, \
        <path to project>/DM-DriveAnalyzer/scripts/checkpttype.sh, \
        <path to project>/DM-DriveAnalyzer/scripts/checkfstype.sh
    ```
5. cd into the downloaded repo: `cd DM-DriveAnalyzer`.
6. Download all required dependencies and run the code: `dotnet run`.

## Settings
The `settings.json` file should be included in the base directory of the project (along with `scripts/`) and can contain the following:
```json
{
    "FTPIP": "127.0.0.1",
    "MaxReadDepth": 4,
    "GlobalSettings": {
        "Ignores": [],
        "Needs": []
    },

    "WindowsSettings": {
        "Ignores": [],
        "Needs": []
    },

    "LinuxSettings": {
        "Ignores": [],
        "Needs": []
    },

    "MacSettings": {
        "Ignores": [],
        "Needs": []
    }
}
```

### Required Settings:
`"FTPIP"` is your connection string, you will put your FTP server's IP address here. Alongside this we have `"MaxReadDepth"` which tells the program to only search through files until you hit the `"MaxReadDepth"`.

### Optional Settings:
`"GlobalSettings"`, `"WindowsSettings"`, `"LinuxSettings"`, `"MacSettings"` are objects that define what kind of entries in filepaths either ignore or require when transfering. For example, if I wanted to ignore all filepaths on windows that were .dll's and only wanted to transfer files within the /Users/ directory `"WindowsSettings"` would look like this:
```json
"WindowsSettings": {
    "Ignores": [
        ".dll"
    ],
    "Needs": [
        "/Users/"
    ]
}
```

This scheme applies to every settings type and is additive in nature. For example, if you ignored .dll in `"GlobalSettings"` and ignored .exe / required /Users/ in `"WindowsSettings"` the following paths would be ignored / required:
```json
Ignored: [".dll", ".exe"]
Needed: ["/Users/"]
```

## Challenges:
Normally I would not include a challenges section in my `README.md` however this is my final project for my **Multiverse / HP** apprenticeship! I will now talk about challenges with creating the project and how I overcame them along with steps on how to do the same yourself.

### Development setup:
When attempting to setup my developement environment I ran into a few issues, most notably I encountered plenty of issues with SSH and WIFI sharing through ethernet. I ran through multiple developement setup solutions including:
1. Writing code directly on the RPi using a spare monitor and keyboard
2. SSH'ing into the RPi and writing code from there
3. Using VSCode to edit the project on the RPi through SSH

None of these worked very well for various reasons, my first attempt didn't work great as I couldn't google things without unplugging everything from the RPi and then plugging it back into my main computer.

The second attempt didn't work as none of the tools I use to develop exist on the RPi and installing them would add ton's of bloat to the OS. On top of not having the software I needed, writing code through CLI tools like Nano took forever as the WIFI chip on the RPi 3B is extremely slow.

My 3rd attempt also wasn't successful as SSH'ing with VSCode would cause the internet connection to just completely drop after about 5 minutes making it impossible to write any code.

After all of these different attempts my last worked great, I decided to take all of the things I had learned from the previous setup attempts and do the following:
1. Connected the RPi via ethernet to my computer
2. Rewrote the netplan config to disable WIFI and set the eth0 ip address to 192.168.137.2
3. Mounted the projects directory to my computer's instance of WSL with sshfs
4. Used NeoVim to edit the mounted files
5. Opened a second tab on my terminal that was SSH'd into the RPi to compile the code and run it with `dotnet run`

This ended up being the best choice for me and allowed me to edit the RPi's code with all of my favourite dev tools like NeoVim with <1ms response times!

### WIFI Sharing:
Another minor issue when getting the RPi ready for development was that when I disabled the WIFI on the RPi with my netplan configuration, I was able to SSH into the RPi but not connect to the internet through it. Because of this issue I had to setup WIFI sharing on my Windows computer. Originally I had configured the netplan and ethernet cable to have the ip addresses: `192.168.0.1` for the ethernet cable and `192.168.0.2` for the RPi. This did not work however and it took me a while to figure out why, apparently the acceptible ip range for WIFI sharing is `192.168.137.x` on windows meaning that my ip addresses were not able to use WIFI sharing. I was able to quickly fix this by replacing the 0's in my ip addresses to 137 which allowed me to download the packages that I required to run this project.

### .NET Installation:
I had some issues with my .NET installation, when I would run `sudo apt install dotnet-sdk-8.0` everything would install however running any `dotnet` command would fail with a `A fatal error occurred. The folder [/usr/share/dotnet/host/fxr] does not exist` error. After doing some reasearch I learned that:

>"When .NET (Core) was first released for Linux, it was not yet available in the official Ubuntu repo. So instead, many of us added the Microsoft APT repo in order to install it. Now, the packages are part of the Ubuntu repo, and they are conflicting with the Microsoft packages."
> \- [Tobias J's comment on Stack Overflow](https://stackoverflow.com/a/73899341)

Using Tobias J's fix, I was able to override the default apt packages for .NET (Core) and use the Microsoft packages instead, this completely fixed the error for me.

### Bash Scripts / Sudo:
In order to get information about the drives  that were connected to the devices I had to use multiple bash scripts . The issue with these scripts is that they require the use of sudo which forced terminal input from the user. I wanted the project to require almost 0 input from the user once drives were plugged in and the script was ran so to get rid of the need for the users password I modified the visudo file. The modifications I made allowed me to give sudo permissions to all four of my bash scripts. I decided to only give sudo permissions to those four files as it would be extremely unsafe to give sudo permissions to a folder as you could load any script you wanted into it. Some additions I would make to this is making the scripts not require sudo at all that way there is no permission funny business going on.

# [DM-FTPServer](https://github.com/DamienHall/DM-FTPServer/tree/main)
This is a Python application that runs on my home computer for the Drive Migration Tool. When ran the script will start an FTP server on the ip `192.168.137.1` for the RPi to connect to.

## How to run the FTP server and organization script:
1. clone the repository: `git clone https://github.com/DamienHall/DM-FTPServer`.
2. cd into the directory: `cd DM-FTPServer`.
3. Create your venv environment and activate it: `python -m venv .venv && .venv\Scripts\activate`.
4. Install requirements: `pip install -r requirements.txt`.
5. Run the FTP server: `python .\ftpserver.py`.

If you want to run the organization script as well, use the following commands when you are finished uploading your drive data:
1. Close the FTP server: `Ctrl + c`.
2. Run the organization script: `python .\organizer.py`.
