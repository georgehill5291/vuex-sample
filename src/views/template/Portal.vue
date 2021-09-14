<template>
    <div class="portal">
        <h1>This is an portal template</h1>
        <router-view name="portal-nav" />
        <div class="portal-container">
            <router-view />
        </div>
    </div>
</template>
