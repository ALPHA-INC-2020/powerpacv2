<template>
    <div class="success-alert-container" v-if="isVisible">
        <div class="success_text">{{success_text}}</div>
        <div class="close_btn" @click="isVisible = false">close</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isVisible: true
        }
    },
    props: {
        success_text : {
            type: String,
            default: 'Success'
        }
    },
}
</script>

<style scoped>
.success-alert-container {
    width: 100%;
    height: 50px;
    margin: 10px 0px;
    background: rgba(34, 255, 0, 0.319);
    border-radius: 3px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    justify-content: space-between;
}
.close_btn{
    cursor: pointer;
}
</style>