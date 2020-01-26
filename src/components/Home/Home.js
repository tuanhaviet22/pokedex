
export default {
  name: 'home',
  components: {

  },
  props: [
    
  ],
  data () {
    return {
      info : null 
    }
  },
  computed: {

  },
  beforeCreate() {
    
  },
  created(){
    
  },
  mounted () {
     this.$axios
    .get(this.$api.pokeapi + 'pokemon?limit=10')
    .then(response => (this.info = response.data.results))
    .then( ()=> {
      this.info.forEach(item => {
        this.$axios
        .get(item.url)
        .then( function(res) {
          item.detail = res.data
          item.image = 'https://pokeres.bastionbot.org/images/pokemon/'+ res.data.id + ".png"
        })
      })
    })
  },
  beforeUpdate(){
    
  },
  updated(){
    
  },
  methods: {

  }
}


