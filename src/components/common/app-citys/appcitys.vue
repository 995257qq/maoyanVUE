<template>
     
        <mt-index-list>
            <mt-index-section 
                v-for = "(value,key) in cities"
                :key  = "key"
                :index= "key"
            >
                <mt-cell
                    v-for = "city in value"
                    :key  = "city.id"
                    :title= "city.name" 
                     @click.native="changeCity(city)"
                ></mt-cell>
            </mt-index-section>
        </mt-index-list>
     
</template>

<script>
import { IndexList, IndexSection, Cell } from 'mint-ui'
  import {cities} from '@util'
 import {mapState} from 'vuex'
 import {CHANGE_CITY} from '@/store/chunks/mutation-types'
export default {
    components: {
        [IndexList.name]: IndexList,
        [IndexSection.name]: IndexSection,
        [Cell.name]: Cell
    },
    /* async beforeCreate () {
        let result = await this.$http({
            url: '/position/v4/api/city'
        })
        this.citys = result.data.cities
        console.log( this.citys)
    }, */
    /* data () {
        return {
            citys: []
        }
    }, */
    computed: {
        ...mapState(['chunks']),
        cities () {
            return  cities(this.chunks.cities)
        }
    },
     methods:{
            changeCity({id:cityId, name:cityName}){
                this.$store.commit({type:'chunks/'+CHANGE_CITY,city:{
                    cityId,cityName
                }})
            }
        },
}
</script>

<style lang="scss">
    .app-city-content {

    }
</style>

