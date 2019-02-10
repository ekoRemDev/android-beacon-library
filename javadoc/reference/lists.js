var DATA = [
      { id:0, label:"org.altbeacon.beacon", link:"org/altbeacon/beacon/package-summary.html", type:"package" },
      { id:1, label:"org.altbeacon.beacon.AltBeacon", link:"org/altbeacon/beacon/AltBeacon.html", type:"class" },
      { id:2, label:"org.altbeacon.beacon.AltBeacon.Builder", link:"org/altbeacon/beacon/AltBeacon.Builder.html", type:"class" },
      { id:3, label:"org.altbeacon.beacon.AltBeaconParser", link:"org/altbeacon/beacon/AltBeaconParser.html", type:"class" },
      { id:4, label:"org.altbeacon.beacon.Beacon", link:"org/altbeacon/beacon/Beacon.html", type:"class" },
      { id:5, label:"org.altbeacon.beacon.Beacon.Builder", link:"org/altbeacon/beacon/Beacon.Builder.html", type:"class" },
      { id:6, label:"org.altbeacon.beacon.BeaconConsumer", link:"org/altbeacon/beacon/BeaconConsumer.html", type:"class" },
      { id:7, label:"org.altbeacon.beacon.BeaconData", link:"org/altbeacon/beacon/BeaconData.html", type:"class" },
      { id:8, label:"org.altbeacon.beacon.BeaconDataNotifier", link:"org/altbeacon/beacon/BeaconDataNotifier.html", type:"class" },
      { id:9, label:"org.altbeacon.beacon.BeaconManager", link:"org/altbeacon/beacon/BeaconManager.html", type:"class" },
      { id:10, label:"org.altbeacon.beacon.BeaconManager.ServiceNotDeclaredException", link:"org/altbeacon/beacon/BeaconManager.ServiceNotDeclaredException.html", type:"class" },
      { id:11, label:"org.altbeacon.beacon.BeaconParser", link:"org/altbeacon/beacon/BeaconParser.html", type:"class" },
      { id:12, label:"org.altbeacon.beacon.BeaconParser.BeaconLayoutException", link:"org/altbeacon/beacon/BeaconParser.BeaconLayoutException.html", type:"class" },
      { id:13, label:"org.altbeacon.beacon.BeaconTransmitter", link:"org/altbeacon/beacon/BeaconTransmitter.html", type:"class" },
      { id:14, label:"org.altbeacon.beacon.BleNotAvailableException", link:"org/altbeacon/beacon/BleNotAvailableException.html", type:"class" },
      { id:15, label:"org.altbeacon.beacon.Identifier", link:"org/altbeacon/beacon/Identifier.html", type:"class" },
      { id:16, label:"org.altbeacon.beacon.MonitorNotifier", link:"org/altbeacon/beacon/MonitorNotifier.html", type:"class" },
      { id:17, label:"org.altbeacon.beacon.RangeNotifier", link:"org/altbeacon/beacon/RangeNotifier.html", type:"class" },
      { id:18, label:"org.altbeacon.beacon.Region", link:"org/altbeacon/beacon/Region.html", type:"class" },
      { id:19, label:"org.altbeacon.beacon.client", link:"org/altbeacon/beacon/client/package-summary.html", type:"package" },
      { id:20, label:"org.altbeacon.beacon.client.BeaconDataFactory", link:"org/altbeacon/beacon/client/BeaconDataFactory.html", type:"class" },
      { id:21, label:"org.altbeacon.beacon.client.DataProviderException", link:"org/altbeacon/beacon/client/DataProviderException.html", type:"class" },
      { id:22, label:"org.altbeacon.beacon.client.NullBeaconDataFactory", link:"org/altbeacon/beacon/client/NullBeaconDataFactory.html", type:"class" },
      { id:23, label:"org.altbeacon.beacon.distance", link:"org/altbeacon/beacon/distance/package-summary.html", type:"package" },
      { id:24, label:"org.altbeacon.beacon.distance.AndroidModel", link:"org/altbeacon/beacon/distance/AndroidModel.html", type:"class" },
      { id:25, label:"org.altbeacon.beacon.distance.CurveFittedDistanceCalculator", link:"org/altbeacon/beacon/distance/CurveFittedDistanceCalculator.html", type:"class" },
      { id:26, label:"org.altbeacon.beacon.distance.DistanceCalculator", link:"org/altbeacon/beacon/distance/DistanceCalculator.html", type:"class" },
      { id:27, label:"org.altbeacon.beacon.distance.DistanceConfigFetcher", link:"org/altbeacon/beacon/distance/DistanceConfigFetcher.html", type:"class" },
      { id:28, label:"org.altbeacon.beacon.distance.ModelSpecificDistanceCalculator", link:"org/altbeacon/beacon/distance/ModelSpecificDistanceCalculator.html", type:"class" },
      { id:29, label:"org.altbeacon.beacon.distance.ModelSpecificDistanceUpdater", link:"org/altbeacon/beacon/distance/ModelSpecificDistanceUpdater.html", type:"class" },
      { id:30, label:"org.altbeacon.beacon.logging", link:"org/altbeacon/beacon/logging/package-summary.html", type:"package" },
      { id:31, label:"org.altbeacon.beacon.logging.LogManager", link:"org/altbeacon/beacon/logging/LogManager.html", type:"class" },
      { id:32, label:"org.altbeacon.beacon.logging.Logger", link:"org/altbeacon/beacon/logging/Logger.html", type:"class" },
      { id:33, label:"org.altbeacon.beacon.logging.Loggers", link:"org/altbeacon/beacon/logging/Loggers.html", type:"class" },
      { id:34, label:"org.altbeacon.beacon.powersave", link:"org/altbeacon/beacon/powersave/package-summary.html", type:"package" },
      { id:35, label:"org.altbeacon.beacon.powersave.BackgroundPowerSaver", link:"org/altbeacon/beacon/powersave/BackgroundPowerSaver.html", type:"class" },
      { id:36, label:"org.altbeacon.beacon.service", link:"org/altbeacon/beacon/service/package-summary.html", type:"package" },
      { id:37, label:"org.altbeacon.beacon.service.ArmaRssiFilter", link:"org/altbeacon/beacon/service/ArmaRssiFilter.html", type:"class" },
      { id:38, label:"org.altbeacon.beacon.service.BeaconService", link:"org/altbeacon/beacon/service/BeaconService.html", type:"class" },
      { id:39, label:"org.altbeacon.beacon.service.BeaconService.BeaconBinder", link:"org/altbeacon/beacon/service/BeaconService.BeaconBinder.html", type:"class" },
      { id:40, label:"org.altbeacon.beacon.service.Callback", link:"org/altbeacon/beacon/service/Callback.html", type:"class" },
      { id:41, label:"org.altbeacon.beacon.service.DetectionTracker", link:"org/altbeacon/beacon/service/DetectionTracker.html", type:"class" },
      { id:42, label:"org.altbeacon.beacon.service.ExtraDataBeaconTracker", link:"org/altbeacon/beacon/service/ExtraDataBeaconTracker.html", type:"class" },
      { id:43, label:"org.altbeacon.beacon.service.MonitoringData", link:"org/altbeacon/beacon/service/MonitoringData.html", type:"class" },
      { id:44, label:"org.altbeacon.beacon.service.MonitoringStatus", link:"org/altbeacon/beacon/service/MonitoringStatus.html", type:"class" },
      { id:45, label:"org.altbeacon.beacon.service.RangeState", link:"org/altbeacon/beacon/service/RangeState.html", type:"class" },
      { id:46, label:"org.altbeacon.beacon.service.RangedBeacon", link:"org/altbeacon/beacon/service/RangedBeacon.html", type:"class" },
      { id:47, label:"org.altbeacon.beacon.service.RegionMonitoringState", link:"org/altbeacon/beacon/service/RegionMonitoringState.html", type:"class" },
      { id:48, label:"org.altbeacon.beacon.service.RssiFilter", link:"org/altbeacon/beacon/service/RssiFilter.html", type:"class" },
      { id:49, label:"org.altbeacon.beacon.service.RunningAverageRssiFilter", link:"org/altbeacon/beacon/service/RunningAverageRssiFilter.html", type:"class" },
      { id:50, label:"org.altbeacon.beacon.service.Stats", link:"org/altbeacon/beacon/service/Stats.html", type:"class" },
      { id:51, label:"org.altbeacon.beacon.service.Stats.Sample", link:"org/altbeacon/beacon/service/Stats.Sample.html", type:"class" },
      { id:52, label:"org.altbeacon.beacon.service.scanner", link:"org/altbeacon/beacon/service/scanner/package-summary.html", type:"package" },
      { id:53, label:"org.altbeacon.beacon.service.scanner.CycledLeScanCallback", link:"org/altbeacon/beacon/service/scanner/CycledLeScanCallback.html", type:"class" },
      { id:54, label:"org.altbeacon.beacon.service.scanner.CycledLeScanner", link:"org/altbeacon/beacon/service/scanner/CycledLeScanner.html", type:"class" },
      { id:55, label:"org.altbeacon.beacon.service.scanner.CycledLeScannerForJellyBeanMr2", link:"org/altbeacon/beacon/service/scanner/CycledLeScannerForJellyBeanMr2.html", type:"class" },
      { id:56, label:"org.altbeacon.beacon.service.scanner.CycledLeScannerForLollipop", link:"org/altbeacon/beacon/service/scanner/CycledLeScannerForLollipop.html", type:"class" },
      { id:57, label:"org.altbeacon.beacon.service.scanner.DistinctPacketDetector", link:"org/altbeacon/beacon/service/scanner/DistinctPacketDetector.html", type:"class" },
      { id:58, label:"org.altbeacon.beacon.service.scanner.NonBeaconLeScanCallback", link:"org/altbeacon/beacon/service/scanner/NonBeaconLeScanCallback.html", type:"class" },
      { id:59, label:"org.altbeacon.beacon.service.scanner.ScanFilterUtils", link:"org/altbeacon/beacon/service/scanner/ScanFilterUtils.html", type:"class" },
      { id:60, label:"org.altbeacon.beacon.simulator", link:"org/altbeacon/beacon/simulator/package-summary.html", type:"package" },
      { id:61, label:"org.altbeacon.beacon.simulator.BeaconSimulator", link:"org/altbeacon/beacon/simulator/BeaconSimulator.html", type:"class" },
      { id:62, label:"org.altbeacon.beacon.simulator.StaticBeaconSimulator", link:"org/altbeacon/beacon/simulator/StaticBeaconSimulator.html", type:"class" },
      { id:63, label:"org.altbeacon.beacon.startup", link:"org/altbeacon/beacon/startup/package-summary.html", type:"package" },
      { id:64, label:"org.altbeacon.beacon.startup.BootstrapNotifier", link:"org/altbeacon/beacon/startup/BootstrapNotifier.html", type:"class" },
      { id:65, label:"org.altbeacon.beacon.startup.RegionBootstrap", link:"org/altbeacon/beacon/startup/RegionBootstrap.html", type:"class" },
      { id:66, label:"org.altbeacon.beacon.startup.StartupBroadcastReceiver", link:"org/altbeacon/beacon/startup/StartupBroadcastReceiver.html", type:"class" },
      { id:67, label:"org.altbeacon.beacon.utils", link:"org/altbeacon/beacon/utils/package-summary.html", type:"package" },
      { id:68, label:"org.altbeacon.beacon.utils.EddystoneTelemetryAccessor", link:"org/altbeacon/beacon/utils/EddystoneTelemetryAccessor.html", type:"class" },
      { id:69, label:"org.altbeacon.beacon.utils.UrlBeaconUrlCompressor", link:"org/altbeacon/beacon/utils/UrlBeaconUrlCompressor.html", type:"class" },
      { id:70, label:"org.altbeacon.bluetooth", link:"org/altbeacon/bluetooth/package-summary.html", type:"package" },
      { id:71, label:"org.altbeacon.bluetooth.BleAdvertisement", link:"org/altbeacon/bluetooth/BleAdvertisement.html", type:"class" },
      { id:72, label:"org.altbeacon.bluetooth.BluetoothCrashResolver", link:"org/altbeacon/bluetooth/BluetoothCrashResolver.html", type:"class" },
      { id:73, label:"org.altbeacon.bluetooth.BluetoothCrashResolver.UpdateNotifier", link:"org/altbeacon/bluetooth/BluetoothCrashResolver.UpdateNotifier.html", type:"class" },
      { id:74, label:"org.altbeacon.bluetooth.BluetoothMedic", link:"org/altbeacon/bluetooth/BluetoothMedic.html", type:"class" },
      { id:75, label:"org.altbeacon.bluetooth.Pdu", link:"org/altbeacon/bluetooth/Pdu.html", type:"class" }

    ];
