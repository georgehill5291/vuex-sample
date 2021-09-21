<template>
    <div class="portal">
        <router-view name="leftNavbar" />
        <div class="portal-container">
            <router-view />
        </div>
    </div>
</template>

<style scoped lang="scss">
.portal {
    display: flex;
}

.portal-container {
    margin-top: 60px;
    flex: 1;

    float: left;
    width: 100%;
    padding: 0px 0px 0px 50px;
    min-height: 500px;
    background: #fafafb;
}

@media (min-width: 768px) {
    .portal-container.open {
        padding: 0px 0px 0px 200px;
    }
}
</style>
