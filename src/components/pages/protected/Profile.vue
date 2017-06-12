<template>
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
                                    <input  type="text" name="surname" class="profile-input-120" value="Шелыганов">
                                </td>
                                <td><input type="text" name="name" class="profile-input-90" value="Антон"></td>
                                <td><input type="text" name="secondname" value="Александрович"></td>
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
                                <td><input type="text" name="surname_en" value="Shelyganov"></td>
                                <td><input type="text" name="name_en" value="Anton"></td>
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
                    <td><select class="profile-input-100" name="ybirth">
                        <option value="1940">1940</option>
                        <option value="1941">1941</option>
                        <option value="1942">1942</option>
                        <option value="1943">1943</option>
                        <option value="1944">1944</option>
                        <option value="1945">1945</option>
                        <option value="1946">1946</option>
                        <option value="1947">1947</option>
                        <option value="1948">1948</option>
                        <option value="1949">1949</option>
                        <option value="1950">1950</option>
                        <option value="1951">1951</option>
                        <option value="1952">1952</option>
                        <option value="1953">1953</option>
                        <option value="1954">1954</option>
                        <option value="1955">1955</option>
                        <option value="1956">1956</option>
                        <option value="1957">1957</option>
                        <option value="1958">1958</option>
                        <option value="1959">1959</option>
                        <option value="1960">1960</option>
                        <option value="1961">1961</option>
                        <option value="1962">1962</option>
                        <option value="1963">1963</option>
                        <option value="1964">1964</option>
                        <option value="1965">1965</option>
                        <option value="1966">1966</option>
                        <option value="1967">1967</option>
                        <option value="1968">1968</option>
                        <option value="1969">1969</option>
                        <option value="1970">1970</option>
                        <option value="1971">1971</option>
                        <option value="1972">1972</option>
                        <option value="1973">1973</option>
                        <option value="1974">1974</option>
                        <option value="1975">1975</option>
                        <option value="1976">1976</option>
                        <option value="1977">1977</option>
                        <option value="1978">1978</option>
                        <option value="1979">1979</option>
                        <option value="1980">1980</option>
                        <option value="1981">1981</option>
                        <option value="1982">1982</option>
                        <option value="1983">1983</option>
                        <option value="1984">1984</option>
                        <option value="1985">1985</option>
                        <option value="1986">1986</option>
                        <option value="1987">1987</option>
                        <option value="1988">1988</option>
                        <option value="1989">1989</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option selected="" value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                    </select></td>
                </tr>

                <tr class="profile-form-row">
                    <td>Место жительства</td>
                    <td>
                        <table id="nonet">
                            <tbody>
                            <tr>
                                <td><input type="text" id="country" name="country" value="Russia"
                                           class="ui-autocomplete-input" autocomplete="off"></td>
                                <td><input type="text" id="town" name="town" value="Санкт-Петербург"
                                           class="ui-autocomplete-input" autocomplete="off"></td>
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
                        <label><input class="target" type="radio" name="status" value="школьник">школьник</label>
                        <label><input class="target" type="radio" name="status" value="студент"> студент
                            <label><input class="target" type="radio" name="status" checked="" value="специалист">
                                специалист
                            </label></label></td>
                </tr>


                <tr class="profile-form-row">
                    <td>Школа</td>
                    <td>
                        <table id="nonet">
                            <tbody>
                            <tr>
                                <td><input type="text" id="school" name="school" value=""
                                           class="ui-autocomplete-input profile-input-250" autocomplete="off"></td>
                                <td>
                                    <select class="profile-input-100" name="endschool">
                                        <option value="">Not Set</option>
                                        <option value="1958">1958</option>
                                        <option value="1959">1959</option>
                                        <option value="1960">1960</option>
                                        <option value="1961">1961</option>
                                        <option value="1962">1962</option>
                                        <option value="1963">1963</option>
                                        <option value="1964">1964</option>
                                        <option value="1965">1965</option>
                                        <option value="1966">1966</option>
                                        <option value="1967">1967</option>
                                        <option value="1968">1968</option>
                                        <option value="1969">1969</option>
                                        <option value="1970">1970</option>
                                        <option value="1971">1971</option>
                                        <option value="1972">1972</option>
                                        <option value="1973">1973</option>
                                        <option value="1974">1974</option>
                                        <option value="1975">1975</option>
                                        <option value="1976">1976</option>
                                        <option value="1977">1977</option>
                                        <option value="1978">1978</option>
                                        <option value="1979">1979</option>
                                        <option value="1980">1980</option>
                                        <option value="1981">1981</option>
                                        <option value="1982">1982</option>
                                        <option value="1983">1983</option>
                                        <option value="1984">1984</option>
                                        <option value="1985">1985</option>
                                        <option value="1986">1986</option>
                                        <option value="1987">1987</option>
                                        <option value="1988">1988</option>
                                        <option value="1989">1989</option>
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                        <option value="1996">1996</option>
                                        <option value="1997">1997</option>
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                    </select></td>
                            </tr>
                            <tr class="podskazka">
                                <td>Название школы</td>
                                <td>
                                    Год окончания
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>


                <tr id="univ" class="profile-form-row-top">
                    <td><p>ВУЗ</p></td>
                    <td>
                        <table id="nonet">
                            <tbody>
                            <tr>
                                <td><input type="text" id="univer" name="univ" value="СПБГУАП"
                                           class="ui-autocomplete-input profile-input-250" autocomplete="off"></td>
                                <td>
                                    <select class="profile-input-100" name="enduniv">
                                        <option value="">Not Set</option>
                                        <option value="1958">1958</option>
                                        <option value="1959">1959</option>
                                        <option value="1960">1960</option>
                                        <option value="1961">1961</option>
                                        <option value="1962">1962</option>
                                        <option value="1963">1963</option>
                                        <option value="1964">1964</option>
                                        <option value="1965">1965</option>
                                        <option value="1966">1966</option>
                                        <option value="1967">1967</option>
                                        <option value="1968">1968</option>
                                        <option value="1969">1969</option>
                                        <option value="1970">1970</option>
                                        <option value="1971">1971</option>
                                        <option value="1972">1972</option>
                                        <option value="1973">1973</option>
                                        <option value="1974">1974</option>
                                        <option value="1975">1975</option>
                                        <option value="1976">1976</option>
                                        <option value="1977">1977</option>
                                        <option value="1978">1978</option>
                                        <option value="1979">1979</option>
                                        <option value="1980">1980</option>
                                        <option value="1981">1981</option>
                                        <option value="1982">1982</option>
                                        <option value="1983">1983</option>
                                        <option value="1984">1984</option>
                                        <option value="1985">1985</option>
                                        <option value="1986">1986</option>
                                        <option value="1987">1987</option>
                                        <option value="1988">1988</option>
                                        <option value="1989">1989</option>
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                        <option value="1996">1996</option>
                                        <option value="1997">1997</option>
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option selected="" value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                    </select></td>
                            </tr>
                            <tr class="podskazka">
                                <td>Название ВУЗа</td>
                                <td>
                                    Год окончания
                                </td>
                            </tr>

                            <tr>
                                <td><input type="text" class="profile-input-250" id="univer" name="univ_en" value=""></td>
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
                    <td><input style="width:250px" type="text" name="phone" value=""></td>
                </tr>


                <tr class="profile-form-row">
                    <td class="profile-comment-label">
                        Комментарий<br>
                        <span class="podskazka">не обязательно</span>
                    </td>
                    <td>
                        <textarea id="textarea" name="comment" class="profile-comment-input"></textarea>
                    </td>
                </tr>

                <tr class="profile-form-row">
                    <td class="profile-form-row">Новый пароль</td>
                    <td>
                        <table id="nonet">
                            <tbody>
                            <tr>

                                <td><input type="password" class="profile-input-120" name="oldpassword" value=""></td>
                                <td><input type="password" class="profile-input-120" name="password" value=""></td>
                                <td><input type="password" class="profile-input-120" name="repassword" value=""></td>
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
                    <td><label><input id="checkbox" disabled="" checked="" value="1" type="checkbox" name="confirm"> Я
                        согласен/согласна на обработку моих персональных данных оргкомитетом турнира</label></td>
                </tr>

                <tr>
                    <td></td>
                    <td><input class="button" type="submit" value="Сохранить"></td>
                </tr>


            </tbody>
        </table>
    </form>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {


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
