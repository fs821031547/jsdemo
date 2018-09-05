// A.vue
export default {
  provide: {
    name: 'zs'
  }
}

// B.vue
export default {
  inject: ['name'],
  mounted() {
    console.log(this.name);  // zs
  }
}

// 替代 Vuex
// app.vue
  export default {
  provide() {
    return {
      app: this
    }
  },
  data() {
    return {
      userInfo: null
    }
  },
  methods: {
    getUserInfo() {
      // 这里通过 ajax 获取用户信息后，赋值给 this.userInfo，以下为伪代码
      $.ajax('/user/info', (data) => {
        this.userInfo = data;
      });
    }
  },
  mounted() {
    this.getUserInfo();
  }
}

// demo.vue
export default {
  inject: ['app'],
  methods: {
    changeUserInfo() {
      // 这里修改完用户数据后，通知 app.vue 更新，以下为伪代码
      $.ajax('/user/update', () => {
        // 直接通过 this.app 就可以调用 app.vue 里的方法
        this.app.getUserInfo();
      })
    }
  }
}

// mixin
// user.js
export default {
  data() {
    return {
      userInfo: null
    }
  },
  methods: {
    getUserInfo() {
      // 这里通过 ajax 获取用户信息后，赋值给 this.userInfo，以下为伪代码
      $.ajax('/user/info', (data) => {
        this.userInfo = data;
      });
    }
  },
  mounted() {
    this.getUserInfo();
  }
}

// app.vue
import mixins_user from './mixins/user.js';

export default {
  mixins: [mixins_user],
  data() {
    return {

    }
  }
}