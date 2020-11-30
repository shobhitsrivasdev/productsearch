<template>
  <div class="cards">
    <img :src="imageUrl" alt="" width="100%" height="60%" />
    <div class="brand">
      <b>{{ brand }}</b>
    </div>
    <div class="info">{{ info }}</div>
    <div class="others">
      <div class="mrp">
        <b> ₹ {{ mrp }}</b>
      </div>
      <div class="price">
        <strike> ₹ {{ price }}</strike>
      </div>
      <div class="discount">{{ discount }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    imageUrl: String,
    brand: String,
    info: String,
    mrp: Number,
    price: Number,
    discount: String,
  },
};
</script>
<style>
.cards {
  width: 100%;
  height: 100%;
  background-color: lightgray;
  border: 2px solid black;
}
.others {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
</style>
