<h1 align="center">
  <!-- <a name="logo" href="http://www.vCloudInfo.com/tag/iot"><img src="https://raw.githubusercontent.com/CCOSTAN/Home-AssistantConfig/master/config/www/custom_ui/floorplan/images/branding/twitter_profile.png" alt="Bear Stone Smart Home" width="200"></a> -->
  <br>
  Symbtiote Smart House Configuration
</h1>
<h4 align="center">Be sure to :star: my repo so you can keep up to date on all of the progress!</h4>

![Home][home]

[home]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/ha_home.jpg "Home"

<div align="center">
  <h4>
    <a href="https://travis-ci.org/3vasi0n89/home-assistant-config-files"><img src="https://travis-ci.org/3vasi0n89/home-assistant-config-files.svg?branch=master"/></a>
    <a href="https://github.com/3vasi0n89/home-assistant-config-files/stargazers"><img src="https://img.shields.io/github/stars/3vasi0n89/home-assistant-config-files.svg?style=plasticr"/></a>
    <a href="https://github.com/3vasi0n89/home-assistant-config-files/commits/master"><img src="https://img.shields.io/github/last-commit/3vasi0n89/home-assistant-config-files.svg?style=plasticr"/></a>
  </h4>
</div>

<div align="center"><a name="menu"></a>
  <h4>
    <a href="https://github.com/3vasi0n89/home-assistant-config-files#background">
      Background
    </a>
    <span> | </span>
    <a href="https://github.com/3vasi0n89/home-assistant-config-files#hardware">
      Hardware
    </a>
    <span> | </span>
    <a href="https://github.com/3vasi0n89/home-assistant-config-files#software">
      Software
    </a>
    <span> | </span>
    <a href="https://github.com/3vasi0n89/home-assistant-config-files#automations">
      Automations
    </a>
    <span> | </span>
    <a href="https://github.com/3vasi0n89/home-assistant-config-files#screenshots">
      Screenshots
    </a>
    <span> | </span>
    <a href="https://github.com/3vasi0n89/home-assistant-config-files#future_projects">
      Future Projects
    </a>
    <span> | </span>
    <a href="https://github.com/3vasi0n89/Home-Assistant-Notification-Center-Hub">
      My Notification Center
    </a>
    <span> | </span>
    <a href="https://symbiotesmarthouse.com/">
      Website
    </a>
    <span> | </span>
    <a href="https://symbiotesmarthouse.com/shop">
      Shop
    </a>
  </h4>
</div>

<a name="background"></a>Background
======

My Home Assistant Configuration Files for my Symbtiote Smart House Project.
I'll do my best to keep these files updated regularly!

A little bit of background about the hardware and software that I utilize for my house.

I run my Home Assistant off of a docker on my Unraid Server.
Ever since I made the switch from the Raspberry Pi 3 to Unraid I have noticed significant differences in speed between how fast my automations trigger
and how smoothly everything runs; On top of that the reboot times are between 10-30 seconds now instead of the upwards of 5 minutes that the RPi3 took.



<a name="hardware"></a>Hardware
======

[PfSense Router](https://www.pfsense.org/)
* Intel i5 Processor
* Intel NIC

![PFSense][pfsense]

[pfsense]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/pfsense.jpg "PFSense"

[Unraid Server](https://unraid.net/)
* Intel i7 Processor
* 2x Nvidia GTX 660 GFX cards
* 4x 4Tb WD Red HDD's
* 240Gb Intel SSD as Cache Drive
* 40Gb Memory
* New upgrade coming soon for this

![Unraid][unraid]

[unraid]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/unraid.jpg "Unraid"

[Amazon Echo Dot](https://www.amazon.com/All-new-Echo-Dot-3rd-Gen/dp/B0792KTHKJ)

[Sonoff Basic](https://www.banggood.com/DIY-Wi-Fi-Wireless-Switch-For-Smart-Home-With-ABS-Shell-p-1019971.html?cur_warehouse=CN)

[Sonoff SV](https://www.banggood.com/DC-5V-24V-DIY-WIFI-Wireless-Switch-Sonoff-SV-Module-For-Smart-Home-p-1063987.html?rmmds=search&cur_warehouse=CN)

[NodeMCU](https://www.banggood.com/Geekcreit-Doit-NodeMcu-Lua-ESP8266-ESP-12F-WIFI-Development-Board-p-985891.html?rmmds=search&cur_warehouse=CN)

[Wemos D1 Mini](https://www.banggood.com/Wemos-D1-Mini-V3_0_0-WIFI-Internet-Of-Things-Development-Board-Based-ESP8266-4MB-p-1264245.html?rmmds=search&cur_warehouse=CN)

[~~Bruh Multisensor~~](https://github.com/bruhautomation/ESP-MQTT-JSON-Multisensor) [ESPHome Multisensor](https://esphome.io/cookbook/bruh.html)

[VeraPlus Controller](https://getvera.com/controllers/veraplus/) (But I would have gone with the [Aeotec Z-Wave Stick](https://aeotec.com/z-wave-usb-stick) if I had known about it beforehand)

[Schlage Deadbolt](https://www.amazon.com/Schlage-Connect-Touchscreen-Deadbolt-SmartThings/dp/B00AGK9KOG/ref=asc_df_B00AGK9KOG/?tag=hyprod-20&linkCode=df0&hvadid=193154321880&hvpos=1o1&hvnetw=g&hvrand=13739949994731450318&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9015260&hvtargid=pla-312822707918&psc=1)

[Ecobee3 Thermostat](https://www.amazon.com/ecobee-EB-STATE3LT-02-ecobee3-Smart-Thermostat/dp/B06W56TBLN/ref=sr_1_1_sspa?s=hi&ie=UTF8&qid=1546328941&sr=1-1-spons&keywords=ecobee&psc=1)

[Z-Wave Window/Door Sensors](https://www.amazon.com/HAOZEE-Detector-Battery-Operated-Automation/dp/B07BK65MLH/ref=sr_1_1_sspa?s=hi&ie=UTF8&qid=1546328968&sr=1-1-spons&keywords=zwave+door+sensor&psc=1)

[Dr. Zzs' Magnetic Door Locks](http://drzzs.com/diy-smart-door-locks/)

[Lifx Bulbs](https://www.amazon.com/LIFX-Adjustable-Multicolor-Dimmable-Assistant/dp/B01KY02MS8/ref=asc_df_B01KY02MS8/?tag=hyprod-20&linkCode=df0&hvadid=194952682001&hvpos=1o1&hvnetw=g&hvrand=12406325626617130681&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9015260&hvtargid=pla-393821797625&psc=1)

[Smart Life Light Switches](https://www.amazon.com/Compatible-Required-Switches-Anywhere-Schedule/dp/B07DXDP662/ref=sr_1_2_sspa?s=hi&ie=UTF8&qid=1546329077&sr=1-2-spons&keywords=smart+life+switch&psc=1) (Flashed with tuya convert with ESPHome installed)

[Logitech Harmony Hub](https://www.amazon.com/Logitech-915-000238-Smartphone-Entertainment-Refurbished/dp/B012EHUK74/ref=sr_1_15_sspa?s=hi&ie=UTF8&qid=1546329101&sr=1-15-spons&keywords=harmony+hub&psc=1)

[Iphone 8](https://www.amazon.com/Apple-iPhone-64GB-Silver-Prepaid/dp/B078HVJB69/ref=sr_1_3_sspa?s=hi&ie=UTF8&qid=1546329145&sr=1-3-spons&keywords=iphone&psc=1)

[Amazon Fire HD8 Tablet](https://www.amazon.com/All-New-Fire-Tablet-Display-Black/dp/B0794RHPZD/ref=sr_1_13_sspa?s=wireless&ie=UTF8&qid=1546329177&sr=1-13-spons&keywords=fire+hd+8&psc=1)

[Google Chromecast Audio](https://store.google.com/us/product/chromecast_audio?hl=en-US)

[Amazon Fire TV](https://www.amazon.com/gp/product/B079QHML21/ref=s9_acsd_al_bw_c_x_2_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-1&pf_rd_r=SCKF5A5RM85AQJWQCWSX&pf_rd_r=SCKF5A5RM85AQJWQCWSX&pf_rd_t=101&pf_rd_p=fb245453-48ed-4dd4-b933-6d164ab15aec&pf_rd_p=fb245453-48ed-4dd4-b933-6d164ab15aec&pf_rd_i=8521791011)

[Amazon Fire Stick](https://www.amazon.com/gp/product/B079QHML21/ref=s9_acsd_al_bw_c_x_2_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-1&pf_rd_r=SCKF5A5RM85AQJWQCWSX&pf_rd_r=SCKF5A5RM85AQJWQCWSX&pf_rd_t=101&pf_rd_p=fb245453-48ed-4dd4-b933-6d164ab15aec&pf_rd_p=fb245453-48ed-4dd4-b933-6d164ab15aec&pf_rd_i=8521791011)

[Nvidia Shield](https://www.amazon.com/NVIDIA-SHIELD-Gaming-Streaming-GeForce/dp/B01N1NT9Y6)

[Wifi Power Strip](https://www.amazon.com/WiFi-Smart-Power-Strip-LeFun/dp/B07DFFBKD9/ref=sr_1_6?s=electronics&ie=UTF8&qid=1546329303&sr=1-6&keywords=wifi+power+strip)

[Motion Detector](https://www.amazon.com/dp/B01MQXXG0I/ref=sxts_kp_bs_tr_lp_1?pf_rd_p=8778bc68-27e7-403f-8460-de48b6e788fb&pd_rd_wg=rSVY0&pf_rd_r=KJH0QC7QX6NXACW82VQ0&pd_rd_i=B01MQXXG0I&pd_rd_w=IA4qx&pd_rd_r=a1feaf5f-8b3e-4ed1-9da5-aa4170c294e8&ie=UTF8&qid=1546329387&sr=1)

[Wink Relay](https://www.amazon.com/Wink-PRLAY-WH01-Relay-Wall-Mounted-Controller/dp/B01MRD8UVA/ref=sr_1_cc_1?s=aps&ie=UTF8&qid=1546329437&sr=1-1-catcorr&keywords=wink+relay)

[Siren](https://www.amazon.com/Dome-Automation-DMS01-Wireless-Battery-Powered/dp/B01M1NLPKZ/ref=sr_1_4?s=electronics&ie=UTF8&qid=1546329408&sr=1-4&keywords=zwave+siren)

[Magic Home Wifi LED Controller](https://www.amazon.com/SUPERNIGHT-Wireless-Controller-Working-Compatible/dp/B01JS0KEBW/ref=sr_1_8?s=hi&ie=UTF8&qid=1546329480&sr=1-8&keywords=magic+home+wifi+led+controller) (Flashed with ESPHome installed)

<a name="software"></a>Software
======

**Unraid Dockers**
* [Home Assistant](https://www.home-assistant.io/)
* [Node Red](https://nodered.org/)
* [ESPHome](https://esphome.io/)
* [HASS Configurator](https://www.home-assistant.io/addons/configurator/)
* [Emby Server](https://emby.media/)
* [Nextcloud](https://nextcloud.com/)
* [My Media for Alexa](https://www.mymediaalexa.com/)
* [Pihole](https://pi-hole.net/)
* [Dasher](https://hub.docker.com/r/clemenstyp/dasher-docker/)
* [HA-Dockermon](https://github.com/philhawthorne/ha-dockermon)
* [MQTT](https://hub.docker.com/r/spants/mqtt/)
* [LetsEncrypt, NGINX, Wordpress](https://hub.docker.com/r/linuxserver/letsencrypt/)
* [MariaDB](https://hub.docker.com/_/mariadb/)
* [OpenVPN AS](https://hub.docker.com/r/linuxserver/openvpn-as/)
* [DelugeVPN](https://hub.docker.com/r/binhex/arch-delugevpn/)
* [Jackett](https://hub.docker.com/r/binhex/arch-jackett/dockerfile)
* [Sonarr](https://hub.docker.com/r/binhex/arch-sonarr/dockerfile)
* [Radarr](https://hub.docker.com/r/binhex/arch-radarr/dockerfile/)

<a name="automations"></a>Automations
======

<a name="screenshots"></a>Screenshots
======
![Home][home]

[home]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/ha_home.jpg "Home"

![Info][info]

[info]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/ha_info.jpg "Info"

![Security][security]

[security]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/ha_security.jpg "Security"

![Media][media]

[media]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/ha_media.jpg "Media"

![Notifications][notifications]

[notifications]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/ha_notifications.jpg "Notifications"

![Printer][printer]

[printer]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/ha_printer.jpg "Printer"

![1st Floor][1stfloor]

[1stfloor]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/floorplan_1st_floor.jpg "1st Floor"

![2nd Floor][2ndfloor]

[2ndfloor]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/floorplan_2nd_floor.jpg "2nd Floor"

![Remote][remote]

[remote]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/floorplan_remote.jpg "Remote"

![Settings][settings]

[settings]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/floorplan_settings.jpg "Settings"

![Alarm Clock][alarmclock]

[alarmclock]: https://github.com/3vasi0n89/home-assistant-config-files/blob/master/www/images/floorplan_alarm_clock.jpg "Alarm Clock"

<a name="future_projects"></a>Future Projects
======

- [ ] [HA Switchplate](https://community.home-assistant.io/t/ha-switchplate-diy-lcd-touchscreen-wall-switch-replacement/25464)
- [ ] Set up some new Lovelace themes
- [ ] Finish floorplan for Fire Tablets
- [ ] Set up a documented testing playground
- [ ] Motorized curtains / blinds
- [ ] Switch Vera Hub over to the SmartThings Hub

<a name="inspiration"></a>Inspiration
======

For more inspiration and ideas check out these Githubs and Youtube channels...

@CCOSTAN [Github](https://github.com/CCOSTAN/Home-AssistantConfig) [Youtube](https://youtube.com/vCloudInfo)

@Drzzs [Github](https://github.com/Snipercaine/DrZzs-HA) [Youtube](https://www.youtube.com/drzzs)
