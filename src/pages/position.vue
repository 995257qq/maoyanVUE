<template>
    <section id="city-list" class="city-list-container" style="display: block;"> 
        <location-city title="定位城市">
            <item-city v-if="chunks.city">{{chunks.city.cityName}} </item-city>
        </location-city>
     <location-city title="热门城市">
            <item-city
            v-for="city in hotCitys"
            :key="city.id"
            @click.native="changeCity(city)"
            >{{city.name}} </item-city>
        </location-city>
       <app-citys></app-citys>
    </section>
     
</template>

<script>
import LocationCity from '@c/common/app-citys/LocationCity'
import ItemCity from '@c/common/app-citys/itemcity'
import AppCitys from '@c/common/app-citys/appcitys'
import {mapState} from 'vuex'
import {CHANGE_CITY} from '@/store/chunks/mutation-types'
export default {
        name:'position',
        components:{
            LocationCity,
            ItemCity,
             AppCitys
        },
       data () {
            return {
            
            hotCitys:[
                {id:12,name:'北京'},
                {id:11,name:'上海'},
                 
            ]
            }
        },
        computed:{
            ...mapState(['chunks']),
        },
        methods:{
            changeCity({id:cityId, name:cityName}){
                this.$store.commit({type:'chunks/'+CHANGE_CITY,city:{
                    cityId,cityName
                }})
            }
        },
        created:function () {
            this.$emit('isshow', false);
            
        }
    }

</script>
 
 
<style lang="scss" scoped>
 .city-list-container {
    display: none;
    background-color: #fafafa;;
    font-size: 14px;
    color: #333;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1000;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.city-title {
    padding-left: 15px;
    line-height: 30px;
}
.city-list-inline {
    background-color: #f5f5f5;
    padding-bottom: 8px;
}
.city-list {
    padding-right: 30px;
}
 .city-item,.location-city {
    float: left;
    background: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 4%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.location-city {
    width: auto;
    min-width: 30%;
    padding: 0 20px;
}
.clearfix:after {
    content: " ";
    display: table;
    clear: both;
}
</style>