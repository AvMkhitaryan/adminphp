$(document).ready(function () {

    $(".card-header").click(function () {
        if ($(this).find(".img-icon").css("display", "block")) {
            $(this).find(".img-icone").css("display", "block");
            $(this).find(".img-icon").css("display", "none");
        } else {
            $(this).find(".img-icone").css("display", "none");
            $(this).find(".img-icon").css("display", "block");
        }
    })


$.ajax({
    url: "json/indexone.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        let keyNum = [0];
        data.leftDbObject.forEach((i, k) => {
            $("#accordion").append(`
                <div  class="card">
                    <div onclick="argum(${k + 2});" class="card-header collap" role="tab" id="accordionHeading${k}" data-id="${i.idone}">
                        <div class="mb-0 row">
                            <div class="col-12 no-padding accordion-head">
                                <a data-toggle="collapse" data-parent="#accordion" href="#${i.idone}" aria-expanded="false" aria-controls="${i.idone}" class="collapsed ">
                                    <div class="title-style d-flex justify-content-start">
                                         <div class="title-style-div-one">
                                              <img class="img-icon" src="img/b_plus.png" alt="logo">
                                              <img class="img-icone" src="img/b_minus.png" alt="logo">
                                            </div>
                                            <div class="title-style-div-two">
                                              <img class="coll-db-logo" src="img/s_db.png" alt="logo">
                                            </div>
                                            <div class="info-text">
                                               ${i.title}
                                         </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                     </div>
                   <div id="${i.idone}" class="collapse app${k}" role="tabpanel" aria-labelledby="${i.idone}" aria-expanded="false" data-parent="accordion" style="">
                                <div onclick="crNewTable(${k})" class="accordion-new-button col-12 d-flex"><div class="accordion-new-button-img"><img src="img/b_export.png" alt="logo"></div><div class="accordion-new-button-text">NEW</div</div>
                            </div>
                `);


            // for (let g = 0; g < i.child.length; g++) {
            //
            //     let numb = keyNum[keyNum.length - 1];
            //
            //     let lastItem = keyNum[keyNum.length - 1];
            //     keyNum.push(lastItem + 1);
            //
            //     $('.app' + k).append(`
            //     <div class="card-block col-12">
            //                         <div class="panel-group">
            //                             <div class="panel panel-default">
            //                                 <div onclick="cl(${numb})" class="panel-heading">
            //                                     <div class="panel-title">
            //                                         <a data-toggle="collapse" href="#collapselast${numb}">
            //                                             <div class="title-style d-flex justify-content-start">
            //                                                 <div class="title-style-div-one">
            //                                                     <img class="img-icon" src="img/b_plus.png" alt="logo">
            //                                                     <img class="img-icone" src="img/b_minus.png" alt="logo">
            //                                                 </div>
            //                                                 <div class="title-style-div-two">
            //                                                     <img class="coll-db-logo" src="img/s_db.png" alt="logo">
            //                                                 </div>
            //                                                 <div class="info-text">
            //
            //                                                   ${i.child[g].lt}
            //                                                 </div>
            //                                             </div>
            //                                         </a>
            //                                     </div>
            //                                 </div>
            //                                 <div id="collapselast${numb}" class="panel-collapse collapse">
            //                                     <div class="collapse-after-div"> ${i.child[g].info}</div>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>`)
            // }
        })
        setClickOnCollapse();

    }
});
function setClickOnCollapse() {
    $('.collap').on('click', function () {
        // alert(1213)
        let id = $(this).attr('data-id');
        console.log(id);
        $.ajax({
            url: "json/collapsedlast.json",
            type: "GET",
            dataType: "json",
            success: function (data) {
                $('.remove-data-' + id).remove();
                data.table.forEach((i, k) => {
                    // console.log(i.db_id);
                    if (id == i.db_id) {
                        // $("#"+ id).children().remove();
                        $("#" + id).append(`
                           <div class="card-block col-12 remove-data-${id}">
                                    <div class="panel-group " data-id="${i.id}">
                                        <div class="panel panel-default">
                                            <div onclick="cl(${k})" class="panel-heading">
                                                <div class="panel-title">
                                                    <a data-toggle="collapse" href="#${i.id}">
                                                        <div class="title-style d-flex justify-content-start">
                                                            <div class="title-style-div-one">
                                                                <img class="img-icon" src="img/b_plus.png" alt="logo">
                                                                <img class="img-icone" src="img/b_minus.png" alt="logo">
                                                            </div>
                                                            <div class="title-style-div-two">
                                                                <img class="coll-db-logo" src="img/s_db.png" alt="logo">
                                                            </div>
                                                            <div class="info-text">

                                                              ${i.name}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div id="${i.id}" class="panel-collapse collapse append-divs" >
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    `)
                    }
                })
            }
        });
    });
}

$(document).on('click', '.panel-group', function () {
    let idtwo = $(this).attr('data-id');
    // let appe = $('.append-divs').attr('id');
    // console.log(appe);
    // console.log(idtwo);
    $.ajax({
        url: "json/indexit.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            $('.remove-zsd'+idtwo).remove();
            data.indexObject.forEach((p,k) => {
                // console.log(p);
                if (idtwo == p.db_id) {
                    // console.log(p.name);
                    $('#'+idtwo).append(` <div class="indexit-json-info remove-zsd${idtwo}">
                                            <div>${p.nameone}</div>
                                            <div>${p.nametwo}</div>
                                        </div>`)
                }
            })
        }
    })
});

});