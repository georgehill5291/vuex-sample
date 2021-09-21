<template>
    <div class="">
        <div class="row p-0 mr-0">
            <div class="col-md-12 p-0">
                <div
                    class="d-flex justify-content-between align-items-center breaking-news bg-white"
                >
                    <div
                        class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"
                    >
                        <span class="d-flex align-items-center">&nbsp;CNN News</span>
                    </div>
                    <marquee
                        class="news-scroll"
                        behavior="scroll"
                        direction="left"
                        onmouseover="this.stop();"
                        onmouseout="this.start();"
                    >
                        <a href="#"
                            >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt mollit anim id est laborum.
                        </a>
                        <span class="dot"></span>
                        <a href="#"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut
                        </a>
                        <span class="dot"></span>
                        <a href="#"
                            >Duis aute irure dolor in reprehenderit in voluptate velit esse
                        </a>
                    </marquee>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RunningText'
}
</script>

<style scoped>
.news {
    width: 160px;
}

.news-scroll a {
    text-decoration: none;
}

.dot {
    height: 6px;
    width: 6px;
    margin-left: 3px;
    margin-right: 3px;
    margin-top: 2px !important;
    background-color: rgb(207, 23, 23);
    border-radius: 50%;
    display: inline-block;
}
</style>
