(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{397:function(t,e,a){"use strict";a.r(e);var r=a(13),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"字段数据缓存设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字段数据缓存设置"}},[t._v("#")]),t._v(" 字段数据缓存设置")]),t._v(" "),e("p",[t._v("字段数据缓存包含"),e("RouterLink",{attrs:{to:"/mapping/field_data_type/text.html#fielddata-映射参数"}},[t._v("字段数据")]),t._v("和"),e("RouterLink",{attrs:{to:"/mapping/mapping_parameters/eager_global_ordinals.html"}},[t._v("全局序号")]),t._v("，它们都用于支持某些字段类型的聚合。由于这些是堆上的数据结构，因此监控缓存的使用情况非常重要。")],1),t._v(" "),e("h2",{attrs:{id:"缓存大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存大小"}},[t._v("#")]),t._v(" 缓存大小")]),t._v(" "),e("p",[t._v("缓存中的条目构建成本很高，因此默认行为是将缓存加载到内存中。默认缓存大小是无限的，这会导致缓存增长，直到"),e("RouterLink",{attrs:{to:"/set_up_elasticsearch/configuring_elasticsearch/circuit_breaker_settings.html#字段数据断路器"}},[t._v("字段数据断路器")]),t._v("设置的限制。此行为可配置。")],1),t._v(" "),e("p",[t._v("如果设置了缓存大小限制，缓存将开始清除缓存中最近更新最少的条目。此设置可以自动避免断路器限制，代价是按需重建缓存。")]),t._v(" "),e("p",[t._v("如果达到断路器限制，将阻止会增加缓存大小的更多请求。在这种情况下，你应该手动"),e("RouterLink",{attrs:{to:"/rest_apis/index_apis/clear_cache.html"}},[t._v("清除缓存")]),t._v("。")],1),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("indices.fielddata.cache.size")])]),t._v(" "),e("p",[t._v("("),e("a",{attrs:{href:"/set_up_elasticsearch/configuring_elasticsearch"}},[t._v("静态")]),t._v(")字段数据缓存的最大大小，例如节点堆空间的 "),e("code",[t._v("38%")]),t._v("，或绝对值，例如 "),e("code",[t._v("12GB")]),t._v("。默认为无界。如果你选择设置它，它应该小于"),e("RouterLink",{attrs:{to:"/set_up_elasticsearch/configuring_elasticsearch/circuit_breaker_settings.html#字段数据断路器"}},[t._v("字段数据断路器")]),t._v("限制。")],1)])]),t._v(" "),e("h2",{attrs:{id:"监控字段数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#监控字段数据"}},[t._v("#")]),t._v(" 监控字段数据")]),t._v(" "),e("p",[t._v("你可以使用"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/nodes_stats.html"}},[t._v("节点统计 API")]),t._v(" 或 "),e("RouterLink",{attrs:{to:"/rest_apis/compact_and_aligned_text_apis/cat_fielddata.html"}},[t._v("cat 字段数据 API")]),t._v(" 监视字段数据的内存使用情况以及字段数据断路器。")],1),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-fielddata.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);