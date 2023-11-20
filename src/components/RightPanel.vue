<template>
  <div class="squares-right">
    <!-- Вывод заголовков List № -->
    <div v-for="(list, i) in this.lists" :key="i">
      <div class="items-head">
        {{ list.listTitle }}
        <button class="shuffButton" @click="list.shuffled = !list.shuffled">
          {{ buttonText(list) }}
        </button>
      </div>
      <!-- Блок отображающийся если цвета не перемешаны -->
      <div class="square-group" v-show="!list.shuffled">
        <div class="item-list" v-for="(item, k) in checkedItems(list)" :key="k">
          <div v-for="i in item.amount" :key="i">
            <div
              class="color-square"
              @dblclick="decreaseColor(item)"
              :style="{ backgroundColor: item.color }"
            ></div>
          </div>
        </div>
      </div>
      <!-- Если перемешаны -->
      <div class="square-array" v-show="list.shuffled">
        <div v-for="(item, i) in arrayItems(list)" :key="i">
          <div
            class="color-square"
            @dblclick="decreaseColor(item)"
            :style="{ backgroundColor: item.color }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { mapWritableState } from 'pinia';
import { itemStore } from './store';
export default {
  name: 'AppList',
  emits: ['some'],
  components: {},
  computed: {
    ...mapStores(itemStore),
    ...mapWritableState(itemStore, ['lists']),
  },
  methods: {
    // Удаление квадратов и инпутов цветов
    decreaseColor(item) {
      if (item.amount > 1) {
        item.amount--;
      }
    },
    buttonText(list) {
      if (list.shuffled) {
        return 'Сортировка!';
      }
      return 'Перемешка!';
    },
    // Поиск отмеченных айтемов
    checkedItems(list) {
      let res = [];
      list.sublist.forEach((item) => {
        if (item.checked) {
          res.push(item);
        }
      });
      return res;
    },
    arrayItems(list) {
      let res = this.checkedItems(list);
      let fin = [];
      res.forEach((item) => {
        for (let i = 0; i < item.amount; i++) {
          fin.push(item);
        }
        this.shuffleItems(fin);
      });
      return fin;
    },
    // Перемешка
    shuffleItems(fin) {
      for (let i = fin.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [fin[i], fin[j]] = [fin[j], fin[i]];
      }
      return fin;
    },
  },
};
</script>

<style>
.squares-right {
  display: flex;
  width: 50vw;
  padding: 10px;
  flex-direction: column;
  border: 2px solid rgb(144, 144, 144);
  border-radius: 10px;
}
.item-list {
  display: flex;
  flex-direction: row;
  width: fit-content;
  gap: 1px;
  flex-wrap: wrap;
}
.items-head {
  display: flex;
  margin-bottom: 5px;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid rgb(144, 144, 144);
}
.square-group {
  display: flex;
  flex-direction: column;
}
.color-square {
  display: flex;
  margin: 1px;
  width: 30px;
  height: 30px;
}

.square-array {
  display: flex;
  gap: 1px;
  flex-wrap: wrap;
}

.shuffButton {
  margin-left: 40%;
  margin-bottom: 1px;
  padding: 2px;
}
</style>
