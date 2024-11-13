(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{341:function(t,s,n){"use strict";n.r(s);var a=n(25),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),s("h2",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),s("h3",{attrs:{id:"typeof-操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typeof-操作符"}},[t._v("#")]),t._v(" typeof 操作符")]),t._v(" "),s("p",[t._v("检测数据类型的操作符，可返回的下列某个"),s("strong",[t._v("字符串")])]),t._v(" "),s("ul",[s("li",[t._v('"undefined"值未定义')]),t._v(" "),s("li",[t._v('"boolean"值是布尔值')]),t._v(" "),s("li",[t._v('"string"值是字符串')]),t._v(" "),s("li",[t._v('"number"值是数值')]),t._v(" "),s("li",[t._v('"object"值是对象或者是null')]),t._v(" "),s("li",[t._v('"function"值是函数')])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("1.typeof 返回的是一个字符串"),s("br"),t._v('\n2.除了函数以外,typeof检测引用类型返回的都是"object"'),s("br"),t._v('\n3.null是一个空对象,所以也是返回"object"')])]),t._v(" "),s("h3",{attrs:{id:"undefined-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undefined-类型"}},[t._v("#")]),t._v(" Undefined 类型")]),t._v(" "),s("p",[t._v("Undefined只有一个特殊undefined类型，声名但未对其初始化的变量值就是undefined。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("我们直接去调用一个未声名的变量会报错"),s("br"),t._v("\n例如：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("console.log(unknownData)` // 产生错误  \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("但是对为声名的变量调用typeof会返回undefined"),s("br"),t._v("\n例如：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("console.log(typeof unknownData) // undefined\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("h3",{attrs:{id:"null-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null-类型"}},[t._v("#")]),t._v(" Null 类型")]),t._v(" "),s("p",[t._v("Null类型也只有一个特殊数据类型null，表示一个"),s("strong",[t._v("空对象指针")]),s("br"),t._v("\nnull的值是派生自null的值")]),t._v(" "),s("h3",{attrs:{id:"boolean-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boolean-类型"}},[t._v("#")]),t._v(" Boolean 类型")]),t._v(" "),s("p",[t._v("Boolean只有两个字面量的值"),s("strong",[t._v("true")]),t._v("和"),s("strong",[t._v("false")]),t._v("，虽然Boolean类型只有两个字面量的值，但是所有类型的值有与这两个值等价的值。"),s("br"),t._v("\n要将一个值转换为其对应的Boolean值，可以调用转型函数"),s("code",[t._v("Boolean()")]),t._v("。下表给出了各种数据类型及其对应的转换规则:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("数据类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("转换为true的值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("转换为false的值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("任何非空字符")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v('" "(空字符串)')])]),t._v(" "),s("tr",[s("td",[t._v("Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("任何非零数字值(包括无穷大)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0和NaN")])]),t._v(" "),s("tr",[s("td",[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("任何对象")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("null")])]),t._v(" "),s("tr",[s("td",[t._v("Undefined")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("n/a(不适用)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")])])])]),t._v(" "),s("h3",{attrs:{id:"number-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number-类型"}},[t._v("#")]),t._v(" Number 类型")]),t._v(" "),s("p",[s("strong",[t._v("NaN")]),t._v("（非数值）"),s("br"),t._v("\n是一个特殊的数值，表示一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误）。"),s("br"),t._v("\n例如：任何数值除以非数值会返回NaN。"),s("br"),t._v("\nNaN有两个非同寻常的特点：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("任何涉及NaN的操作都会返回NaN（例如NaN/10）")])]),t._v(" "),s("li",[s("strong",[t._v("NaN和任何值都不相等，包括NaN本身")])])]),t._v(" "),s("p",[t._v("针对这两个特点，定义了"),s("code",[t._v("isNaN()")]),t._v("函数，用来确定一个变量是否“"),s("strong",[t._v("不是数值")]),t._v("”。"),s("br"),t._v("\nisNaN收到参数后，会尝试将这个值转换为数值。某些不是数值的值会直接转换为数值，例如字符串“10”或Boolean值。不能被转换为数值的值会导致这个函数返回true.\n例：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false 10是数值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//false "10"被转化为数值10')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//true "blue"不能被转化为数值')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//false true被转化为数值1")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("isNaN也适用于对象。基于对象调用isNaN()时，首先会调用对象的valueOf()\n方法，然后确定该方法的返回值能否转化为数值，如果不能，再基于这个返回值调用同String()方法，再测试返回值。这也是内置函数和操作符的一般执行流程，更详细内容见操作符")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("浮点数值的最高精度是17位小数，在进行算数计算时精度远远不如整数"),s("br"),t._v("\n例如0.1+0.2结果不是0.3，而是0.30000000000000004。因此，永远不要测试某个特定的浮点数值。\n例如：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'got 0.3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])]),t._v(" "),s("p",[s("strong",[t._v("数值转换")]),s("br"),t._v("\n有3个函数可以把非数值转换为数值："),s("br"),t._v(" "),s("code",[t._v("Number()")]),t._v(" 可以用于任何数据类型，转换规则如下：")]),t._v(" "),s("ul",[s("li",[t._v("如果是Boolean值，true和false分别转化为1和0。")]),t._v(" "),s("li",[t._v("如果是数值，只是简单传入和返回。")]),t._v(" "),s("li",[t._v("如果时null,返回0。")]),t._v(" "),s("li",[t._v("如果是undefined，返回NaN。")]),t._v(" "),s("li",[t._v("如果是字符串，遵循以下规则：\n"),s("ul",[s("li",[t._v("字符串中只包含数字，将其转换为十进制数值。")]),t._v(" "),s("li",[t._v("字符串中包含有效浮点格式，将其转换为对应浮点数值。")]),t._v(" "),s("li",[t._v("字符串中包含有效十六进制格式，将其转换为相同大小十进制整数值。")]),t._v(" "),s("li",[t._v("字符串是空的，将其转换为0。")]),t._v(" "),s("li",[t._v("字符串包含除上述格式之外的字符，将其转换为NaN。")])])]),t._v(" "),s("li",[t._v("如果是对象，调用对象的valueOf()方法，然后依照前面的规则转换返回的值。如果转换的结果是NaN,则调用对象的toString()\n方法，然后再次依照前面的规则转换反回的字符串值。")])]),t._v(" "),s("p",[s("code",[t._v("parseInt()")]),t._v(" 处理整数时更常用parseInt()"),s("br"),t._v("\nparseInt()在转换字符串时，更多是看其是否符合数值模式。"),s("br"),t._v("\n他会忽略字符串前面的空格，直到找到第一个非空格字符：")]),t._v(" "),s("ul",[s("li",[t._v("如果不是数字字符或者负号，返回NaN。因此parseInt()转换空字符串会返回NaN（Number()转换空字符串返回0）")]),t._v(" "),s("li",[t._v("如果是数字字符，parseInt()会继续解析第二个字符，直到解析完所有后续字符或遇到了一个非数值字符。")]),t._v(" "),s("li",[t._v('parseInt()也能识别整数格式，例如"0x"开头且后跟数字字符的十六进制，"0"开头且跟数字字符的八进制。\n例如：')])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//NaN")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  1234blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//转化为1234，前面空格被忽略，blue被忽略")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//转化为22，因为.并不是有效数字字符")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xA"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//10(十六进制数) ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"070"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//56(八进制数)，但是存在分歧")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("ECMAScript 3 和ECMAScript 5 对八进制解析存在分歧"),s("br"),t._v(" "),s("code",[t._v('parseInt("070")')]),s("br"),t._v("\nECMAScript 3认为是八进制 转换为56。"),s("br"),t._v("\nECMAScript 5已不再具有解析八进制值的能力，前导的零被认为无效，认为是十进制，转换为70。")])]),t._v(" "),s("p",[t._v("为了消除上述困惑，这个函数提供了第二个参数：转换时使用基数（转换进制）。例如：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xAF"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//175")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AF"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//175，指定了16作为第二个参数，前面的"0x"可以忽略')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("指定不同基数会影响转换结果")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2 二进制")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//8 八进制")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//10 十进制")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//16 十六进制")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("因此建议任何情况下都明确指定基数"),s("br"),t._v(" "),s("code",[t._v("parseFloat()")]),s("br"),t._v("\n和parseInt()类似，不同点：")]),t._v(" "),s("ul",[s("li",[t._v("第一个小数点有效，第二个小数点无效")]),t._v(" "),s("li",[t._v("始终会忽略前导的零")]),t._v(" "),s("li",[t._v("只解析十进制数，没有第二个参数")]),t._v(" "),s("li",[t._v("如果包含可解析为整数的数，则返回整数（没有小数点或小数点后是0）")])]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"12345blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1234 整数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xA"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"22.5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//22.5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"22.23.5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//22.23")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0908.5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//908.5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFloat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.125e7"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//31250000")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"string-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#string-类型"}},[t._v("#")]),t._v(" String 类型")]),t._v(" "),s("p",[t._v("定义没啥好写的，就是字符串 🤣"),s("br"),t._v(" "),s("strong",[t._v("转换为字符串")]),s("br"),t._v(" "),s("code",[t._v("toString()")]),t._v("方法"),s("br"),t._v("\n几乎每个值都有toString()方法，包括数值，布尔值，字符串值，但null和undefined没有这个方法。\n多数情况下，toString()方法不必传参数，但是在数值调用toString()方法时，可以传入一个基数参数，时期输出对应的字符串，例如：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"10')]),t._v("\nnumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"1010"')]),t._v("\nnumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"12"')]),t._v("\nnumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"10"')]),t._v("\nnumber"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"a"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("如果不确定转换的数值是不是null或者undefined，可以使用String()方法，可以使任何类型的值转换为字符串，规则如下：")]),t._v(" "),s("ul",[s("li",[t._v("值有toString()方法，调用toString()")]),t._v(" "),s("li",[t._v('值是null,反回"null"，值是undefined返回"undefined"')])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"10"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"true"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"null"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"undefined"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"object-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-类型"}},[t._v("#")]),t._v(" Object 类型")]),t._v(" "),s("p",[t._v("对象就是数据和功能的集合。可使用new操作符后跟要创建的对象类型来创建，如果不给构造函数传递参数，可以省略后面的括号，但是不推荐。例如：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不推荐")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Object的每个"),s("strong",[t._v("实例")]),t._v("都具有以下属性和方法：")]),t._v(" "),s("ul",[s("li",[t._v("constructor:保留用于创建当前对象的函数。")]),t._v(" "),s("li",[t._v("hasOwnProperty(propertyName):检查指定的属性在当前实例中（而不是在实例原型中）是否存在。propertyName必须是字符串形式")]),t._v(" "),s("li",[t._v("isPrototypeOf(object):检查传入的对象是否是当前对象的原型。")]),t._v(" "),s("li",[t._v("propertyIsEnumerable(propertyName):检查指定的属性是否能够使用for-in来枚举。")]),t._v(" "),s("li",[t._v("toLocaleString():返回对象的字符串表示，该字符串与执行唤醒的地区对应。")]),t._v(" "),s("li",[t._v("toString():返回对象的字符串表示。")]),t._v(" "),s("li",[t._v("valueOf():返回对象的字符串、数值或布尔值表示。通常与toString()方法返回值相同。\n后面再详细介绍Object和其它对象关系。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);