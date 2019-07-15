<template>
  <div class="Home">
    <el-form label-width="100px">
      <el-form-item label="文件路径">
        <el-input v-model="filePath" placeholder="请输入.xcarchive 或者 .dSYM文件的路径"></el-input>
        <div v-if="filePath.length > 0">
          <!--<el-link :href="'file:///'+filePath">{{filePath}}</el-link>-->
          <el-button type="primary" plain @click="openFile" class="open-file">{{filePath}}</el-button>
        </div>
      </el-form-item>

      <el-form-item label="项目名">
        <el-button type="primary" plain>{{projectName}}</el-button>
      </el-form-item>

      <el-form-item label="剪贴板">
        <el-input type="textarea" :autosize="{ minRows: 10, maxRows: 20}" v-model="clipboard"></el-input>
      </el-form-item>

      <el-form-item label="结果">
        <el-input type="textarea" :autosize="{ minRows: 10, maxRows: 20}" v-model="result" class="result"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button style="width: 100%;" type="primary" @click="onSubmit">分析</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script type="text/ecmascript-6">

  import {mapMutations, mapActions, mapState, mapGetters} from 'vuex'

  let ss = ''

  export default {
    // props     : ['users'],
    // props     : {
    //   users: {
    //     type    : Array,
    //     required: true,
    //   },
    // },
    components: {},
    name      : 'Home',
    created() {console.log('%c%s', 'color:blue', 'Home.vue -: call created')},
    destroyed() {console.log('%c%s', 'color:blue', 'Home.vue -: call destroyed')},
    mounted() {console.log('%c%s', 'color:blue', 'Home.vue -: call mounted')},

    data() {
      return {
        filePath : '/Users/stone/git_repository/dSYM-template/dSYMList/FLG.xcarchive',
        clipboard: `*** -[__NSPlaceholderDictionary initWithObjects:forKeys:count:]: attempt to insert nil object from objects[2]
(null)
((
	0   CoreFoundation                      0x00000001a135feb8 &lt;redacted&gt; + 252
	1   libobjc.A.dylib                     0x00000001a0531a40 objc_exception_throw + 56
	2   CoreFoundation                      0x00000001a12d7470 _CFArgv + 0
	3   CoreFoundation                      0x00000001a125da60 &lt;redacted&gt; + 352
	4   CoreFoundation                      0x00000001a124e5a4 &lt;redacted&gt; + 64
	5   FLG                                 0x0000000104a7dc7c FLG + 367740
	6   FLG                                 0x0000000104a2b918 FLG + 31000
	7   FLG                                 0x0000000104a6cb2c FLG + 297772
	8   FLG                                 0x0000000104d77ea4 FLG + 3489444
	9   FLG                                 0x0000000104affc10 FLG + 900112
	10  UIKitCore                           0x00000001ce56ac10 &lt;redacted&gt; + 776
	11  UIKitCore                           0x00000001ce56a574 &lt;redacted&gt; + 596
	12  UIKitCore                           0x00000001ce57772c &lt;redacted&gt; + 3656
	13  UIKitCore                           0x00000001cddfbec0 &lt;redacted&gt; + 2432
	14  UIKitCore                           0x00000001cddf9a74 &lt;redacted&gt; + 772
	15  UIKitCore                           0x00000001cddf9720 &lt;redacted&gt; + 432
	16  UIKitCore                           0x00000001cddfe8e0 &lt;redacted&gt; + 220
	17  UIKitCore                           0x00000001cddff840 _performActionsWithDelayForTransitionContext + 112
	18  UIKitCore                           0x00000001cddfe798 &lt;redacted&gt; + 248
	19  UIKitCore                           0x00000001cde03684 &lt;redacted&gt; + 368
	20  UIKitCore                           0x00000001ce147090 &lt;redacted&gt; + 468
	21  FrontBoardServices                  0x00000001a3d956e4 &lt;redacted&gt; + 228
	22  libdispatch.dylib                   0x00000001a0d9a484 &lt;redacted&gt; + 16
	23  libdispatch.dylib                   0x00000001a0d713f0 &lt;redacted&gt; + 216
	24  FrontBoardServices                  0x00000001a3dd3a9c &lt;redacted&gt; + 40
	25  FrontBoardServices                  0x00000001a3dd3728 &lt;redacted&gt; + 416
	26  FrontBoardServices                  0x00000001a3dd3d44 &lt;redacted&gt; + 56
	27  CoreFoundation                      0x00000001a12f01cc &lt;redacted&gt; + 24
	28  CoreFoundation                      0x00000001a12f014c &lt;redacted&gt; + 88
	29  CoreFoundation                      0x00000001a12efa30 &lt;redacted&gt; + 176
	30  CoreFoundation                      0x00000001a12ea8fc &lt;redacted&gt; + 1040
	31  CoreFoundation                      0x00000001a12ea1cc CFRunLoopRunSpecific + 436
	32  GraphicsServices                    0x00000001a3561584 GSEventRunModal + 100
	33  UIKitCore                           0x00000001ce561054 UIApplicationMain + 212
	34  FLG                                 0x0000000104af78a8 FLG + 866472
	35  libdyld.dylib                       0x00000001a0daabb4 &lt;redacted&gt; + 4
)

dSYM UUID: D8E64333-1FC7-3849-9300-637927C3681F
CPU Type: arm64
Slide Address: 0x0000000100000000
Binary Image: FLG
Base Address: 0x0000000104a24000`,
        result   : '',
      }
    },
    /** methods */
    methods : {
      openFile() {
        console.log('Home.vue:47 -: call openFile')
        alert('hello world')
      },
      onSubmit() {
        // console.log('submit!')

        // this.$axios.get('http://jsonplaceholder.typicode.com/posts').then(({data}) => {
        //   let posts = data
        //   this.setState(({data}) => {
        //     return {
        //       data: data.set('posts', posts),
        //     }
        //   })
        // }).catch((err) => {
        //   console.log(`\x1b[41m${err}\x1b[0m`)
        // })

        this.$axios.post('/api/analyse', this.$qs.stringify({
          filePath : this.filePath,
          clipboard: this.clipboard,
        })).then((resp) => {
          console.log(resp.data)
          this.result = resp.data.msg
        })

      },

    },
    /** computed */
    computed: {
      projectName() {
        return this.filePath.substring(this.filePath.lastIndexOf('/') + 1).split('.')[0]
      },
    },
    watch   : {
      // clipboard(newValue, oldValue) {
      //
      //   // console.log('【rightpanel.vue:84】-:', newValue, oldValue)
      //   this.clipboardCopy = newValue;
      //
      // },
    },
    filters : {
      clipboardFormat(data) {
        if (data) {
          let [m] = data.match(/(?<=Base Address:) 0x[0-9a-zA-Z]{16}/)
          return m.trim()
        }
        return data
      },
    },
    //  directives: {
    //    // 使用方法: https://cn.vuejs.org/v2/guide/custom-directive.html#ad
    //    height: {
    //      inserted(el, binding, vnode, oldVnode){
    //        console.log('【index.vue:21】-:', 'el = ', el);
    //        console.log('【index.vue:22】-:', 'binding = ', binding);
    //      }
    //    }
    //  },
  }
</script>

<!--cnpm i -D less less-loader stylus stylus-loader node-sass sass-loader-->
<!--<style scoped lang="less" rel="stylesheet/less">-->
<!--<style scoped lang="stylus" rel="stylesheet/stylus">-->
<style scoped lang="scss" rel="stylesheet/scss">

  // @import "../common/stylus/mixin.styl"

  .Home {
    /* important code */
    height  : 100%;
    padding : 20px;

    .commander {
      color       : #1ABC9C;
      font-weight : bold;
      font-size   : 18px;
    }

    .open-file {
      font-family : "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-size   : 22px;
      width       : 100%;
      text-align  : left;
      font-weight : 200;
    }

    .open-file-text {

      vertical-align : bottom;
    }

    .textarea {
      width     : 100%;
      height    : 300px;
      font-size : 20px;
    }

    .result {
      font-size : 18px;
    }

  }
</style>
<!--// { parser: "babylon" } is deprecated; we now treat it as { parser: "babel" }.-->
<!--// npm i vue-loader@14 来修复-->

