(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{332:function(e,a,s){"use strict";s.r(a);var _=s(13),t=Object(_.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"关闭索引-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭索引-api"}},[e._v("#")]),e._v(" 关闭索引 API")]),e._v(" "),a("p",[e._v("关闭一个索引。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("POST /my-index-000001/_close\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求"}},[e._v("#")]),e._v(" 请求")]),e._v(" "),a("p",[a("code",[e._v("POST /<index>/_close")])]),e._v(" "),a("h2",{attrs:{id:"前置条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[e._v("#")]),e._v(" 前置条件")]),e._v(" "),a("ul",[a("li",[e._v("如果 Elasticsearch 安全特性启用，你对目标索引必须有 "),a("code",[e._v("manage")]),e._v(" "),a("a",{attrs:{href:"/secure_the_elastic_statck/user_authorization/security_privileges#%E7%B4%A2%E5%BC%95%E6%9D%83%E9%99%90"}},[e._v("索引权限")]),e._v("。")])]),e._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[e._v("#")]),e._v(" 描述")]),e._v(" "),a("p",[e._v("你使用关闭索引 API 来关闭开启的索引。")]),e._v(" "),a("p",[e._v("关闭的索引被阻止进行读/写操作，并且不允许开启的索引允许的所有操作。在关闭的索引中不能索引文档或搜索文档。这允许关闭的索引不必维护索引或搜索文档的内部数据结构，以减少集群的开销。")]),e._v(" "),a("p",[e._v("当打开或关闭索引时，主节点负责重新启动索引分片以反映索引的新状态。分片将经过正常的恢复过程。打开的/关闭的索引数据由集群自动复制，以确保始终安全地保留足够的分片副本。")]),e._v(" "),a("p",[e._v("你可以打开和关闭多个索引。如果请求显示引用缺失的索引，会抛出错误。这个行为可以通用 "),a("code",[e._v("ignore_unavailable=true")]),e._v(" 参数禁用。")]),e._v(" "),a("p",[e._v("所有索引可以通过 "),a("code",[e._v("_all")]),e._v(" 作为索引名字或指定标识所有索引模式（如 "),a("code",[e._v("*")]),e._v("）来一次打开或关闭。")]),e._v(" "),a("p",[e._v("在配置文件中通过设置 "),a("code",[e._v("action.destructive_requires_name")]),e._v(" 标识为 "),a("code",[e._v("true")]),e._v("，可以禁用通过通配符或 "),a("code",[e._v("_all")]),e._v(" 来定义所有索引。这个设置也可以通过集群更新设置 API 来修改。")]),e._v(" "),a("p",[e._v("关闭的索引会消耗显著数量的硬盘空间，这在托管环境中可能会造成问题。通过集群设置 API 将 "),a("code",[e._v("cluster.indices.close.enable")]),e._v(" 设置为 "),a("code",[e._v("false")]),e._v("，可以禁用关闭索引。默认值为 "),a("code",[e._v("true")]),e._v("。")]),e._v(" "),a("p",[e._v("在7.12.0及更早版本中，无法关闭数据流上的当前写入索引。为了关闭当前写索引，数据流必须先被"),a("a",{attrs:{href:"/data_streams/data_streams#%E7%BF%BB%E8%BD%AC"}},[e._v("翻转")]),e._v("以便创建新的写入索引，这样之前的写入索引能被关闭。此限制从 7.12.1 不再适用。")]),e._v(" "),a("h2",{attrs:{id:"路径参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径参数"}},[e._v("#")]),e._v(" 路径参数")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<index>")])])]),e._v(" "),a("p",[e._v("（可选，字符串）用于限制请求的，逗号分隔的数据流、索引。")]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("_all")]),e._v(" 或 "),a("code",[e._v("*")]),e._v(" 关闭所有索引。修改 "),a("code",[e._v("action.destructive_requires_name")]),e._v(" 集群设置为 "),a("code",[e._v("true")]),e._v("，可以禁用通过 "),a("code",[e._v("_all")]),e._v(" 或 "),a("code",[e._v("*")]),e._v(" 关闭索引。你可以在文件 "),a("code",[e._v("elasticsearch.yml")]),e._v(" 中 或通过 "),a("a",{attrs:{href:"/rest_apis/cluster_apis/cluster_update_settings"}},[e._v("集群更新设置")]),e._v(" API 来更新这个设置。")]),e._v(" "),a("h2",{attrs:{id:"查询参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询参数"}},[e._v("#")]),e._v(" 查询参数")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("allow_no_indices")])])]),e._v(" "),a("p",[e._v("（可选，布尔值）如果为 "),a("code",[e._v("false")]),e._v("，如果任何通配符表达式、索引别名或 "),a("code",[e._v("_all")]),e._v(" 值只针对丢失或关闭的索引，则请求返回一个错误。即使请求以其他开放索引为目标，此行为也适用。例如，如果一个索引以 "),a("code",[e._v("foo")]),e._v(" 开头，但没有索引以 "),a("code",[e._v("bar")]),e._v(" 开头，以 "),a("code",[e._v("foo*,bar*")]),e._v(" 为目标的请求将返回错误。")]),e._v(" "),a("p",[e._v("默认为 "),a("code",[e._v("true")]),e._v("。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("expand_wildcards")])])]),e._v(" "),a("p",[e._v("（可选，字符串）通配符表达式能匹配的索引类型。如果请求目标为数据流，则此参数确定通配符表达式是否匹配隐藏的数据流则此参数确定通配符表达式是否匹配隐藏的数据流。支持逗号分隔列表的值，如 "),a("code",[e._v("open,hidden")]),e._v("。有效的值有：")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("all")]),e._v("\n匹配任何数据流或索引，包括 "),a("a",{attrs:{href:"/rest_apis/api_convention/multi_target_syntax#%E9%9A%90%E8%97%8F%E6%95%B0%E6%8D%AE%E6%B5%81%E5%92%8C%E7%B4%A2%E5%BC%95"}},[e._v("hidden")]),e._v("（隐藏的）。")]),e._v(" "),a("li",[a("code",[e._v("open")]),e._v("\n匹配 open（开启）、非隐藏的索引。也匹配任何非隐藏的数据流。")]),e._v(" "),a("li",[a("code",[e._v("closed")]),e._v("\n匹配 closed（关闭）、非隐藏的索引。也匹配任何非隐藏的数据流。数据流不能关闭。")]),e._v(" "),a("li",[a("code",[e._v("hidden")]),e._v("\n匹配隐藏数据流和隐藏索引。必须与 "),a("code",[e._v("open")]),e._v("、"),a("code",[e._v("closed")]),e._v(" 或一起使用。")]),e._v(" "),a("li",[a("code",[e._v("none")]),e._v("\n不接受通配符表达式。")])]),e._v(" "),a("p",[e._v("默认为 "),a("code",[e._v("open")]),e._v("。")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("ignore_unavailable")]),e._v("\n（可选，布尔值）如果为 "),a("code",[e._v("true")]),e._v("，丢失的或关闭的索引不包含在响应中。默认为 "),a("code",[e._v("false")]),e._v("。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("wait_for_active_shards")]),e._v("\n（可选，字符串）在操作执行之前必须活动的分片复制数量。设置为 "),a("code",[e._v("all")]),e._v(" 或任何正整数，最大值为索引分片总数（"),a("code",[e._v("number_of_replicas+1")]),e._v("）。值 "),a("code",[e._v("index-setting")]),e._v(" 指依据索引设置 "),a("code",[e._v("index.write.wait_for_active_shards")]),e._v(" 等待。默认："),a("code",[e._v("0")]),e._v("，意味着不等待任何分片准备。")])])]),e._v(" "),a("p",[e._v("参阅"),a("a",{attrs:{href:"/rest_apis/document_apis/esindex#%E6%B4%BB%E5%8A%A8%E5%88%86%E7%89%87"}},[e._v("活动分片")]),e._v("。")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("master_timeout")]),e._v("\n（可选，"),a("a",{attrs:{href:"/rest_apis/api_convention/common_options#%E6%97%B6%E9%97%B4%E5%8D%95%E4%BD%8D"}},[e._v("时间单位")]),e._v("）等待连接到主节点的时间。如果在超时过期前没有收到响应，则请求失败并返回错误。默认为 "),a("code",[e._v("30s")]),e._v("。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("timeout")]),e._v("\n（可选，"),a("a",{attrs:{href:"/rest_apis/api_convention/common_options#%E6%97%B6%E9%97%B4%E5%8D%95%E4%BD%8D"}},[e._v("时间单位")]),e._v("）等待响应的时间。如果在超时过期之前没有收到响应，则请求失败并返回错误。默认为 "),a("code",[e._v("30s")]),e._v("。")])])]),e._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),a("p",[e._v("以下例子展示如何关闭一个索引：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("POST /my-index-000001/_close\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("API 返回以下响应：")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"acknowledged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"shards_acknowledged"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"indices"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"my-index-000001"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"closed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-close.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=t.exports}}]);