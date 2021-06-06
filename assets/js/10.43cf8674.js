(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{334:function(t,s,a){"use strict";a.r(s);var v=a(33),_=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"二、异常日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、异常日志"}},[t._v("#")]),t._v(" 二、异常日志")]),t._v(" "),a("h2",{attrs:{id:"一-错误码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-错误码"}},[t._v("#")]),t._v(" (一) 错误码")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("【强制】错误码的制定原则：快速溯源、简单易记、沟通标准化。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("错误码想得过于完美和复杂，就像康熙字典中的生僻字一样，用词似乎精准，但是字典不容易随身携带并且简单易懂。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("正例：")]),t._v(" "),a("p",[t._v("错误码回答的问题是谁的错？错在哪？")]),t._v(" "),a("p",[t._v("1 ）错误码必须能够快速知晓错误来源，可快速判断是谁的问题。")]),t._v(" "),a("p",[t._v("2 ）错误码易于记忆和比对（代码中容易 equals）。")]),t._v(" "),a("p",[t._v("3 ）错误码能够脱离文档和系统平台达到线下轻量化地自由沟通的目的。")])])]),t._v(" "),a("li",[a("p",[t._v("【强制】错误码不体现版本号和错误等级信息。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("错误码以不断追加的方式进行兼容。错误等级由日志和错误码本身的释义来决定。")])])]),t._v(" "),a("li",[a("p",[t._v("【强制】全部正常，但不得不填充错误码时返回五个零： 00000 。")])]),t._v(" "),a("li",[a("p",[t._v("【强制】错误码为字符串类型，共 5 位，分成两个部分：错误产生来源+四位数字编号。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("错误产生来源分为 A/B/C，")]),t._v(" "),a("p",[t._v("A 表示错误来源于用户，比如参数错误，用户安装版本过低，用户支付超时等问题；")]),t._v(" "),a("p",[t._v("B 表示错误来源于当前系统，往往是业务逻辑出错，或程序健壮性差等问题；")]),t._v(" "),a("p",[t._v("C 表示错误来源于第三方服务，比如 CDN 服务出错，消息投递超时等问题；")]),t._v(" "),a("p",[t._v("四位数字编号从 0001 到 9999 ，大类之间的步长间距预留 100 ，参考文末 "),a("strong",[t._v("附表 3")]),t._v(" 。")])])]),t._v(" "),a("li",[a("p",[t._v("【强制】编号不与公司业务架构，更不与组织架构挂钩，一切与平台先到先申请的原则进行，审批生效，编号即被永久固定。")])]),t._v(" "),a("li",[a("p",[t._v("【强制】错误码使用者避免随意定义新的错误码。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("尽可能在原有错误码附表中找到语义相同或者相近的错误码在代码中使用即可。")])])]),t._v(" "),a("li",[a("p",[t._v("【强制】错误码不能直接输出给用户作为提示信息使用。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("堆栈（stack_trace）、错误信息(error_message)、错误码（error_code）、提示信息（user_tip）是一个有效关联并互相转义的和谐整体，但是请勿互相越俎代庖。")])])]),t._v(" "),a("li",[a("p",[t._v("【推荐】错误码之外的业务独特信息由 error_message 来承载，而不是让错误码本身涵盖过多具体业务属性。")])]),t._v(" "),a("li",[a("p",[t._v("【推荐】在获取第三方服务错误码时，向上抛出允许本系统转义，由 C 转为 B，并且在错误信息上带上原有的第三方错误码。")])]),t._v(" "),a("li",[a("p",[t._v("【参考】错误码分为一级宏观错误码、二级宏观错误码、三级宏观错误码。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("在无法更加具体确定的错误场景中，可以直接使用一级宏观错误码，分别是：A0001（用户端错误）、B0001（系统执行出错）、C0001（调用第三方服务出错）。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("正例：")]),t._v(" "),a("p",[t._v("调用第三方服务出错是一级，中间件错误是二级，消息服务出错是三级。")])])]),t._v(" "),a("li",[a("p",[t._v("【参考】错误码的后三位编号与 HTTP 状态码没有任何关系。")])]),t._v(" "),a("li",[a("p",[t._v("【参考】错误码尽量有利于不同文化背景的开发者进行交流与代码协作。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("英文单词形式的错误码不利于非英语母语国家（如阿拉伯语、希伯来语、俄罗斯语等）之间的开发者互相协作。")])])]),t._v(" "),a("li",[a("p",[t._v("【参考】错误码即人性，感性认知+口口相传，使用纯数字来进行错误码编排不利于感性记忆和分类。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("数字是一个整体，每位数字的地位和含义是相同的。")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("反例：")]),t._v(" "),a("p",[t._v("一个五位数字 12345 ，第 1 位是错误等级，第 2 位是错误来源， 345 是编号，人的大脑不会主动地分辨每位数字的不同含义。")])])])]),t._v(" "),a("h2",{attrs:{id:"二-异常处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-异常处理"}},[t._v("#")]),t._v(" (二) 异常处理")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("【强制】Java 类库中定义的可以通过预检查方式规避的 "),a("code",[t._v("RuntimeException")]),t._v(" 异常不应该通过 "),a("code",[t._v("catch")]),t._v(" 的方式来处理，比如："),a("code",[t._v("NullPointerException``，IndexOutOfBoundsException")]),t._v(" 等等。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("无法通过预检查的异常除外，比如，在解析字符串形式的数字时，可能存在数字格式错误，不得不通过 catch NumberFormatException 来实现。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("正例：")]),t._v(" "),a("p",[a("code",[t._v("if (obj != null) {...}")])])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("反例：")]),t._v(" "),a("p",[a("code",[t._v("try { obj.method(); } catch (NullPointerException e) {...}")])])])]),t._v(" "),a("li",[a("p",[t._v("【强制】异常不要用来做流程控制，条件控制。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("异常设计的初衷是解决程序运行中的各种意外情况，且异常的处理效率比条件判断方式要低很多。")])])]),t._v(" "),a("li",[a("p",[t._v("【强制】catch 时请分清稳定代码和非稳定代码，稳定代码指的是无论如何不会出错的代码。对于非稳定代码的 catch 尽可能进行区分异常类型，再做对应的异常处理。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("对大段代码进行 "),a("code",[t._v("try-catch")]),t._v("，使程序无法根据不同的异常做出正确的应激反应，也不利于定位问题，这是一种不负责任的表现。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("正例：")]),t._v(" "),a("p",[t._v("用户注册的场景中，如果用户输入非法字符，或用户名称已存在，或用户输入密码过于简单，在程序上作出分门别类的判断，并提示给用户。")])])]),t._v(" "),a("li",[a("p",[t._v("【强制】捕获异常是为了处理它，不要捕获了却什么都不处理而抛弃之，如果不想处理它，请将该异常抛给它的调用者。最外层的业务使用者，必须处理异常，将其转化为用户可以理解的内容。")])]),t._v(" "),a("li",[a("p",[t._v("【强制】事务场景中，抛出异常被 "),a("code",[t._v("catch")]),t._v(" 后，如果需要回滚，一定要注意手动回滚事务。")])]),t._v(" "),a("li",[a("p",[t._v("【强制】"),a("code",[t._v("finally")]),t._v(" 块必须对资源对象、流对象进行关闭，有异常也要做 "),a("code",[t._v("try-catch")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("如果 JDK7 及以上，可以使用 "),a("code",[t._v("try-with-resources")]),t._v(" 方式。")])])]),t._v(" "),a("li",[a("p",[t._v("【强制】不要在 "),a("code",[t._v("finally")]),t._v(" 块中使用 "),a("code",[t._v("return")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("try 块中的 return 语句执行成功后，并不马上返回，而是继续执行 finally 块中的语句，如果此处存在 return 语句，则在此直接返回，无情丢弃掉 try 块中的返回点。")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("反例：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkReturn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x等于 1 ，此处不返回")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回的结果是 2")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("li",[a("p",[t._v("【强制】捕获异常与抛异常，必须是完全匹配，或者捕获异常是抛异常的父类。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("如果预期对方抛的是绣球，实际接到的是铅球，就会产生意外情况。")])])]),t._v(" "),a("li",[a("p",[t._v("【强制】在调用 RPC、二方包、或动态生成类的相关方法时，捕捉异常必须使用 "),a("code",[t._v("Throwable")]),t._v(" 类来进行拦截。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("通过反射机制来调用方法，如果找不到方法，抛出 NoSuchMethodException。")]),t._v(" "),a("p",[t._v("什么情况会抛出 "),a("code",[t._v("NoSuchMethodError")]),t._v(" 呢？")]),t._v(" "),a("p",[t._v("二方包在类冲突时，仲裁机制可能导致引入非预期的版本使类的方法签名不匹配，或者在字节码修改框架（比如：ASM）动态创建或修改类时，修改了相应的方法签名。这些情况，即使代码编译期是正确的，但在代码运行期时，会抛出 "),a("code",[t._v("NoSuchMethodError")]),t._v("。")])])]),t._v(" "),a("li",[a("p",[t._v("【推荐】方法的返回值可以为 "),a("code",[t._v("null")]),t._v("，不强制返回空集合，或者空对象等，必须添加注释充分说明什么情况下会返回 "),a("code",[t._v("null")]),t._v(" 值。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("本手册明确防止 "),a("code",[t._v("NPE")]),t._v(" 是调用者的责任。即使被调用方法返回空集合或者空对象，对调用者来说，也并非高枕无忧，必须考虑到远程调用失败、序列化失败、运行时异常等场景返回 "),a("code",[t._v("null")]),t._v(" 的情况。")])])]),t._v(" "),a("li",[a("p",[t._v("【推荐】防止 NPE，是程序员的基本修养，注意 NPE 产生的场景：")]),t._v(" "),a("p",[t._v("1 ） 返回类型为基本数据类型，"),a("code",[t._v("return")]),t._v(" 包装数据类型的对象时，自动拆箱有可能产生 "),a("code",[t._v("NPE")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("反例：")]),t._v(" "),a("p",[a("code",[t._v("public int f() { return Integer对象}")]),t._v("， 如果为 "),a("code",[t._v("null")]),t._v("，自动解箱抛 "),a("code",[t._v("NPE")]),t._v("。")])]),t._v(" "),a("p",[t._v("2 ） 数据库的查询结果可能为 "),a("code",[t._v("null")]),t._v("。")]),t._v(" "),a("p",[t._v("3 ） 集合里的元素即使 "),a("code",[t._v("isNotEmpty")]),t._v("，取出的数据元素也可能为 "),a("code",[t._v("null")]),t._v("。")]),t._v(" "),a("p",[t._v("4 ） 远程调用返回对象时，一律要求进行空指针判断，防止 "),a("code",[t._v("NPE")]),t._v("。")]),t._v(" "),a("p",[t._v("5 ） 对于 "),a("code",[t._v("Session")]),t._v(" 中获取的数据，建议进行 "),a("code",[t._v("NPE")]),t._v(" 检查，避免空指针。")]),t._v(" "),a("p",[t._v("6 ） 级联调用 "),a("code",[t._v("obj.getA().getB().getC()")]),t._v("；一连串调用，易产生 "),a("code",[t._v("NPE")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("正例：")]),t._v(" "),a("p",[t._v("使用 JDK8 的 Optional 类来防止 NPE 问题。")])])]),t._v(" "),a("li",[a("p",[t._v("【推荐】定义时区分 "),a("code",[t._v("unchecked")]),t._v(" / "),a("code",[t._v("checked")]),t._v(" 异常，避免直接抛出 "),a("code",[t._v("new RuntimeException()")]),t._v("，更不允许抛出 "),a("code",[t._v("Exception")]),t._v(" 或者 "),a("code",[t._v("Throwable")]),t._v("，应使用有业务含义的自定义异常。推荐业界已定义过的自定义异常，如："),a("code",[t._v("DAOException")]),t._v(" / "),a("code",[t._v("ServiceException")]),t._v(" 等。")])]),t._v(" "),a("li",[a("p",[t._v("【参考】对于公司外的 http/api 开放接口必须使用“错误码”；而应用内部推荐异常抛出；跨应用间 RPC 调用优先考虑使用 "),a("code",[t._v("Result")]),t._v(" 方式，封装 "),a("code",[t._v("isSuccess()方法")]),t._v("、“"),a("code",[t._v("错误码")]),t._v("”、“"),a("code",[t._v("错误简短信息")]),t._v("”；而应用内部推荐异常抛出。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("关于 "),a("code",[t._v("RPC")]),t._v(" 方法返回方式使用 "),a("code",[t._v("Result")]),t._v(" 方式的理由：")]),t._v(" "),a("p",[t._v("1 ）使用抛异常返回方式，调用方如果没有捕获到就会产生运行时错误。")]),t._v(" "),a("p",[t._v("2 ）如果不加栈信息，只是 "),a("code",[t._v("new")]),t._v(" 自定义异常，加入自己的理解的 "),a("code",[t._v("error message")]),t._v("，对于调用端解决问题的帮助不会太多。如果加了栈信息，在频繁调用出错的情况下，数据序列化和传输的性能损耗也是问题。")])])]),t._v(" "),a("li",[a("p",[t._v("【参考】避免出现重复的代码（Don't Repeat Yourself），即 "),a("code",[t._v("DRY")]),t._v(" 原则。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("随意复制和粘贴代码，必然会导致代码的重复，在以后需要修改时，需要修改所有的副本，容易遗漏。")]),t._v(" "),a("p",[t._v("必要时抽取共性方法，或者抽象公共类，甚至是组件化。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("正例：")]),t._v(" "),a("p",[t._v("一个类中有多个 "),a("code",[t._v("public")]),t._v(" 方法，都需要进行数行相同的参数校验操作，这个时候请抽取：\n"),a("code",[t._v("private boolean checkParam(DTO dto) {...}")])])])])]),t._v(" "),a("h2",{attrs:{id:"三-日志规约"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-日志规约"}},[t._v("#")]),t._v(" (三) 日志规约")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("【强制】应用中不可直接使用日志系统（Log4j、Logback）中的 API，而应依赖使用日志框架（SLF4J、JCL--Jakarta Commons Logging）中的 API，使用门面模式的日志框架，有利于维护和各个类的日志处理方式统一。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("日志框架（SLF4J、JCL--Jakarta Commons Logging）的使用方式（推荐使用 SLF4J）\n使用 SLF4J：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slf4j")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" logger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("使用 JCL：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Log")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LogFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("li",[a("p",[t._v("【强制】所有日志文件至少保存 15 天，因为有些异常具备以“周”为频次发生的特点。对于当天日志，以“"),a("code",[t._v("应用名.log")]),t._v("”来保存，保存在"),a("code",[t._v("/home/admin/应用名/logs/</font>")]),t._v("目录下，过往日志格式为: "),a("code",[t._v("{logname}.log.{保存日期}")]),t._v("，日期格式："),a("code",[t._v("yyyy-MM-dd")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("以 mppserver 应用为例，日志保存在"),a("code",[t._v("/home/admin/mppserver/logs/mppserver.log")]),t._v("，历史日志名称为 "),a("code",[t._v("mppserver.log.2016-08-01")])])])]),t._v(" "),a("li",[a("p",[t._v("【强制】应用中的扩展日志（如打点、临时监控、访问日志等）命名方式："),a("code",[t._v("appName_logType_logName.log")]),t._v("。logType:日志类型，如 "),a("code",[t._v("stats/monitor/access")]),t._v(" 等；logName:日志描述。这种命名的好处：通过文件名就可知道日志文件属于什么应用，什么类型，什么目的，也有利于归类查找。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("推荐对日志进行分类，如将错误日志和业务日志分开存放，便于开发人员查看，也便于通过日志对系统进行及时监控。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("正例：")]),t._v(" "),a("p",[t._v("mppserver 应用中单独监控时区转换异常，如："),a("code",[t._v("mppserver_monitor_timeZoneConvert.log")])])])]),t._v(" "),a("li",[a("p",[t._v("【强制】在日志输出时，字符串变量之间的拼接使用占位符的方式。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("因为 "),a("code",[t._v("String")]),t._v(" 字符串的拼接会使用 "),a("code",[t._v("StringBuilder")]),t._v(" 的 "),a("code",[t._v("append()")]),t._v(" 方式，有一定的性能损耗。使用占位符仅是替换动作，可以有效提升性能。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("正例：")]),t._v(" "),a("p",[a("code",[t._v('logger.debug("Processing trade with id: {} and symbol: {}", id, symbol);')])])])]),t._v(" "),a("li",[a("p",[t._v("【强制】对于 "),a("code",[t._v("trace/debug/info")]),t._v(" 级别的日志输出，必须进行日志级别的开关判断。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("虽然在 debug(参数)的方法体内第一行代码 "),a("code",[t._v("isDisabled(Level.DEBUG_INT)")]),t._v("为真时（Slf4j 的常见实现 Log4j 和 Logback），就直接 "),a("code",[t._v("return")]),t._v("，但是参数可能会进行字符串拼接运算。此外，如果 "),a("code",[t._v("debug(getName())")]),t._v(" 这种参数内有 "),a("code",[t._v("getName()")]),t._v(" 方法调用，无谓浪费方法调用的开销。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("正例：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果判断为真，那么可以输出trace和debug级别的日志")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDebugEnabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Current ID is: {} and name is: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("li",[a("p",[t._v("【强制】避免重复打印日志，浪费磁盘空间，务必在 "),a("code",[t._v("log4j.xml")]),t._v(" 中设置 "),a("code",[t._v("additivity=false")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("正例：")]),t._v(" "),a("p",[a("code",[t._v('<logger name="com.taobao.dubbo.config" additivity="false">')])])])]),t._v(" "),a("li",[a("p",[t._v("【强制】生产环境"),a("strong",[t._v("禁止直接使用")]),t._v(" "),a("code",[t._v("System.out")]),t._v(" 或 "),a("code",[t._v("System.err")]),t._v(" 输出日志或使用 "),a("code",[t._v("e.printStackTrace()")]),t._v(" 打印异常堆栈。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("标准日志输出与标准错误输出文件每次 "),a("code",[t._v("Jboss")]),t._v(" 重启时才滚动，如果大量输出送往这两个文件，容易造成文件大小超过操作系统大小限制。")])])]),t._v(" "),a("li",[a("p",[t._v("【强制】异常信息应该包括两类信息：案发现场信息和异常堆栈信息。如果不处理，那么通过关键字 "),a("code",[t._v("throws")]),t._v(" 往上抛出。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("正例：")]),t._v(" "),a("p",[a("code",[t._v('logger.error(各类参数或者对象 toString() + "_" + e.getMessage(), e);')])])])]),t._v(" "),a("li",[a("p",[t._v("【强制】日志打印时禁止直接用 "),a("code",[t._v("JSON 工具")]),t._v("将对象转换成 "),a("code",[t._v("String")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("如果对象里某些 "),a("code",[t._v("get")]),t._v(" 方法被重写，存在抛出异常的情况，则可能会因为打印日志而影响正常业务流程的执行。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("正例：")]),t._v(" "),a("p",[t._v("打印日志时仅打印出业务相关属性值或者调用其对象的 "),a("code",[t._v("toString()")]),t._v("方法。")])])]),t._v(" "),a("li",[a("p",[t._v("【推荐】谨慎地记录日志。生产环境禁止输出 "),a("code",[t._v("debug")]),t._v(" 日志；有选择地输出 "),a("code",[t._v("info")]),t._v(" 日志；如果使用 "),a("code",[t._v("warn")]),t._v(" 来记录刚上线时的业务行为信息，一定要注意日志输出量的问题，避免把服务器磁盘撑爆，并记得及时删除这些观察日志。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("大量地输出无效日志，不利于系统性能提升，也不利于快速定位错误点。记录日志时请思考：这些日志真的有人看吗？看到这条日志你能做什么？能不能给问题排查带来好处？")])])]),t._v(" "),a("li",[a("p",[t._v("【推荐】可以使用 "),a("code",[t._v("warn")]),t._v(" 日志级别来记录用户输入参数错误的情况，避免用户投诉时，无所适从。如非必要，请不要在此场景打出 "),a("code",[t._v("error")]),t._v(" 级别，避免频繁报警。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("注意日志输出的级别，"),a("code",[t._v("error")]),t._v(" 级别只记录系统逻辑出错、异常或者重要的错误信息。")])])]),t._v(" "),a("li",[a("p",[t._v("【推荐】尽量用英文来描述日志错误信息，如果日志中的错误信息用英文描述不清楚的话使用中文描述即可，否则容易产生歧义。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),a("p",[t._v("国际化团队或海外部署的服务器由于字符集问题，使用全英文来注释和描述日志错误信息。")])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);