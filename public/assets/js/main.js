
$.ajax({

    url: 'assets/data/content.json',
    success: function(results) {
        
        // FOUR CARDS 
        $.each(results.infoBtn, function() {
            var container = $("#infoBtnContainer");
            $(container).append(`

            <a href="/" class="col-lg-3">

            <div class="border border-dark rounded-3 border-success p-4 mb-2 border-opacity-25 text-dark d-flex flex-column align-items-center justify-content-between">
                <p class="text-black-50 mb-0">${this.infoBtnTitle}</p>
                <p class="fs-2 mb-0"><strong>${this.infoBtnValue}</strong></p>
            </div>

            </a>

            `);

        });

        // ADD 2 CARDS
        // LEFT CARD - GRAPH
        $.each(results.leftInfo, function() {
            var container = $("#left-content");
            $(container).append(`
            <li class="list-group-item d-flex flex-column align-items-center justify-content-center">
                    ${this.infoBtnTitle}
                <p><strong>${this.infoBtnValue}</strong></p>
            </li>

            `);

        });
    }
});