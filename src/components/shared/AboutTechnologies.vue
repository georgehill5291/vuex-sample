<template>
    <section class="steps-wrapper bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-3">
                    <div class="step-wrapper">
                        <div class="step step-1">
                            <div class="step-name">Mongo</div>
                            <div class="step-title">
                                <i class="icon icon-customize"></i>Database
                            </div>

                            <div class="step-arrow"></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <div class="step-wrapper">
                        <div class="step step-2">
                            <div class="step-name">Express</div>
                            <div class="step-title">
                                <i class="icon icon-implement"></i>Express is a minimal and flexible
                                Node.js
                            </div>

                            <div class="step-arrow"></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <div class="step-wrapper">
                        <div class="step step-3">
                            <div class="step-name">Vue</div>
                            <div class="step-title"><i class="icon icon-optimize"></i>Fontend</div>

                            <div class="step-arrow"></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <div class="step-wrapper">
                        <div class="step step-4">
                            <div class="step-name">Node</div>
                            <div class="step-title">
                                <i class="icon icon-earn"></i>Node.js® is a JavaScript runtime built
                                on Chrome's V8 JavaScript engine.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style scoped>
.steps-wrapper .step-wrapper {
    width: 285px;
    height: 200px;
    margin: 0 auto;
}

.steps-wrapper .step {
    width: 10rem;
    height: 10rem;
    border: 0.3rem solid var(--white);
    background: #fff;
    box-shadow: 0 2px 17px 0 rgb(168 173 199 / 59%);
    border-radius: 1rem;
    font-size: 1rem;
    color: var(--white);
    padding: 1rem;
    text-align: center;
    margin: 0 auto;
    position: relative;
}

.steps-wrapper .step:before,
.steps-wrapper .step:after {
    content: '';
    width: 16rem;
    height: 2.5rem;
    position: absolute;
    left: -3.2rem;
}

.steps-wrapper .step .step-arrow {
    height: 0.4rem;
    width: 4rem;
    position: absolute;
    right: -7rem;
    top: 52%;
}

.steps-wrapper .step .step-arrow {
    height: 0.4rem;
    width: 4rem;
    position: absolute;
    right: -6rem;
    top: 52%;
    background: #fff;
}

@media (max-width: 768px) {
    .steps-wrapper .step .step-arrow {
        bottom: -4rem;
        top: auto;
        left: 50%;
        width: 0.4rem;
        height: 4rem;
    }
}

.steps-wrapper .step .step-title {
    font-size: 0.6rem;
    font-family: Lato-Black, sans-serif;
    text-transform: uppercase;
    margin-bottom: 1rem;
}

section {
    padding: 8rem 0;
}

.steps-wrapper .step-1 {
    background: #fc5732;
}

.steps-wrapper .step-2 {
    background: #7b3dd9;
}

.steps-wrapper .step-3 {
    background: #185aec;
}

.steps-wrapper .step-4 {
    background: #00b59a;
}
</style>
