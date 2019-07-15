<template>
  <div class="index">
    <h1>hello <b>index</b></h1>
    <hr>

    <section>
      <h2>请输入工程路径</h2>
      <input id="project-path" type="text" v-model="projectPath" placeholder="$HOME/git_repository/tbkClientIos/FanliApp/Litaoyouxuan">
      <p>{{projectPath}}</p>
    </section>

    <section>
      <h2>1: 从git仓库复制工程到mix目录下</h2>
      <p style="color: red;">记得删除 README.md 和 test 目录</p>
      <button @click="fuzhi">Click me</button>
    </section>

    <section>
      <h2>2: 工程目录扁平化</h2>
      <button @click="bianpinghua">Click me</button>
    </section>

    <section>
      <h2>3: 图片压缩 & 更改文件名</h2>
      <p style="color: red;">耗时较长 耐心等待...</p>
      <button @click="yasuo">Click me</button>
    </section>

    <section>
      <h2>4: URL加密</h2>
      <p style="color: red;">必须是英文</p>
      <label for="keyString">keyString: </label><input id="keyString" type="text" v-model="keyString">
      <br />
      <label for="ivString">ivString: </label><input id="ivString" type="text" v-model="ivString">
      <br />
      <button @click="jiami">Click me</button>
    </section>

    <section>
      <h2>5: 修改类名</h2>
      <label for="original">original: </label><input id="original" type="text" v-model="original">
      <p>↓</p>
      <label for="newone">newone: </label><input id="newone" type="text" v-model="newone">
      <br />
      <button @click="changeClassName">Click me</button>
    </section>

    <section>
      <h2>6: 生成垃圾代码</h2>
      <label for="folderName">folderName: </label><input id="folderName" type="text" v-model="folderName">
      <br />
      <label for="parameterName">parameterName: </label><input id="parameterName" type="text" v-model="parameterName">
      <br />
      <label for="objectMethodName">objectMethodName: </label><input id="objectMethodName" type="text" v-model="objectMethodName">
      <br />
      <label for="classMethodName">classMethodName: </label><input id="classMethodName" type="text" v-model="classMethodName">
      <br />

      <button @click="spamCodeOut">Click me</button>
    </section>

    <section>
      <h2>7: 修改项目名</h2>
      <label for="pOriginal">pOriginal: </label><input id="pOriginal" type="text" v-model="pOriginal">
      <p>↓</p>
      <label for="pNewone">pNewone: </label><input id="pNewone" type="text" v-model="pNewone">
      <br />
      <button @click="changeProjectName">Click me</button>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    // props     : ['users'],
    // props     : {
    //   users: {
    //     type    : Array,
    //     required: true,
    //   },
    // },

    components: {},
    name      : 'index',
    data() {
      return {
        projectPath     : '$HOME/git_repository/tbkClientIos/FanliApp/Litaoyouxuan',
        keyString       : 'xiangmuming',
        ivString        : 'xiangmuming',
        original        : 'YJ',
        newone          : 'KKK',
        pOriginal       : 'Litaoyouxuan',
        pNewone         : 'LiLiCoupon',
        folderName      : 'YJCategories',
        parameterName   : 'YJLog',
        objectMethodName: 'toolFunction',
        classMethodName : 'typeFunction',
      }
    },
    /** methods */
    methods   : {
      fuzhi() {
        this.$axios.post(`/api/fuzhi`, this.$qs.stringify({ projectPath: this.projectPath })).then(res => {
          this.$message({ message: res.data, type: 'success' })
        })
      },
      jiami() {
        this.$axios.post(`/api/jiami`, this.$qs.stringify({
          projectPath: this.projectPath,
          keyString  : this.keyString,
          ivString   : this.ivString,
        })).then(res => {
          this.$message({ message: res.data })
        })
      },
      bianpinghua() {
        this.$axios.post(`/api/bianpinghua`, this.$qs.stringify({ projectPath: this.projectPath })).then(res => {
          this.$message({ message: res.data })
        })
      },
      yasuo() {
        this.$axios.post(`/api/yasuo`, this.$qs.stringify({ projectPath: this.projectPath })).then(res => {
          this.$message({ message: res.data })
        })
      },
      changeClassName() {
        this.$axios.post(`/api/changeClassName`, this.$qs.stringify({
          projectPath: this.projectPath,
          original   : this.original,
          newone     : this.newone,
        })).then(res => {
          this.$message({ message: res.data })
        })
      },
      changeProjectName() {
        this.$axios.post(`/api/changeProjectName`, this.$qs.stringify({
          projectPath: this.projectPath,
          pOriginal  : this.pOriginal,
          pNewone    : this.pNewone,
        })).then(res => {
          this.$message({ message: res.data })
        })
      },
      spamCodeOut() {
        this.$axios.post(`/api/spamCodeOut`, this.$qs.stringify({
          projectPath     : this.projectPath,
          folderName      : this.folderName,
          parameterName   : this.parameterName,
          objectMethodName: this.objectMethodName,
          classMethodName : this.classMethodName,
        })).then(res => {
          this.$message({ message: res.data })
        })
      },

    },
    /** computed */
    computed  : {},
    /** watch */
    watch     : {},

    created() {

    },

    mounted() {

    },
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../assets/styles/global";

  .index {
    //@include center;
    width  : 100%;
    height : 100%;

    #project-path {
      width   : 80%;
      padding : 0;
      margin  : 0;
      height  : 30px;
    }

    section {
      padding    : 10px;
      box-shadow : 0 0 0 1px #CCC inset;

      h2 {
        padding : 8px;
      }
    }

    button {
      box-shadow : 0 0 0 1px #CCC inset;
      height     : 30px;
    }
  }

</style>
