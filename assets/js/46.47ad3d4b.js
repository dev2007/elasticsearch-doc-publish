(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{326:function(e,a,_){"use strict";_.r(a);var v=_(13),t=Object(v.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"别名存在-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#别名存在-api"}},[e._v("#")]),e._v(" 别名存在 API")]),e._v(" "),a("p",[e._v("检查一个"),a("a",{attrs:{href:"/aliases/aliases"}},[e._v("别名")]),e._v("是否存在。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("HEAD _alias/my-alias\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求"}},[e._v("#")]),e._v(" 请求")]),e._v(" "),a("p",[a("code",[e._v("HEAD _alias/<alias>")])]),e._v(" "),a("p",[a("code",[e._v("HEAD <target>/_alias/<alias>")])]),e._v(" "),a("h2",{attrs:{id:"前置条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[e._v("#")]),e._v(" 前置条件")]),e._v(" "),a("ul",[a("li",[e._v("如果 Elasticsearch 安全特性启用，你必须对索引有 "),a("code",[e._v("view_index_metadata")]),e._v(" 或 "),a("code",[e._v("manage")]),e._v(" "),a("a",{attrs:{href:"/secure_the_elastic_statck/user_authorization/security_privileges#%E7%B4%A2%E5%BC%95%E6%9D%83%E9%99%90"}},[e._v("索引权限")]),e._v("。如果你指定一个目标，你必须对目标也有 "),a("code",[e._v("view_index_metadata")]),e._v(" 或 "),a("code",[e._v("manage")]),e._v(" 索引权限。")])]),e._v(" "),a("h2",{attrs:{id:"路径参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径参数"}},[e._v("#")]),e._v(" 路径参数")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("<alias>")])]),e._v(" "),a("p",[e._v("（可选，字符串）以逗号分隔的待检查的别名列表。支持通配符（*）。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("<target>")])]),e._v(" "),a("p",[e._v("（可选，字符串）用于限制请求的，逗号分隔的数据流或索引。")])])]),e._v(" "),a("h2",{attrs:{id:"查询参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询参数"}},[e._v("#")]),e._v(" 查询参数")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("expand_wildcards")])]),e._v(" "),a("p",[e._v("（可选，字符串）通配符表达式可以匹配的索引类型。如果请求可以数据流为目标，则此参数确定通配符表达式是否匹配隐藏的数据流。支持逗号分隔的值，如 "),a("code",[e._v("open,hidden")]),e._v("。有效的值有：")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("all")]),e._v("\n匹配任何数据流或索引，包括 "),a("a",{attrs:{href:"/rest_apis/api_convention/multi_target_syntax#%E9%9A%90%E8%97%8F%E6%95%B0%E6%8D%AE%E6%B5%81%E5%92%8C%E7%B4%A2%E5%BC%95"}},[e._v("hidden")]),e._v("（隐藏的）。")]),e._v(" "),a("li",[a("code",[e._v("open")]),e._v("\n匹配 open（开启）、非隐藏的索引。也匹配任何非隐藏的数据流。")]),e._v(" "),a("li",[a("code",[e._v("closed")]),e._v("\n匹配 closed（关闭）、非隐藏的索引。也匹配任何非隐藏的数据流。数据流不能关闭。")]),e._v(" "),a("li",[a("code",[e._v("hidden")]),e._v("\n匹配隐藏数据流和隐藏索引。必须与 "),a("code",[e._v("open")]),e._v("、"),a("code",[e._v("closed")]),e._v(" 或一起使用。")]),e._v(" "),a("li",[a("code",[e._v("none")]),e._v("\n不接受通配符表达式。")])]),e._v(" "),a("p",[e._v("默认为 "),a("code",[e._v("all")]),e._v("。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("ignore_unavailable")])]),e._v(" "),a("p",[e._v("（可选，布尔值）如果为 "),a("code",[e._v("true")]),e._v("，丢失的或关闭的索引不包含在响应中。默认为 "),a("code",[e._v("false")]),e._v("。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("local")])]),e._v(" "),a("p",[e._v("（可选，布尔值）如果为 "),a("code",[e._v("true")]),e._v("，请求只从本地节点获取信息。默认为 "),a("code",[e._v("false")]),e._v("，意味着信息从主节点获取。")])])]),e._v(" "),a("h2",{attrs:{id:"响应码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应码"}},[e._v("#")]),e._v(" 响应码")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("200")])]),e._v(" "),a("p",[e._v("所有指定的别名都存在。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("404")])]),e._v(" "),a("p",[e._v("一个或多个指定的别名不存在。")])])]),e._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-alias-exists.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=t.exports}}]);