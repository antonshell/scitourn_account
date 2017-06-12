<template>
    <div>

        <center>

            <Top></Top>

            <br>

            <div id="telo">

                <img src="http://127.0.0.18/new/POvRH8TBswg.jpg" alt="Командные студенческие соревнования" width="842"
                     height="130" class='topimg'/>


                <div id="top">

                </div>

                <center>
                    <div style=" width:800px;">

                        <table id='signtable' style=" width:800px;">
                            <tr>
                                <td width="580px">
                                    <transition>
                                        <router-view></router-view>
                                    </transition>

                                </td>

                                <td width="220px">
                                    <Sidebar></Sidebar>
                                </td>
                            </tr>
                        </table>

                    </div>
                </center>

                <Banners></Banners>
            </div>

            <Bottom></Bottom>

        </center>

        <div>
            <p>
                <router-link to="/login">login</router-link>
                <router-link to="/register">register</router-link>
                <router-link to="/forget-password">forget-password</router-link>
            </p>

            <p>
                <router-link to="/">Home</router-link>
                <router-link to="/dashboard">dashboard</router-link>
                <router-link to="/tournaments">tournaments</router-link>
                <router-link to="/teams">teams</router-link>
                <router-link to="/profile">profile</router-link>
            </p>

            <transition>
                <router-view></router-view>
            </transition>

        </div>

    </div>
</template>

<script>

    //var themes = require('./../../themes/index.js');
    //import header from './../../themes/index.js';
    //import router from './../../router';


    import Banners from './Banners.vue';
    import Bottom from './Bottom.vue';
    import Top from './Top.vue';
    import Sidebar from './Sidebar.vue';

    export default {
        name: 'Layout',
        data () {
            return {
                msg: 'Layout'
            }
        },
        //router,
        components: { Bottom, Banners, Top, Sidebar }
    }
</script>
