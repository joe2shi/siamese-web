<template>
  <drag-verify-img-chip
    ref="sss"
    :isPassing.sync="verify"
    :showRefresh="true"
    :barWidth="40"
    :imgsrc="'siamese.ico'"
    :showTips="false"
    text="请按住滑块拖动"
    successText="验证通过"
    handlerIcon="el-icon-d-arrow-right"
    successIcon="el-icon-circle-check"
  >
    <v-icon>mdi-github</v-icon>
  </drag-verify-img-chip>
</template>

<script>
import DragVerifyImgChip from 'vue-drag-verify-img-chip'

export default {
  name: 'Verify',
  components: { DragVerifyImgChip },
  data: () => ({
    verify: false
  })
}
</script>
