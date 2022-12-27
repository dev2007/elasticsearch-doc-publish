(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{318:function(s,a,t){"use strict";t.r(a);var n=t(13),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"创建或更新自动伸缩策略-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建或更新自动伸缩策略-api"}},[s._v("#")]),s._v(" 创建或更新自动伸缩策略 API")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("此特性设计用于 "),a("a",{attrs:{href:"https://www.elastic.co/cloud/elasticsearch-service/signup?baymax=docs-body&elektra=docs",target:"_blank",rel:"noopener noreferrer"}},[s._v("Elasticsearch Service"),a("OutboundLink")],1),s._v("、"),a("a",{attrs:{href:"https://www.elastic.co/guide/en/cloud-enterprise/current",target:"_blank",rel:"noopener noreferrer"}},[s._v("Elastic Cloud Enterprise"),a("OutboundLink")],1),s._v(" 和 "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/cloud-on-k8s/current",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kubernetes 上的 Elastic Cloud"),a("OutboundLink")],1),s._v(" 的间接使用。不支持直接用户使用。")])]),s._v(" "),a("p",[s._v("创建或更新一个自动伸缩策略。")]),s._v(" "),a("h2",{attrs:{id:"请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求"}},[s._v("#")]),s._v(" 请求")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT /_autoscaling/policy/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"roles"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deciders"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fixed"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"前置条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[s._v("#")]),s._v(" 前置条件")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("如果 Elasticsearch 安全特性启用，你必须有 "),a("code",[s._v("manage_autoscaling")]),s._v(" "),a("RouterLink",{attrs:{to:"/secure_the_elastic_statck/user_authorization/security_privileges.html#集群权限"}},[s._v("集群权限")]),s._v("来使用此 API。")],1)]),s._v(" "),a("li",[a("p",[s._v("如果启用了"),a("a",{attrs:{href:"/secure_the_elastic_stack/operator_privileges/operator_privileges"}},[s._v("操作员权限特性")]),s._v("，则只有操作员用户可以使用此 API。")])])]),s._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),a("p",[s._v("此 API 使用提供的名称修改自动伸缩策略。关于可用的决策器，参阅"),a("a",{attrs:{href:"/autoscaling/autoscaling_deciders"}},[s._v("自动伸缩决策器")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[s._v("此示例使用固定的自动缩放决策器，将名为 "),a("code",[s._v("my_autoscaling_policy")]),s._v(" 的自动缩放策略应用于（仅）具有 “data_hot” 角色的节点集。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("PUT /_autoscaling/policy/my_autoscaling_policy\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"roles"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data_hot"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deciders"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fixed"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("此 API 返回以下结果：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"acknowledged"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/autoscaling-put-autoscaling-policy.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文链接"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);