题目
v-show 与 v-if 区别？
绑定 class 的数组用法？
计算属性和 watch 的区别？
事件修饰符？
组件中 data 为什么是函数？
keep-alive 的理解？
递归组件的要求？
自定义组件的语法糖 v-model 是怎样实现的？
Vuex 中 mutations 和 actions 的区别？
Render 函数？
分析
v-show 与 v-if 区别？
第一题应该是最简单的，提这个问题，也是想让候选人不那么紧张，因为但凡用过 Vue.js，多少知道 v-show 和 v-if 的区别，否则就没得聊了。不过这最简单的一道题，有三个层次，我会逐一追问。首先，基本所有人都会说到：

v-show 只是 CSS 级别的 display: none; 和 display: block; 之间的切换，而 v-if 决定是否会选择代码块的内容（或组件）。

回答这些，已经可以得到 50 分了，紧接着我会追问，什么时候用 v-show，什么时候用 v-if ？到这里一部分人会比较吞吐，可能是知道，但表达不出来。我比较倾向的回答是：

频繁操作时，使用 v-show，一次性渲染完的，使用 v-if，只要意思对就好。

第二问可以得到 80 分了，最后一问很少有人能答上：那使用 v-if 在性能优化上有什么经验？这是一个加分项，要对 Vue.js 的组件编译有一定的理解。说一下我期望的答案：

因为当 v-if="false" 时，内部组件是不会渲染的，所以在特定条件才渲染部分组件（或内容）时，可以先将条件设置为 false，需要时（或异步，比如 $nextTick）再设置为 true，这样可以优先渲染重要的其它内容，合理利用，可以进行性能优化。

绑定 class 的数组用法？
动态绑定 class 应该不陌生吧，这也是最基本的，但是这个问题却有点绕，什么叫绑定 class 的数组用法？我们看一下，最常用的绑定 class 怎么写：

<template>
  <div :class="{show: isShow}">内容</div>
</template>
<script>
  export default {
    data () {
      return {
        isShow: true
      }
    }
  }
</script>
绑定 class 的对象用法能满足大部分业务需求，不过，在复杂的场景下，会用到数组，来看示例：

<template>
  <div :class="classes"></div>
</template>
<script>
  export default {
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.type}`,
          {
            [`${prefixCls}-long`]: this.long,
            [`${prefixCls}-${this.shape}`]: !!this.shape,
            [`${prefixCls}-${this.size}`]: this.size !== 'default',
            [`${prefixCls}-loading`]: this.loading != null && this.loading,
            [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
            [`${prefixCls}-ghost`]: this.ghost
          }
        ];
      }
    }
  }
</script>
示例来自 iView 的 Button 组件，可以看到，数组里，可以是固定的值，还有动态值（对象）的混合。

计算属性和 watch 的区别？
回答该题前，一般都会思考一下。很多人会偏题，直接去答计算属性和 watch 怎么用，这是不得分的，因为题目是问区别，并不是用法。

计算属性是自动监听依赖值的变化，从而动态返回内容，监听是一个过程，在监听的值变化时，可以触发一个回调，并做一些事情。

所以区别来源于用法，只是需要动态值，那就用计算属性；需要知道值的改变后执行业务逻辑，才用 watch，用反或混用虽然可行，但都是不正确的用法。

这个问题会延伸出几个问题：

computed 是一个对象时，它有哪些选项？
computed 和 methods 有什么区别？
computed 是否能依赖其它组件的数据？
watch 是一个对象时，它有哪些选项？
这里不做深入解释，后面的文章会针对计算属性和 watch 详细介绍。

事件修饰符？
这个问题我会先写一段代码：

<custom-component>内容</custom-component>
然后问：怎样给这个自定义组件 custom-component 绑定一个原生的 click 事件？

我一开始并不会问什么是事件修饰符，但是如果候选人说 <custom-component @click="xxx">，就已经错了，说明它对这个没有概念。这里的 @click 是自定义事件 click，并不是原生事件 click。绑定原生的 click 是这样的：

<custom-component @click.native="xxx">内容</custom-component>
该问题会引申很多，比如常见的事件修饰符有哪些？如果你能说上 .exact，说明你是个很爱探索的人，会大大加分哦（后面我们会专门写文章来介绍 .exact 修饰符）。

组件中 data 为什么是函数？
为什么组件中的 data 必须是一个函数，然后 return 一个对象，而 new Vue 实例里，data 可以直接是一个对象？

因为组件是用来复用的，JS 里对象是引用关系，这样作用域没有隔离，而 new Vue 的实例，是不会被复用的，因此不从在引用对象的问题。

keep-alive 的理解？
这是个概念题，主要考察候选人是否知道这个用法。简单说，就是把一个组件的编译缓存起来。更详细的说明可以直接看 Vue.js 的文档。

递归组件的要求？
回答这道题，首先你得知道什么是递归组件。而不到 10% 的人知道递归组件。其实在实际业务中用的确实不多，在独立组件中会经常使用。比如 iView 中的 Cascader 组件：

iView Cascader 组件
iView Cascader 组件

每一列都是递归的，因为你不知道有多少列。那回到问题，递归组件的要求是什么？主要有两个：

要给组件设置 name
要有一个明确的结束条件
具体的意思，就需要去查阅 Vue.js 文档啦。

自定义组件的语法糖 v-model 是怎样实现的？
我们用的很多 iView 的表单组件，比如 Input、Radio 等，都用到了 v-model。这里的 v-model，并不是给普通输入框 <input /> 用的那种 v-model，而是在自定义组件上使用。既然是语法糖，就能够还原，我们先还原一下：

<template>
  <div>
    {{ currentValue }}
    <button @click="handleClick">Click</button>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        currentValue: this.value
      }
    },
    methods: {
      handleClick () {
        this.currentValue += 1;
        this.$emit('input', this.currentValue);
      }
    },
    watch: {
      value (val) {
        this.currentValue = val;
      }
    }
  }
</script>
这个组件中，只有一个 props，但是名字叫 value，内部还有一个 currentValue，当改变 currentValue 时，会触发一个自定义事件 @input，并把 currentValue 的值返回。这就是一个 v-model 的语法糖，它要求 props 有一个叫 value 的项，同时触发的自定义事件必须叫 input。这样就可以在自定义组件上用 v-model 了：

<custom-component v-model="value"></custom-component>
Vuex 中 mutations 和 actions 的区别？
主要的区别是，actions 可以执行异步。actions 是调用 mutations，而 mutations 来修改 store。

Render 函数？
这是比较难的一题了，因为很少有人会去了解 Vue.js 的 Render 函数，因为基本用不到。
遇到这个问题，一般可以从这几个方面来回答：

什么是 Render 函数，它的使用场景是什么。
createElement 是什么？
Render 函数有哪些常用的参数？
说到 Render 函数，就要说到虚拟 DOM（Virtual DOM）,Virtual DOM 并不是真正意义上的 DOM，而是一个轻量级的 JavaScript 对象，在状态发生变化时，Virtual DOM 会进行 Diff 运算，来更新只需要被替换的 DOM，而不是全部重绘。

它的使用场景，就是完全发挥 JavaScript 的编程能力，有时需要结合 JSX 来使用。

createElement 是 Render 函数的核心，它构成了 Vue Virtual DOM 的模板，它有 3 个参数：

  createElement () {
    // {String | Object | Function}
    // 一个 HTML 标签，组件选项，或一个函数
    // 必须 return 上述其中一个
    'div',
      // {Object}
      // 一个对应属性的数据对象，可选
      // 您可以在 template 中使用
      {
      // 详细的属性
    },
      // {String | Array}
      // 子节点（VNodes），可选
      [
      createElement('h1', 'hello world'),
      createElement(MyComponent, {
        props: {
          someProps: 'foo'
        }
      }),
      'bar'
    ]
  }
常用的参数，主要是指上面第二个参数里的值了，这个比较多，得去看 Vue.js 的文档。

对于 Render 函数的内容非常多，这里不展开，后面的文章有机会我们单独分析。

总结
以上就是我面试中经常问的 10 个 Vue.js 小题，你 get 到了吗？简单的题目，往往能反映出对技术理解的深度，在学习 Vue.js 时也一样，要深入研究，仔细阅读文档，不能只会用，还要用的对，用的好。