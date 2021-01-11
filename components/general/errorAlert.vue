<template>
    <div class="error-alert-container" v-if="isVisible">
        <div class="error_text">{{error_text}}</div>
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
        error_text : {
            type: String,
            default: 'An error occur'
        }
    },
}
</script>

<style scoped>
.error-alert-container {
    width: 100%;
    height: 50px;
    margin: 10px 0px;
    background: rgba(255, 0, 0, 0.319);
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