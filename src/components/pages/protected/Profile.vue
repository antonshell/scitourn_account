<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <form method="post" action="/account/edit.php">
        <!--<a name="vk"></a>-->
        <table id="signtable1">
            <tbody>
            <tr>
                <td width="200px"></td>
                <td><b>Личные данные</b></td>
            </tr>


            <tr class="profile-form-row">
                <td>Полное имя на<br>русском языке</td>
                <td>
                    <table id="nonet" class="profile-form-row">
                        <tbody>
                        <tr>
                            <td>
                                <input v-model="surname" type="text" name="surname" class="profile-input-120">
                            </td>
                            <td>
                                <input v-model="name" type="text" name="name" class="profile-input-90" value="Антон">
                            </td>
                            <td>
                                <input v-model="secondname" type="text" name="secondname" value="Александрович">
                            </td>
                        </tr>
                        <tr class="podskazka">
                            <td>Фамилия</td>
                            <td>Имя</td>
                            <td>Отчество</td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>


            <tr class="profile-form-row">
                <td>Полное имя на английском языке</td>
                <td>
                    <table id="nonet">
                        <tbody>
                        <tr>
                            <td>
                                <input v-model="surname_en" type="text" name="surname_en" value="Shelyganov">
                            </td>
                            <td>
                                <input v-model="name_en" type="text" name="name_en" value="Anton">
                            </td>
                        </tr>
                        <tr class="podskazka">
                            <td>Фамилия</td>
                            <td>Имя</td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>


            <tr>
                <td>Год рождения</td>
                <td>
                    <select v-model="ybirth" class="profile-input-100" name="ybirth">
                        <option disabled value="">Please select one</option>
                        <option v-for="option in birthYearOptions" v-bind:value="option.value">
                            {{ option.text }}
                        </option>
                    </select>
                </td>
            </tr>

            <tr class="profile-form-row">
                <td>Место жительства</td>
                <td>
                    <table id="nonet">
                        <tbody>
                        <tr>
                            <td>
                                <input v-model="country" type="text" id="country" name="country" value="Russia"
                                       class="ui-autocomplete-input" autocomplete="off">
                            </td>
                            <td>
                                <input v-model="town" type="text" id="town" name="town" value="Санкт-Петербург"
                                       class="ui-autocomplete-input" autocomplete="off">
                            </td>
                        </tr>
                        <tr class="podskazka">
                            <td>Страна</td>
                            <td>Город</td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>


            <tr class="profile-form-row">
                <td>Статус</td>
                <td>
                    <label>
                        <input id="status_school" v-model="status" class="target" type="radio" name="status"
                                  value="школьник">
                        школьник
                    </label>
                    <label>
                        <input id="status_student" v-model="status" class="target" type="radio" name="status"
                                  value="студент">
                        студент
                    </label>
                    <label>
                        <input id="status_specialist" v-model="status" class="target" type="radio" name="status"
                               checked="" value="специалист">
                        специалист
                    </label>
                </td>
            </tr>


            <tr class="profile-form-row">
                <td>Школа</td>
                <td>
                    <table id="nonet">
                        <tbody>
                        <tr>
                            <td>
                                <input v-model="school" type="text" id="school" name="school" value=""
                                       class="ui-autocomplete-input profile-input-250" autocomplete="off">
                            </td>
                            <td>
                                <select v-model="endschool" class="profile-input-100" name="endschool">
                                    <option value="">Not Set</option>
                                    <option v-for="option in educationYearOptions" v-bind:value="option.value">
                                        {{ option.text }}
                                    </option>
                                </select>
                            </td>
                        </tr>
                        <tr class="podskazka">
                            <td>
                                Название школы
                            </td>
                            <td>
                                Год окончания
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>


            <tr id="univ" class="profile-form-row-top">
                <td>
                    <p>ВУЗ</p>
                </td>
                <td>
                    <table id="nonet">
                        <tbody>
                        <tr>
                            <td>
                                <input v-model="univ" type="text" id="univer" name="univ" value="СПБГУАП" class="ui-autocomplete-input profile-input-250" autocomplete="off">
                            </td>
                            <td>
                                <select class="profile-input-100" v-model="enduniv" name="enduniv">
                                    <option value="">Not Set</option>
                                    <option v-for="option in educationYearOptions" v-bind:value="option.value">
                                        {{ option.text }}
                                    </option>
                                </select>
                            </td>
                        </tr>
                        <tr class="podskazka">
                            <td>Название ВУЗа</td>
                            <td>
                                Год окончания
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input v-model="univ_en" type="text" class="profile-input-250" id="univer" name="univ_en" value="">
                            </td>
                            <td></td>
                        </tr>
                        <tr class="podskazka">
                            <td>Название ВУЗа на английском</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>


            <tr class="profile-form-row">
                <td>E-mail</td>
                <td>antonshell@yandex.ru</td>
            </tr>

            <tr class="profile-form-row">
                <td>Вход через ВКонтакте</td>
                <td>
                    <a href="https://loginza.ru/api/widget?token_url=http%3A%2F%2Fscitourn.ru%2Faccount%2Faddvk.php&amp;provider=vkontakte"
                       class="loginza">подключить</a></td>
            </tr>


            <tr class="profile-form-row">
                <td>Номер телефона</td>
                <td>
                    <input v-model="phone" class="profile-input-250" type="text" name="phone" value="">
                </td>
            </tr>


            <tr class="profile-form-row">
                <td class="profile-comment-label">
                    Комментарий
                    <br>
                    <span class="podskazka">
                        не обязательно
                    </span>
                </td>
                <td>
                    <textarea id="textarea" v-model="comment" name="comment" class="profile-comment-input"></textarea>
                </td>
            </tr>

            <tr class="profile-form-row">
                <td class="profile-form-row">Новый пароль</td>
                <td>
                    <table id="nonet">
                        <tbody>
                        <tr>
                            <td>
                                <input type="password" v-model="oldpassword" class="profile-input-120" name="oldpassword" value="">
                            </td>
                            <td>
                                <input type="password" v-model="password" class="profile-input-120" name="password" value="">
                            </td>
                            <td>
                                <input type="password" v-model="repassword" class="profile-input-120" name="repassword" value="">
                            </td>
                        </tr>
                        <tr class="podskazka">
                            <td>Старый пароль</td>
                            <td>Новый пароль</td>
                            <td>Повторите пароль</td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>


            <tr>
                <td></td>
                <td>
                    <label>
                        <input id="checkbox" v-model="confirm" disabled="" checked="" value="1" type="checkbox"
                               name="confirm">
                        Я согласен/согласна на обработку моих персональных данных оргкомитетом турнира
                    </label>
                </td>
            </tr>

            <tr>
                <td></td>
                <td>
                    <input class="button" type="submit" value="Сохранить">
                </td>
            </tr>

            </tbody>
        </table>
    </form>
</template>

<script>
    export default {
        name: 'home',
        created: function () {
            // `this` points to the vm instance
            console.log('On created event');

            this.educationYearOptions = this.methods.fillOptions(1958, 2025);
            this.birthYearOptions = this.methods.fillOptions(1940, 2005);

            var currentYear = new Date().getFullYear();
            this.enduniv = currentYear;
            this.endschool = currentYear;
            this.ybirth = currentYear - 20;
        },
        data () {
            return {
                /* form fields */
                surname: 'Shelyganov',
                name: '',
                secondname: '',
                surname_en: '',
                name_en: '',
                ybirth: '',
                country: '',
                town: '',
                status: '',
                school: '',
                endschool: '',
                univ: '',
                univ_en: '',
                enduniv: '',
                phone: '',
                comment: '',
                oldpassword: '',
                password: '',
                repassword: '',
                confirm: '',
                /* */

                educationYearOptions: [],
                birthYearOptions: [],

                methods: {
                    fillOptions: function (start, end) {
                        var options = [];

                        for (var i = start; i <= end; i++) {
                            var option = {text: i, value: i};
                            options.push(option);
                        }

                        return options;
                    }
                },

                msg: 'Profile'
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
