(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{350:function(a,s,t){"use strict";t.r(s);var e=t(13),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"导入悬空索引-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导入悬空索引-api"}},[a._v("#")]),a._v(" 导入悬空索引 API")]),a._v(" "),s("p",[a._v("导入悬空索引。")]),a._v(" "),s("h2",{attrs:{id:"请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求"}},[a._v("#")]),a._v(" 请求")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("POST /_dangling/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("index-uuid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("?accept_data_loss"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"前置条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[a._v("#")]),a._v(" 前置条件")]),a._v(" "),s("ul",[s("li",[a._v("如果 Elasticsearch 安全特性启用，你必须有 "),s("code",[a._v("manage")]),a._v(" "),s("a",{attrs:{href:"/secure_the_elastic_statck/user_authorization/security_privileges#%E9%9B%86%E7%BE%A4%E6%9D%83%E9%99%90"}},[a._v("集群权限")]),a._v("来使用此 API。")])]),a._v(" "),s("h2",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[a._v("#")]),a._v(" 描述")]),a._v(" "),s("p",[a._v("如果 Elasticsearch 遇到当前集群状态中缺少的索引数据，则认为这些索引处于悬空状态。例如，如果在 Elasticsearch 节点脱机时删除多个 "),s("code",[a._v("cluster.index.tombstones.size")]),a._v(" 索引，则可能会发生这种情况。")]),a._v(" "),s("p",[a._v("通过引用其 UUID 将单个索引导入集群。使用"),s("a",{attrs:{href:"/rest_apis/index_apis/list_dangling_indices"}},[a._v("列出悬空索引 API")]),a._v(" 定位索引的 UUID。")]),a._v(" "),s("h2",{attrs:{id:"路径参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路径参数"}},[a._v("#")]),a._v(" 路径参数")]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("<index-uuid>")])]),a._v(" "),s("p",[a._v("（必需的，字符串）待导入索引的 UUID，你可以通过"),s("a",{attrs:{href:"/rest_apis/index_apis/list_dangling_indices"}},[a._v("列出悬空索引 API")]),a._v(" 找到它。")])])]),a._v(" "),s("h2",{attrs:{id:"查询参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询参数"}},[a._v("#")]),a._v(" 查询参数")]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("accept_data_loss")])]),a._v(" "),s("p",[a._v("（必需的，布尔值）此字段必须设置为 "),s("code",[a._v("true")]),a._v(" 才能导入悬空索引。由于 Elasticsearch 无法知道悬空索引数据来自何处，也无法确定哪些分片副本是新的，哪些是旧的，因此它无法保证导入的数据代表索引在集群中最后一次出现时的最新状态。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("master_timeout")])]),a._v(" "),s("p",[a._v("（可选，"),s("a",{attrs:{href:"/rest_apis/api_convention/common_options#%E6%97%B6%E9%97%B4%E5%8D%95%E4%BD%8D"}},[a._v("时间单位")]),a._v("）等待连接到主节点的时间。如果在超时过期前没有收到响应，则请求失败并返回错误。默认为 "),s("code",[a._v("30s")]),a._v("。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("timeout")])]),a._v(" "),s("p",[a._v("（可选，"),s("a",{attrs:{href:"/rest_apis/api_convention/common_options#%E6%97%B6%E9%97%B4%E5%8D%95%E4%BD%8D"}},[a._v("时间单位")]),a._v("）等待响应的时间。如果在超时过期之前没有收到响应，则请求失败并返回错误。默认为 "),s("code",[a._v("30s")]),a._v("。")])])]),a._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),s("p",[a._v("以下示例展示如何导入一个悬空索引：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("POST /_dangling/zmM4e0JtBkeUjiHD-MihPQ?accept_data_loss"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("API 返回以下响应：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"acknowledged"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/dangling-index-import.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("原文链接"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);