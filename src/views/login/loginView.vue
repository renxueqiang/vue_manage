<template>
  <div class="contain">
    <el-row class="row" align="middle">
      <el-col :span="10" :offset="2">
        <el-form :model="form" label-width="80px" :rules="rules" ref="ruleFormRef" :hide-required-asterisk="true">

          <div class="head">
            <h1>欢迎登录</h1>
            <h2>欢迎来到东方甄选</h2>
          </div>

          <el-form-item label="账号" prop="name">
            <el-input v-model="form.name" :prefix-icon="User"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password" :prefix-icon="Lock" type="password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="button" type="primary" @click="onSubmit(ruleFormRef)"
              :disabled="butonEnabled" :loading="butonLoad">登录</el-button>
          </el-form-item>
        </el-form>

      </el-col>
    </el-row>

  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { ref, reactive } from 'vue'
import useUserStore from '@/stores/user';
import { ElMessage ,ElNotification} from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router';

interface RuleForm {
  name: string
  password: string

}
const ruleFormRef = ref<FormInstance>()
const butonEnabled = ref<boolean>(true)
  const butonLoad = ref<boolean>(false)

const userStore = useUserStore()
const router = useRouter()
const form = ref<RuleForm>({ name: '', password: '' })

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3,  message: 'Length should be 3 to 5', trigger: 'change' },
  ],
  password: [
    {
      required: true,
      trigger: 'change',
      validator: (rule: any, value: any, callback: any) => {
        if (value.length >= 3) {
          callback();
          butonEnabled.value = false;
        } else {
          callback(new Error('密码长度至少六位'));
          butonEnabled.value = true;
        }
      }
    },
  ]
})

const onSubmit = async (formE: FormInstance | undefined) => {
  console.log(form.value.name, form.value.password, formE)
  butonLoad.value = true
  setTimeout(async ()=>{
    butonLoad.value = false
    let res = await userStore.userLogin({ username: form.value.name, password: form.value.password })
  if (res == 'ok') {
    console.log(11);
    router.push('/')
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: 'HI,你好'
    })
  } else {
    ElMessage.error(res)
  }
  }, 1000)

}

</script>

<style lang="scss" scoped>
.contain {

  .head {
    margin: 0 0 20px 80px;
  }

  .row {
    width: 100%;
    height: 100vh;

    .button {
      width: 100%;
    }
  }
}
</style>
