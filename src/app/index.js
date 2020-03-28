export default {
  data() {
    return {
      persons: [
        { name: 'Colin', active: false },
        { name: 'Hye Won', active: false },
        { name: 'Elijah', active: true },
        { name: 'Anna', active: false },
        { name: 'Dick', active: false },
        { name: 'Tien Yu', active: false },
      ]
    }
  },
  mounted: function() {
    console.log('mounted')

    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowUp': {
          const activeIndex = this.persons.findIndex(person => person.active === true)
          if (activeIndex === -1) {
            return;
          }
          // 1. set the current element active to false
          this.persons[activeIndex].active = false;
          // 2. find the previous index, handle index 0
          const prevIndex = activeIndex === 0
            ? this.persons.length - 1
            : activeIndex - 1
          // 3. set the next person as active
          this.persons[prevIndex].active = true;
        } break;

        case 'ArrowDown': {
          const activeIndex = this.persons.findIndex(person => person.active === true)
          if (activeIndex === -1) {
            return
          }
          // 1. set the current element active to false
          this.persons[activeIndex].active = false;
          // 2. find the next index, handle end of array
          const nextIndex = activeIndex === this.persons.length - 1
            ? 0
            : activeIndex + 1
          // 3. set the next person as active
          this.persons[nextIndex].active = true;
        } break;
      }
    })
  },
  methods: {
    onPersonClick: function(e) {
      const targetIndex = e.target.dataset['index']
      if (targetIndex !== undefined) {
        this.persons.forEach(person => person.active = false)
        const index = parseInt(targetIndex)
        this.persons[index].active = true
      }
    }
  }
}
