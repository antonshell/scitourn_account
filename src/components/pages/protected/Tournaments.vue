<template>

    <div class="tournaments-wrapper">
        <!-- Future tourns -->
        <h3>Будущие турниры</h3>
        <p></p>

        <!--Tournament item-->
        <p>
            <a href="/account/tourns.php?id=28" class="tourn-link">
                II Приморский химический турнир школьников
            </a>
            <br>
            <span class="tourn-description">
                                        Заочный этап: 13 февраля - 13 марта 2017 года
                                        Очный этап: 24 марта 2017 года
                                        Проводится при поддержке ВХТШ на базе Дальневосточного федерального университета.
                                        Не является региональным этапом. Не даёт льгот при поступлении в вузы.
                                    </span>
            <br>
            <a href="/account/team.php?id=755">
                <input type="button" class="activebuttn tourn-action" value="Моя команда">
            </a>
        </p>
        <p></p>
        <!---->

        <!--Tournament item-->
        <p>
            <a href="/account/tourns.php?id=30" class="tourn-link">
                VIII Международный турнир естественных наук
            </a>
            <br>
            <span class="tourn-description"></span>
            <br>
            <a href="/account/team.php?id=756">
                <input type="button" class="activebuttn tourn-action" value="Моя команда"></a>
        </p>
        <p></p>

        <!--Past tourns-->
        <h3>Прошедшие турниры</h3>

        <!--Tournament item-->
        <p>
            <a href="/account/tourns.php?id=20" class="tourn-link">
                VII Международный турнир
                естественных наук, 2016, Санкт-Петербург (Русскоязычная лига)
            </a>
            <br>
            <span class="tourn-description">
                                        Ноябрь 2016, Санкт-Петербург.
                                    </span>
            <br>
        </p>
        <p></p>
        <!--Tournament item-->


        <!--Tournament item-->
        <p>
            <a href="/account/tourns.php?id=16" class="tourn-link">
                Екатеринбург. II Городской
                химический турнир школьников, 2015-2016 уч. год
            </a>
            <br>
            <span class="tourn-description">
                                    Екатеринбург. II Городской химический турнир школьников, 2015-2016 уч. год
                                </span>
            <br>
            <a href="/account/team.php?id=122">
                <input type="button" class="buttonuse tourn-action" value="Моя команда">
            </a>
        </p>
        <p></p>
        <!---->


        <!-- Tournament Item -->
        <p>
            <a href="/account/tourns.php?id=8" class="tourn-link">
                XI Всероссийский химический
                турнир школьников 2015
            </a>
            <br>
            <span class="tourn-description">13-16 марта 2015 года, Санкт-Петербург</span>
            <br>
            <a href="/account/tourns.php?id=8&part#part">
                <input type="button" class="buttonuse tourn-action" value="Я участвовал(а) в этом турнире">
            </a>
        </p>
        <p></p>
        <!---->
    </div>


</template>

<script>
    export default {
        name: 'tournaments',
        data () {
            return {
                msg: 'Tournaments'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
