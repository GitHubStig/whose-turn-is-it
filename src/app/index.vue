<template>
  <div>
    <ol class="list-group">
      <li
        v-for="(person, index) in persons"
        :key="person.name"
        class="list-group-item"
        :class="{
          'active': person.active
        }"
        :data-index="index"
        @click="onPersonClick">
        <b>{{ index + 1 }}. {{ person.name }}</b>
      </li>
    </ol>
  </div>
</template>
<script src="./index.js"></script>
