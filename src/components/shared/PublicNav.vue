<template>
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div class="d-flex align-items-center justify-content-between w-100">
            <button
                class="navbar-toggler navbar-toggler-left x collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand mx-auto ml-lg-5" href="/">
                G-Vue
            </a>
        </div>
        <div class="collapse navbar-collapse mr-lg-5" id="navbarText">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/blogs" class="nav-link">Blog</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'PublicNav'
}
</script>

<style scoped>
/*---Standar Hamburger Menu (3 separate elements)---*/
.navbar-toggler {
    border: none;
    background: transparent !important;
}

.navbar-toggler:hover {
    background: transparent !important;
}
.navbar-toggler .icon-bar {
    height: 2px;
    width: 22px;
    border-radius: 1px;
    display: block;
    background-color: #b6b6b6;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}

.navbar-toggler .icon-bar + .icon-bar {
    margin-top: 4px;
}

/*---Animation menu (create X)---*/
.navbar-toggler.x .icon-bar:nth-of-type(1) {
    -webkit-transform: translateX(3px) rotate(45deg); /* Safari 3-8 & Chrome 4-35 & Opera 15-22 */
    -ms-transform: translateX(3px) rotate(45deg); /* IE 9 */
    -moz-transform: translateX(3px) rotate(45deg); /* Firefox 3-15 */
    -o-transform: translateX(3px) rotate(45deg); /* Opera 10-14 */
    transform: translateX(3px) rotate(45deg);

    -webkit-transform-origin: 10% 10%;
    -ms-transform-origin: 10% 10%;
    -moz-transform-origin: 10% 10%;
    -o-transform-origin: 10% 10%;
    transform-origin: 10% 10%;
}

.navbar-toggler.x .icon-bar:nth-of-type(2) {
    opacity: 0;
    filter: alpha(opacity=0); /* For IE8 and earlier */
    -moz-opacity: 0; /* Older Firefox 1 */
}

.navbar-toggler.x .icon-bar:nth-of-type(3) {
    -webkit-transform: translateX(3px) rotate(-45deg);
    -ms-transform: translateX(3px) rotate(-45deg);
    -moz-transform: translateX(3px) rotate(-45deg);
    -o-transform: translateX(3px) rotate(-45deg);
    transform: translateX(3px) rotate(-45deg);

    -webkit-transform-origin: 10% 90%;
    -ms-transform-origin: 10% 90%;
    -moz-transform-origin: 10% 90%;
    -o-transform-origin: 10% 90%;
    transform-origin: 10% 90%;
}

.navbar-toggler.x.collapsed .icon-bar:nth-of-type(1) {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    -moz-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
}

.navbar-toggler.x.collapsed .icon-bar:nth-of-type(2) {
    opacity: 1;
    filter: alpha(opacity=100);
    -moz-opacity: 1;
}

.navbar-toggler.x.collapsed .icon-bar:nth-of-type(3) {
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    -moz-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
}

/*---To center elements of the navbar (mobile)---*/

.navbar-brand {
    font-size: 1rem;
}

/*---Custom AnimateCSS mobile menu items---*/
.nav-item {
    -webkit-animation-duration: 0; /* Chrome 3-42 & Safari 4-8 & Opera 15-29 */
    -moz-animation-duration: 0.8s; /* Firefox 5-15 */
    -o-animation-duration: 0.8s; /* Opera 12-14 */
    animation-duration: 0;
}

@media only screen and (max-width: 991px) {
    #navbarText {
        height: 100vh !important;
    }
}

@media only screen and (min-device-width: 992px) {
    .animated {
        /*CSS transitions*/
        -o-transition-property: none !important;
        -moz-transition-property: none !important;
        -ms-transition-property: none !important;
        -webkit-transition-property: none !important;
        transition-property: none !important;
        /*CSS transforms*/
        -o-transform: none !important;
        -moz-transform: none !important;
        -ms-transform: none !important;
        -webkit-transform: none !important;
        transform: none !important;
        /*CSS animations*/
        -webkit-animation: none !important;
        -moz-animation: none !important;
        -o-animation: none !important;
        -ms-animation: none !important;
        animation: none !important;
    }

    #navbarText {
        height: auto;
    }
}
</style>
