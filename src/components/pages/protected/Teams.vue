<template>
    <div class="teams-wrapper">
        <b>Мои команды</b>

        <p>
            <a href="/account/team.php?id=117">Новая команда</a>
            <br>
            <span class="team-description"></span>
        </p>

        <p>
            <a href="/account/team.php?id=122">Тестовая команда2</a>
            <br>
            <span class="team-description">Екатеринбург. II Городской химический турнир школьников, 2015-2016 уч. год</span>
        </p>

        <p>
            <a href="/account/team.php?id=647">Test201611281855</a>
            <br>
            <span class="team-description">XIII Всероссийский химический турнир школьников, 2016-2017</span>
        </p>

        <p>
            <a href="/account/team.php?id=753">Test20170420</a>
            <br>
            <span class="team-description">
                
            </span>
        </p>

        <p>
            <a href="/account/team.php?id=755">Test20170420</a>
            <br>
            <span class="team-description">II Приморский химический турнир школьников</span>
        </p>

        <p>
            <a href="/account/team.php?id=756">Test20170420</a>
            <br><span class="team-description">
            VIII Международный турнир естественных наук</span>
        </p>

        <p></p>
    </div>
</template>

<script>
    export default {
        name: 'teams',
        data () {
            return {
                msg: 'Teams'
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
