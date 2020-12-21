<template>
    <b-card></b-card>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            default: 'title',
            required: true
        },
        id:{
            type: Number,
            default:0
        },
        status:{
            type: String,
            default: 'Todo',
            required: true
        },
        assignee:{
            type: String,
            default:""
        },
        assigner:{
            type: String,
            default:""
        },
        comments:{
            type: Array,
            default(){
                return {comments:[]}
            }
        }
    }
}
</script>