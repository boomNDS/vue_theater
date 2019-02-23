<template>
  <div>
    <div class="container is-centered is-fluid">
      <div class="cover">
        <h1 class="title is-3 has-text-left">รายการสั่งซื้อทั้งหมด</h1>
        <div class="notification">
          <div class="content">
            <div class="block" style="padding:0 10%;">
              <article class="message is-warning">
                <div class="message-header">
                  <h3>ประเภทที่นั่ง Premium Chair</h3>
                </div>
                <div class="message-body">
                  <div class="columns">
                    <div class="column">
                      <h4 class="has-text-left">No.</h4>
                    </div>
                    <div class="column">
                      <h4 class="has-text-right">{{"ราคาที่นั่งรวม "+cost+" THB"}}</h4>
                    </div>
                  </div>
                  <div>
                   <div class="columns" style="border-radius: 2%">
                    <div class="column">
                      <h4 class="has-text-left">ราคารวมสุทธิ</h4>
                    </div>
                    <div class="column">
                      <h4 class="has-text-right">{{cost+" THB"}}</h4>
                    </div>
                   </div>
                  </div>
                </div>
              
              </article>
              <div class="block">
                <a href class="button is-success">ตกลง</a>
                <a href class="button is-danger">ยกเลิก</a>
              </div>
            </div>
            <div class="block"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "payment",
  data: function() {
    return {
      cost: 0
    };
  },
  methods: {}
};
</script>

<style scoped>
.container {
  margin-top: 10%;
}
.content {
  background: white;
  padding: 2% 8%;
  border-radius: 1.5%;

}
.notification{
  border-radius: 1.5%;
}
</style>

