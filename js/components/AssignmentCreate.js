export default {
  template: `
    <form @submit.prevent="add">
      <div class="border border-gray-600 text-black flex rounded-md mt-3">
        <input required v-model="newAssignment" placeholder="New assignment..." class="p-2 w-full bg-amber-50"/>
        <div>
          <input required v-model="newTag" placeholder="Tag name..." class="border-l-4 p-2 w-full bg-amber-50"/>
        </div>
        <button type="submit" class="p-2 border-l bg-amber-50 opacity-90">Add</button>
      </div>
    </form>
  `,

  data() {
    return {
      newAssignment: "",
      newTag: "",
    };
  },

  methods: {
    add() {
      this.$emit("add", this.newAssignment, this.newTag);

      this.newAssignment = "";
      this.newTag = "";
    },
  },
};
