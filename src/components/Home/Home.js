export default {
  name: 'home',
  components: {

  },
  props: [

  ],
  data() {
    return {
      info: []
    }
  },
  computed: {

  },

  created() {
    // this.getList()
  },
  mounted() {
    const vm = this;
    this.$axios
      .get(this.$api.pokeapi + 'pokemon?limit=100')
      .then(function (res) {
        res.data.results.forEach(item => {
          vm.$axios
            .get(item.url)
            .then(function (resp) {
              item.detail = resp.data
              item.image = 'https://pokeres.bastionbot.org/images/pokemon/'+ resp.data.id + ".png"
              vm.info.push(item)
            })
        })
      })
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
    // getList: function () {
    //   const vm = this
    //   this.$axios
    //     .get(this.$api.pokeapi + 'pokemon?limit=10')
    //     .then(response => (vm.info = response.data.results));
    // },
    // loadDetail: function () {
    //   this.info.forEach(item => {
    //     var detailUrl = item.url
    //     this.$axios.get(detailUrl).then(res => {
    //       item.detail = res.data
    //     });
    //     // item['detail'] = this.getDetail(detailUrl);
    //     // console.log(this.getDetail(detailUrl))
    //   })
    // },
    // getDetail: function (url) {

    //   this.$axios.get(url).then(res => {
    //     this.temp = res.data
    //   });
    //   return this.temp
  },
  // mapDetailToInfo: function (res) {
  //   this.info = this.info.map(item => {
  //     item.detail = res
  //   })
  //   this.info = res
  // }
  // handleData : function(){
  //   this.$set(this.info)
  // }
  // }
}