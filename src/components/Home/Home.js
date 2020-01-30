export default {
  name: 'home',
  components: {

  },
  props: [

  ],
  data() {
    return {
      info: null
    }
  },
  watch : {
    info(){
      this.loadDetail()
    }
  },
  computed: {
   
  },
 
  created() {
    this.getList()
  },
  mounted() {
    //  this.$axios
    // .get(this.$api.pokeapi + 'pokemon?limit=10')
    // .then(response => (this.info = response.data.results))
    // .then( ()=> {
    //   this.info.forEach(item => {
    //     this.$axios
    //     .get(item.url)
    //     .then( function(res) {
    //       item.detail = res.data
    //       item.image = 'https://pokeres.bastionbot.org/images/pokemon/'+ res.data.id + ".png"
    //     })
    //   })
    // })
  },
  beforeUpdate() {

  },
  updated() {

  },
  methods: {
    getList: function () {
      const vm = this
      this.$axios
        .get(this.$api.pokeapi + 'pokemon?limit=10')
        .then(response => (vm.info = response.data.results));
    },
    loadDetail: function () {
      this.info.forEach(item => {
        var detailUrl = item.url
        this.getDetail(detailUrl)
      })
    },
    getDetail: function (url) {
      this.$axios.get(url).then(res => {     
        this.mapDetailToInfo(res.data)
      })
    },
    mapDetailToInfo: function (res) {
      this.info = this.info.map(item => {
        item.detail = res
      })
      this.info = res
    }
    // handleData : function(){
    //   this.$set(this.info)
    // }
  }
}