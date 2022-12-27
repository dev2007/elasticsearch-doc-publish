(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{371:function(s,a,t){"use strict";t.r(a);var n=t(13),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"异步搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步搜索"}},[s._v("#")]),s._v(" 异步搜索")]),s._v(" "),a("p",[s._v("异步搜索 API 允许异步执行搜索请求，监视其进度，并在部分结果可用时检索它们。")]),s._v(" "),a("h2",{attrs:{id:"提交异步搜索-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交异步搜索-api"}},[s._v("#")]),s._v(" 提交异步搜索 API")]),s._v(" "),a("p",[s._v("异步执行搜索请求。它接受与"),a("a",{attrs:{href:"/rest_apis/search_apis/search"}},[s._v("搜索 API")]),s._v(" 相同的参数和请求体。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("POST /sales*/_async_search?size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sort"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"order"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"asc"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aggs"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sale_date"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date_histogram"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"field"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"date"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"calendar_interval"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1d"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("响应包含正在执行的搜索的标识符。你可以使用此 ID 稍后检索搜索的最终结果。当前可用的搜索结果将作为"),a("a",{attrs:{href:"/rest_apis/search_apis/search#%E5%93%8D%E5%BA%94%E4%BD%93"}},[s._v("响应")]),s._v("对象的一部分返回。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FmRldE8zREVEUzA2ZVpUeGs2ejJFUFEaMkZ5QTVrSTZSaVN3WlNFVmtlWHJsdzoxMDc="')]),s._v(", \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_partial"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true, \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_running"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true, \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start_time_in_millis"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1583945890986")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"expiration_time_in_millis"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1584377890986")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"took"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1122")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timed_out"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"num_reduce_phases"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_shards"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("562")]),s._v(", \n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"successful"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(", \n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"skipped"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"failed"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hits"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("157483")]),s._v(", \n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"relation"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gte"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_score"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hits"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("ol",[a("li",[a("code",[s._v('"id" : "FmRldE8zREVEUzA2ZVpUeGs2ejJFUFEaMkZ5QTVrSTZSaVN3WlNFVmtlWHJsdzoxMDc="')]),s._v("：异步搜索的标识符，可用于监视其进度、检索其结果和/或删除它")]),s._v(" "),a("li",[a("code",[s._v('"is_partial" : true')]),s._v("： 当查询不再运行时，指示在所有分片上搜索是失败还是成功完成。执行查询时，"),a("code",[s._v("is_partial")]),s._v(" 始终设置为 "),a("code",[s._v("true")])]),s._v(" "),a("li",[a("code",[s._v('"is_running" : true')]),s._v("：搜索是否仍在执行或已完成")]),s._v(" "),a("li",[a("code",[s._v('"total" : 562')]),s._v("：总共有多少个分片将被执行搜索")]),s._v(" "),a("li",[a("code",[s._v('"successful" : 3')]),s._v("：有多少分片成功完成了搜索")]),s._v(" "),a("li",[a("code",[s._v('"value" : 157483')]),s._v("：当前有多少文档与查询匹配，这些文档属于已完成搜索的分片")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("虽然查询不再运行，因此 "),a("code",[s._v("is_running")]),s._v(" 设置为 "),a("code",[s._v("false")]),s._v("，但结果可能是部分的。如果某些分片返回结果后搜索失败，或者协调异步搜索的节点死亡，就会发生这种情况。")])]),s._v(" "),a("p",[s._v("通过提供 "),a("code",[s._v("wait_for_completion_timeout")]),s._v(" 参数（默认为 "),a("code",[s._v("1")]),s._v(" 秒），可以阻止并等待搜索完成，直到达到某个超时。当异步搜索在这样的超时内完成时，响应将不包括ID，因为结果不存储在集群中。"),a("code",[s._v("keep_on_completion")]),s._v(" 参数（默认为 "),a("code",[s._v("false")]),s._v("）可以设置为 "),a("code",[s._v("true")]),s._v("，以请求存储结果，以便在 "),a("code",[s._v("wait_for_completion_timeout")]),s._v(" 内搜索完成时，也可以进行后续检索。")]),s._v(" "),a("p",[s._v("你还可以通过 "),a("code",[s._v("keep_alive")]),s._v(" 参数指定异步搜索需要多长时间可用，该参数默认为 "),a("code",[s._v("5d")]),s._v("（五天）。在此期间之后，将删除正在进行的异步搜索和任何保存的搜索结果。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("当结果的主要排序是索引字段时，分片将根据其为该字段保留的最小值和最大值进行排序，因此部分结果将根据请求的排序标准可用。")])]),s._v(" "),a("p",[s._v("提交异步搜索 API 支持与搜索 API 相同的[参数]((/rest_apis/search_apis/search#查询参数)，尽管有些参数具有不同的默认值：")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("batched_reduce_size")]),s._v(" 默认为 "),a("code",[s._v("5")]),s._v("：这会影响部分结果可用的频率，这会在碎片结果减少时发生。每次协调节点收到一定数量的新碎片响应（默认情况下为 "),a("code",[s._v("5")]),s._v("）时，都会执行部分减少。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("request_cache")]),s._v(" 默认为 "),a("code",[s._v("true")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("pre_filter_shard_size")]),s._v(" 默认为 "),a("code",[s._v("1")]),s._v(" 且不能被修改：这是为了强制执行预筛选往返，以从每个切分中检索统计信息，从而跳过那些肯定不包含任何与查询匹配的文档的切分。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("ccs_minimize_roundtrips")]),s._v(" 默认为 "),a("code",[s._v("false")]),s._v("，且是唯一支持的值。")])])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),a("p",[s._v("异步搜索不支持仅包含"),a("a",{attrs:{href:"/rest_apis/search_apis/suggesters"}},[s._v("建议部分")]),s._v("的"),a("a",{attrs:{href:"/search_your_data/paginate_search_results#%E6%BB%9A%E5%8A%A8%E6%90%9C%E7%B4%A2%E7%BB%93%E6%9E%9C"}},[s._v("滚动")]),s._v("或搜索请求。仅当 "),a("code",[s._v("ccs_minimize_roundtrips")]),s._v(" 设置为 "),a("code",[s._v("false")]),s._v(" 时，才支持跨群集搜索。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("默认情况下，7.x 版本 Elasticsearch 不会限制存储的异步搜索响应的大小。存储大量异步响应可能会破坏集群的稳定性。如果要设置最大允许大小的限制，请更改搜 "),a("code",[s._v("search.max_async_search_response_size")]),s._v(" 集群级设置。之后，尝试存储大于此设置的异步响应将导致错误。")])]),s._v(" "),a("h2",{attrs:{id:"获取异步搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取异步搜索"}},[s._v("#")]),s._v(" 获取异步搜索")]),s._v(" "),a("p",[s._v("获取异步搜索 API 根据之前提交的异步搜索请求的 id 检索其结果。如果启用了 Elasticsearch 安全功能，则对特定异步搜索结果的访问仅限于"),a("a",{attrs:{href:"/secure_the_elastic_stack/limitations#%E7%94%A8%E6%88%B7%E5%92%8C-API-%E5%AF%86%E9%92%A5%E7%9A%84%E8%B5%84%E6%BA%90%E5%85%B1%E4%BA%AB%E6%A3%80%E6%9F%A5"}},[s._v("提交该请求的用户或 API 密钥")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("GET /_async_search/FmRldE8zREVEUzA2ZVpUeGs2ejJFUFEaMkZ5QTVrSTZSaVN3WlNFVmtlWHJsdzoxMDc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FmRldE8zREVEUzA2ZVpUeGs2ejJFUFEaMkZ5QTVrSTZSaVN3WlNFVmtlWHJsdzoxMDc="')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_partial"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true, \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_running"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true, \n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start_time_in_millis"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1583945890986")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"expiration_time_in_millis"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1584377890986")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"response"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"took"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12144")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timed_out"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"num_reduce_phases"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_shards"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("562")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"successful"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("188")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"skipped"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"failed"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hits"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("456433")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"relation"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eq"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_score"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hits"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aggregations"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sale_date"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"buckets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("ol",[a("li",[a("code",[s._v('"is_partial" : true')]),s._v("：当查询不再运行时，指示在所有分片上搜索是失败还是成功完成。执行查询时，"),a("code",[s._v("is_partial")]),s._v(" 始终设置为 "),a("code",[s._v("true")])]),s._v(" "),a("li",[a("code",[s._v('"is_running" : true')]),s._v("：搜索是否仍在执行或已完成")]),s._v(" "),a("li",[a("code",[s._v('"expiration_time_in_millis" : 1584377890986')]),s._v("：异步搜索将在何时过期")]),s._v(" "),a("li",[a("code",[s._v('"num_reduce_phases" : 46')]),s._v("：表示已执行了多少次结果缩减。如果与上次检索的结果相比，这个数字增加了，那么你可以期望搜索响应中包含更多的结果")]),s._v(" "),a("li",[a("code",[s._v('"successful" : 188')]),s._v("：指示已执行查询的分片数。请注意，为了将碎片结果包含在搜索响应中，需要首先减少分片结果。")]),s._v(" "),a("li",[a("code",[s._v('"aggregations"')]),s._v(" ：部分聚合结果，来自已完成查询执行的分片。")])]),s._v(" "),a("p",[s._v("调用获取异步搜索 API 时，还可以提供 "),a("code",[s._v("wait_for_completion_timeout")]),s._v(" 参数，以便在提供的超时之前等待搜索完成。如果在超时过期之前可用，将返回最终结果，否则在超时过期后将返回当前可用的结果。默认情况下，未设置超时，这意味着将返回当前可用的结果，而无需任何额外等待。")]),s._v(" "),a("p",[a("code",[s._v("keep_alive")]),s._v(" 参数指定异步搜索在集群中的可用时间。未指定时，将使用带有相应提交异步请求的 "),a("code",[s._v("keep_alive")]),s._v(" 集。否则，可以覆盖该值并扩展请求的有效性。此期限到期后，如果搜索仍在运行，将取消搜索。如果搜索完成，其保存的结果将被删除。")]),s._v(" "),a("h2",{attrs:{id:"获取异步搜索状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取异步搜索状态"}},[s._v("#")]),s._v(" 获取异步搜索状态")]),s._v(" "),a("p",[s._v("获取异步搜索状态 API 不检索搜索结果，只显示之前提交的异步搜索请求的状态（给定其 "),a("code",[s._v("id")]),s._v("）。如果启用了 Elasticsearch 安全功能，则对获取异步搜索状态 API 的访问仅限于"),a("a",{attrs:{href:"/secure_the_elastic_stack/user_authorization/built-in_roles"}},[s._v("监视用户（monitoring_user）角色")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("GET /_async_search/status/FmRldE8zREVEUzA2ZVpUeGs2ejJFUFEaMkZ5QTVrSTZSaVN3WlNFVmtlWHJsdzoxMDc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FmRldE8zREVEUzA2ZVpUeGs2ejJFUFEaMkZ5QTVrSTZSaVN3WlNFVmtlWHJsdzoxMDc="')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_running"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_partial"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start_time_in_millis"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1583945890986")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"expiration_time_in_millis"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1584377890986")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_shards"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("562")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"successful"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("188")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"skipped"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"failed"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ol",[a("li",[a("code",[s._v('"successful" : 188')]),s._v("：指示到目前为止已执行查询的分片数。")])]),s._v(" "),a("p",[s._v("对于已完成的异步搜索，状态响应有一个额外的 "),a("code",[s._v("completion_status")]),s._v(" 字段，显示已完成异步搜索的状态代码。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FmRldE8zREVEUzA2ZVpUeGs2ejJFUFEaMkZ5QTVrSTZSaVN3WlNFVmtlWHJsdzoxMDc="')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_running"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_partial"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start_time_in_millis"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1583945890986")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"expiration_time_in_millis"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1584377890986")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_shards"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("562")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"successful"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("562")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"skipped"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"failed"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"completion_status"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ol",[a("li",[a("code",[s._v('"completion_status" : 200')]),s._v("：指示异步搜索已成功完成。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FmRldE8zREVEUzA2ZVpUeGs2ejJFUFEaMkZ5QTVrSTZSaVN3WlNFVmtlWHJsdzoxMDc="')]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_running"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is_partial"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start_time_in_millis"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1583945890986")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"expiration_time_in_millis"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1584377890986")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_shards"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("562")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"successful"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("450")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"skipped"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"failed"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("112")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"completion_status"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ol",[a("li",[a("code",[s._v('"completion_status" : 503')]),s._v("：指示异步搜索已完成，但出现错误。")])]),s._v(" "),a("h2",{attrs:{id:"删除异步搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除异步搜索"}},[s._v("#")]),s._v(" 删除异步搜索")]),s._v(" "),a("p",[s._v("你可以使用删除异步搜索 API 按 ID 手动删除异步搜索。如果搜索仍在运行，搜索请求将被取消。否则，保存的搜索结果将被删除。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("DELETE /_async_search/FmRldE8zREVEUzA2ZVpUeGs2ejJFUFEaMkZ5QTVrSTZSaVN3WlNFVmtlWHJsdzoxMDc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果启用了 Elasticsearch 安全功能，则特定异步搜索的删除仅限于："),a("code",[s._v("*")]),s._v("， 提交原始搜索请求的经过身份验证的用户。"),a("code",[s._v("*")]),s._v(" 具有 "),a("code",[s._v("cancel_task")]),s._v(" 集群权限的用户。")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/async-search.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);