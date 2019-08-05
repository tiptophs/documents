(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{378:function(t,s,e){"use strict";e.r(s);var a=e(28),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[t._v("Systemd 设计的目标是，为系统的启动和管理提供一整套的完整解决方案。")]),t._v(" "),e("p",[t._v("根据 Linux 惯例，字母 "),e("code",[t._v("d")]),t._v(" 是守护进程（daemon）的缩写。Systemd 这个名字的含义，就是它要守护整个系统。")]),t._v(" "),e("p",[t._v("Systemd 的优点是功能强大，使用方便，缺点是体系庞大，非常复杂。事实上，现在还有很多人反对使用 Systemd，理由就是它过于复杂，与操作系统的其他部分强耦合，违反 ”keep simple，keep stupid“ 的 Unix 哲学。")]),t._v(" "),e("blockquote",[e("p",[t._v("原文实在是太详细了，实在没必要重复整理。")])]),t._v(" "),e("h2",{attrs:{id:"实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实战","aria-hidden":"true"}},[t._v("#")]),t._v(" 实战")]),t._v(" "),e("p",[t._v("模拟一个操作基本的操作流程：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有些软件支持 Systemd，安装时，会自动在 `/usr/lib/systemd/system` 目录添加一个配置文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后就可以让其开机自启了")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),t._v(" httpd\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上面的命令相当于在 `/etc/systemd/system` 目录添加一个符号链接，指向 `/usr/lib/systemd/system` 里面的 `httpd.service` 文件。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是因为开机时，Systemd 只执行 `/etc/systemd/system` 目录里面的配置文件。这也意味着，如果把修改后的配置文件放在该目录，就可以达到覆盖原始配置的效果。")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置开机启动以后，软件并不会立即启动，必须等到下一次开机。如果想现在就运行该软件，那么要执行 `systemctl start` 命令。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start httpd\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行上面的命令以后，有可能启动失败，因此要用systemctl status命令查看一下该服务的状态。")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 终止正在运行的服务，需要执行 `systemctl stop` 命令。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl stop httpd.service\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 有时候，该命令可能没有响应，服务停不下来。这时候就不得不"杀进程"了，向正在运行的进程发出kill信号。')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" httpd.service\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此外，重启服务要执行systemctl restart命令。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart httpd.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一个服务怎么启动，完全由它的配置文件决定。")]),t._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" sshd.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改配置文件以后，需要重新加载配置文件，然后重新启动相关服务。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新加载配置文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启相关服务")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart foobar\n")])])]),e("h2",{attrs:{id:"系统管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 系统管理")]),t._v(" "),e("p",[t._v("Systemd 并不是一个命令，而是一组命令，涉及系统管理的方方面面。")]),t._v(" "),e("h3",{attrs:{id:"_1-systemctl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-systemctl","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. systemctl")]),t._v(" "),e("p",[e("code",[t._v("systemctl")]),t._v(" 是 Systemd 的主命令，用于管理系统。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启系统")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("reboot")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭系统，切断电源")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl poweroff\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CPU停止工作")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl halt\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暂停系统")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("suspend")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 让系统进入冬眠状态")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl hibernate\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 让西荣进入交互式休眠状态")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl hybrid-sleep\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动进入救援状态")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl rescue\n")])])]),e("h3",{attrs:{id:"_2-systemd-analyze"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-systemd-analyze","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. systemd-analyze")]),t._v(" "),e("p",[e("code",[t._v("systemd-analyze")]),t._v(" 命令用于查看启动耗时。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看启动耗时")]),t._v("\nsystemd-analyze                                                                                       \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看每个服务的启动耗时")]),t._v("\nsystemd-analyze blame\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示瀑布状的启动过程流")]),t._v("\nsystemd-analyze critical-chain\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示指定服务的启动流")]),t._v("\nsystemd-analyze critical-chain atd.service\n")])])]),e("h3",{attrs:{id:"_3-hostnamectl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-hostnamectl","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. hostnamectl")]),t._v(" "),e("p",[e("code",[t._v("hostnamectl")]),t._v("命令用于查看当前主机的信息。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前主机的信息")]),t._v("\nhostnamectl\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置主机名。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" hostnamectl set-hostname rhel7\n")])])]),e("h3",{attrs:{id:"_4-localectl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-localectl","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. localectl")]),t._v(" "),e("p",[e("code",[t._v("localectl")]),t._v("命令用于查看本地化设置。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地化设置")]),t._v("\nlocalectl\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置本地化参数。")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" localectl set-locale LANG"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("en_GB.utf8\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" localectl set-keymap en_GB\n")])])]),e("h3",{attrs:{id:"_5-timedatectl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-timedatectl","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. timedatectl")]),t._v(" "),e("p",[e("code",[t._v("timedatectl")]),t._v("命令用于查看当前时区设置。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前时区设置")]),t._v("\ntimedatectl\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示所有可用的时区")]),t._v("\ntimedatectl list-timezones                                                                                   \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置当前时区")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" timedatectl set-timezone America/New_York\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" timedatectl set-time YYYY-MM-DD\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" timedatectl set-time HH:MM:SS\n")])])]),e("h3",{attrs:{id:"_6-loginctl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-loginctl","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. loginctl")]),t._v(" "),e("p",[e("code",[t._v("loginctl")]),t._v("命令用于查看当前登录的用户。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出当前session")]),t._v("\nloginctl list-sessions\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出当前登录用户")]),t._v("\nloginctl list-users\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出显示指定用户的信息")]),t._v("\nloginctl show-user ruanyf\n")])])]),e("h2",{attrs:{id:"unit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unit","aria-hidden":"true"}},[t._v("#")]),t._v(" Unit")]),t._v(" "),e("p",[t._v("Systemd 可以管理所有系统资源。不同的资源统称为 Unit（单位）。")]),t._v(" "),e("p",[t._v("Unit 一共分成12种。")]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("Service unit：系统服务")]),t._v(" "),e("li",[t._v("Target unit：多个 Unit 构成的一个组")]),t._v(" "),e("li",[t._v("Device Unit：硬件设备")]),t._v(" "),e("li",[t._v("Mount Unit：文件系统的挂载点")]),t._v(" "),e("li",[t._v("Automount Unit：自动挂载点")]),t._v(" "),e("li",[t._v("Path Unit：文件或路径")]),t._v(" "),e("li",[t._v("Scope Unit：不是由 Systemd 启动的外部进程")]),t._v(" "),e("li",[t._v("Slice Unit：进程组")]),t._v(" "),e("li",[t._v("Snapshot Unit：Systemd 快照，可以切回某个快照")]),t._v(" "),e("li",[t._v("Socket Unit：进程间通信的 socket")]),t._v(" "),e("li",[t._v("Swap Unit：swap 文件")]),t._v(" "),e("li",[t._v("Timer Unit：定时器")])])]),t._v(" "),e("p",[e("code",[t._v("systemctl list-units")]),t._v(" 命令可以查看当前系统的所有 Unit 。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出正在运行的 Unit")]),t._v("\nsystemctl list-units\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有Unit，包括没有找到配置文件的或者启动失败的")]),t._v("\nsystemctl list-units --all\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有没有运行的 Unit")]),t._v("\nsystemctl list-units --all --state"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("inactive\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有加载失败的 Unit")]),t._v("\nsystemctl list-units --failed\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有正在运行的、类型为 service 的 Unit")]),t._v("\nsystemctl list-units --type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("service\n")])])]),e("h3",{attrs:{id:"_1-unit-的状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-unit-的状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. Unit 的状态")]),t._v(" "),e("p",[e("code",[t._v("systemctl status")]),t._v(" 命令用于查看系统状态和单个 Unit 的状态。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示系统状态")]),t._v("\nsystemctl status\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示单个 Unit 的状态")]),t._v("\nsysystemctl status bluetooth.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示远程主机的某个 Unit 的状态")]),t._v("\nsystemctl -H root@rhel7.example.com status httpd.service\n")])])]),e("p",[t._v("除了 "),e("code",[t._v("status")]),t._v(" 命令，"),e("code",[t._v("systemctl")]),t._v(" 还提供了三个查询状态的简单方法，主要供脚本内部的判断语句使用。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个 Unit 是否正在运行")]),t._v("\nsystemctl is-active application.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个 Unit 是否处于启动失败状态")]),t._v("\nsystemctl is-failed application.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个 Unit 服务是否建立了启动链接")]),t._v("\nsystemctl is-enabled application.service\n")])])]),e("h3",{attrs:{id:"_2-unit-管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-unit-管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Unit 管理")]),t._v(" "),e("p",[e("strong",[t._v("对于用户来说，最常用的是下面这些命令，用于启动和停止 Unit（主要是 service）。")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 立即启动一个服务")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start apache.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 立即停止一个服务")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl stop apache.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启一个服务")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart apache.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 杀死一个服务的所有子进程")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" apache.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新加载一个服务的配置文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl reload apache.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重载所有修改过的配置文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个 Unit 的所有底层参数")]),t._v("\nsystemctl show httpd.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示某个 Unit 的指定属性的值")]),t._v("\nsystemctl show -p CPUShares httpd.service\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置某个 Unit 的指定属性")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl set-property httpd.service CPUShares"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("500\n")])])]),e("h3",{attrs:{id:"_3-依赖关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-依赖关系","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 依赖关系")]),t._v(" "),e("p",[t._v("Unit 之间存在依赖关系：A 依赖于 B，就意味着 Systemd 在启动 A 的时候，同时会去启动 B。")]),t._v(" "),e("p",[e("code",[t._v("systemctl list-dependencies")]),t._v(" 命令列出一个 Unit 的所有依赖。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("systemctl list-dependencies nginx.service\n")])])]),e("p",[t._v("上面命令的输出结果之中，有些依赖是 Target 类型（详见下文），默认不会展开显示。如果要展开 Target，就需要使用 "),e("code",[t._v("--all")]),t._v(" 参数。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("systemctl list-dependencies --all nginx.service\n")])])]),e("h2",{attrs:{id:"unit-的配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unit-的配置文件","aria-hidden":"true"}},[t._v("#")]),t._v(" Unit 的配置文件")]),t._v(" "),e("p",[t._v("每一个 Unit 都有一个配置文件，告诉 Systemd 怎么启动这个 Unit 。")]),t._v(" "),e("p",[t._v("Systemd 默认从目录 "),e("code",[t._v("/etc/systemd/system/")]),t._v(" 读取配置文件。但是，里面存放的大部分文件都是符号链接，指向目录 "),e("code",[t._v("/usr/lib/systemd/system/")]),t._v("，真正的配置文件存放在那个目录。")]),t._v(" "),e("p",[e("code",[t._v("systemctl enable")]),t._v(" 命令用于在上面两个目录之间，建立符号链接关系。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),t._v(" clamd@scan.service\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等同于")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/usr/lib/systemd/system/clamd@scan.service'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/etc/systemd/system/multi-user.target.wants/clamd@scan.service'")]),t._v("\n")])])]),e("p",[t._v("如果配置文件里面设置了开机启动，"),e("code",[t._v("systemctl enable")]),t._v(" 命令相当于激活开机启动。")]),t._v(" "),e("p",[t._v("与之对应的，"),e("code",[t._v("systemctl disable")]),t._v(" 命令用于在两个目录之间，撤销符号链接关系，相当于撤销开机启动。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl disable clamd@scan.service\n")])])]),e("p",[t._v("配置文件的后缀名，就是该 Unit 的种类，比如 "),e("code",[t._v("sshd.socket")]),t._v(" 。如果省略，Systemd 默认后缀名为 "),e("code",[t._v(".service")]),t._v("，所以 "),e("code",[t._v("sshd")]),t._v(" 会被理解成 "),e("code",[t._v("sshd.service")]),t._v(" 。")]),t._v(" "),e("h3",{attrs:{id:"_1-配置文件的状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置文件的状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 配置文件的状态")]),t._v(" "),e("p",[e("code",[t._v("systemctl list-unit-files")]),t._v(" 命令用于列出所有配置文件。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有配置文件")]),t._v("\nsystemctl list-unit-files\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出指定类型的配置文件")]),t._v("\nsystemctl list-unit-files --type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("service\n")])])]),e("p",[t._v("这个命令会输出一个列表。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("systemctl list-unit-files\n\nUNIT FILE              STATE\nchronyd.service        enabled\nclamd@.service         static\nclamd@scan.service     disabled\n")])])]),e("p",[t._v("这个列表显示每个配置文件的状态，一共有四种。")]),t._v(" "),e("ul",[e("li",[t._v("enabled：已建立启动链接")]),t._v(" "),e("li",[t._v("disabled：没建立启动链接")]),t._v(" "),e("li",[t._v("static：该配置文件没有 "),e("code",[t._v("[Install]")]),t._v(" 部分（无法执行），只能作为其他配置文件的依赖")]),t._v(" "),e("li",[t._v("masked：该配置文件被禁止建立启动链接")])]),t._v(" "),e("p",[t._v("注意，从配置文件的状态无法看出，该 Unit 是否正在运行。这必须执行前面提到的 "),e("code",[t._v("systemctl status")]),t._v(" 命令。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("systemctl status bluetooth.service\n")])])]),e("p",[t._v("一旦修改配置文件，就要让 SystemD 重新加载配置文件，然后重新启动，否则修改不会生效。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart httpd.service\n")])])]),e("h3",{attrs:{id:"_2-配置文件的格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置文件的格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 配置文件的格式")]),t._v(" "),e("p",[t._v("配置文件就是普通的文本文件，可以用文本编辑器打开。")]),t._v(" "),e("p",[e("code",[t._v("systemctl cat")]),t._v(" 命令可以查看配置文件的内容。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("systemctl "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" atd.service\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nDescription"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ATD daemon\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("forking\nExecStart"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/bin/atd\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nWantedBy"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target\n")])])]),e("p",[t._v("从上面的输出可以看到，配置文件分成几个区块。每个区块的第一行，是用方括号表示的区别名，比如 "),e("code",[t._v("[Unit]")]),t._v(" 。注意，配置文件的区块名和字段名，都是大小写敏感的。")]),t._v(" "),e("p",[t._v("每个区块内部是一些等号连接的键值对。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Section"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nDirective1"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("value\nDirective2"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("value\n")])])]),e("p",[t._v("注意，键值对的等号两侧不能有空格。")]),t._v(" "),e("h3",{attrs:{id:"_3-配置文件的区块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置文件的区块","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 配置文件的区块")]),t._v(" "),e("p",[e("code",[t._v("[Unit]")]),t._v(" 区块通常是配置文件的第一个区块，用来定义 Unit 的元数据，以及配置与其他 Unit 的关系。它的主要字段如下：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Description")]),t._v("：简短描述")]),t._v(" "),e("li",[e("code",[t._v("Documentation")]),t._v("：文档地址")]),t._v(" "),e("li",[e("code",[t._v("Requires")]),t._v("：当前 Unit 依赖的其他 Unit，如果它们没有运行，当前 Unit 会启动失败")]),t._v(" "),e("li",[e("code",[t._v("Wants")]),t._v("：与当前 Unit 配合的其他 Unit，如果它们没有运行，当前 Unit 不会启动失败")]),t._v(" "),e("li",[e("code",[t._v("BindsTo")]),t._v("：与"),e("code",[t._v("Requires")]),t._v("类似，它指定的 Unit 如果退出，会导致当前 Unit 停止运行")]),t._v(" "),e("li",[e("code",[t._v("Before")]),t._v("：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之后启动")]),t._v(" "),e("li",[e("code",[t._v("After")]),t._v("：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之前启动")]),t._v(" "),e("li",[e("code",[t._v("Conflicts")]),t._v("：这里指定的 Unit 不能与当前 Unit 同时运行")]),t._v(" "),e("li",[e("code",[t._v("Condition...")]),t._v("：当前 Unit 运行必须满足的条件，否则不会运行")]),t._v(" "),e("li",[e("code",[t._v("Assert...")]),t._v("：当前 Unit 运行必须满足的条件，否则会报启动失败")])]),t._v(" "),e("p",[e("code",[t._v("[Install]")]),t._v(" 通常是配置文件的最后一个区块，用来定义如何启动，以及是否开机启动。它的主要字段如下：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("WantedBy")]),t._v("：它的值是一个或多个 Target，当前 Unit 激活时（enable）符号链接会放入"),e("code",[t._v("/etc/systemd/system")]),t._v("目录下面以 Target 名 + "),e("code",[t._v(".wants")]),t._v("后缀构成的子目录中")]),t._v(" "),e("li",[e("code",[t._v("RequiredBy")]),t._v("：它的值是一个或多个 Target，当前 Unit 激活时，符号链接会放入"),e("code",[t._v("/etc/systemd/system")]),t._v("目录下面以 Target 名 + "),e("code",[t._v(".required")]),t._v("后缀构成的子目录中")]),t._v(" "),e("li",[e("code",[t._v("Alias")]),t._v("：当前 Unit 可用于启动的别名")]),t._v(" "),e("li",[e("code",[t._v("Also")]),t._v("：当前 Unit 激活（enable）时，会被同时激活的其他 Unit")])]),t._v(" "),e("p",[e("code",[t._v("[Service]")]),t._v(" 区块用来 Service 的配置，只有 Service 类型的 Unit 才有这个区块。它的主要字段如下：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Type")]),t._v("：定义启动时的进程行为。它有以下几种值。")]),t._v(" "),e("li",[e("code",[t._v("Type=simple")]),t._v("：默认值，执行"),e("code",[t._v("ExecStart")]),t._v("指定的命令，启动主进程")]),t._v(" "),e("li",[e("code",[t._v("Type=forking")]),t._v("：以 fork 方式从父进程创建子进程，创建后父进程会立即退出")]),t._v(" "),e("li",[e("code",[t._v("Type=oneshot")]),t._v("：一次性进程，Systemd 会等当前服务退出，再继续往下执行")]),t._v(" "),e("li",[e("code",[t._v("Type=dbus")]),t._v("：当前服务通过D-Bus启动")]),t._v(" "),e("li",[e("code",[t._v("Type=notify")]),t._v("：当前服务启动完毕，会通知"),e("code",[t._v("Systemd")]),t._v("，再继续往下执行")]),t._v(" "),e("li",[e("code",[t._v("Type=idle")]),t._v("：若有其他任务执行完毕，当前服务才会运行")]),t._v(" "),e("li",[e("code",[t._v("ExecStart")]),t._v("：启动当前服务的命令")]),t._v(" "),e("li",[e("code",[t._v("ExecStartPre")]),t._v("：启动当前服务之前执行的命令")]),t._v(" "),e("li",[e("code",[t._v("ExecStartPost")]),t._v("：启动当前服务之后执行的命令")]),t._v(" "),e("li",[e("code",[t._v("ExecReload")]),t._v("：重启当前服务时执行的命令")]),t._v(" "),e("li",[e("code",[t._v("ExecStop")]),t._v("：停止当前服务时执行的命令")]),t._v(" "),e("li",[e("code",[t._v("ExecStopPost")]),t._v("：停止当其服务之后执行的命令")]),t._v(" "),e("li",[e("code",[t._v("RestartSec")]),t._v("：自动重启当前服务间隔的秒数")]),t._v(" "),e("li",[e("code",[t._v("Restart")]),t._v("：定义何种情况 Systemd 会自动重启当前服务，可能的值包括"),e("code",[t._v("always")]),t._v("（总是重启）、"),e("code",[t._v("on-success")]),t._v("、"),e("code",[t._v("on-failure")]),t._v("、"),e("code",[t._v("on-abnormal")]),t._v("、"),e("code",[t._v("on-abort")]),t._v("、"),e("code",[t._v("on-watchdog")])]),t._v(" "),e("li",[e("code",[t._v("TimeoutSec")]),t._v("：定义 Systemd 停止当前服务之前等待的秒数")]),t._v(" "),e("li",[e("code",[t._v("Environment")]),t._v("：指定环境变量")])]),t._v(" "),e("p",[t._v("Unit 配置文件的完整字段清单，请参考"),e("a",{attrs:{href:"https://www.freedesktop.org/software/systemd/man/systemd.unit.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#target","aria-hidden":"true"}},[t._v("#")]),t._v(" Target")]),t._v(" "),e("p",[t._v("启动计算机的时候，需要启动大量的 Unit。如果每一次启动，都要一一写明本次启动需要哪些 Unit，显然非常不方便。Systemd 的解决方案就是 Target。")]),t._v(" "),e("p",[t._v('简单说，Target 就是一个 Unit 组，包含许多相关的 Unit 。启动某个 Target 的时候，Systemd 就会启动里面所有的 Unit。从这个意义上说，Target 这个概念类似于"状态点"，启动某个 Target 就好比启动到某种状态。')]),t._v(" "),e("p",[t._v("传统的 "),e("code",[t._v("init")]),t._v(" 启动模式里面，有 RunLevel 的概念，跟 Target 的作用很类似。不同的是，RunLevel 是互斥的，不可能多个 RunLevel 同时启动，但是多个 Target 可以同时启动。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前系统的所有 Target")]),t._v("\nsystemctl list-unit-files --type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("target\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看一个 Target 包含的所有 Unit")]),t._v("\nsystemctl list-dependencies multi-user.target\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看启动时的默认 Target")]),t._v("\nsystemctl get-default\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置启动时的默认 Target")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl set-default multi-user.target\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换 Target 时，默认不关闭前一个 Target 启动的进程，")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# systemctl isolate 命令改变这种行为，")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭前一个 Target 里面所有不属于后一个 Target 的进程")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl isolate multi-user.target\n")])])]),e("p",[t._v("Target 与 传统 RunLevel 的对应关系如下。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("Traditional runlevel      New target name     Symbolically linked to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nRunlevel 0           "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    runlevel0.target -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" poweroff.target\nRunlevel 1           "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    runlevel1.target -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" rescue.target\nRunlevel 2           "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    runlevel2.target -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" multi-user.target\nRunlevel 3           "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    runlevel3.target -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" multi-user.target\nRunlevel 4           "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    runlevel4.target -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" multi-user.target\nRunlevel 5           "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    runlevel5.target -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" graphical.target\nRunlevel 6           "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("    runlevel6.target -"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" reboot.target\n")])])]),e("p",[t._v("它与 "),e("code",[t._v("init")]),t._v(" 进程的主要差别如下。")]),t._v(" "),e("p",[e("strong",[t._v("（1）默认的 RunLevel")]),t._v("（在"),e("code",[t._v("/etc/inittab")]),t._v("文件设置）现在被默认的 Target 取代，位置是"),e("code",[t._v("/etc/systemd/system/default.target")]),t._v("，通常符号链接到"),e("code",[t._v("graphical.target")]),t._v("（图形界面）或者"),e("code",[t._v("multi-user.target")]),t._v("（多用户命令行）。")]),t._v(" "),e("p",[e("strong",[t._v("（2）启动脚本的位置")]),t._v("，以前是"),e("code",[t._v("/etc/init.d")]),t._v("目录，符号链接到不同的 RunLevel 目录 （比如"),e("code",[t._v("/etc/rc3.d")]),t._v("、"),e("code",[t._v("/etc/rc5.d")]),t._v("等），现在则存放在"),e("code",[t._v("/lib/systemd/system")]),t._v("和"),e("code",[t._v("/etc/systemd/system")]),t._v("目录。")]),t._v(" "),e("p",[e("strong",[t._v("（3）配置文件的位置")]),t._v("，以前"),e("code",[t._v("init")]),t._v("进程的配置文件是"),e("code",[t._v("/etc/inittab")]),t._v("，各种服务的配置文件存放在"),e("code",[t._v("/etc/sysconfig")]),t._v("目录。现在的配置文件主要存放在"),e("code",[t._v("/lib/systemd")]),t._v("目录，在"),e("code",[t._v("/etc/systemd")]),t._v("目录里面的修改可以覆盖原始设置。")]),t._v(" "),e("h2",{attrs:{id:"日志管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#日志管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 日志管理")]),t._v(" "),e("p",[t._v("Systemd 统一管理所有 Unit 的启动日志。带来的好处就是，可以只用"),e("code",[t._v("journalctl")]),t._v(" 一个命令，查看所有日志（内核日志和应用日志）。日志的配置文件是 "),e("code",[t._v("/etc/systemd/journald.conf")]),t._v(" 。")]),t._v(" "),e("p",[e("code",[t._v("journalctl")]),t._v(" 功能强大，用法非常多。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有日志（默认情况下 ，只保存本次启动的日志）")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看内核日志（不显示应用日志）")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -k\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看系统本次启动的日志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -b\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -b -0\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看上一次启动的日志（需更改设置）")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -b -1\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看指定时间的日志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl --since"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2012-10-30 18:17:16"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl --since "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20 min ago"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl --since yesterday\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl --since "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-01-10"')]),t._v(" --until "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2015-01-11 03:00"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl --since 09:00 --until "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1 hour ago"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示尾部的最新10行日志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示尾部指定行数的日志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -n 20\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实时滚动显示最新日志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -f\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看指定服务的日志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl /usr/lib/systemd/systemd\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看指定进程的日志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl _PID"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看某个路径的脚本的日志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl /usr/bin/bash\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看指定用户的日志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl _UID"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("33 --since today\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看某个 Unit 的日志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -u nginx.service\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -u nginx.service --since today\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实时滚动显示某个 Unit 的最新日志")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -u nginx.service -f\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并显示多个 Unit 的日志")]),t._v("\njournalctl -u nginx.service -u php-fpm.service --since today\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看指定优先级（及其以上级别）的日志，共有8级")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0: emerg")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1: alert")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2: crit")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3: err")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4: warning")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5: notice")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6: info")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 7: debug")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -p err -b\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志默认分页输出，--no-pager 改为正常的标准输出")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl --no-pager\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以 JSON 格式（单行）输出")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -b -u nginx.service -o json\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以 JSON 格式（多行）输出，可读性更好")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -b -u nginx.serviceqq\n -o json-pretty\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示日志占据的硬盘空间")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl --disk-usage\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定日志文件占据的最大空间")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl --vacuum-size"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1G\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定日志文件保存多久")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl --vacuum-time"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1years\n")])])]),e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文：Systemd 入门教程"),e("OutboundLink")],1)])])},[],!1,null,null,null);s.default=n.exports}}]);