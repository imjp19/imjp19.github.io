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
                document.getElementById("Model").value = parser.getDevice().model;
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
                document.getElementById("Cpu_Architecture").value = result.cpu.architecture;
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
                document.getElementById("Device_Type").value = result.device.type;
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
                document.getElementById("Connection_Type").value = navigator.connection.type;
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
                }, 100);
        }
    }
    setTimeout(fetchData, 2500);

    