(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{407:function(_,e,t){"use strict";t.r(e);var s=t(13),v=Object(s.a)({},(function(){var _=this,e=_._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"elasticsearch-中的机器学习设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-中的机器学习设置"}},[_._v("#")]),_._v(" Elasticsearch 中的机器学习设置")]),_._v(" "),e("p",[_._v("使用机器学习不需要配置任何设置。默认情况下已启用。")]),_._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[_._v("重要")]),_._v(" "),e("p",[_._v("机器学习使用 SSE4.2 指令，因此它只能在 CPU 支持 SSE4.2 的机器上工作。如果在旧硬件上运行 Elasticsearch，则必须禁用机器学习（通过将 "),e("code",[_._v("xpack.ml.enabled")]),_._v(" 设置为 "),e("code",[_._v("false")]),_._v("）。")])]),_._v(" "),e("h2",{attrs:{id:"通用机器学习设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通用机器学习设置"}},[_._v("#")]),_._v(" 通用机器学习设置")]),_._v(" "),e("ul",[e("li",[e("p",[e("code",[_._v("node.roles: [ ml ]")])]),_._v(" "),e("p",[_._v("("),e("a",{attrs:{href:"/set_up_elasticsearch/configuring_elasticsearch"}},[_._v("静态")]),_._v("）将 "),e("code",[_._v("node.role")]),_._v(" 设置为包含 "),e("code",[_._v("ml")]),_._v("，以将该节点标识为机器学习节点。如果要运行机器学习作业，集群中必须至少有一个机器学习节点。")]),_._v(" "),e("p",[_._v("如果设置 "),e("code",[_._v("node.role")]),_._v("，则必须显式指定节点所需的所有角色。要了解更多信息，参阅"),e("RouterLink",{attrs:{to:"/set_up_elasticsearch/configuring_elasticsearch/node.html"}},[_._v("节点")]),_._v("。")],1),_._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[_._v("重要")]),_._v(" "),e("ul",[e("li",[_._v("在专用协调节点或专用主节点上，不要设置 "),e("code",[_._v("ml")]),_._v(" 角色。")]),_._v(" "),e("li",[_._v("强烈建议专用机器学习节点也具有 "),e("code",[_._v("remote_cluster_client")]),_._v(" 角色；否则，在机器学习作业或数据反馈中使用跨集群搜索会失败。参阅"),e("RouterLink",{attrs:{to:"/set_up_elasticsearch/configuring_elasticsearch/node.html#远程合格节点"}},[_._v("远程合格节点")]),_._v("。")],1)])])]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.enabled")])]),_._v(" "),e("p",[_._v("("),e("a",{attrs:{href:"/set_up_elasticsearch/configuring_elasticsearch"}},[_._v("静态")]),_._v("）默认值（"),e("code",[_._v("true")]),_._v("）启用节点上的机器学习 API。")]),_._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[_._v("重要")]),_._v(" "),e("p",[_._v("如果要在集群中使用机器学习功能，建议在所有节点上使用此设置的默认值。")])]),_._v(" "),e("p",[_._v("如果设置为 "),e("code",[_._v("false")]),_._v("，则在节点上禁用机器学习 API。例如，节点无法打开作业、启动数据源、接收传输（内部）通信请求或来自客户端（包括 Kibana）的与机器学习 API 相关的请求。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.inference_model.cache_size")])]),_._v(" "),e("p",[_._v("("),e("a",{attrs:{href:"/set_up_elasticsearch/configuring_elasticsearch"}},[_._v("静态")]),_._v("）允许的最大推测缓存大小。推测缓存存在于每个预处理节点上的 JVM 堆中。高速缓存为推测处理器提供了更快的处理时间。该值可以是静态字节大小的值（例如 "),e("code",[_._v("2gb")]),_._v("），也可以是总分配堆的百分比。默认为 "),e("code",[_._v("40%")]),_._v("。另参阅"),e("RouterLink",{attrs:{to:"/set_up_elasticsearch/configuring_elasticsearch/machine_learning_settings_in_elasticsearch.html#机器学习断路器设置"}},[_._v("机器学习断路器设置")]),_._v("。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.inference_model.time_to_live")]),_._v(" "),e("img",{attrs:{src:"https://doc-icons.s3.us-east-2.amazonaws.com/logo_cloud.svg",alt:"cloud"}})]),_._v(" "),e("p",[_._v("("),e("a",{attrs:{href:"/set_up_elasticsearch/configuring_elasticsearch"}},[_._v("静态")]),_._v("）推理模型缓存中训练模型的生存时间（TTL）。TTL从上次访问开始计算。缓存的用户（例如推理处理器或推理聚合器）在第一次使用时缓存模型，并在每次使用时重置TTL。如果在TTL期间未访问缓存模型，则会将其标记为从缓存中逐出。如果稍后处理文档，则模型将再次加载到缓存中。要在Elasticsearch服务中更新此设置，参阅"),e("RouterLink",{attrs:{to:"/preparing_a_deployment_for_production/edit_your_user_settings/edit_elasticsearch_user_settings.html"}},[_._v("添加 Elasticsearch 用户设置")]),_._v("。默认为 "),e("code",[_._v("5m")]),_._v("。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.max_inference_processors")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）所有预处理管道中允许的 "),e("code",[_._v("inference")]),_._v(" 类型处理器总数。一旦达到限制，就不允许向管道中添加 "),e("code",[_._v("inference")]),_._v(" 处理器。默认值为 "),e("code",[_._v("50")]),_._v("。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.max_machine_memory_percent")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）机器学习可用于运行分析过程的机器内存的最大百分比。这些进程与 Elasticsearch JVM 分离。该限制基于机器的总内存，而不是当前可用内存。如果这样做会导致机器学习作业的估计内存使用超过限制，则不会将作业分配给节点。启用操作员权限功能后，此设置只能由操作员用户更新。最小值为5；最大值为 "),e("code",[_._v("200")]),_._v("。默认值为 "),e("code",[_._v("30")]),_._v("。")],1),_._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),e("p",[_._v("不要将此设置配置为高于运行 Elasticsearch JVM 后剩余内存量的值，除非你有足够的 swap 空间来容纳它，并且确定这是适合于特定用例的配置。最大设置值适用于已确定为机器学习作业使用交换空间是可接受的特殊情况。一般的最佳实践是不要在 Elasticsearch 节点上使用 swap。")])])]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.max_model_memory_limit")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）可以为此集群中的任何机器学习作业设置的最大 "),e("code",[_._v("model_memory_limit")]),_._v(" 属性值。如果尝试创建 "),e("code",[_._v("model_memory_limit")]),_._v(" 属性值大于此设置值的作业，则会发生错误。更新此设置时，现有作业不受影响。如果此设置为 "),e("code",[_._v("0")]),_._v(" 或未设置，则没有最大 "),e("code",[_._v("model_memory_limit")]),_._v(" 值。如果没有满足作业内存要求的节点，那么缺少最大内存限制意味着可以创建无法分配给任何可用节点的作业。有关 "),e("code",[_._v("model_memory_limit")]),_._v(" 属性的更多信息，参阅创建异常检测作业或创建数据帧分析作业。如果 "),e("code",[_._v("xpack.ml.use_auto_machine_memory_percent")]),_._v(" 为 "),e("code",[_._v("false")]),_._v("，则默认为 "),e("code",[_._v("0")]),_._v("。如果 "),e("code",[_._v("xpack.ml.use_auto_machine_memory_percent")]),_._v(" 为 "),e("code",[_._v("true")]),_._v(" 且 "),e("code",[_._v("xpack.ml.max_model_memory_limit")]),_._v(" 未显示设置，则它默认为可分配给集群的最大 "),e("code",[_._v("model_memory_limit")]),_._v("。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.max_open_jobs")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）节点上可以同时运行的最大作业数。在这种情况下，作业包括异常检测作业和数据帧分析作业。作业的最大数量也受到内存使用的限制。因此，如果作业的估计内存使用率高于允许值，则节点上运行的作业将更少。在版本 7.1 之前，此设置是每个节点的非动态设置。在 7.1 版中，它成为了集群范围的动态设置。因此，只有在集群中的每个节点都运行 7.1 或更高版本后，才会在节点启动后对其值进行更改。最小值为 "),e("code",[_._v("1")]),_._v("；最大值为 "),e("code",[_._v("512")]),_._v("。默认值为 "),e("code",[_._v("512")]),_._v("。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.nightly_maintenance_requests_per_second")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）夜间维护任务删除过期模型快照和结果的速率。该设置是按查询请求删除中使用的 "),e("a",{attrs:{href:""}},[_._v("requests_per_second")]),_._v(" 参数的代理，并控制节流。启用操作员权限功能后，此设置只能由操作员用户更新。有效值必须大于 "),e("code",[_._v("0.0")]),_._v(" 或等于 "),e("code",[_._v("-1.0")]),_._v("，其中 "),e("code",[_._v("-1.0")]),_._v(" 表示使用默认值。默认值为 "),e("code",[_._v("-1.0")]),_._v("。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.node_concurrent_job_allocations")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）每个节点上可以同时处于 "),e("code",[_._v("opening")]),_._v(" 状态的最大作业数。通常，工作在进入 "),e("code",[_._v("open")]),_._v(" 状态之前会在这种状态下花费少量时间。必须在大型模型打开时恢复的工作在 "),e("code",[_._v("opening")]),_._v(" 状态下花费更多时间。启用操作员权限功能后，此设置只能由操作员用户更新。默认值为 "),e("code",[_._v("2")]),_._v("。")],1)])]),_._v(" "),e("h2",{attrs:{id:"高级机器学习设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级机器学习设置"}},[_._v("#")]),_._v(" 高级机器学习设置")]),_._v(" "),e("p",[_._v("这些设置适用于高级用例；默认值通常足够：")]),_._v(" "),e("ul",[e("li",[e("p",[e("code",[_._v("xpack.ml.enable_config_migration")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）保留。启用操作员权限功能后，此设置只能由操作员用户更新。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.max_anomaly_records")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）每个存储桶输出的最大记录数。默认值为 "),e("code",[_._v("500")]),_._v("。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.max_lazy_ml_nodes")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）延迟启动的机器学习节点的数量。在第一个机器学习作业打开之前不需要机器学习节点的情况下有用。如果机器学习节点的当前数量大于或等于此设置，则假设没有更多的空闲节点可用，因为已经提供了所需数量的节点。如果作业已打开，并且此设置的值大于零，并且没有节点可以接受该作业，则该作业将保持在 "),e("code",[_._v("OPENING")]),_._v(" 状态，直到将新的机器学习节点添加到集群，并将作业分配到该节点上运行。启用操作员权限功能后，此设置只能由操作员用户更新。默认值为 "),e("code",[_._v("0")]),_._v("。")],1),_._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[_._v("重要")]),_._v(" "),e("p",[_._v("此设置假定某些外部进程能够将机器学习节点添加到集群。此设置仅在与此类外部进程一起使用时有用。")])])]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.max_ml_node_size")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）支持自动集群扩展的部署中机器学习节点的最大节点大小。如果将其设置为未来机器学习节点的最大可能大小，则当机器学习作业分配给懒节点时，当缩放无法支持作业的大小时，它可以检查（并快速失败）。启用操作员权限功能后，此设置只能由操作员用户更新。默认值为 "),e("code",[_._v("0b")]),_._v("，这意味着将假设自动集群缩放可以向集群添加任意大的节点。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.persist_results_max_retries")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）处理机器学习结果时重试失败的批量索引请求的最大次数。如果达到限制，机器学习作业将停止处理数据，其状态为失败。启用操作员权限功能后，此设置只能由操作员用户更新。最小值为 "),e("code",[_._v("0")]),_._v("；最大值为 "),e("code",[_._v("50")]),_._v("。默认值为 "),e("code",[_._v("20")]),_._v("。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.process_connect_timeout")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）与 Elasticsearch JVM 分开运行的机器学习进程的连接超时。当这些进程启动时，它们必须连接到 Elasticsearch JVM。如果进程在该设置指定的时间段内未连接，则认为该进程已失败。启用操作员权限功能后，此设置只能由操作员用户更新。最小值为 "),e("code",[_._v("5s")]),_._v("。默认值为 "),e("code",[_._v("10s")]),_._v("。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("xpack.ml.use_auto_machine_memory_percent")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）如果此设置为true，则将忽略 "),e("code",[_._v("xpack.ml.max_machine_memory_percent")]),_._v(" 设置。相反，可以用于运行机器学习分析过程的机器内存的最大百分比是自动计算的，并考虑了节点的总大小和节点上 JVM 的大小。启用操作员权限功能后，此设置只能由操作员用户更新。默认值为 "),e("code",[_._v("false")]),_._v("。")],1),_._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[_._v("重要")]),_._v(" "),e("ul",[e("li",[_._v("如果没有专用的机器学习节点（也就是说，节点具有多个角色），请不要启用此设置。其计算假设机器学习分析是节点的主要目的。")]),_._v(" "),e("li",[_._v("计算假设专用机器学习节点在 JVM 外部至少保留了 "),e("code",[_._v("256MB")]),_._v(" 内存。如果集群中有微小的机器学习节点，则不应使用此设置。")])])]),_._v(" "),e("p",[_._v("如果此设置为 "),e("code",[_._v("true")]),_._v("，则还会影响 "),e("code",[_._v("xpack.ml.max_model_memory_limit")]),_._v(" 的默认值。在这种情况下，"),e("code",[_._v("xpack.ml.max_model_memory_limit")]),_._v(" 默认为当前集群中可以分配的最大大小。")])])]),_._v(" "),e("h2",{attrs:{id:"机器学习断路器设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#机器学习断路器设置"}},[_._v("#")]),_._v(" 机器学习断路器设置")]),_._v(" "),e("ul",[e("li",[e("p",[e("code",[_._v("breaker.model_inference.limit")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）训练模型断路器的限定。该值定义为 JVM 堆的百分比。默认为 "),e("code",[_._v("50%")]),_._v("。如果"),e("RouterLink",{attrs:{to:"/set_up_elasticsearch/configuring_elasticsearch/circuit_breaker_settings.html#父断路器"}},[_._v("父断路器")]),_._v("设置为小于 "),e("code",[_._v("50%")]),_._v(" 的值，则此设置将使用该值作为默认值。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("breaker.model_inference.overhead")])]),_._v(" "),e("p",[_._v("（"),e("RouterLink",{attrs:{to:"/rest_apis/cluster_apis/cluster_update_settings.html"}},[_._v("动态")]),_._v("）所有经过训练的模型估计值乘以确定最终估计值的常数。参阅"),e("RouterLink",{attrs:{to:"/set_up_elasticsearch/configuring_elasticsearch/circuit_breaker_settings.html"}},[_._v("断路器设置")]),_._v("。默认值为 "),e("code",[_._v("1")]),_._v("。")],1)]),_._v(" "),e("li",[e("p",[e("code",[_._v("breaker.model_inference.type")])]),_._v(" "),e("p",[_._v("("),e("a",{attrs:{href:"/set_up_elasticsearch/configuring_elasticsearch"}},[_._v("静态")]),_._v("断路器的基本类型。有两个有效的选项："),e("code",[_._v("noop")]),_._v(" 和 "),e("code",[_._v("memory")]),_._v("。"),e("code",[_._v("noop")]),_._v(" 意味着断路器不采取任何措施来防止过多的内存使用。"),e("code",[_._v("memory")]),_._v(" 意味着断路器跟踪训练模型使用的内存，并可能中断和防止内存溢出错误。默认值为 "),e("code",[_._v("memory")]),_._v("。")])])]),_._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/ml-settings.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("原文链接"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=v.exports}}]);