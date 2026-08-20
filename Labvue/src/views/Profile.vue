<template>
  <div>

  <h3>6711130078 Poramet cheawchan</h3>
    <!-- ส่วนที่ 1: Profile & เครื่องคิดเลข -->
    My Profile
    <div>{{ msg }}</div>
    <input type="button" value="Click" @click="show()" />
    <div>{{ num }}</div>

    <div>A <input type="text" v-model="num_a" /></div>
    <div>
      <select v-model="op">
        <option v-for="item in ops" :key="item" :value="item">{{ item }}</option>
      </select>
    </div>
    <div>B <input type="text" v-model="num_b" /></div>

    <div
      :style="{
        color: num % 2 == 0 ? 'red' : 'blue',
        fontSize: num + 'em'
      }"
    >
      Sum
      {{
        op == "+"
          ? Number(num_a) + Number(num_b)
          : op == "-"
          ? Number(num_a) - Number(num_b)
          : op == "*"
          ? Number(num_a) * Number(num_b)
          : Number(num_a) / Number(num_b)
      }}
    </div>

    <div v-if="num % 2 == 0">เลขคู่</div>
    <div v-else>เลขคี่</div>

    <hr style="margin: 20px 0;" />

    <!-- ส่วนที่ 2: ตารางสูตรคูณ -->
    <div>
      <select v-model="selectedNum">
        <option v-for="n in nums" :key="n" :value="n">
          {{ n }}
        </option>
      </select>

      <table border="1" style="margin-top: 15px; border-collapse: collapse; width: 150px; text-align: center;">
        <tr v-for="i in 12" :key="i">
          <td style="padding: 5px;">{{ selectedNum }}x{{ i }}</td>
          <td style="padding: 5px;">{{ selectedNum * i }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // ค่าตัวแปรส่วนเดิม
      msg: "hello",
      num: 0,
      ops: ["+", "-", "*", "/"],
      op: "+",
      num_a: 0,
      num_b: 0,

      // ค่าตัวแปรสูตรคูณ
      selectedNum: 2,
      nums: [2, 3, 4, 5, 6],
    };
  },
  methods: {
    show() {
      this.msg = "MUT";
      this.num += 1;
      this.num_b = 650;
    },
  },
};
</script>