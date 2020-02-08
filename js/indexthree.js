function cl(n) {
    $('#create-db').children().remove();
    $('#create-db').append(`
        <div class="string-display-big">
    <div class="d-flex string-display-div-one">
        <i class="fa fa-check string-display-chek" aria-hidden="true"></i>
        <div> Отображение строк 0 - 6 (7 всего, Запрос занял 0,0012 сек.)</div>
    </div>
    <div class="d-flex string-display-div-two">
        <a href="#">SELECT </a>* FROM
        <div class="string-display-table-name">\` table \`</div>
    </div>
    <div class="d-flex justify-content-end flex-wrap string-display-div-three">
        <div><input type="checkbox" name="vehicle2" value="Car"></div>
        Профилирование [<a href="#">Построчное редактирование</a>] [<a
            href="#"> Изменить </a>] [<a href="#">Анализ SQL запроса</a>] [<a href="#">Создать
        PHP-код </a>] [<a
            href="3">Обновить</a>]
    </div>
</div>
<div class=" d-flex string-display-big-two">
    <div class="string-display-big-two-one">
        <input type="checkbox" name="vehicle1" value="Bike">Показать все
    </div>
    <div class="string-display-big-two-two">
        <div class="d-flex">
            Количество строк:<select name="session_max_rows" class="autosubmit">
            <option value="25" selected="selected">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="250">250</option>
            <option value="500">500</option>
        </select>
        </div>
    </div>
    <div class="string-display-big-two-three">
        <label for="filter_rows">Фильтровать строки:
            <input id="filter_rows" type="text" class="filter_rows">
        </label>
    </div>
    <div class="string-display-big-two-fore">
        Сортировать по индексу:
        <select name="sql_query" class="autosubmit">
            <option value="SELECT * FROM \`table\`
 ORDER BY \`id\` ASC">PRIMARY (ASC)
            </option>
            <option value="SELECT * FROM \`table\`
 ORDER BY \`id\` DESC">PRIMARY (DESC)
            </option>
            <option value="SELECT * FROM \`table\`
 ORDER BY \`email\` ASC">email (ASC)
            </option>
            <option value="SELECT * FROM \`table\`
 ORDER BY \`email\` DESC">email (DESC)
            </option>
            <option value="SELECT * FROM \`table\`  " selected="selected">Ниодного</option>
        </select>
    </div>
</div>
<table id="tab-for-table" class="table table-striped">
    <thead>
    <tr>
        <th class="tab-for-table-one" scope="col"></th>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">email</th>
        <th scope="col">password</th>
    </tr>
    </thead>
    <tbody id="tab-for-table-th">
    

    </tbody>
</table>
<div class="tab-berfor-div d-flex">
    <div class="print_ignore"><input type="checkbox" id="resultsForm_708567051_checkall"
                                     class="checkall_box" title="Отметить все"> <label
            for="resultsForm_708567051_checkall">Отметить все</label> <i style="margin-left: 2em">С
        отмеченными:</i>
        <a href="#" class="mult_submit" type="submit" name="submit_mult" value="edit" title="Изменить">
            <span class="nowrap"><img src="img/s_link.png" alt="logo">Изменить</span></a>
        <a href="#" class="mult_submit" type="submit" name="submit_mult" value="copy"
           title="Копировать">
            <span class="nowrap"><img src="img/b_insrow.png" alt="logo">Копировать</span></a>
        <a href="#" class="mult_submit" type="submit" name="submit_mult" value="delete" title="Удалить">
            <span class="nowrap">  <img src="img/b_drop.png" alt="logo">Удалить</span></a>
        <a href="#" class="mult_submit" type="submit" name="submit_mult" value="export" title="Экспорт">
            <span class="nowrap"><img src="img/b_export.png" alt="logo">Экспорт</span></a>
    </div>
</div>
<div class=" d-flex string-display-big-two">
    <div class="string-display-big-two-one">
        <input type="checkbox" name="vehicle1" value="Bike">Показать все
    </div>
    <div class="string-display-big-two-two">
        <div class="d-flex">
            Количество строк:<select name="session_max_rows" class="autosubmit">
            <option value="25" selected="selected">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="250">250</option>
            <option value="500">500</option>
        </select>
        </div>
    </div>
    <div class="string-display-big-two-three">
        <label for="filter_rows-two">Фильтровать строки:
            <input id="filter_rows-two" type="text" class="filter_rows">
        </label>
    </div>
    <div class="string-display-big-two-fore">
        Сортировать по индексу:
        <select name="sql_query" class="autosubmit">
            <option value="SELECT * FROM \`table\`
 ORDER BY \`id\` ASC">PRIMARY (ASC)
            </option>
            <option value="SELECT * FROM \`table\`
 ORDER BY \`id\` DESC">PRIMARY (DESC)
            </option>
            <option value="SELECT * FROM \`table\`
 ORDER BY \`email\` ASC">email (ASC)
            </option>
            <option value="SELECT * FROM \`table\`
 ORDER BY \`email\` DESC">email (DESC)
            </option>
            <option value="SELECT * FROM \`table\`  " selected="selected">Ниодного</option>
        </select>
    </div>
</div>
<fieldset class="print_ignore-one">
    <legend>Использование результатов запроса</legend>
    <a href="#" id="printView" target="print_view"><span class="nowrap">
                        <img src="img/bd_empty.png" title="Печать" alt="Печать" class="icon ic_b_print">&nbsp;Печать</span></a>
    <a href="#" id="copyToClipBoard"><span class="nowrap"><img src="img/b_insrow.png" title="В буфер обмена" alt="В буфер обмена" class="icon ic_b_insrow">&nbsp;В буфер обмена</span></a><a href="tbl_export.php" data-post="db=regist&amp;table=table&amp;printview=1&amp;sql_query=SELECT+%2A+FROM+%60table%60&amp;single_table=true&amp;unlim_num_rows=7"><span class="nowrap"><img src="img/b_export.png" title="Экспорт" alt="Экспорт" class="icon ic_b_tblexport">&nbsp;Экспорт</span></a>
    <a href="tbl_chart.php" ><span class="nowrap"><img src="img/s_status.png" title="Отобразить график" alt="Отобразить график" class="icon ic_b_chart">&nbsp;Отобразить график</span></a>
    <span><a href="view_create.php?db=regist" class="create_view ajax"><span class="nowrap">
                        <img src="img/b_props.png" title="Создать представление"alt="Создать представление" class="icon ic_b_view_add">&nbsp;Создать представление</span></a></span>
</fieldset>
<fieldset class="create-bookmark">
    <legend class="d-flex">
        <div class="create-bookmark-title">
            <img src="img/s_host.png" alt="logo"> Создать закладку</div>
    </legend>
    <div class="d-flex">
        <div>Метка:</div>
        <input type="text">
        <input type="checkbox" class="create-bookmark-chek-two" name="bkm_all_users" value="true">
        <div class="create-bookmark-chek-div">Доступна для всех пользователей</div>

    </div>

</fieldset>
<div class="create-bookmark-but-div">
    <button class="create-bookmark-button">Создать закладку</button>
</div>
    `);
    $.ajax({
        url: "json/table.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            data.leftDbObjectTable.forEach((k, v) => {
                if (n === v) {
                    for (let p = 0; p < k.tableinfo.length; p++) {
                        $('#tab-for-table-th').append(`
                        <tr >
        <th class=" d-flex table-name-th-chek" scope="row">
            <input type="checkbox" name="vehicle1" value="Bike">
            <div><img src="img/s_link.png" alt="logo"></div>
            <a href="#">Изменить</a>
            <div><img src="img/b_insrow.png" alt="logo"></div>
            <a href="#">Копировать</a>
            <div><img src="img/b_drop.png" alt="logo"> </div>
            <a href="#"> Удалить</a>
        </th>
        <td>${k.tableinfo[p].id}</td>
        <td>${k.tableinfo[p].name}</td>
        <td>${k.tableinfo[p].email}</td>
        <td>${k.tableinfo[p].password}</td>
    </tr>
                        `)
                    }
                }
            })
        }
    })
}