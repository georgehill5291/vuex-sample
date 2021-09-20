<template>
    <div class="portal">
        <router-view name="leftNavbar" />
        <div class="portal-container">
            <router-view />
        </div>
    </div>
</template>

<style scoped>
.portal {
    display: flex;
}
.portal-container {
    margin-top: 60px;
    display: flex;
    flex: 1;
}
</style>
