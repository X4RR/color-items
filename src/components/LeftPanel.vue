<template>
  <div class="squares-left">
    <!-- Вывод заголовков List № -->
    <div class="list-temp" v-for="(list, i) in this.lists" :key="i">
      <div class="list-head">
        <input
          type="checkbox"
          @change="flip($event)"
          v-model="list.checked"
          :id="i"
        />
        {{ list.listTitle }}
        <hr />
      </div>
      <!-- Вывод items в листах -->
      <div v-if="list.isOpen">
        <div class="list-items" v-for="items in list.sublist" :key="items.id">
          <div class="left-side">
            <input type="checkbox" v-model="items.checked" />
            {{ items.title }}
          </div>
          <div class="right-side">
            <input type="number" min="1" max="10" v-model="items.amount" />
            <input type="color" v-model="items.color" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia';
import { itemStore } from './store';

export default {
  name: 'AppLeft',
  emits: ['some'],
  components: {},
  computed: {
    ...mapWritableState(itemStore, ['lists']),
  },
  methods: {
    //  Checked на дочерних айтемах
    flip(e) {
      let list = this.lists[e.target.id];
      list.sublist.forEach((item) => {
        console.log(item);
        item.checked = list.checked;
      });
      this.openItems(list);
    },
    openItems(list) {
      list.isOpen = !list.isOpen;
    },
  },
};
</script>

<style>
.squares-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: 45vw;
  border: 2px solid rgb(144, 144, 144);
  border-radius: 10px;
}
.list-temp {
  width: 95%;
  margin: 10px;
}
.list-head {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  border-bottom: 2px solid rgb(144, 144, 144);
}
.list-items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 30px;
  align-items: center;
  height: 30px;
  width: 80%;
  border-bottom: 2px solid rgb(107, 105, 105);
}
.left-side {
  display: flex;
  flex-direction: row;
  width: 30%;
}
.right-side {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 12px;

  & input {
    height: 30px;
    font-size: 12px;
    text-align: center;
    border: none;
    width: 30px;
    padding: 0;
    margin: 0;
  }
}
</style>
