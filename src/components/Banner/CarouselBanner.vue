<template>
    <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
    >
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img
                    class="d-block w-100"
                    src="https://g-node-test.s3.ap-southeast-1.amazonaws.com/3403b1df1d05d89c131f536cd6c52240-banner"
                    alt="First slide"
                />
            </div>
            <div class="carousel-item">
                <img
                    class="d-block w-100"
                    src="https://g-node-test.s3.ap-southeast-1.amazonaws.com/b4403d3364bf49e67fd6ea85c12d0850-banner"
                    alt="First slide"
                />
            </div>
            <div class="carousel-item">
                <img
                    class="d-block w-100"
                    src="https://g-node-test.s3.ap-southeast-1.amazonaws.com/3403b1df1d05d89c131f536cd6c52240-banner"
                    alt="First slide"
                />
            </div>
        </div>
        <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'CarouselBanner'
}

$(document).ready(function() {})
</script>

<style></style>
