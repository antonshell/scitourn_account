<template>
    <div id="menuaccount">
        <b>Здравствуйте, Антон!</b>
        <p>

            <!--<a href="/account">Турниры</a>-->

            <router-link to="/tournaments">Турниры</router-link>
        </p>
        <p>
            <!--<a href="/account/team.php">Мои команды</a>-->

            <router-link to="/teams">Мои команды</router-link>
        </p>

        <p>
            <!--<a href="/account/edit.php">Редактировать личные данные</a>-->

            <router-link to="/profile">Редактировать личные данные</router-link>
        </p>

        <p>
            <a href="/jury/auth/login-from-account">Участвовать в Жюри</a>
        </p>
        <p>
            <a href="https://loginza.ru/api/widget?token_url=http%3A%2F%2Fscitourn.ru%2Faccount%2Faddvk.php&provider=vkontakte"
               class="loginza">
                Привязать аккаунт для входа через ВКонтакте
            </a>
        </p>
        <p>
            <!--<a href="/account/index.php?logout">Выход</a>-->
            <router-link to="/logout">Выход</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'sidebar',
        data () {
            return {
                msg: 'Login'
            }
        }
    }
</script>
