(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{427:function(a,s,t){"use strict";t.r(s);var n=t(12),r=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"资源配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源配置"}},[a._v("#")]),a._v(" 资源配置")]),a._v(" "),s("p",[a._v("用于配置 Flink SQL任务提交yarn集群时，申请的资源大小。")]),a._v(" "),s("ol",[s("li",[a._v("登录赤兔实时计算平台。")]),a._v(" "),s("li",[a._v("在左侧导航栏，单击"),s("strong",[a._v("实时开发")]),a._v("-"),s("strong",[a._v("作业开发")]),a._v("。")]),a._v(" "),s("li",[a._v("双击目标作业名称。")]),a._v(" "),s("li",[a._v("在页面右侧，单击"),s("strong",[a._v("资源配置")]),a._v("。")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://bg-prd-cos-bdp-1257092428.cos.ap-guangzhou.myqcloud.com/rdp-metadata/portal/2023/2/3/141677825923372.png",alt:"img"}})]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("taskmanager个数  =  任务算子最大并行度  /  taskmanager.numberOfTaskSlots\n\n申请总内存 = taskmanager个数  *  taskmanager memory  +  jobmanager memory\n\n申请总 cpu vcores = taskmanager个数  *  taskmanager.numberOfTaskSlots  +  1\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("举例：")]),a._v(" "),s("p",[a._v("并行度 = 10")]),a._v(" "),s("p",[a._v("taskmanager.numberOfTaskSlots = 5")]),a._v(" "),s("p",[a._v("taskmanager memory = 2G")]),a._v(" "),s("p",[a._v("jobmanager memory = 2G")]),a._v(" "),s("p",[a._v("flink 任务对应的 taskmanager个数 就是2个，申请总内存就是 6G，申请总 cpu vcores 就是11")])])}),[],!1,null,null,null);s.default=r.exports}}]);