export default {
  data() {
    return {
      persons: [
        { name: 'Bro Dick Khoo', active: false },
        { name: 'Sis Sock Inn Tan (Irene)', active: false },
        { name: 'Bro Tiem Yiu', active: false },
        { name: 'Sis Charmaine', active: false },
        { name: 'Bro Yeap', active: false },
        { name: 'Sis Pat', active: false },
        { name: 'Bro Wee Hee', active: false },
        // { name: 'Sis Pei Fei', active: false },
        // { name: 'Bro Joseph Teoh', active: false },
        { name: 'Bro Colin Peh', active: false },
        { name: 'Bro Aaron Chang', active: false },
        { name: 'Bro Chuah Lean Sneah', active: false },
        // { name: 'Bro Yew', active: false },
        // { name: 'Sis Joelynn', active: false },
        { name: 'Bro David Teoh', active: false },
        { name: 'Sis Anna', active: false },
        { name: 'Bro Teoh', active: false },
        // { name: 'Sis Guat Bee', active: false },
        { name: 'Sis Lim Beng Ee', active: false },
        { name: 'Sis Lay Hong', active: false },
        // { name: 'Sis Ma (Susan)', active: false },
        { name: 'Sis Mary', active: false },
        { name: 'Sis Ee Lin Teoh', active: false },
        { name: 'Sis Iris', active: false },
        { name: 'Sis Tai Pin', active: false },
        { name: 'Sis Hye Won', active: false },
        { name: 'Bro Elijah', active: false },
        { name: 'Bro Jonathan', active: false },
        // { name: 'Sis Rhymes', active: false },
        // { name: 'Sis Soon Ling', active: false },
      ]
    }
  },
  mounted: function () {
    console.log('mounted')

    document.addEventListener('keydown', (e) => {
      switch (e.key) {
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
    onPersonClick: function (e) {
      const targetIndex = e.target.dataset['index']
      if (targetIndex !== undefined) {
        const index = parseInt(targetIndex)
        const previousActiveValue = this.persons[index].active
        this.persons.forEach(person => person.active = false)
        this.persons[index].active = !previousActiveValue
      }
    }
  }
}
