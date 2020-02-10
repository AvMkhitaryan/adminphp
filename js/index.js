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

});

$.ajax({
    url: "json/indexone.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        let keyNum=[0];
        data.leftDbObject.forEach((i, k) => {
            $("#accordion").append(`
                <div  class="card">
                    <div onclick="argum(${k+2})" class="card-header" role="tab" id="accordionHeading${k}">
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


            for (let g=0;g<i.child.length;g++){

                let numb=keyNum[keyNum.length - 1];

                let lastItem = keyNum[keyNum.length - 1];
                keyNum.push(lastItem+1);

                $('.app' + k).append(`<div class="card-block col-12">
                                    <div class="panel-group">
                                        <div class="panel panel-default">
                                            <div onclick="cl(${numb})" class="panel-heading">
                                                <div class="panel-title">
                                                    <a data-toggle="collapse" href="#collapse${i.child[g].idtwo}">
                                                        <div class="title-style d-flex justify-content-start">
                                                            <div class="title-style-div-one">
                                                                <img class="img-icon" src="img/b_plus.png" alt="logo">
                                                                <img class="img-icone" src="img/b_minus.png" alt="logo">
                                                            </div>
                                                            <div class="title-style-div-two">
                                                                <img class="coll-db-logo" src="img/s_db.png" alt="logo">
                                                            </div>
                                                            <div class="info-text">

                                                              ${i.child[g].lt}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div id="collapse${i.child[g].idtwo}" class="panel-collapse collapse">
                                                <div class="collapse-after-div"> ${i.child[g].info}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                `)

            }
            // for (g=0;g<i.child.length;g++){
            //     console.log(i.child[g]);
            //     $(".app").append(`
            //             <div class="card-block col-12">
            //                         <div class="panel-group">
            //                             <div class="panel panel-default">
            //                                 <div class="panel-heading">
            //                                     <div class="panel-title">
            //                                         <a data-toggle="collapse" href="#collapse${g}">
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
            //                                 <div id="collapse${g}" class="panel-collapse collapse">
            //                                     <div class="collapse-after-div"> ${i.child[g].info}</div>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //     `);
            // }
        })
    }

});