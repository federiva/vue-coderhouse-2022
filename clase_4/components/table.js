Vue.component('table-component', {
  props: {
    title: String,
    data: Array,
    params: Object,
  },
  methods: {
    getTableClass: function() {
      return `table ${this.getClass("table")}`
    },
    getTableHeaders: function() {
      const headers = new Set();
      this.data.forEach(row => {
        Object.keys(row).map(header => {
          headers.add(header.toUpperCase());
        });
      });[]
      return [...headers]
    },
    getValue: function(value, key) {
      const hasEntry = this._paramsHasEntry(key);
      if (hasEntry) {
        const fieldType = this.params[key].fieldType;
        if (fieldType === "img") {
          return `<img src=${value}></img>`
        } else if (fieldType === "boolean") {
          return value ? `<i class="bi bi-check-lg"></i>` : `<i class="bi bi-x-lg"></i>`
        } else if (fieldType === "link") {
          return `<a href="${value}" target="_blank">Link</a>`
        } 
      }
      return value
    },
    getClass: function(key) {
      const hasEntry = this._paramsHasEntry(key);
      let classValue = "";
      if (hasEntry) {
        classValue = this.params[key].class ? this.params[key].class : "";
      }
      return classValue
    },
    _paramsHasEntry: function(key) {
      return this.params[key] ? true : false;
    },
  },
  template: `
    <div class="table-wrapper">
      <h3 class="table-header">{{title}}</h3>
      <hr>
      <table :class="getTableClass()">
        <thead>
          <tr>
            <th scope="col" v-for="(header,index) of getTableHeaders()" :key="index">{{header}}</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="col" v-for="(row, index) of data" :key="index">
            <td v-for="(value, key, j) in row" :key="j" :class=getClass(key) v-html="getValue(value, key)">
            </td>
          </tr>
        </tbody>
        <tfoot v-if="hasFooter" v-html="params.tablaFooter">
          
        </tfoot>
    
      </table>
    </div>
  `,
  data: function() {
    return {
      hasFooter: this.params.tablaFooter ? true : false,
    }
  },
  computed: {
  }
})
