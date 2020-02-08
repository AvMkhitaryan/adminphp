function argum(sum) {
    if (sum === 0) {
        $('#create-db').children().remove();
        $("#create-db").append(`<div class="row">
                                <div class="col-7">
                                    <div class="home-div-one">
                                        <h4>Основные настройки</h4>
                                        <div class="d-flex home-div-one-flex flex-wrap">
                                            <div class="home-div-one-icon-one">
                                                <img src="img/s_asci.png" alt="logo">
                                            </div>
                                            <div class="home-div-one-text">
                                                Сопоставление кодировки соединения
                                            </div>
                                            <div class="home-div-one-icon-two">
                                                <img src="img/b_help.png" alt="logo">
                                            </div>
                                            <div class="home-div-one-select">
                                                <select lang="en" dir="ltr" name="collation_connection" id="select_collation_connection" class="autosubmit">
                                                    <option value="">Сравнение</option>
                                                    <option value=""></option>
                                                    <optgroup label="armscii8" title="ARMSCII-8 Armenian">
                                                        <option value="armscii8_bin" title="Армянский, Двоичный">armscii8_bin</option>
                                                        <option value="armscii8_general_ci" title="Армянский, регистронезависимый">armscii8_general_ci</option>
                                                        <option value="armscii8_general_nopad_ci" title="Армянский, регистронезависимый">armscii8_general_nopad_ci</option>
                                                        <option value="armscii8_nopad_bin" title="Армянский, Двоичный">armscii8_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="ascii" title="US ASCII">
                                                        <option value="ascii_bin" title="Западно-Европейский, Двоичный">ascii_bin</option>
                                                        <option value="ascii_general_ci" title="Западно-Европейский, регистронезависимый">ascii_general_ci</option>
                                                        <option value="ascii_general_nopad_ci" title="Западно-Европейский, регистронезависимый">ascii_general_nopad_ci</option>
                                                        <option value="ascii_nopad_bin" title="Западно-Европейский, Двоичный">ascii_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="big5" title="Big5 Traditional Chinese">
                                                        <option value="big5_bin" title="Китайский традиционный, Двоичный">big5_bin</option>
                                                        <option value="big5_chinese_ci" title="Китайский традиционный, регистронезависимый">big5_chinese_ci</option>
                                                        <option value="big5_chinese_nopad_ci" title="Китайский традиционный, регистронезависимый">big5_chinese_nopad_ci</option>
                                                        <option value="big5_nopad_bin" title="Китайский традиционный, Двоичный">big5_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="binary" title="Binary pseudo charset">
                                                        <option value="binary" title="Двоичный">binary</option>
                                                    </optgroup>
                                                    <optgroup label="cp1250" title="Windows Central European">
                                                        <option value="cp1250_bin" title="Центрально-Европейский, Двоичный">cp1250_bin</option>
                                                        <option value="cp1250_croatian_ci" title="Хорватский, регистронезависимый">cp1250_croatian_ci</option>
                                                        <option value="cp1250_czech_cs" title="Чешский, регистрозависымый">cp1250_czech_cs</option>
                                                        <option value="cp1250_general_ci" title="Центрально-Европейский, регистронезависимый">cp1250_general_ci</option>
                                                        <option value="cp1250_general_nopad_ci" title="Центрально-Европейский, регистронезависимый">cp1250_general_nopad_ci</option>
                                                        <option value="cp1250_nopad_bin" title="Центрально-Европейский, Двоичный">cp1250_nopad_bin</option>
                                                        <option value="cp1250_polish_ci" title="Польский, регистронезависимый">cp1250_polish_ci</option>
                                                    </optgroup>
                                                    <optgroup label="cp1251" title="Windows Cyrillic">
                                                        <option value="cp1251_bin" title="Кириллический, Двоичный">cp1251_bin</option>
                                                        <option value="cp1251_bulgarian_ci" title="Болгарский, регистронезависимый">cp1251_bulgarian_ci</option>
                                                        <option value="cp1251_general_ci" title="Кириллический, регистронезависимый">cp1251_general_ci</option>
                                                        <option value="cp1251_general_cs" title="Кириллический, регистрозависымый">cp1251_general_cs</option>
                                                        <option value="cp1251_general_nopad_ci" title="Кириллический, регистронезависимый">cp1251_general_nopad_ci</option>
                                                        <option value="cp1251_nopad_bin" title="Кириллический, Двоичный">cp1251_nopad_bin</option>
                                                        <option value="cp1251_ukrainian_ci" title="Украинский, регистронезависимый">cp1251_ukrainian_ci</option>
                                                    </optgroup>
                                                    <optgroup label="cp1256" title="Windows Arabic">
                                                        <option value="cp1256_bin" title="Арабский, Двоичный">cp1256_bin</option>
                                                        <option value="cp1256_general_ci" title="Арабский, регистронезависимый">cp1256_general_ci</option>
                                                        <option value="cp1256_general_nopad_ci" title="Арабский, регистронезависимый">cp1256_general_nopad_ci</option>
                                                        <option value="cp1256_nopad_bin" title="Арабский, Двоичный">cp1256_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="cp1257" title="Windows Baltic">
                                                        <option value="cp1257_bin" title="Балтийский, Двоичный">cp1257_bin</option>
                                                        <option value="cp1257_general_ci" title="Балтийский, регистронезависимый">cp1257_general_ci</option>
                                                        <option value="cp1257_general_nopad_ci" title="Балтийский, регистронезависимый">cp1257_general_nopad_ci</option>
                                                        <option value="cp1257_lithuanian_ci" title="Литовский, регистронезависимый">cp1257_lithuanian_ci</option>
                                                        <option value="cp1257_nopad_bin" title="Балтийский, Двоичный">cp1257_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="cp850" title="DOS West European">
                                                        <option value="cp850_bin" title="Западно-Европейский, Двоичный">cp850_bin</option>
                                                        <option value="cp850_general_ci" title="Западно-Европейский, регистронезависимый">cp850_general_ci</option>
                                                        <option value="cp850_general_nopad_ci" title="Западно-Европейский, регистронезависимый">cp850_general_nopad_ci</option>
                                                        <option value="cp850_nopad_bin" title="Западно-Европейский, Двоичный">cp850_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="cp852" title="DOS Central European">
                                                        <option value="cp852_bin" title="Центрально-Европейский, Двоичный">cp852_bin</option>
                                                        <option value="cp852_general_ci" title="Центрально-Европейский, регистронезависимый">cp852_general_ci</option>
                                                        <option value="cp852_general_nopad_ci" title="Центрально-Европейский, регистронезависимый">cp852_general_nopad_ci</option>
                                                        <option value="cp852_nopad_bin" title="Центрально-Европейский, Двоичный">cp852_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="cp866" title="DOS Russian">
                                                        <option value="cp866_bin" title="Русский, Двоичный">cp866_bin</option>
                                                        <option value="cp866_general_ci" title="Русский, регистронезависимый">cp866_general_ci</option>
                                                        <option value="cp866_general_nopad_ci" title="Русский, регистронезависимый">cp866_general_nopad_ci</option>
                                                        <option value="cp866_nopad_bin" title="Русский, Двоичный">cp866_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="cp932" title="SJIS for Windows Japanese">
                                                        <option value="cp932_bin" title="Японский, Двоичный">cp932_bin</option>
                                                        <option value="cp932_japanese_ci" title="Японский, регистронезависимый">cp932_japanese_ci</option>
                                                        <option value="cp932_japanese_nopad_ci" title="Японский, регистронезависимый">cp932_japanese_nopad_ci</option>
                                                        <option value="cp932_nopad_bin" title="Японский, Двоичный">cp932_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="dec8" title="DEC West European">
                                                        <option value="dec8_bin" title="Западно-Европейский, Двоичный">dec8_bin</option>
                                                        <option value="dec8_nopad_bin" title="Западно-Европейский, Двоичный">dec8_nopad_bin</option>
                                                        <option value="dec8_swedish_ci" title="Шведский, регистронезависимый">dec8_swedish_ci</option>
                                                        <option value="dec8_swedish_nopad_ci" title="Шведский, регистронезависимый">dec8_swedish_nopad_ci</option>
                                                    </optgroup>
                                                    <optgroup label="eucjpms" title="UJIS for Windows Japanese">
                                                        <option value="eucjpms_bin" title="Японский, Двоичный">eucjpms_bin</option>
                                                        <option value="eucjpms_japanese_ci" title="Японский, регистронезависимый">eucjpms_japanese_ci</option>
                                                        <option value="eucjpms_japanese_nopad_ci" title="Японский, регистронезависимый">eucjpms_japanese_nopad_ci</option>
                                                        <option value="eucjpms_nopad_bin" title="Японский, Двоичный">eucjpms_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="euckr" title="EUC-KR Korean">
                                                        <option value="euckr_bin" title="Корейский, Двоичный">euckr_bin</option>
                                                        <option value="euckr_korean_ci" title="Корейский, регистронезависимый">euckr_korean_ci</option>
                                                        <option value="euckr_korean_nopad_ci" title="Корейский, регистронезависимый">euckr_korean_nopad_ci</option>
                                                        <option value="euckr_nopad_bin" title="Корейский, Двоичный">euckr_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="gb2312" title="GB2312 Simplified Chinese">
                                                        <option value="gb2312_bin" title="Китайский упрощенный, Двоичный">gb2312_bin</option>
                                                        <option value="gb2312_chinese_ci" title="Китайский упрощенный, регистронезависимый">gb2312_chinese_ci</option>
                                                        <option value="gb2312_chinese_nopad_ci" title="Китайский упрощенный, регистронезависимый">gb2312_chinese_nopad_ci</option>
                                                        <option value="gb2312_nopad_bin" title="Китайский упрощенный, Двоичный">gb2312_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="gbk" title="GBK Simplified Chinese">
                                                        <option value="gbk_bin" title="Китайский упрощенный, Двоичный">gbk_bin</option>
                                                        <option value="gbk_chinese_ci" title="Китайский упрощенный, регистронезависимый">gbk_chinese_ci</option>
                                                        <option value="gbk_chinese_nopad_ci" title="Китайский упрощенный, регистронезависимый">gbk_chinese_nopad_ci</option>
                                                        <option value="gbk_nopad_bin" title="Китайский упрощенный, Двоичный">gbk_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="geostd8" title="GEOSTD8 Georgian">
                                                        <option value="geostd8_bin" title="Грузинский, Двоичный">geostd8_bin</option>
                                                        <option value="geostd8_general_ci" title="Грузинский, регистронезависимый">geostd8_general_ci</option>
                                                        <option value="geostd8_general_nopad_ci" title="Грузинский, регистронезависимый">geostd8_general_nopad_ci</option>
                                                        <option value="geostd8_nopad_bin" title="Грузинский, Двоичный">geostd8_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="greek" title="ISO 8859-7 Greek">
                                                        <option value="greek_bin" title="Греческий, Двоичный">greek_bin</option>
                                                        <option value="greek_general_ci" title="Греческий, регистронезависимый">greek_general_ci</option>
                                                        <option value="greek_general_nopad_ci" title="Греческий, регистронезависимый">greek_general_nopad_ci</option>
                                                        <option value="greek_nopad_bin" title="Греческий, Двоичный">greek_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="hebrew" title="ISO 8859-8 Hebrew">
                                                        <option value="hebrew_bin" title="Иврит, Двоичный">hebrew_bin</option>
                                                        <option value="hebrew_general_ci" title="Иврит, регистронезависимый">hebrew_general_ci</option>
                                                        <option value="hebrew_general_nopad_ci" title="Иврит, регистронезависимый">hebrew_general_nopad_ci</option>
                                                        <option value="hebrew_nopad_bin" title="Иврит, Двоичный">hebrew_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="hp8" title="HP West European">
                                                        <option value="hp8_bin" title="Западно-Европейский, Двоичный">hp8_bin</option>
                                                        <option value="hp8_english_ci" title="Английский, регистронезависимый">hp8_english_ci</option>
                                                        <option value="hp8_english_nopad_ci" title="Английский, регистронезависимый">hp8_english_nopad_ci</option>
                                                        <option value="hp8_nopad_bin" title="Западно-Европейский, Двоичный">hp8_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="keybcs2" title="DOS Kamenicky Czech-Slovak">
                                                        <option value="keybcs2_bin" title="Чехословацкий, Двоичный">keybcs2_bin</option>
                                                        <option value="keybcs2_general_ci" title="Чехословацкий, регистронезависимый">keybcs2_general_ci</option>
                                                        <option value="keybcs2_general_nopad_ci" title="Чехословацкий, регистронезависимый">keybcs2_general_nopad_ci</option>
                                                        <option value="keybcs2_nopad_bin" title="Чехословацкий, Двоичный">keybcs2_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="koi8r" title="KOI8-R Relcom Russian">
                                                        <option value="koi8r_bin" title="Русский, Двоичный">koi8r_bin</option>
                                                        <option value="koi8r_general_ci" title="Русский, регистронезависимый">koi8r_general_ci</option>
                                                        <option value="koi8r_general_nopad_ci" title="Русский, регистронезависимый">koi8r_general_nopad_ci</option>
                                                        <option value="koi8r_nopad_bin" title="Русский, Двоичный">koi8r_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="koi8u" title="KOI8-U Ukrainian">
                                                        <option value="koi8u_bin" title="Украинский, Двоичный">koi8u_bin</option>
                                                        <option value="koi8u_general_ci" title="Украинский, регистронезависимый">koi8u_general_ci</option>
                                                        <option value="koi8u_general_nopad_ci" title="Украинский, регистронезависимый">koi8u_general_nopad_ci</option>
                                                        <option value="koi8u_nopad_bin" title="Украинский, Двоичный">koi8u_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="latin1" title="cp1252 West European">
                                                        <option value="latin1_bin" title="Западно-Европейский, Двоичный">latin1_bin</option>
                                                        <option value="latin1_danish_ci" title="Датский, регистронезависимый">latin1_danish_ci</option>
                                                        <option value="latin1_general_ci" title="Западно-Европейский, регистронезависимый">latin1_general_ci</option>
                                                        <option value="latin1_general_cs" title="Западно-Европейский, регистрозависымый">latin1_general_cs</option>
                                                        <option value="latin1_german1_ci" title="Немецкий (порядок словаря), регистронезависимый">latin1_german1_ci</option>
                                                        <option value="latin1_german2_ci" title="Немецкий (порядок телефонной книги), регистронезависимый">latin1_german2_ci</option>
                                                        <option value="latin1_nopad_bin" title="Западно-Европейский, Двоичный">latin1_nopad_bin</option>
                                                        <option value="latin1_spanish_ci" title="Испанский, регистронезависимый">latin1_spanish_ci</option>
                                                        <option value="latin1_swedish_ci" title="Шведский, регистронезависимый">latin1_swedish_ci</option>
                                                        <option value="latin1_swedish_nopad_ci" title="Шведский, регистронезависимый">latin1_swedish_nopad_ci</option>
                                                    </optgroup>
                                                    <optgroup label="latin2" title="ISO 8859-2 Central European">
                                                        <option value="latin2_bin" title="Центрально-Европейский, Двоичный">latin2_bin</option>
                                                        <option value="latin2_croatian_ci" title="Хорватский, регистронезависимый">latin2_croatian_ci</option>
                                                        <option value="latin2_czech_cs" title="Чешский, регистрозависымый">latin2_czech_cs</option>
                                                        <option value="latin2_general_ci" title="Центрально-Европейский, регистронезависимый">latin2_general_ci</option>
                                                        <option value="latin2_general_nopad_ci" title="Центрально-Европейский, регистронезависимый">latin2_general_nopad_ci</option>
                                                        <option value="latin2_hungarian_ci" title="Венгерский, регистронезависимый">latin2_hungarian_ci</option>
                                                        <option value="latin2_nopad_bin" title="Центрально-Европейский, Двоичный">latin2_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="latin5" title="ISO 8859-9 Turkish">
                                                        <option value="latin5_bin" title="Турецкий, Двоичный">latin5_bin</option>
                                                        <option value="latin5_nopad_bin" title="Турецкий, Двоичный">latin5_nopad_bin</option>
                                                        <option value="latin5_turkish_ci" title="Турецкий, регистронезависимый">latin5_turkish_ci</option>
                                                        <option value="latin5_turkish_nopad_ci" title="Турецкий, регистронезависимый">latin5_turkish_nopad_ci</option>
                                                    </optgroup>
                                                    <optgroup label="latin7" title="ISO 8859-13 Baltic">
                                                        <option value="latin7_bin" title="Балтийский, Двоичный">latin7_bin</option>
                                                        <option value="latin7_estonian_cs" title="Эстонский, регистрозависымый">latin7_estonian_cs</option>
                                                        <option value="latin7_general_ci" title="Балтийский, регистронезависимый">latin7_general_ci</option>
                                                        <option value="latin7_general_cs" title="Балтийский, регистрозависымый">latin7_general_cs</option>
                                                        <option value="latin7_general_nopad_ci" title="Балтийский, регистронезависимый">latin7_general_nopad_ci</option>
                                                        <option value="latin7_nopad_bin" title="Балтийский, Двоичный">latin7_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="macce" title="Mac Central European">
                                                        <option value="macce_bin" title="Центрально-Европейский, Двоичный">macce_bin</option>
                                                        <option value="macce_general_ci" title="Центрально-Европейский, регистронезависимый">macce_general_ci</option>
                                                        <option value="macce_general_nopad_ci" title="Центрально-Европейский, регистронезависимый">macce_general_nopad_ci</option>
                                                        <option value="macce_nopad_bin" title="Центрально-Европейский, Двоичный">macce_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="macroman" title="Mac West European">
                                                        <option value="macroman_bin" title="Западно-Европейский, Двоичный">macroman_bin</option>
                                                        <option value="macroman_general_ci" title="Западно-Европейский, регистронезависимый">macroman_general_ci</option>
                                                        <option value="macroman_general_nopad_ci" title="Западно-Европейский, регистронезависимый">macroman_general_nopad_ci</option>
                                                        <option value="macroman_nopad_bin" title="Западно-Европейский, Двоичный">macroman_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="sjis" title="Shift-JIS Japanese">
                                                        <option value="sjis_bin" title="Японский, Двоичный">sjis_bin</option>
                                                        <option value="sjis_japanese_ci" title="Японский, регистронезависимый">sjis_japanese_ci</option>
                                                        <option value="sjis_japanese_nopad_ci" title="Японский, регистронезависимый">sjis_japanese_nopad_ci</option>
                                                        <option value="sjis_nopad_bin" title="Японский, Двоичный">sjis_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="swe7" title="7bit Swedish">
                                                        <option value="swe7_bin" title="Шведский, Двоичный">swe7_bin</option>
                                                        <option value="swe7_nopad_bin" title="Шведский, Двоичный">swe7_nopad_bin</option>
                                                        <option value="swe7_swedish_ci" title="Шведский, регистронезависимый">swe7_swedish_ci</option>
                                                        <option value="swe7_swedish_nopad_ci" title="Шведский, регистронезависимый">swe7_swedish_nopad_ci</option>
                                                    </optgroup>
                                                    <optgroup label="tis620" title="TIS620 Thai">
                                                        <option value="tis620_bin" title="Таи, Двоичный">tis620_bin</option>
                                                        <option value="tis620_nopad_bin" title="Таи, Двоичный">tis620_nopad_bin</option>
                                                        <option value="tis620_thai_ci" title="Таи, регистронезависимый">tis620_thai_ci</option>
                                                        <option value="tis620_thai_nopad_ci" title="Таи, регистронезависимый">tis620_thai_nopad_ci</option>
                                                    </optgroup>
                                                    <optgroup label="ucs2" title="UCS-2 Unicode">
                                                        <option value="ucs2_bin" title="Юникод, Двоичный">ucs2_bin</option>
                                                        <option value="ucs2_croatian_ci" title="Хорватский, регистронезависимый">ucs2_croatian_ci</option>
                                                        <option value="ucs2_croatian_mysql561_ci" title="Хорватский (MySQL 5.6.1), регистронезависимый">ucs2_croatian_mysql561_ci</option>
                                                        <option value="ucs2_czech_ci" title="Чешский, регистронезависимый">ucs2_czech_ci</option>
                                                        <option value="ucs2_danish_ci" title="Датский, регистронезависимый">ucs2_danish_ci</option>
                                                        <option value="ucs2_esperanto_ci" title="Эсперанто, регистронезависимый">ucs2_esperanto_ci</option>
                                                        <option value="ucs2_estonian_ci" title="Эстонский, регистронезависимый">ucs2_estonian_ci</option>
                                                        <option value="ucs2_general_ci" title="Юникод, регистронезависимый">ucs2_general_ci</option>
                                                        <option value="ucs2_general_mysql500_ci" title="Юникод (MySQL 5.0.0), регистронезависимый">ucs2_general_mysql500_ci</option>
                                                        <option value="ucs2_general_nopad_ci" title="Юникод, регистронезависимый">ucs2_general_nopad_ci</option>
                                                        <option value="ucs2_german2_ci" title="Немецкий (порядок телефонной книги), регистронезависимый">ucs2_german2_ci</option>
                                                        <option value="ucs2_hungarian_ci" title="Венгерский, регистронезависимый">ucs2_hungarian_ci</option>
                                                        <option value="ucs2_icelandic_ci" title="Исландский, регистронезависимый">ucs2_icelandic_ci</option>
                                                        <option value="ucs2_latvian_ci" title="Латвийский, регистронезависимый">ucs2_latvian_ci</option>
                                                        <option value="ucs2_lithuanian_ci" title="Литовский, регистронезависимый">ucs2_lithuanian_ci</option>
                                                        <option value="ucs2_myanmar_ci" title="Бирманский, регистронезависимый">ucs2_myanmar_ci</option>
                                                        <option value="ucs2_nopad_bin" title="Юникод, Двоичный">ucs2_nopad_bin</option>
                                                        <option value="ucs2_persian_ci" title="Персидский, регистронезависимый">ucs2_persian_ci</option>
                                                        <option value="ucs2_polish_ci" title="Польский, регистронезависимый">ucs2_polish_ci</option>
                                                        <option value="ucs2_roman_ci" title="Западно-Европейский, регистронезависимый">ucs2_roman_ci</option>
                                                        <option value="ucs2_romanian_ci" title="Румынский, регистронезависимый">ucs2_romanian_ci</option>
                                                        <option value="ucs2_sinhala_ci" title="Сингальский, регистронезависимый">ucs2_sinhala_ci</option>
                                                        <option value="ucs2_slovak_ci" title="Словацкий, регистронезависимый">ucs2_slovak_ci</option>
                                                        <option value="ucs2_slovenian_ci" title="Словенский, регистронезависимый">ucs2_slovenian_ci</option>
                                                        <option value="ucs2_spanish2_ci" title="Испанский (традиционный), регистронезависимый">ucs2_spanish2_ci</option>
                                                        <option value="ucs2_spanish_ci" title="Испанский, регистронезависимый">ucs2_spanish_ci</option>
                                                        <option value="ucs2_swedish_ci" title="Шведский, регистронезависимый">ucs2_swedish_ci</option>
                                                        <option value="ucs2_thai_520_w2" title="Таи (UCA 5.2.0), многоуровневый">ucs2_thai_520_w2</option>
                                                        <option value="ucs2_turkish_ci" title="Турецкий, регистронезависимый">ucs2_turkish_ci</option>
                                                        <option value="ucs2_unicode_520_ci" title="Юникод (UCA 5.2.0), регистронезависимый">ucs2_unicode_520_ci</option>
                                                        <option value="ucs2_unicode_520_nopad_ci" title="Юникод (UCA 5.2.0), регистронезависимый">ucs2_unicode_520_nopad_ci</option>
                                                        <option value="ucs2_unicode_ci" title="Юникод, регистронезависимый">ucs2_unicode_ci</option>
                                                        <option value="ucs2_unicode_nopad_ci" title="Юникод, регистронезависимый">ucs2_unicode_nopad_ci</option>
                                                        <option value="ucs2_vietnamese_ci" title="Вьетнамский, регистронезависимый">ucs2_vietnamese_ci</option>
                                                    </optgroup>
                                                    <optgroup label="ujis" title="EUC-JP Japanese">
                                                        <option value="ujis_bin" title="Японский, Двоичный">ujis_bin</option>
                                                        <option value="ujis_japanese_ci" title="Японский, регистронезависимый">ujis_japanese_ci</option>
                                                        <option value="ujis_japanese_nopad_ci" title="Японский, регистронезависимый">ujis_japanese_nopad_ci</option>
                                                        <option value="ujis_nopad_bin" title="Японский, Двоичный">ujis_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="utf16" title="UTF-16 Unicode">
                                                        <option value="utf16_bin" title="Юникод, Двоичный">utf16_bin</option>
                                                        <option value="utf16_croatian_ci" title="Хорватский, регистронезависимый">utf16_croatian_ci</option>
                                                        <option value="utf16_croatian_mysql561_ci" title="Хорватский (MySQL 5.6.1), регистронезависимый">utf16_croatian_mysql561_ci</option>
                                                        <option value="utf16_czech_ci" title="Чешский, регистронезависимый">utf16_czech_ci</option>
                                                        <option value="utf16_danish_ci" title="Датский, регистронезависимый">utf16_danish_ci</option>
                                                        <option value="utf16_esperanto_ci" title="Эсперанто, регистронезависимый">utf16_esperanto_ci</option>
                                                        <option value="utf16_estonian_ci" title="Эстонский, регистронезависимый">utf16_estonian_ci</option>
                                                        <option value="utf16_general_ci" title="Юникод, регистронезависимый">utf16_general_ci</option>
                                                        <option value="utf16_general_nopad_ci" title="Юникод, регистронезависимый">utf16_general_nopad_ci</option>
                                                        <option value="utf16_german2_ci" title="Немецкий (порядок телефонной книги), регистронезависимый">utf16_german2_ci</option>
                                                        <option value="utf16_hungarian_ci" title="Венгерский, регистронезависимый">utf16_hungarian_ci</option>
                                                        <option value="utf16_icelandic_ci" title="Исландский, регистронезависимый">utf16_icelandic_ci</option>
                                                        <option value="utf16_latvian_ci" title="Латвийский, регистронезависимый">utf16_latvian_ci</option>
                                                        <option value="utf16_lithuanian_ci" title="Литовский, регистронезависимый">utf16_lithuanian_ci</option>
                                                        <option value="utf16_myanmar_ci" title="Бирманский, регистронезависимый">utf16_myanmar_ci</option>
                                                        <option value="utf16_nopad_bin" title="Юникод, Двоичный">utf16_nopad_bin</option>
                                                        <option value="utf16_persian_ci" title="Персидский, регистронезависимый">utf16_persian_ci</option>
                                                        <option value="utf16_polish_ci" title="Польский, регистронезависимый">utf16_polish_ci</option>
                                                        <option value="utf16_roman_ci" title="Западно-Европейский, регистронезависимый">utf16_roman_ci</option>
                                                        <option value="utf16_romanian_ci" title="Румынский, регистронезависимый">utf16_romanian_ci</option>
                                                        <option value="utf16_sinhala_ci" title="Сингальский, регистронезависимый">utf16_sinhala_ci</option>
                                                        <option value="utf16_slovak_ci" title="Словацкий, регистронезависимый">utf16_slovak_ci</option>
                                                        <option value="utf16_slovenian_ci" title="Словенский, регистронезависимый">utf16_slovenian_ci</option>
                                                        <option value="utf16_spanish2_ci" title="Испанский (традиционный), регистронезависимый">utf16_spanish2_ci</option>
                                                        <option value="utf16_spanish_ci" title="Испанский, регистронезависимый">utf16_spanish_ci</option>
                                                        <option value="utf16_swedish_ci" title="Шведский, регистронезависимый">utf16_swedish_ci</option>
                                                        <option value="utf16_thai_520_w2" title="Таи (UCA 5.2.0), многоуровневый">utf16_thai_520_w2</option>
                                                        <option value="utf16_turkish_ci" title="Турецкий, регистронезависимый">utf16_turkish_ci</option>
                                                        <option value="utf16_unicode_520_ci" title="Юникод (UCA 5.2.0), регистронезависимый">utf16_unicode_520_ci</option>
                                                        <option value="utf16_unicode_520_nopad_ci" title="Юникод (UCA 5.2.0), регистронезависимый">utf16_unicode_520_nopad_ci</option>
                                                        <option value="utf16_unicode_ci" title="Юникод, регистронезависимый">utf16_unicode_ci</option>
                                                        <option value="utf16_unicode_nopad_ci" title="Юникод, регистронезависимый">utf16_unicode_nopad_ci</option>
                                                        <option value="utf16_vietnamese_ci" title="Вьетнамский, регистронезависимый">utf16_vietnamese_ci</option>
                                                    </optgroup>
                                                    <optgroup label="utf16le" title="UTF-16LE Unicode">
                                                        <option value="utf16le_bin" title="Юникод, Двоичный">utf16le_bin</option>
                                                        <option value="utf16le_general_ci" title="Юникод, регистронезависимый">utf16le_general_ci</option>
                                                        <option value="utf16le_general_nopad_ci" title="Юникод, регистронезависимый">utf16le_general_nopad_ci</option>
                                                        <option value="utf16le_nopad_bin" title="Юникод, Двоичный">utf16le_nopad_bin</option>
                                                    </optgroup>
                                                    <optgroup label="utf32" title="UTF-32 Unicode">
                                                        <option value="utf32_bin" title="Юникод, Двоичный">utf32_bin</option>
                                                        <option value="utf32_croatian_ci" title="Хорватский, регистронезависимый">utf32_croatian_ci</option>
                                                        <option value="utf32_croatian_mysql561_ci" title="Хорватский (MySQL 5.6.1), регистронезависимый">utf32_croatian_mysql561_ci</option>
                                                        <option value="utf32_czech_ci" title="Чешский, регистронезависимый">utf32_czech_ci</option>
                                                        <option value="utf32_danish_ci" title="Датский, регистронезависимый">utf32_danish_ci</option>
                                                        <option value="utf32_esperanto_ci" title="Эсперанто, регистронезависимый">utf32_esperanto_ci</option>
                                                        <option value="utf32_estonian_ci" title="Эстонский, регистронезависимый">utf32_estonian_ci</option>
                                                        <option value="utf32_general_ci" title="Юникод, регистронезависимый">utf32_general_ci</option>
                                                        <option value="utf32_general_nopad_ci" title="Юникод, регистронезависимый">utf32_general_nopad_ci</option>
                                                        <option value="utf32_german2_ci" title="Немецкий (порядок телефонной книги), регистронезависимый">utf32_german2_ci</option>
                                                        <option value="utf32_hungarian_ci" title="Венгерский, регистронезависимый">utf32_hungarian_ci</option>
                                                        <option value="utf32_icelandic_ci" title="Исландский, регистронезависимый">utf32_icelandic_ci</option>
                                                        <option value="utf32_latvian_ci" title="Латвийский, регистронезависимый">utf32_latvian_ci</option>
                                                        <option value="utf32_lithuanian_ci" title="Литовский, регистронезависимый">utf32_lithuanian_ci</option>
                                                        <option value="utf32_myanmar_ci" title="Бирманский, регистронезависимый">utf32_myanmar_ci</option>
                                                        <option value="utf32_nopad_bin" title="Юникод, Двоичный">utf32_nopad_bin</option>
                                                        <option value="utf32_persian_ci" title="Персидский, регистронезависимый">utf32_persian_ci</option>
                                                        <option value="utf32_polish_ci" title="Польский, регистронезависимый">utf32_polish_ci</option>
                                                        <option value="utf32_roman_ci" title="Западно-Европейский, регистронезависимый">utf32_roman_ci</option>
                                                        <option value="utf32_romanian_ci" title="Румынский, регистронезависимый">utf32_romanian_ci</option>
                                                        <option value="utf32_sinhala_ci" title="Сингальский, регистронезависимый">utf32_sinhala_ci</option>
                                                        <option value="utf32_slovak_ci" title="Словацкий, регистронезависимый">utf32_slovak_ci</option>
                                                        <option value="utf32_slovenian_ci" title="Словенский, регистронезависимый">utf32_slovenian_ci</option>
                                                        <option value="utf32_spanish2_ci" title="Испанский (традиционный), регистронезависимый">utf32_spanish2_ci</option>
                                                        <option value="utf32_spanish_ci" title="Испанский, регистронезависимый">utf32_spanish_ci</option>
                                                        <option value="utf32_swedish_ci" title="Шведский, регистронезависимый">utf32_swedish_ci</option>
                                                        <option value="utf32_thai_520_w2" title="Таи (UCA 5.2.0), многоуровневый">utf32_thai_520_w2</option>
                                                        <option value="utf32_turkish_ci" title="Турецкий, регистронезависимый">utf32_turkish_ci</option>
                                                        <option value="utf32_unicode_520_ci" title="Юникод (UCA 5.2.0), регистронезависимый">utf32_unicode_520_ci</option>
                                                        <option value="utf32_unicode_520_nopad_ci" title="Юникод (UCA 5.2.0), регистронезависимый">utf32_unicode_520_nopad_ci</option>
                                                        <option value="utf32_unicode_ci" title="Юникод, регистронезависимый">utf32_unicode_ci</option>
                                                        <option value="utf32_unicode_nopad_ci" title="Юникод, регистронезависимый">utf32_unicode_nopad_ci</option>
                                                        <option value="utf32_vietnamese_ci" title="Вьетнамский, регистронезависимый">utf32_vietnamese_ci</option>
                                                    </optgroup>
                                                    <optgroup label="utf8" title="UTF-8 Unicode">
                                                        <option value="utf8_bin" title="Юникод, Двоичный">utf8_bin</option>
                                                        <option value="utf8_croatian_ci" title="Хорватский, регистронезависимый">utf8_croatian_ci</option>
                                                        <option value="utf8_croatian_mysql561_ci" title="Хорватский (MySQL 5.6.1), регистронезависимый">utf8_croatian_mysql561_ci</option>
                                                        <option value="utf8_czech_ci" title="Чешский, регистронезависимый">utf8_czech_ci</option>
                                                        <option value="utf8_danish_ci" title="Датский, регистронезависимый">utf8_danish_ci</option>
                                                        <option value="utf8_esperanto_ci" title="Эсперанто, регистронезависимый">utf8_esperanto_ci</option>
                                                        <option value="utf8_estonian_ci" title="Эстонский, регистронезависимый">utf8_estonian_ci</option>
                                                        <option value="utf8_general_ci" title="Юникод, регистронезависимый">utf8_general_ci</option>
                                                        <option value="utf8_general_mysql500_ci" title="Юникод (MySQL 5.0.0), регистронезависимый">utf8_general_mysql500_ci</option>
                                                        <option value="utf8_general_nopad_ci" title="Юникод, регистронезависимый">utf8_general_nopad_ci</option>
                                                        <option value="utf8_german2_ci" title="Немецкий (порядок телефонной книги), регистронезависимый">utf8_german2_ci</option>
                                                        <option value="utf8_hungarian_ci" title="Венгерский, регистронезависимый">utf8_hungarian_ci</option>
                                                        <option value="utf8_icelandic_ci" title="Исландский, регистронезависимый">utf8_icelandic_ci</option>
                                                        <option value="utf8_latvian_ci" title="Латвийский, регистронезависимый">utf8_latvian_ci</option>
                                                        <option value="utf8_lithuanian_ci" title="Литовский, регистронезависимый">utf8_lithuanian_ci</option>
                                                        <option value="utf8_myanmar_ci" title="Бирманский, регистронезависимый">utf8_myanmar_ci</option>
                                                        <option value="utf8_nopad_bin" title="Юникод, Двоичный">utf8_nopad_bin</option>
                                                        <option value="utf8_persian_ci" title="Персидский, регистронезависимый">utf8_persian_ci</option>
                                                        <option value="utf8_polish_ci" title="Польский, регистронезависимый">utf8_polish_ci</option>
                                                        <option value="utf8_roman_ci" title="Западно-Европейский, регистронезависимый">utf8_roman_ci</option>
                                                        <option value="utf8_romanian_ci" title="Румынский, регистронезависимый">utf8_romanian_ci</option>
                                                        <option value="utf8_sinhala_ci" title="Сингальский, регистронезависимый">utf8_sinhala_ci</option>
                                                        <option value="utf8_slovak_ci" title="Словацкий, регистронезависимый">utf8_slovak_ci</option>
                                                        <option value="utf8_slovenian_ci" title="Словенский, регистронезависимый">utf8_slovenian_ci</option>
                                                        <option value="utf8_spanish2_ci" title="Испанский (традиционный), регистронезависимый">utf8_spanish2_ci</option>
                                                        <option value="utf8_spanish_ci" title="Испанский, регистронезависимый">utf8_spanish_ci</option>
                                                        <option value="utf8_swedish_ci" title="Шведский, регистронезависимый">utf8_swedish_ci</option>
                                                        <option value="utf8_thai_520_w2" title="Таи (UCA 5.2.0), многоуровневый">utf8_thai_520_w2</option>
                                                        <option value="utf8_turkish_ci" title="Турецкий, регистронезависимый">utf8_turkish_ci</option>
                                                        <option value="utf8_unicode_520_ci" title="Юникод (UCA 5.2.0), регистронезависимый">utf8_unicode_520_ci</option>
                                                        <option value="utf8_unicode_520_nopad_ci" title="Юникод (UCA 5.2.0), регистронезависимый">utf8_unicode_520_nopad_ci</option>
                                                        <option value="utf8_unicode_ci" title="Юникод, регистронезависимый">utf8_unicode_ci</option>
                                                        <option value="utf8_unicode_nopad_ci" title="Юникод, регистронезависимый">utf8_unicode_nopad_ci</option>
                                                        <option value="utf8_vietnamese_ci" title="Вьетнамский, регистронезависимый">utf8_vietnamese_ci</option>
                                                    </optgroup>
                                                    <optgroup label="utf8mb4" title="UTF-8 Unicode">
                                                        <option value="utf8mb4_bin" title="Юникод (UCA 4.0.0), Двоичный">utf8mb4_bin</option>
                                                        <option value="utf8mb4_croatian_ci" title="Хорватский (UCA 4.0.0), регистронезависимый">utf8mb4_croatian_ci</option>
                                                        <option value="utf8mb4_croatian_mysql561_ci" title="Хорватский (MySQL 5.6.1), регистронезависимый">utf8mb4_croatian_mysql561_ci</option>
                                                        <option value="utf8mb4_czech_ci" title="Чешский (UCA 4.0.0), регистронезависимый">utf8mb4_czech_ci</option>
                                                        <option value="utf8mb4_danish_ci" title="Датский (UCA 4.0.0), регистронезависимый">utf8mb4_danish_ci</option>
                                                        <option value="utf8mb4_esperanto_ci" title="Эсперанто (UCA 4.0.0), регистронезависимый">utf8mb4_esperanto_ci</option>
                                                        <option value="utf8mb4_estonian_ci" title="Эстонский (UCA 4.0.0), регистронезависимый">utf8mb4_estonian_ci</option>
                                                        <option value="utf8mb4_general_ci" title="Юникод (UCA 4.0.0), регистронезависимый">utf8mb4_general_ci</option>
                                                        <option value="utf8mb4_general_nopad_ci" title="Юникод (UCA 4.0.0), регистронезависимый">utf8mb4_general_nopad_ci</option>
                                                        <option value="utf8mb4_german2_ci" title="Немецкий (порядок телефонной книги) (UCA 4.0.0), регистронезависимый">utf8mb4_german2_ci</option>
                                                        <option value="utf8mb4_hungarian_ci" title="Венгерский (UCA 4.0.0), регистронезависимый">utf8mb4_hungarian_ci</option>
                                                        <option value="utf8mb4_icelandic_ci" title="Исландский (UCA 4.0.0), регистронезависимый" selected="selected">utf8mb4_icelandic_ci</option>
                                                        <option value="utf8mb4_latvian_ci" title="Латвийский (UCA 4.0.0), регистронезависимый">utf8mb4_latvian_ci</option>
                                                        <option value="utf8mb4_lithuanian_ci" title="Литовский (UCA 4.0.0), регистронезависимый">utf8mb4_lithuanian_ci</option>
                                                        <option value="utf8mb4_myanmar_ci" title="Бирманский (UCA 4.0.0), регистронезависимый">utf8mb4_myanmar_ci</option>
                                                        <option value="utf8mb4_nopad_bin" title="Юникод (UCA 4.0.0), Двоичный">utf8mb4_nopad_bin</option>
                                                        <option value="utf8mb4_persian_ci" title="Персидский (UCA 4.0.0), регистронезависимый">utf8mb4_persian_ci</option>
                                                        <option value="utf8mb4_polish_ci" title="Польский (UCA 4.0.0), регистронезависимый">utf8mb4_polish_ci</option>
                                                        <option value="utf8mb4_roman_ci" title="Западно-Европейский (UCA 4.0.0), регистронезависимый">utf8mb4_roman_ci</option>
                                                        <option value="utf8mb4_romanian_ci" title="Румынский (UCA 4.0.0), регистронезависимый">utf8mb4_romanian_ci</option>
                                                        <option value="utf8mb4_sinhala_ci" title="Сингальский (UCA 4.0.0), регистронезависимый">utf8mb4_sinhala_ci</option>
                                                        <option value="utf8mb4_slovak_ci" title="Словацкий (UCA 4.0.0), регистронезависимый">utf8mb4_slovak_ci</option>
                                                        <option value="utf8mb4_slovenian_ci" title="Словенский (UCA 4.0.0), регистронезависимый">utf8mb4_slovenian_ci</option>
                                                        <option value="utf8mb4_spanish2_ci" title="Испанский (традиционный) (UCA 4.0.0), регистронезависимый">utf8mb4_spanish2_ci</option>
                                                        <option value="utf8mb4_spanish_ci" title="Испанский (UCA 4.0.0), регистронезависимый">utf8mb4_spanish_ci</option>
                                                        <option value="utf8mb4_swedish_ci" title="Шведский (UCA 4.0.0), регистронезависимый">utf8mb4_swedish_ci</option>
                                                        <option value="utf8mb4_thai_520_w2" title="Таи (UCA 5.2.0), многоуровневый">utf8mb4_thai_520_w2</option>
                                                        <option value="utf8mb4_turkish_ci" title="Турецкий (UCA 4.0.0), регистронезависимый">utf8mb4_turkish_ci</option>
                                                        <option value="utf8mb4_unicode_520_ci" title="Юникод (UCA 5.2.0), регистронезависимый">utf8mb4_unicode_520_ci</option>
                                                        <option value="utf8mb4_unicode_520_nopad_ci" title="Юникод (UCA 5.2.0), регистронезависимый">utf8mb4_unicode_520_nopad_ci</option>
                                                        <option value="utf8mb4_unicode_ci" title="Юникод (UCA 4.0.0), регистронезависимый">utf8mb4_unicode_ci</option>
                                                        <option value="utf8mb4_unicode_nopad_ci" title="Юникод (UCA 4.0.0), регистронезависимый">utf8mb4_unicode_nopad_ci</option>
                                                        <option value="utf8mb4_vietnamese_ci" title="Вьетнамский (UCA 4.0.0), регистронезависимый">utf8mb4_vietnamese_ci</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="home-div-two">
                                        <h4>Настройки внешнего вида</h4>
                                        <div class="d-flex home-div-two-one flex-wrap">
                                            <div class="home-div-two-icon-one">
                                                <img src="img/s_lang.png" alt="logo">
                                            </div>
                                            <div class="home-div-two-text">
                                                Язык - <em>Language</em>
                                            </div>
                                            <div class="home-div-two-icon-two">
                                                <img src="img/b_help.png" alt="logo">
                                            </div>
                                            <div class="home-div-two-select">
                                                <select name="lang" class="autosubmit" lang="en" dir="ltr" id="sel-lang">

                                                    <option value="sq">
                                                        Shqip - Albanian
                                                    </option>
                                                    <option value="ar">
                                                        العربية - Arabic
                                                    </option>
                                                    <option value="hy">
                                                        Հայերէն - Armenian
                                                    </option>
                                                    <option value="az">
                                                        Azərbaycanca - Azerbaijani
                                                    </option>
                                                    <option value="bn">
                                                        বাংলা - Bangla
                                                    </option>
                                                    <option value="be">
                                                        Беларуская - Belarusian
                                                    </option>
                                                    <option value="pt_br">
                                                        Português - Brazilian Portuguese
                                                    </option>
                                                    <option value="bg">
                                                        Български - Bulgarian
                                                    </option>
                                                    <option value="ca">
                                                        Català - Catalan
                                                    </option>
                                                    <option value="zh_cn">
                                                        中文 - Chinese simplified
                                                    </option>
                                                    <option value="zh_tw">
                                                        中文 - Chinese traditional
                                                    </option>
                                                    <option value="cs">
                                                        Čeština - Czech
                                                    </option>
                                                    <option value="da">
                                                        Dansk - Danish
                                                    </option>
                                                    <option value="nl">
                                                        Nederlands - Dutch
                                                    </option>
                                                    <option value="en">
                                                        English
                                                    </option>
                                                    <option value="en_gb">
                                                        English (United Kingdom)
                                                    </option>
                                                    <option value="et">
                                                        Eesti - Estonian
                                                    </option>
                                                    <option value="fi">
                                                        Suomi - Finnish
                                                    </option>
                                                    <option value="fr">
                                                        Français - French
                                                    </option>
                                                    <option value="gl">
                                                        Galego - Galician
                                                    </option>
                                                    <option value="de">
                                                        Deutsch - German
                                                    </option>
                                                    <option value="el">
                                                        Ελληνικά - Greek
                                                    </option>
                                                    <option value="he">
                                                        עברית - Hebrew
                                                    </option>
                                                    <option value="hu">
                                                        Magyar - Hungarian
                                                    </option>
                                                    <option value="id">
                                                        Bahasa Indonesia - Indonesian
                                                    </option>
                                                    <option value="ia">
                                                        Interlingua
                                                    </option>
                                                    <option value="it">
                                                        Italiano - Italian
                                                    </option>
                                                    <option value="ja">
                                                        日本語 - Japanese
                                                    </option>
                                                    <option value="kk">
                                                        Қазақ - Kazakh
                                                    </option>
                                                    <option value="ko">
                                                        한국어 - Korean
                                                    </option>
                                                    <option value="lt">
                                                        Lietuvių - Lithuanian
                                                    </option>
                                                    <option value="nb">
                                                        Norsk - Norwegian
                                                    </option>
                                                    <option value="pl">
                                                        Polski - Polish
                                                    </option>
                                                    <option value="pt">
                                                        Português - Portuguese
                                                    </option>
                                                    <option value="ro">
                                                        Română - Romanian
                                                    </option>
                                                    <option value="ru" selected="selected">
                                                        Русский - Russian
                                                    </option>
                                                    <option value="sr@latin">
                                                        Srpski - Serbian (latin)
                                                    </option>
                                                    <option value="si">
                                                        සිංහල - Sinhala
                                                    </option>
                                                    <option value="sk">
                                                        Slovenčina - Slovak
                                                    </option>
                                                    <option value="sl">
                                                        Slovenščina - Slovenian
                                                    </option>
                                                    <option value="es">
                                                        Español - Spanish
                                                    </option>
                                                    <option value="sv">
                                                        Svenska - Swedish
                                                    </option>
                                                    <option value="tr">
                                                        Türkçe - Turkish
                                                    </option>
                                                    <option value="uk">
                                                        Українська - Ukrainian
                                                    </option>
                                                    <option value="vi">
                                                        Tiếng Việt - Vietnamese
                                                    </option>

                                                </select>
                                            </div>
                                        </div>
                                        <div class="d-flex home-div-two-two flex-wrap">
                                            <div class="home-div-two-two-icon">
                                                <img src="img/s_theme.png" alt="logo">
                                            </div>
                                            <div class="home-div-two-two-text">
                                                <a href="#">Тема:</a>
                                            </div>
                                            <div class="home-div-two-two-select">
                                                <select name="set_theme" lang="en" dir="ltr" class="autosubmit"><option value="original">Original</option><option value="pmahomme" selected="selected">pmahomme</option></select>
                                            </div>
                                        </div>
                                        <div class="d-flex home-div-two-three flex-wrap">
                                            <div class="home-div-two-three-icon">
                                                <i class="fa fa-circle fa-xs" aria-hidden="true"></i>
                                            </div>
                                            <div class="home-div-two-three-text">
                                                Размер шрифта:
                                            </div>
                                            <div class="home-div-two-three-select">
                                                <select name="set_fontsize" id="select_fontsize" class="autosubmit">
                                                    <option value="32%">32%</option>
                                                    <option value="42%">42%</option>
                                                    <option value="52%">52%</option>
                                                    <option value="62%">62%</option>
                                                    <option value="72%">72%</option>
                                                    <option value="77%">77%</option>
                                                    <option value="78%">78%</option>
                                                    <option value="79%">79%</option>
                                                    <option value="80%">80%</option>
                                                    <option value="81%">81%</option>
                                                    <option value="82%" selected="selected">82%</option>
                                                    <option value="83%">83%</option>
                                                    <option value="84%">84%</option>
                                                    <option value="85%">85%</option>
                                                    <option value="86%">86%</option>
                                                    <option value="87%">87%</option>
                                                    <option value="92%">92%</option>
                                                    <option value="100%">100%</option>
                                                    <option value="102%">102%</option>
                                                    <option value="112%">112%</option>
                                                    <option value="122%">122%</option>
                                                    <option value="132%">132%</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="d-flex home-div-two-three flex-wrap">
                                            <div class="home-div-two-fore-icon">
                                                <img src="img/b_tblops.png" alt="logo">
                                            </div>
                                            <div class="home-div-two-fore-href">
                                                <a href="#"> Дополнительные настройки</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-5">
                                    <div class="home-div-three">
                                        <h4>Сервер баз данных</h4>
                                        <ul>
                                            <li>Сервер: 127.0.0.1 via TCP/IP</li>
                                            <li>Тип сервера: MariaDB</li>
                                            <li>Соединение сервера: SSL не используется <img src="img/b_help.png" alt="logo"></li>
                                            <li>Версия протокола: 10</li>
                                            <li>Пользователь: root@localhost</li>
                                            <li>Кодировка сервера: cp1252 West European (latin1)</li>
                                        </ul>
                                    </div>
                                    <div class="home-div-fore">
                                        <h4>Веб-сервер</h4>
                                        <ul>
                                            <li>Apache/2.4.41 (Win64) OpenSSL/1.1.1c PHP/7.3.9</li>
                                            <li>Версия клиента базы данных: libmysql - mysqlnd 5.0.12-dev - 20150407 - $Id:</li>
                                            <li>PHP расширение: mysqli <img src="img/b_help.png" alt="logo">curl <img src="img/b_help.png" alt="logo"> mbstring <img src="img/b_help.png" alt="logo"></li>
                                            <li>Версия PHP: 7.3.9</li>
                                        </ul>

                                    </div>
                                    <div class="home-div-five">
                                        <h4>phpMyAdmin</h4>
                                        <ul>
                                            <li>Информация о версии: 4.9.0.1, последняя стабильная версия: <a href="#">4.9.4</a></li>
                                            <li><a href="">Документация</a></li>
                                            <li><a href="">Официальная страница phpMyAdmin</a></li>
                                            <li><a href="">Пожертвовать</a></li>
                                            <li><a href="">Получить помощь</a></li>
                                            <li><a href="">Список изменений</a></li>
                                            <li><a href="">Лицензия</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>`);
    }

    if (sum === 1) {
        $('#create-db').children().remove();
        $("#create-db").append(`<h4 class="create-db-title">Базы данных</h4>
                <div class="d-flex create-db-a">
                    <div class="create-db-title-icon-one">
                        <img src="img/b_newdb.png" alt="logo">
                    </div>
                    <div class="create-db-title-text">
                        Создать базу данных
                    </div>
                    <div class="create-db-title-icon-two">
                        <img src="img/b_help.png" alt="logo">
                    </div>
                </div>
                <div class="d-flex input-div-one">
                    <div class="input-div">
                        <label for="db-name">
                            <input id="db-name" type="text" name="db-name" placeholder="name fore data base">
                        </label>
                    </div>
                    <div class="input-div-selection">
                        <select lang="en" dir="ltr" name="db_collation">
                            <option value="">Сравнение</option>
                            <option value=""></option>
                            <optgroup label="armscii8" title="ARMSCII-8 Armenian">
                                <option value="armscii8_bin" title="Армянский, Двоичный">armscii8_bin</option>
                                <option value="armscii8_general_ci" title="Армянский, регистронезависимый">
                                    armscii8_general_ci
                                </option>
                                <option value="armscii8_general_nopad_ci" title="Армянский, регистронезависимый">
                                    armscii8_general_nopad_ci
                                </option>
                                <option value="armscii8_nopad_bin" title="Армянский, Двоичный">armscii8_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="ascii" title="US ASCII">
                                <option value="ascii_bin" title="Западно-Европейский, Двоичный">ascii_bin</option>
                                <option value="ascii_general_ci" title="Западно-Европейский, регистронезависимый">
                                    ascii_general_ci
                                </option>
                                <option value="ascii_general_nopad_ci" title="Западно-Европейский, регистронезависимый">
                                    ascii_general_nopad_ci
                                </option>
                                <option value="ascii_nopad_bin" title="Западно-Европейский, Двоичный">ascii_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="big5" title="Big5 Traditional Chinese">
                                <option value="big5_bin" title="Китайский традиционный, Двоичный">big5_bin</option>
                                <option value="big5_chinese_ci" title="Китайский традиционный, регистронезависимый">
                                    big5_chinese_ci
                                </option>
                                <option value="big5_chinese_nopad_ci"
                                        title="Китайский традиционный, регистронезависимый">big5_chinese_nopad_ci
                                </option>
                                <option value="big5_nopad_bin" title="Китайский традиционный, Двоичный">big5_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="binary" title="Binary pseudo charset">
                                <option value="binary" title="Двоичный">binary</option>
                            </optgroup>
                            <optgroup label="cp1250" title="Windows Central European">
                                <option value="cp1250_bin" title="Центрально-Европейский, Двоичный">cp1250_bin</option>
                                <option value="cp1250_croatian_ci" title="Хорватский, регистронезависимый">
                                    cp1250_croatian_ci
                                </option>
                                <option value="cp1250_czech_cs" title="Чешский, регистрозависымый">cp1250_czech_cs
                                </option>
                                <option value="cp1250_general_ci" title="Центрально-Европейский, регистронезависимый">
                                    cp1250_general_ci
                                </option>
                                <option value="cp1250_general_nopad_ci"
                                        title="Центрально-Европейский, регистронезависимый">cp1250_general_nopad_ci
                                </option>
                                <option value="cp1250_nopad_bin" title="Центрально-Европейский, Двоичный">
                                    cp1250_nopad_bin
                                </option>
                                <option value="cp1250_polish_ci" title="Польский, регистронезависимый">
                                    cp1250_polish_ci
                                </option>
                            </optgroup>
                            <optgroup label="cp1251" title="Windows Cyrillic">
                                <option value="cp1251_bin" title="Кириллический, Двоичный">cp1251_bin</option>
                                <option value="cp1251_bulgarian_ci" title="Болгарский, регистронезависимый">
                                    cp1251_bulgarian_ci
                                </option>
                                <option value="cp1251_general_ci" title="Кириллический, регистронезависимый">
                                    cp1251_general_ci
                                </option>
                                <option value="cp1251_general_cs" title="Кириллический, регистрозависымый">
                                    cp1251_general_cs
                                </option>
                                <option value="cp1251_general_nopad_ci" title="Кириллический, регистронезависимый">
                                    cp1251_general_nopad_ci
                                </option>
                                <option value="cp1251_nopad_bin" title="Кириллический, Двоичный">cp1251_nopad_bin
                                </option>
                                <option value="cp1251_ukrainian_ci" title="Украинский, регистронезависимый">
                                    cp1251_ukrainian_ci
                                </option>
                            </optgroup>
                            <optgroup label="cp1256" title="Windows Arabic">
                                <option value="cp1256_bin" title="Арабский, Двоичный">cp1256_bin</option>
                                <option value="cp1256_general_ci" title="Арабский, регистронезависимый">
                                    cp1256_general_ci
                                </option>
                                <option value="cp1256_general_nopad_ci" title="Арабский, регистронезависимый">
                                    cp1256_general_nopad_ci
                                </option>
                                <option value="cp1256_nopad_bin" title="Арабский, Двоичный">cp1256_nopad_bin</option>
                            </optgroup>
                            <optgroup label="cp1257" title="Windows Baltic">
                                <option value="cp1257_bin" title="Балтийский, Двоичный">cp1257_bin</option>
                                <option value="cp1257_general_ci" title="Балтийский, регистронезависимый">
                                    cp1257_general_ci
                                </option>
                                <option value="cp1257_general_nopad_ci" title="Балтийский, регистронезависимый">
                                    cp1257_general_nopad_ci
                                </option>
                                <option value="cp1257_lithuanian_ci" title="Литовский, регистронезависимый">
                                    cp1257_lithuanian_ci
                                </option>
                                <option value="cp1257_nopad_bin" title="Балтийский, Двоичный">cp1257_nopad_bin</option>
                            </optgroup>
                            <optgroup label="cp850" title="DOS West European">
                                <option value="cp850_bin" title="Западно-Европейский, Двоичный">cp850_bin</option>
                                <option value="cp850_general_ci" title="Западно-Европейский, регистронезависимый">
                                    cp850_general_ci
                                </option>
                                <option value="cp850_general_nopad_ci" title="Западно-Европейский, регистронезависимый">
                                    cp850_general_nopad_ci
                                </option>
                                <option value="cp850_nopad_bin" title="Западно-Европейский, Двоичный">cp850_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="cp852" title="DOS Central European">
                                <option value="cp852_bin" title="Центрально-Европейский, Двоичный">cp852_bin</option>
                                <option value="cp852_general_ci" title="Центрально-Европейский, регистронезависимый">
                                    cp852_general_ci
                                </option>
                                <option value="cp852_general_nopad_ci"
                                        title="Центрально-Европейский, регистронезависимый">cp852_general_nopad_ci
                                </option>
                                <option value="cp852_nopad_bin" title="Центрально-Европейский, Двоичный">
                                    cp852_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="cp866" title="DOS Russian">
                                <option value="cp866_bin" title="Русский, Двоичный">cp866_bin</option>
                                <option value="cp866_general_ci" title="Русский, регистронезависимый">cp866_general_ci
                                </option>
                                <option value="cp866_general_nopad_ci" title="Русский, регистронезависимый">
                                    cp866_general_nopad_ci
                                </option>
                                <option value="cp866_nopad_bin" title="Русский, Двоичный">cp866_nopad_bin</option>
                            </optgroup>
                            <optgroup label="cp932" title="SJIS for Windows Japanese">
                                <option value="cp932_bin" title="Японский, Двоичный">cp932_bin</option>
                                <option value="cp932_japanese_ci" title="Японский, регистронезависимый">
                                    cp932_japanese_ci
                                </option>
                                <option value="cp932_japanese_nopad_ci" title="Японский, регистронезависимый">
                                    cp932_japanese_nopad_ci
                                </option>
                                <option value="cp932_nopad_bin" title="Японский, Двоичный">cp932_nopad_bin</option>
                            </optgroup>
                            <optgroup label="dec8" title="DEC West European">
                                <option value="dec8_bin" title="Западно-Европейский, Двоичный">dec8_bin</option>
                                <option value="dec8_nopad_bin" title="Западно-Европейский, Двоичный">dec8_nopad_bin
                                </option>
                                <option value="dec8_swedish_ci" title="Шведский, регистронезависимый">dec8_swedish_ci
                                </option>
                                <option value="dec8_swedish_nopad_ci" title="Шведский, регистронезависимый">
                                    dec8_swedish_nopad_ci
                                </option>
                            </optgroup>
                            <optgroup label="eucjpms" title="UJIS for Windows Japanese">
                                <option value="eucjpms_bin" title="Японский, Двоичный">eucjpms_bin</option>
                                <option value="eucjpms_japanese_ci" title="Японский, регистронезависимый">
                                    eucjpms_japanese_ci
                                </option>
                                <option value="eucjpms_japanese_nopad_ci" title="Японский, регистронезависимый">
                                    eucjpms_japanese_nopad_ci
                                </option>
                                <option value="eucjpms_nopad_bin" title="Японский, Двоичный">eucjpms_nopad_bin</option>
                            </optgroup>
                            <optgroup label="euckr" title="EUC-KR Korean">
                                <option value="euckr_bin" title="Корейский, Двоичный">euckr_bin</option>
                                <option value="euckr_korean_ci" title="Корейский, регистронезависимый">euckr_korean_ci
                                </option>
                                <option value="euckr_korean_nopad_ci" title="Корейский, регистронезависимый">
                                    euckr_korean_nopad_ci
                                </option>
                                <option value="euckr_nopad_bin" title="Корейский, Двоичный">euckr_nopad_bin</option>
                            </optgroup>
                            <optgroup label="gb2312" title="GB2312 Simplified Chinese">
                                <option value="gb2312_bin" title="Китайский упрощенный, Двоичный">gb2312_bin</option>
                                <option value="gb2312_chinese_ci" title="Китайский упрощенный, регистронезависимый">
                                    gb2312_chinese_ci
                                </option>
                                <option value="gb2312_chinese_nopad_ci"
                                        title="Китайский упрощенный, регистронезависимый">gb2312_chinese_nopad_ci
                                </option>
                                <option value="gb2312_nopad_bin" title="Китайский упрощенный, Двоичный">
                                    gb2312_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="gbk" title="GBK Simplified Chinese">
                                <option value="gbk_bin" title="Китайский упрощенный, Двоичный">gbk_bin</option>
                                <option value="gbk_chinese_ci" title="Китайский упрощенный, регистронезависимый">
                                    gbk_chinese_ci
                                </option>
                                <option value="gbk_chinese_nopad_ci" title="Китайский упрощенный, регистронезависимый">
                                    gbk_chinese_nopad_ci
                                </option>
                                <option value="gbk_nopad_bin" title="Китайский упрощенный, Двоичный">gbk_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="geostd8" title="GEOSTD8 Georgian">
                                <option value="geostd8_bin" title="Грузинский, Двоичный">geostd8_bin</option>
                                <option value="geostd8_general_ci" title="Грузинский, регистронезависимый">
                                    geostd8_general_ci
                                </option>
                                <option value="geostd8_general_nopad_ci" title="Грузинский, регистронезависимый">
                                    geostd8_general_nopad_ci
                                </option>
                                <option value="geostd8_nopad_bin" title="Грузинский, Двоичный">geostd8_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="greek" title="ISO 8859-7 Greek">
                                <option value="greek_bin" title="Греческий, Двоичный">greek_bin</option>
                                <option value="greek_general_ci" title="Греческий, регистронезависимый">
                                    greek_general_ci
                                </option>
                                <option value="greek_general_nopad_ci" title="Греческий, регистронезависимый">
                                    greek_general_nopad_ci
                                </option>
                                <option value="greek_nopad_bin" title="Греческий, Двоичный">greek_nopad_bin</option>
                            </optgroup>
                            <optgroup label="hebrew" title="ISO 8859-8 Hebrew">
                                <option value="hebrew_bin" title="Иврит, Двоичный">hebrew_bin</option>
                                <option value="hebrew_general_ci" title="Иврит, регистронезависимый">hebrew_general_ci
                                </option>
                                <option value="hebrew_general_nopad_ci" title="Иврит, регистронезависимый">
                                    hebrew_general_nopad_ci
                                </option>
                                <option value="hebrew_nopad_bin" title="Иврит, Двоичный">hebrew_nopad_bin</option>
                            </optgroup>
                            <optgroup label="hp8" title="HP West European">
                                <option value="hp8_bin" title="Западно-Европейский, Двоичный">hp8_bin</option>
                                <option value="hp8_english_ci" title="Английский, регистронезависимый">hp8_english_ci
                                </option>
                                <option value="hp8_english_nopad_ci" title="Английский, регистронезависимый">
                                    hp8_english_nopad_ci
                                </option>
                                <option value="hp8_nopad_bin" title="Западно-Европейский, Двоичный">hp8_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="keybcs2" title="DOS Kamenicky Czech-Slovak">
                                <option value="keybcs2_bin" title="Чехословацкий, Двоичный">keybcs2_bin</option>
                                <option value="keybcs2_general_ci" title="Чехословацкий, регистронезависимый">
                                    keybcs2_general_ci
                                </option>
                                <option value="keybcs2_general_nopad_ci" title="Чехословацкий, регистронезависимый">
                                    keybcs2_general_nopad_ci
                                </option>
                                <option value="keybcs2_nopad_bin" title="Чехословацкий, Двоичный">keybcs2_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="koi8r" title="KOI8-R Relcom Russian">
                                <option value="koi8r_bin" title="Русский, Двоичный">koi8r_bin</option>
                                <option value="koi8r_general_ci" title="Русский, регистронезависимый">koi8r_general_ci
                                </option>
                                <option value="koi8r_general_nopad_ci" title="Русский, регистронезависимый">
                                    koi8r_general_nopad_ci
                                </option>
                                <option value="koi8r_nopad_bin" title="Русский, Двоичный">koi8r_nopad_bin</option>
                            </optgroup>
                            <optgroup label="koi8u" title="KOI8-U Ukrainian">
                                <option value="koi8u_bin" title="Украинский, Двоичный">koi8u_bin</option>
                                <option value="koi8u_general_ci" title="Украинский, регистронезависимый">
                                    koi8u_general_ci
                                </option>
                                <option value="koi8u_general_nopad_ci" title="Украинский, регистронезависимый">
                                    koi8u_general_nopad_ci
                                </option>
                                <option value="koi8u_nopad_bin" title="Украинский, Двоичный">koi8u_nopad_bin</option>
                            </optgroup>
                            <optgroup label="latin1" title="cp1252 West European">
                                <option value="latin1_bin" title="Западно-Европейский, Двоичный">latin1_bin</option>
                                <option value="latin1_danish_ci" title="Датский, регистронезависимый">latin1_danish_ci
                                </option>
                                <option value="latin1_general_ci" title="Западно-Европейский, регистронезависимый">
                                    latin1_general_ci
                                </option>
                                <option value="latin1_general_cs" title="Западно-Европейский, регистрозависымый">
                                    latin1_general_cs
                                </option>
                                <option value="latin1_german1_ci"
                                        title="Немецкий (порядок словаря), регистронезависимый">latin1_german1_ci
                                </option>
                                <option value="latin1_german2_ci"
                                        title="Немецкий (порядок телефонной книги), регистронезависимый">
                                    latin1_german2_ci
                                </option>
                                <option value="latin1_nopad_bin" title="Западно-Европейский, Двоичный">
                                    latin1_nopad_bin
                                </option>
                                <option value="latin1_spanish_ci" title="Испанский, регистронезависимый">
                                    latin1_spanish_ci
                                </option>
                                <option value="latin1_swedish_ci" title="Шведский, регистронезависимый"
                                        selected="selected">latin1_swedish_ci
                                </option>
                                <option value="latin1_swedish_nopad_ci" title="Шведский, регистронезависимый">
                                    latin1_swedish_nopad_ci
                                </option>
                            </optgroup>
                            <optgroup label="latin2" title="ISO 8859-2 Central European">
                                <option value="latin2_bin" title="Центрально-Европейский, Двоичный">latin2_bin</option>
                                <option value="latin2_croatian_ci" title="Хорватский, регистронезависимый">
                                    latin2_croatian_ci
                                </option>
                                <option value="latin2_czech_cs" title="Чешский, регистрозависымый">latin2_czech_cs
                                </option>
                                <option value="latin2_general_ci" title="Центрально-Европейский, регистронезависимый">
                                    latin2_general_ci
                                </option>
                                <option value="latin2_general_nopad_ci"
                                        title="Центрально-Европейский, регистронезависимый">latin2_general_nopad_ci
                                </option>
                                <option value="latin2_hungarian_ci" title="Венгерский, регистронезависимый">
                                    latin2_hungarian_ci
                                </option>
                                <option value="latin2_nopad_bin" title="Центрально-Европейский, Двоичный">
                                    latin2_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="latin5" title="ISO 8859-9 Turkish">
                                <option value="latin5_bin" title="Турецкий, Двоичный">latin5_bin</option>
                                <option value="latin5_nopad_bin" title="Турецкий, Двоичный">latin5_nopad_bin</option>
                                <option value="latin5_turkish_ci" title="Турецкий, регистронезависимый">
                                    latin5_turkish_ci
                                </option>
                                <option value="latin5_turkish_nopad_ci" title="Турецкий, регистронезависимый">
                                    latin5_turkish_nopad_ci
                                </option>
                            </optgroup>
                            <optgroup label="latin7" title="ISO 8859-13 Baltic">
                                <option value="latin7_bin" title="Балтийский, Двоичный">latin7_bin</option>
                                <option value="latin7_estonian_cs" title="Эстонский, регистрозависымый">
                                    latin7_estonian_cs
                                </option>
                                <option value="latin7_general_ci" title="Балтийский, регистронезависимый">
                                    latin7_general_ci
                                </option>
                                <option value="latin7_general_cs" title="Балтийский, регистрозависымый">
                                    latin7_general_cs
                                </option>
                                <option value="latin7_general_nopad_ci" title="Балтийский, регистронезависимый">
                                    latin7_general_nopad_ci
                                </option>
                                <option value="latin7_nopad_bin" title="Балтийский, Двоичный">latin7_nopad_bin</option>
                            </optgroup>
                            <optgroup label="macce" title="Mac Central European">
                                <option value="macce_bin" title="Центрально-Европейский, Двоичный">macce_bin</option>
                                <option value="macce_general_ci" title="Центрально-Европейский, регистронезависимый">
                                    macce_general_ci
                                </option>
                                <option value="macce_general_nopad_ci"
                                        title="Центрально-Европейский, регистронезависимый">macce_general_nopad_ci
                                </option>
                                <option value="macce_nopad_bin" title="Центрально-Европейский, Двоичный">
                                    macce_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="macroman" title="Mac West European">
                                <option value="macroman_bin" title="Западно-Европейский, Двоичный">macroman_bin</option>
                                <option value="macroman_general_ci" title="Западно-Европейский, регистронезависимый">
                                    macroman_general_ci
                                </option>
                                <option value="macroman_general_nopad_ci"
                                        title="Западно-Европейский, регистронезависимый">macroman_general_nopad_ci
                                </option>
                                <option value="macroman_nopad_bin" title="Западно-Европейский, Двоичный">
                                    macroman_nopad_bin
                                </option>
                            </optgroup>
                            <optgroup label="sjis" title="Shift-JIS Japanese">
                                <option value="sjis_bin" title="Японский, Двоичный">sjis_bin</option>
                                <option value="sjis_japanese_ci" title="Японский, регистронезависимый">
                                    sjis_japanese_ci
                                </option>
                                <option value="sjis_japanese_nopad_ci" title="Японский, регистронезависимый">
                                    sjis_japanese_nopad_ci
                                </option>
                                <option value="sjis_nopad_bin" title="Японский, Двоичный">sjis_nopad_bin</option>
                            </optgroup>
                            <optgroup label="swe7" title="7bit Swedish">
                                <option value="swe7_bin" title="Шведский, Двоичный">swe7_bin</option>
                                <option value="swe7_nopad_bin" title="Шведский, Двоичный">swe7_nopad_bin</option>
                                <option value="swe7_swedish_ci" title="Шведский, регистронезависимый">swe7_swedish_ci
                                </option>
                                <option value="swe7_swedish_nopad_ci" title="Шведский, регистронезависимый">
                                    swe7_swedish_nopad_ci
                                </option>
                            </optgroup>
                            <optgroup label="tis620" title="TIS620 Thai">
                                <option value="tis620_bin" title="Таи, Двоичный">tis620_bin</option>
                                <option value="tis620_nopad_bin" title="Таи, Двоичный">tis620_nopad_bin</option>
                                <option value="tis620_thai_ci" title="Таи, регистронезависимый">tis620_thai_ci</option>
                                <option value="tis620_thai_nopad_ci" title="Таи, регистронезависимый">
                                    tis620_thai_nopad_ci
                                </option>
                            </optgroup>
                            <optgroup label="ucs2" title="UCS-2 Unicode">
                                <option value="ucs2_bin" title="Юникод, Двоичный">ucs2_bin</option>
                                <option value="ucs2_croatian_ci" title="Хорватский, регистронезависимый">
                                    ucs2_croatian_ci
                                </option>
                                <option value="ucs2_croatian_mysql561_ci"
                                        title="Хорватский (MySQL 5.6.1), регистронезависимый">ucs2_croatian_mysql561_ci
                                </option>
                                <option value="ucs2_czech_ci" title="Чешский, регистронезависимый">ucs2_czech_ci
                                </option>
                                <option value="ucs2_danish_ci" title="Датский, регистронезависимый">ucs2_danish_ci
                                </option>
                                <option value="ucs2_esperanto_ci" title="Эсперанто, регистронезависимый">
                                    ucs2_esperanto_ci
                                </option>
                                <option value="ucs2_estonian_ci" title="Эстонский, регистронезависимый">
                                    ucs2_estonian_ci
                                </option>
                                <option value="ucs2_general_ci" title="Юникод, регистронезависимый">ucs2_general_ci
                                </option>
                                <option value="ucs2_general_mysql500_ci"
                                        title="Юникод (MySQL 5.0.0), регистронезависимый">ucs2_general_mysql500_ci
                                </option>
                                <option value="ucs2_general_nopad_ci" title="Юникод, регистронезависимый">
                                    ucs2_general_nopad_ci
                                </option>
                                <option value="ucs2_german2_ci"
                                        title="Немецкий (порядок телефонной книги), регистронезависимый">ucs2_german2_ci
                                </option>
                                <option value="ucs2_hungarian_ci" title="Венгерский, регистронезависимый">
                                    ucs2_hungarian_ci
                                </option>
                                <option value="ucs2_icelandic_ci" title="Исландский, регистронезависимый">
                                    ucs2_icelandic_ci
                                </option>
                                <option value="ucs2_latvian_ci" title="Латвийский, регистронезависимый">
                                    ucs2_latvian_ci
                                </option>
                                <option value="ucs2_lithuanian_ci" title="Литовский, регистронезависимый">
                                    ucs2_lithuanian_ci
                                </option>
                                <option value="ucs2_myanmar_ci" title="Бирманский, регистронезависимый">
                                    ucs2_myanmar_ci
                                </option>
                                <option value="ucs2_nopad_bin" title="Юникод, Двоичный">ucs2_nopad_bin</option>
                                <option value="ucs2_persian_ci" title="Персидский, регистронезависимый">
                                    ucs2_persian_ci
                                </option>
                                <option value="ucs2_polish_ci" title="Польский, регистронезависимый">ucs2_polish_ci
                                </option>
                                <option value="ucs2_roman_ci" title="Западно-Европейский, регистронезависимый">
                                    ucs2_roman_ci
                                </option>
                                <option value="ucs2_romanian_ci" title="Румынский, регистронезависимый">
                                    ucs2_romanian_ci
                                </option>
                                <option value="ucs2_sinhala_ci" title="Сингальский, регистронезависимый">
                                    ucs2_sinhala_ci
                                </option>
                                <option value="ucs2_slovak_ci" title="Словацкий, регистронезависимый">ucs2_slovak_ci
                                </option>
                                <option value="ucs2_slovenian_ci" title="Словенский, регистронезависимый">
                                    ucs2_slovenian_ci
                                </option>
                                <option value="ucs2_spanish2_ci" title="Испанский (традиционный), регистронезависимый">
                                    ucs2_spanish2_ci
                                </option>
                                <option value="ucs2_spanish_ci" title="Испанский, регистронезависимый">ucs2_spanish_ci
                                </option>
                                <option value="ucs2_swedish_ci" title="Шведский, регистронезависимый">ucs2_swedish_ci
                                </option>
                                <option value="ucs2_thai_520_w2" title="Таи (UCA 5.2.0), многоуровневый">
                                    ucs2_thai_520_w2
                                </option>
                                <option value="ucs2_turkish_ci" title="Турецкий, регистронезависимый">ucs2_turkish_ci
                                </option>
                                <option value="ucs2_unicode_520_ci" title="Юникод (UCA 5.2.0), регистронезависимый">
                                    ucs2_unicode_520_ci
                                </option>
                                <option value="ucs2_unicode_520_nopad_ci"
                                        title="Юникод (UCA 5.2.0), регистронезависимый">ucs2_unicode_520_nopad_ci
                                </option>
                                <option value="ucs2_unicode_ci" title="Юникод, регистронезависимый">ucs2_unicode_ci
                                </option>
                                <option value="ucs2_unicode_nopad_ci" title="Юникод, регистронезависимый">
                                    ucs2_unicode_nopad_ci
                                </option>
                                <option value="ucs2_vietnamese_ci" title="Вьетнамский, регистронезависимый">
                                    ucs2_vietnamese_ci
                                </option>
                            </optgroup>
                            <optgroup label="ujis" title="EUC-JP Japanese">
                                <option value="ujis_bin" title="Японский, Двоичный">ujis_bin</option>
                                <option value="ujis_japanese_ci" title="Японский, регистронезависимый">
                                    ujis_japanese_ci
                                </option>
                                <option value="ujis_japanese_nopad_ci" title="Японский, регистронезависимый">
                                    ujis_japanese_nopad_ci
                                </option>
                                <option value="ujis_nopad_bin" title="Японский, Двоичный">ujis_nopad_bin</option>
                            </optgroup>
                            <optgroup label="utf16" title="UTF-16 Unicode">
                                <option value="utf16_bin" title="Юникод, Двоичный">utf16_bin</option>
                                <option value="utf16_croatian_ci" title="Хорватский, регистронезависимый">
                                    utf16_croatian_ci
                                </option>
                                <option value="utf16_croatian_mysql561_ci"
                                        title="Хорватский (MySQL 5.6.1), регистронезависимый">utf16_croatian_mysql561_ci
                                </option>
                                <option value="utf16_czech_ci" title="Чешский, регистронезависимый">utf16_czech_ci
                                </option>
                                <option value="utf16_danish_ci" title="Датский, регистронезависимый">utf16_danish_ci
                                </option>
                                <option value="utf16_esperanto_ci" title="Эсперанто, регистронезависимый">
                                    utf16_esperanto_ci
                                </option>
                                <option value="utf16_estonian_ci" title="Эстонский, регистронезависимый">
                                    utf16_estonian_ci
                                </option>
                                <option value="utf16_general_ci" title="Юникод, регистронезависимый">utf16_general_ci
                                </option>
                                <option value="utf16_general_nopad_ci" title="Юникод, регистронезависимый">
                                    utf16_general_nopad_ci
                                </option>
                                <option value="utf16_german2_ci"
                                        title="Немецкий (порядок телефонной книги), регистронезависимый">
                                    utf16_german2_ci
                                </option>
                                <option value="utf16_hungarian_ci" title="Венгерский, регистронезависимый">
                                    utf16_hungarian_ci
                                </option>
                                <option value="utf16_icelandic_ci" title="Исландский, регистронезависимый">
                                    utf16_icelandic_ci
                                </option>
                                <option value="utf16_latvian_ci" title="Латвийский, регистронезависимый">
                                    utf16_latvian_ci
                                </option>
                                <option value="utf16_lithuanian_ci" title="Литовский, регистронезависимый">
                                    utf16_lithuanian_ci
                                </option>
                                <option value="utf16_myanmar_ci" title="Бирманский, регистронезависимый">
                                    utf16_myanmar_ci
                                </option>
                                <option value="utf16_nopad_bin" title="Юникод, Двоичный">utf16_nopad_bin</option>
                                <option value="utf16_persian_ci" title="Персидский, регистронезависимый">
                                    utf16_persian_ci
                                </option>
                                <option value="utf16_polish_ci" title="Польский, регистронезависимый">utf16_polish_ci
                                </option>
                                <option value="utf16_roman_ci" title="Западно-Европейский, регистронезависимый">
                                    utf16_roman_ci
                                </option>
                                <option value="utf16_romanian_ci" title="Румынский, регистронезависимый">
                                    utf16_romanian_ci
                                </option>
                                <option value="utf16_sinhala_ci" title="Сингальский, регистронезависимый">
                                    utf16_sinhala_ci
                                </option>
                                <option value="utf16_slovak_ci" title="Словацкий, регистронезависимый">utf16_slovak_ci
                                </option>
                                <option value="utf16_slovenian_ci" title="Словенский, регистронезависимый">
                                    utf16_slovenian_ci
                                </option>
                                <option value="utf16_spanish2_ci" title="Испанский (традиционный), регистронезависимый">
                                    utf16_spanish2_ci
                                </option>
                                <option value="utf16_spanish_ci" title="Испанский, регистронезависимый">
                                    utf16_spanish_ci
                                </option>
                                <option value="utf16_swedish_ci" title="Шведский, регистронезависимый">
                                    utf16_swedish_ci
                                </option>
                                <option value="utf16_thai_520_w2" title="Таи (UCA 5.2.0), многоуровневый">
                                    utf16_thai_520_w2
                                </option>
                                <option value="utf16_turkish_ci" title="Турецкий, регистронезависимый">
                                    utf16_turkish_ci
                                </option>
                                <option value="utf16_unicode_520_ci" title="Юникод (UCA 5.2.0), регистронезависимый">
                                    utf16_unicode_520_ci
                                </option>
                                <option value="utf16_unicode_520_nopad_ci"
                                        title="Юникод (UCA 5.2.0), регистронезависимый">utf16_unicode_520_nopad_ci
                                </option>
                                <option value="utf16_unicode_ci" title="Юникод, регистронезависимый">utf16_unicode_ci
                                </option>
                                <option value="utf16_unicode_nopad_ci" title="Юникод, регистронезависимый">
                                    utf16_unicode_nopad_ci
                                </option>
                                <option value="utf16_vietnamese_ci" title="Вьетнамский, регистронезависимый">
                                    utf16_vietnamese_ci
                                </option>
                            </optgroup>
                            <optgroup label="utf16le" title="UTF-16LE Unicode">
                                <option value="utf16le_bin" title="Юникод, Двоичный">utf16le_bin</option>
                                <option value="utf16le_general_ci" title="Юникод, регистронезависимый">
                                    utf16le_general_ci
                                </option>
                                <option value="utf16le_general_nopad_ci" title="Юникод, регистронезависимый">
                                    utf16le_general_nopad_ci
                                </option>
                                <option value="utf16le_nopad_bin" title="Юникод, Двоичный">utf16le_nopad_bin</option>
                            </optgroup>
                            <optgroup label="utf32" title="UTF-32 Unicode">
                                <option value="utf32_bin" title="Юникод, Двоичный">utf32_bin</option>
                                <option value="utf32_croatian_ci" title="Хорватский, регистронезависимый">
                                    utf32_croatian_ci
                                </option>
                                <option value="utf32_croatian_mysql561_ci"
                                        title="Хорватский (MySQL 5.6.1), регистронезависимый">utf32_croatian_mysql561_ci
                                </option>
                                <option value="utf32_czech_ci" title="Чешский, регистронезависимый">utf32_czech_ci
                                </option>
                                <option value="utf32_danish_ci" title="Датский, регистронезависимый">utf32_danish_ci
                                </option>
                                <option value="utf32_esperanto_ci" title="Эсперанто, регистронезависимый">
                                    utf32_esperanto_ci
                                </option>
                                <option value="utf32_estonian_ci" title="Эстонский, регистронезависимый">
                                    utf32_estonian_ci
                                </option>
                                <option value="utf32_general_ci" title="Юникод, регистронезависимый">utf32_general_ci
                                </option>
                                <option value="utf32_general_nopad_ci" title="Юникод, регистронезависимый">
                                    utf32_general_nopad_ci
                                </option>
                                <option value="utf32_german2_ci"
                                        title="Немецкий (порядок телефонной книги), регистронезависимый">
                                    utf32_german2_ci
                                </option>
                                <option value="utf32_hungarian_ci" title="Венгерский, регистронезависимый">
                                    utf32_hungarian_ci
                                </option>
                                <option value="utf32_icelandic_ci" title="Исландский, регистронезависимый">
                                    utf32_icelandic_ci
                                </option>
                                <option value="utf32_latvian_ci" title="Латвийский, регистронезависимый">
                                    utf32_latvian_ci
                                </option>
                                <option value="utf32_lithuanian_ci" title="Литовский, регистронезависимый">
                                    utf32_lithuanian_ci
                                </option>
                                <option value="utf32_myanmar_ci" title="Бирманский, регистронезависимый">
                                    utf32_myanmar_ci
                                </option>
                                <option value="utf32_nopad_bin" title="Юникод, Двоичный">utf32_nopad_bin</option>
                                <option value="utf32_persian_ci" title="Персидский, регистронезависимый">
                                    utf32_persian_ci
                                </option>
                                <option value="utf32_polish_ci" title="Польский, регистронезависимый">utf32_polish_ci
                                </option>
                                <option value="utf32_roman_ci" title="Западно-Европейский, регистронезависимый">
                                    utf32_roman_ci
                                </option>
                                <option value="utf32_romanian_ci" title="Румынский, регистронезависимый">
                                    utf32_romanian_ci
                                </option>
                                <option value="utf32_sinhala_ci" title="Сингальский, регистронезависимый">
                                    utf32_sinhala_ci
                                </option>
                                <option value="utf32_slovak_ci" title="Словацкий, регистронезависимый">utf32_slovak_ci
                                </option>
                                <option value="utf32_slovenian_ci" title="Словенский, регистронезависимый">
                                    utf32_slovenian_ci
                                </option>
                                <option value="utf32_spanish2_ci" title="Испанский (традиционный), регистронезависимый">
                                    utf32_spanish2_ci
                                </option>
                                <option value="utf32_spanish_ci" title="Испанский, регистронезависимый">
                                    utf32_spanish_ci
                                </option>
                                <option value="utf32_swedish_ci" title="Шведский, регистронезависимый">
                                    utf32_swedish_ci
                                </option>
                                <option value="utf32_thai_520_w2" title="Таи (UCA 5.2.0), многоуровневый">
                                    utf32_thai_520_w2
                                </option>
                                <option value="utf32_turkish_ci" title="Турецкий, регистронезависимый">
                                    utf32_turkish_ci
                                </option>
                                <option value="utf32_unicode_520_ci" title="Юникод (UCA 5.2.0), регистронезависимый">
                                    utf32_unicode_520_ci
                                </option>
                                <option value="utf32_unicode_520_nopad_ci"
                                        title="Юникод (UCA 5.2.0), регистронезависимый">utf32_unicode_520_nopad_ci
                                </option>
                                <option value="utf32_unicode_ci" title="Юникод, регистронезависимый">utf32_unicode_ci
                                </option>
                                <option value="utf32_unicode_nopad_ci" title="Юникод, регистронезависимый">
                                    utf32_unicode_nopad_ci
                                </option>
                                <option value="utf32_vietnamese_ci" title="Вьетнамский, регистронезависимый">
                                    utf32_vietnamese_ci
                                </option>
                            </optgroup>
                            <optgroup label="utf8" title="UTF-8 Unicode">
                                <option value="utf8_bin" title="Юникод, Двоичный">utf8_bin</option>
                                <option value="utf8_croatian_ci" title="Хорватский, регистронезависимый">
                                    utf8_croatian_ci
                                </option>
                                <option value="utf8_croatian_mysql561_ci"
                                        title="Хорватский (MySQL 5.6.1), регистронезависимый">utf8_croatian_mysql561_ci
                                </option>
                                <option value="utf8_czech_ci" title="Чешский, регистронезависимый">utf8_czech_ci
                                </option>
                                <option value="utf8_danish_ci" title="Датский, регистронезависимый">utf8_danish_ci
                                </option>
                                <option value="utf8_esperanto_ci" title="Эсперанто, регистронезависимый">
                                    utf8_esperanto_ci
                                </option>
                                <option value="utf8_estonian_ci" title="Эстонский, регистронезависимый">
                                    utf8_estonian_ci
                                </option>
                                <option value="utf8_general_ci" title="Юникод, регистронезависимый">utf8_general_ci
                                </option>
                                <option value="utf8_general_mysql500_ci"
                                        title="Юникод (MySQL 5.0.0), регистронезависимый">utf8_general_mysql500_ci
                                </option>
                                <option value="utf8_general_nopad_ci" title="Юникод, регистронезависимый">
                                    utf8_general_nopad_ci
                                </option>
                                <option value="utf8_german2_ci"
                                        title="Немецкий (порядок телефонной книги), регистронезависимый">utf8_german2_ci
                                </option>
                                <option value="utf8_hungarian_ci" title="Венгерский, регистронезависимый">
                                    utf8_hungarian_ci
                                </option>
                                <option value="utf8_icelandic_ci" title="Исландский, регистронезависимый">
                                    utf8_icelandic_ci
                                </option>
                                <option value="utf8_latvian_ci" title="Латвийский, регистронезависимый">
                                    utf8_latvian_ci
                                </option>
                                <option value="utf8_lithuanian_ci" title="Литовский, регистронезависимый">
                                    utf8_lithuanian_ci
                                </option>
                                <option value="utf8_myanmar_ci" title="Бирманский, регистронезависимый">
                                    utf8_myanmar_ci
                                </option>
                                <option value="utf8_nopad_bin" title="Юникод, Двоичный">utf8_nopad_bin</option>
                                <option value="utf8_persian_ci" title="Персидский, регистронезависимый">
                                    utf8_persian_ci
                                </option>
                                <option value="utf8_polish_ci" title="Польский, регистронезависимый">utf8_polish_ci
                                </option>
                                <option value="utf8_roman_ci" title="Западно-Европейский, регистронезависимый">
                                    utf8_roman_ci
                                </option>
                                <option value="utf8_romanian_ci" title="Румынский, регистронезависимый">
                                    utf8_romanian_ci
                                </option>
                                <option value="utf8_sinhala_ci" title="Сингальский, регистронезависимый">
                                    utf8_sinhala_ci
                                </option>
                                <option value="utf8_slovak_ci" title="Словацкий, регистронезависимый">utf8_slovak_ci
                                </option>
                                <option value="utf8_slovenian_ci" title="Словенский, регистронезависимый">
                                    utf8_slovenian_ci
                                </option>
                                <option value="utf8_spanish2_ci" title="Испанский (традиционный), регистронезависимый">
                                    utf8_spanish2_ci
                                </option>
                                <option value="utf8_spanish_ci" title="Испанский, регистронезависимый">utf8_spanish_ci
                                </option>
                                <option value="utf8_swedish_ci" title="Шведский, регистронезависимый">utf8_swedish_ci
                                </option>
                                <option value="utf8_thai_520_w2" title="Таи (UCA 5.2.0), многоуровневый">
                                    utf8_thai_520_w2
                                </option>
                                <option value="utf8_turkish_ci" title="Турецкий, регистронезависимый">utf8_turkish_ci
                                </option>
                                <option value="utf8_unicode_520_ci" title="Юникод (UCA 5.2.0), регистронезависимый">
                                    utf8_unicode_520_ci
                                </option>
                                <option value="utf8_unicode_520_nopad_ci"
                                        title="Юникод (UCA 5.2.0), регистронезависимый">utf8_unicode_520_nopad_ci
                                </option>
                                <option value="utf8_unicode_ci" title="Юникод, регистронезависимый">utf8_unicode_ci
                                </option>
                                <option value="utf8_unicode_nopad_ci" title="Юникод, регистронезависимый">
                                    utf8_unicode_nopad_ci
                                </option>
                                <option value="utf8_vietnamese_ci" title="Вьетнамский, регистронезависимый">
                                    utf8_vietnamese_ci
                                </option>
                            </optgroup>
                            <optgroup label="utf8mb4" title="UTF-8 Unicode">
                                <option value="utf8mb4_bin" title="Юникод (UCA 4.0.0), Двоичный">utf8mb4_bin</option>
                                <option value="utf8mb4_croatian_ci" title="Хорватский (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_croatian_ci
                                </option>
                                <option value="utf8mb4_croatian_mysql561_ci"
                                        title="Хорватский (MySQL 5.6.1), регистронезависимый">
                                    utf8mb4_croatian_mysql561_ci
                                </option>
                                <option value="utf8mb4_czech_ci" title="Чешский (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_czech_ci
                                </option>
                                <option value="utf8mb4_danish_ci" title="Датский (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_danish_ci
                                </option>
                                <option value="utf8mb4_esperanto_ci" title="Эсперанто (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_esperanto_ci
                                </option>
                                <option value="utf8mb4_estonian_ci" title="Эстонский (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_estonian_ci
                                </option>
                                <option value="utf8mb4_general_ci" title="Юникод (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_general_ci
                                </option>
                                <option value="utf8mb4_general_nopad_ci"
                                        title="Юникод (UCA 4.0.0), регистронезависимый">utf8mb4_general_nopad_ci
                                </option>
                                <option value="utf8mb4_german2_ci"
                                        title="Немецкий (порядок телефонной книги) (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_german2_ci
                                </option>
                                <option value="utf8mb4_hungarian_ci"
                                        title="Венгерский (UCA 4.0.0), регистронезависимый">utf8mb4_hungarian_ci
                                </option>
                                <option value="utf8mb4_icelandic_ci"
                                        title="Исландский (UCA 4.0.0), регистронезависимый">utf8mb4_icelandic_ci
                                </option>
                                <option value="utf8mb4_latvian_ci" title="Латвийский (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_latvian_ci
                                </option>
                                <option value="utf8mb4_lithuanian_ci"
                                        title="Литовский (UCA 4.0.0), регистронезависимый">utf8mb4_lithuanian_ci
                                </option>
                                <option value="utf8mb4_myanmar_ci" title="Бирманский (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_myanmar_ci
                                </option>
                                <option value="utf8mb4_nopad_bin" title="Юникод (UCA 4.0.0), Двоичный">
                                    utf8mb4_nopad_bin
                                </option>
                                <option value="utf8mb4_persian_ci" title="Персидский (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_persian_ci
                                </option>
                                <option value="utf8mb4_polish_ci" title="Польский (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_polish_ci
                                </option>
                                <option value="utf8mb4_roman_ci"
                                        title="Западно-Европейский (UCA 4.0.0), регистронезависимый">utf8mb4_roman_ci
                                </option>
                                <option value="utf8mb4_romanian_ci" title="Румынский (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_romanian_ci
                                </option>
                                <option value="utf8mb4_sinhala_ci" title="Сингальский (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_sinhala_ci
                                </option>
                                <option value="utf8mb4_slovak_ci" title="Словацкий (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_slovak_ci
                                </option>
                                <option value="utf8mb4_slovenian_ci"
                                        title="Словенский (UCA 4.0.0), регистронезависимый">utf8mb4_slovenian_ci
                                </option>
                                <option value="utf8mb4_spanish2_ci"
                                        title="Испанский (традиционный) (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_spanish2_ci
                                </option>
                                <option value="utf8mb4_spanish_ci" title="Испанский (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_spanish_ci
                                </option>
                                <option value="utf8mb4_swedish_ci" title="Шведский (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_swedish_ci
                                </option>
                                <option value="utf8mb4_thai_520_w2" title="Таи (UCA 5.2.0), многоуровневый">
                                    utf8mb4_thai_520_w2
                                </option>
                                <option value="utf8mb4_turkish_ci" title="Турецкий (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_turkish_ci
                                </option>
                                <option value="utf8mb4_unicode_520_ci" title="Юникод (UCA 5.2.0), регистронезависимый">
                                    utf8mb4_unicode_520_ci
                                </option>
                                <option value="utf8mb4_unicode_520_nopad_ci"
                                        title="Юникод (UCA 5.2.0), регистронезависимый">utf8mb4_unicode_520_nopad_ci
                                </option>
                                <option value="utf8mb4_unicode_ci" title="Юникод (UCA 4.0.0), регистронезависимый">
                                    utf8mb4_unicode_ci
                                </option>
                                <option value="utf8mb4_unicode_nopad_ci"
                                        title="Юникод (UCA 4.0.0), регистронезависимый">utf8mb4_unicode_nopad_ci
                                </option>
                                <option value="utf8mb4_vietnamese_ci"
                                        title="Вьетнамский (UCA 4.0.0), регистронезависимый">utf8mb4_vietnamese_ci
                                </option>
                            </optgroup>
                        </select>
                    </div>
                    <button class="input-div-but">CREATE</button>
                </div>
                <fieldset id="tableFilter">
                    <legend>Фильтры</legend>
                    <div class="formelement">
                        <label for="filterText">Содержит слово:</label>
                        <input name="filterText" type="text" id="filterText" value="">
                    </div>
                </fieldset>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th></th>
                        <th>База данных</th>
                        <th>Сравнение</th>
                        <th>Действие</th>
                    </tr>
                    </thead>
                    <tbody id="append-table">
                    
                    </tbody>
                </table>
           `);
        $.ajax({
            url: "json/indexone.json",
            type: "GET",
            dataType: "json",
            success: function (data) {
                data.leftDbObject.forEach((i) => {
                    $('#append-table').append(`
                        <tr>
                        <td class="td-chek"><input type="checkbox" name="chek" value="v"></td>
                        <td>${i.title}</td>
                        <td>${i.char}</td>
                        <td class="d-flex">
                            <div class="td-img">
                                <img src="img/s_rights.png" alt="logo">
                            </div>
                            <a class="td-a-href" href="#">Проверить привилегии</a>
                        </td>
                        </tr>
                    `)
                })
            }
        })
    }

    if (sum > 1){
        $('#create-db').children().remove();
        $(`#create-db`).append(`<fieldset id="filter">
                    <legend>Фильтры</legend>
                    <div class="formelement">
                        <label for="filterText">Содержит слово:</label>
                        <input name="filterText" type="text" id="filterText" value="">
                    </div>
                </fieldset>
                <table id="table-two" class="table table-striped">
                    <thead >
                    <tr class="table-two-tr">
                        <th></th>
                        <th>Таблица</th>
                        <th>Действие</th>
                        <th>Строки</th>
                        <th>Тип</th>
                        <th>Сравнение</th>
                        <th>Размер</th>
                        <th>Фрагментировано</th>
                    </tr>
                    </thead>
                    <tbody id="append-table-two">
                  
                    </tbody>
                </table>
                <fieldset id="db-table-filt">
                    <legend class="d-flex">
                        <div class="img-cr-table">
                        <img src="img/b_newdb.png" alt="logo"></div> <div class="d-flex cr-table-leg">Создать&nbsp;таблицу</div>
                    </legend>
                    <div class="d-flex">
                        <label for="new-tb-name" class="d-flex">
                            Имя: <input id="new-tb-name" type="text" name="new-tb-name">
                        </label>
                        <label for="new-tb-num" class="d-flex">
                            Количество столбцов: <input id="new-tb-num" type="text" name="new-tb-num">
                        </label>
                       </div>
                </fieldset>
                <div class="cr-tb-button">
                    <button>Вперёд</button>
                </div>`);
        $.ajax({
            url: "json/indexone.json",
            type: "GET",
            dataType: "json",
            success:function (data) {
                var dbnum=sum-2;
                data.leftDbObject.forEach((j,t)=>{
                    if (dbnum===t){
                        for (let a=0;a<j.child.length;a++){
                            // console.log(j.child[a].lt);
                            $('#append-table-two').append(`
                                  <tr>
                                <td><input type="checkbox" name="chek-two" value="vvv"></td>
                                <td>${j.child[a].lt}</td>
                                <td class="d-flex">
                                    <a href="#" class="d-flex">
                                        <div class="tb-img-div">
                                        <img src="img/b_no_favorite.png" alt="logo"></div>
                                    </a>
                                    <a href="#" class="d-flex">
                                        <div class="tb-img-div">
                                            <img src="img/b_import.png" alt="logo"></div>
                                        Обзор
                                    </a>
                                    <a href="#" class="d-flex">
                                        <div class="tb-img-div">
                                            <img src="img/b_props.png" alt="logo"></div>
                                        Структура
                                    </a>
                                    <a href="#" class="d-flex">
                                        <div class="tb-img-div">
                                            <img src="img/b_select.png" alt="logo"></div>
                                        Поиск
                                    </a>
                                    <a href="#" class="d-flex">
                                        <div class="tb-img-div">
                                            <img src="img/b_insrow.png" alt="logo">
                                        </div>
                                        Вставить
                                    </a>
                                    <a href="#" class="d-flex">
                                        <div class="tb-img-div">
                                            <img src="img/bd_empty.png" alt="logo">
                                        </div>
                                        Очистить
                                    </a>
                                    <a href="#" class="d-flex">
                                        <div class="tb-img-div">
                                            <img src="img/b_drop.png" alt="logo">
                                        </div>
                                        Удалить
                                    </a>
                                </td>
                                <td>7</td>
                                <td>innoDb</td>
                                <td style="padding: 5px 5px">${j.child[a].charset}</td>
                                <td>32 КиБ</td>
                                <td>-</td>
                            </tr>
                            `);
                        }
                    }
                })
            }
        })
    }
}