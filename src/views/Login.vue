<template>
  <div class="login">
    <div class="container">
      <div class="avatar">
        <img src="@/assets/logo.png" alt="">
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" prefix-icon="iconfont icon-wode"  placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off" prefix-icon="iconfont icon-kouling"  placeholder="密码"></el-input>
        </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" class="login-btn">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/index.js'
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        console.log(this.ruleForm)
        if (valid) {
          // alert('submit!')
          login(this.ruleForm).then(res => {
            if (res.meta.status === 200) {
              console.log(res.meta.msg)
              this.$message({
                message: res.meta.msg,
                type: 'success'
              })
              this.$router.push({name: 'Home'})
            } else {
              console.log(res.meta.msg)
              this.$message({
                message: res.meta.msg,
                type: 'warning'
              })
            }
            console.log(res)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }

}
</script>

<style lang="scss" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;

  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    padding: 0px 40px 20px 40px;
    margin: 200px auto;
    background: white;
    border-radius: 10px;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: #fff;
      border: 10px solid #fff;
      box-shadow: 0 1px 6px #ccc;
      overflow: hidden;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
