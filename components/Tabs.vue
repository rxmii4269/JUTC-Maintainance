<template>
    <b-tabs content-class="mt-3" justified pills card>
     <b-tab title="Mechanics">
         <Board tab="Mechanics" :key="componentKey+'-1'"/>
     </b-tab>
     <b-tab title="Electronics">
         <Board tab="Electronics" :key="componentKey+'-2'"/>
     </b-tab>
     <b-tab title="Custodian">
         <Board tab="Custodian" :key="componentKey+'-3'"/>
     </b-tab>
     
   </b-tabs>
</template>
<script>
export default {
    data(){
        return{
            componentKey:0,
        };
    },
    methods:{
        forceRerender(){
            this.componentKey +=1;
        }
    }
}
</script>