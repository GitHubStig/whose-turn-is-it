<template>
  <div>
    <ol class="list-group">
      <li
        v-for="(person, index) in persons"
        :key="person.name"
        :class="{
          'list-group-item': true,
          'active': person.active
        }"
        :data-index="index"
        @click="onPersonClick">
        {{ person.name }}
      </li>
    </ol>
  </div>
</template>
<script src="./index.js"></script>
