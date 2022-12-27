(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{333:function(s,a,t){"use strict";t.r(a);var n=t(13),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"创建索引-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建索引-api"}},[s._v("#")]),s._v(" 创建索引 API")]),s._v(" "),a("p",[s._v("创建一个新的索引。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT /my-index-000001\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求"}},[s._v("#")]),s._v(" 请求")]),s._v(" "),a("p",[a("code",[s._v("PUT /<index>")])]),s._v(" "),a("h2",{attrs:{id:"前置条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[s._v("#")]),s._v(" 前置条件")]),s._v(" "),a("ul",[a("li",[s._v("如果 Elasticsearch 安全特性启用，你对目标索引必须有 "),a("code",[s._v("create_index")]),s._v(" 或 "),a("code",[s._v("manage")]),s._v(" "),a("a",{attrs:{href:"/secure_the_elastic_statck/user_authorization/security_privileges#%E7%B4%A2%E5%BC%95%E6%9D%83%E9%99%90"}},[s._v("索引权限")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),a("p",[s._v("你可以使用创建索引 API 向 Elasticsearch 集群添加一个新的索引。当创建索引时，你可以指定以下项：")]),s._v(" "),a("ul",[a("li",[s._v("索引设置")]),s._v(" "),a("li",[s._v("索引字段映射")]),s._v(" "),a("li",[s._v("索引别名")])]),s._v(" "),a("h2",{attrs:{id:"路径参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径参数"}},[s._v("#")]),s._v(" 路径参数")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("<index>")])])]),s._v(" "),a("p",[s._v("（必需的，字符串）你希望创建的索引的名字。")]),s._v(" "),a("p",[s._v("索引名字必须符合以下约定：")]),s._v(" "),a("ol",[a("li",[s._v("只能是小写字符")]),s._v(" "),a("li",[s._v("不能包含字符："),a("code",[s._v("\\")]),s._v("、"),a("code",[s._v("/")]),s._v("、"),a("code",[s._v("*")]),s._v("、"),a("code",[s._v("?")]),s._v("、"),a("code",[s._v('"')]),s._v("、"),a("code",[s._v("<")]),s._v("、"),a("code",[s._v(">")]),s._v("、"),a("code",[s._v("|")]),s._v("、"),a("code"),s._v("(空格)、"),a("code",[s._v(",")]),s._v("、"),a("code",[s._v("#")])]),s._v(" "),a("li",[s._v("7.0 之前索引可以包含冒号（:），但在 7.0 之后不推荐。")]),s._v(" "),a("li",[s._v("不能以 "),a("code",[s._v("-")]),s._v("、"),a("code",[s._v("_")]),s._v("、"),a("code",[s._v("+")]),s._v(" 开头")]),s._v(" "),a("li",[s._v("不能是 "),a("code",[s._v(".")]),s._v(" 或 "),a("code",[s._v("..")])]),s._v(" "),a("li",[s._v("长度不能超过 255 字节（注意是字节，所以多字节字符会更快达到 255 的限制）")]),s._v(" "),a("li",[s._v("名字以 "),a("code",[s._v(".")]),s._v(" 开头不推荐，除非由插件管理的"),a("a",{attrs:{href:"/index_modules"}},[s._v("隐藏索引")]),s._v("和内部索引")])]),s._v(" "),a("h2",{attrs:{id:"查询参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询参数"}},[s._v("#")]),s._v(" 查询参数")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("include_type_name")]),s._v("\n["),a("s",[s._v("7.0.0")]),s._v("开始不推荐] （可选，布尔值）如果为 "),a("code",[s._v("true")]),s._v("，映射体中需要映射类型。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("wait_for_active_shards")]),s._v("\n（可选，字符串）在操作执行之前必须活动的分片复制数量。设置为 "),a("code",[s._v("all")]),s._v(" 或任何正整数，最大值为索引分片总数（"),a("code",[s._v("number_of_replicas+1")]),s._v("）。默认为：1，主分片。")])])]),s._v(" "),a("p",[s._v("参阅 "),a("a",{attrs:{href:"/rest_apis/document_apis/esindex#%E6%B4%BB%E5%8A%A8%E5%88%86%E7%89%87"}},[s._v("活动分片")])]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("master_timeout")]),s._v("\n（可选，"),a("a",{attrs:{href:"/rest_apis/api_convention/common_options#%E6%97%B6%E9%97%B4%E5%8D%95%E4%BD%8D"}},[s._v("时间单位")]),s._v("）等待连接到主节点的时间。如果在超时过期前没有收到响应，则请求失败并返回错误。默认为 "),a("code",[s._v("30s")]),s._v("。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("timeout")]),s._v("\n（可选，"),a("a",{attrs:{href:"/rest_apis/api_convention/common_options#%E6%97%B6%E9%97%B4%E5%8D%95%E4%BD%8D"}},[s._v("时间单位")]),s._v("）等待响应的时间。如果在超时过期之前没有收到响应，则请求失败并返回错误。默认为 "),a("code",[s._v("30s")]),s._v("。")])])]),s._v(" "),a("h2",{attrs:{id:"请求体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求体"}},[s._v("#")]),s._v(" 请求体")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("aliases")]),s._v("\n（可选，"),a("a",{attrs:{href:"/rest_apis/index_apis/bulk_index_alias"}},[s._v("别名对象")]),s._v("）包含索引的索引别名。参阅"),a("a",{attrs:{href:"/rest_apis/index_apis/bulk_index_alias"}},[s._v("批量索引别名")]),s._v("。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("mappings")]),s._v("\n（可选，"),a("a",{attrs:{href:"/mapping/mapping"}},[s._v("映射对象")]),s._v("）索引中字段映射。如果指定，映射可以包含：")])])]),s._v(" "),a("ol",[a("li",[s._v("字段名字")]),s._v(" "),a("li",[a("a",{attrs:{href:"/mapping/field_data_types"}},[s._v("字段数据类型")])]),s._v(" "),a("li",[a("a",{attrs:{href:"/mapping/mapping_parameters/mapping_parameters"}},[s._v("映射参数")])])]),s._v(" "),a("p",[s._v("参阅"),a("a",{attrs:{href:"/mapping/mapping"}},[s._v("映射")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("settings")]),s._v("\n（可选，"),a("a",{attrs:{href:"/index_modules#%E7%B4%A2%E5%BC%95%E8%AE%BE%E7%BD%AE"}},[s._v("索引设置对象")]),s._v("）索引的配置选项。参阅"),a("a",{attrs:{href:"/index_modules#%E7%B4%A2%E5%BC%95%E8%AE%BE%E7%BD%AE"}},[s._v("索引设置")])])]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("h3",{attrs:{id:"索引设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引设置"}},[s._v("#")]),s._v(" 索引设置")]),s._v(" "),a("p",[s._v("创建的每个索引可以有与它关联的特定设置，在请求体中定义：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT /my-index-000001\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_shards"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",  \n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_replicas"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ol",[a("li",[a("code",[s._v("number_of_shards")]),s._v(" 默认为 1")]),s._v(" "),a("li",[a("code",[s._v("number_of_replicas")]),s._v(" 默认为 1 （例如，每个主分片一个副本）")])]),s._v(" "),a("p",[s._v("或更简单：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT /my-index-000001\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_shards"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_replicas"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("settings")]),s._v(" 部分中，不必显示指定 "),a("code",[s._v("index")]),s._v(" 部分。")])]),s._v(" "),a("p",[s._v("有关创建索引时，可以设置的所有不同索引级别设置的详细信息，参阅章节"),a("a",{attrs:{href:"/index_modules"}},[s._v("索引模块")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#映射"}},[s._v("#")]),s._v(" 映射")]),s._v(" "),a("p",[s._v("创建索引 API 允许提供映射定义：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT /test\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number_of_shards"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mappings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"field1"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("在 7.0.0 之前，"),a("strong",[s._v("mapping")]),s._v("（映射）定义用于包含类型名字。尽管现在不推荐在请求中指定类型，但如果设置了请求参数 include_type_name，仍然可以提供类型。更多的信息，参阅"),a("a",{attrs:{href:"/mapping/removal_of_mapping_types"}},[s._v("移除映射类型")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#别名"}},[s._v("#")]),s._v(" 别名")]),s._v(" "),a("p",[s._v("创建索引 API 也允许提供一组"),a("a",{attrs:{href:"/rest_apis/index_apis/bulk_index_alias"}},[s._v("别名")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT /test\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aliases"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"alias_1"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"alias_2"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filter"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"term"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user.id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kimchy"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"routing"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shard-1"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"等待活动分片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#等待活动分片"}},[s._v("#")]),s._v(" 等待活动分片")]),s._v(" "),a("p",[s._v("默认情况下，索引创建只会在每个分片的主副本已启动或请求超时时，向客户端返回响应。索引创建响应将表明发生了什么。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"acknowledged"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shards_acknowledged"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("acknowledged")]),s._v(" 表明在集群中索引是否成功创建，同时 "),a("code",[s._v("shards_acknowledged")]),s._v(" 表明在超时之前，是否为每个分片启动了必需的分片副本数量。注意，"),a("code",[s._v("acknowledged")]),s._v(" 或 "),a("code",[s._v("shards_acknowledged")]),s._v(" 仍有可能为 "),a("code",[s._v("false")]),s._v("，但索引创建是成功的。这个值只简单表明在超时前操作是否完成。如果 "),a("code",[s._v("acknowledged")]),s._v(" 为 "),a("code",[s._v("false")]),s._v("，然后为新创建的索引更新集群状态之前，我们超时了，但它也可能很快被创建。如果 "),a("code",[s._v("shards_acknowledged")]),s._v(" 为 "),a("code",[s._v("false")]),s._v("，在启动所需数量的分片之前我们就超时了（默认情况下，只有主碎片），即使集群状态已成功更新以反映新创建的索引（如，"),a("code",[s._v("acknowledged=true")]),s._v("）。")]),s._v(" "),a("p",[s._v("我们可以通过索引设置 "),a("code",[s._v("index.write.wait_for_active_shards")]),s._v("，更改等待主分片启动的默认值（注意改变这个设置也会影响后续写入操作上的 "),a("code",[s._v("wait_for_active_shards")]),s._v(" 值）：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT /test\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.write.wait_for_active_shards"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("或者通过请求参数 "),a("code",[s._v("wait_for_active_shards")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT /test?wait_for_active_shards"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对 "),a("code",[s._v("wait_for_active_shards")]),s._v(" 的详情解释，及它的可能值能在"),a("a",{attrs:{href:"/rest_apis/document_apis/esindex#%E6%B4%BB%E5%8A%A8%E5%88%86%E7%89%87"}},[s._v("这里")]),s._v("找到。")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/indices-create-index.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);