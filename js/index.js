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
        data.leftDbObject.forEach((i, k) => {
            $("#accordion").append(`
                <div class="card">
                    <div class="card-header" role="tab" id="accordionHeading${k}">
                        <div class="mb-0 row">
                            <div class="col-12 no-padding accordion-head">
                                <a data-toggle="collapse" data-parent="#accordion" href="#accordionBody${k}"
                                           aria-expanded="false" aria-controls="accordionBodyOne"
                                           class="collapsed ">
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
                   <div id="accordionBody${k}" class="collapse app" role="tabpanel" aria-labelledby="accordionHeadingTwo" aria-expanded="false" data-parent="accordion" style="">
                                <div class="card-block col-12">
                                  
                                </div>
                            </div>
                `);

            for (g=0;g<i.child.length;g++){
                // console.log(i.child[g]);
                $(".app").append(`
                        <div class="card-block col-12">
                                    <div class="panel-group">
                                        <div class="panel panel-default">
                                            <div class="panel-heading">
                                                <div class="panel-title">
                                                    <a data-toggle="collapse" href="#collapse${g}">
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
                                            <div id="collapse${g}" class="panel-collapse collapse">
                                                <div class="collapse-after-div"> ${i.child[g].info}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                `);
            }
        })
    }

});