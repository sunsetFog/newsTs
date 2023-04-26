<template>
    <section>
        <button @click="waterWay">路由跳转</button>
    </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();


function waterWay() {
    router.push('/interface');
}

</script>
  
<style scoped></style>