$( document ).ready(function() {

    // Actions

    // Open/Close call transfer

    $('.open-call-transfer').on('click', function () {
        $('.popup-call-transfer').addClass('active');
        $(this).addClass('active');
        $('.popup-messages').removeClass('active');
        $('.open-messages').removeClass('active');
    });

    $('.close-call-transfer').on('click', function () {
        $('.popup-call-transfer').removeClass('active');
        $('.open-call-transfer').removeClass('active');
    });

    // Call transfer members

    $('.popup-call-transfer td').on('click', function () {
       $(this).toggleClass('active');
    });

    // Open/Close tags

    $('.open-tags').on('click', function () {
        $('.popup-tags').addClass('active');
        $(this).addClass('active');
    });

    $('.close-tags').on('click', function () {
        $('.popup-tags').removeClass('active');
        $('.open-tags').removeClass('active');
    });

    // Open/Close notes

    $('.open-notes').on('click', function () {
        $('.popup-notes').addClass('active');
        $(this).addClass('active');
    });

    $('.close-notes').on('click', function () {
        $('.popup-notes').removeClass('active');
        $('.open-notes').removeClass('active');
    });

    // Caller window

    $(window).click(function(e) {
        if ($('.popup-small').hasClass('active')) {
            $('.caller').addClass('small');
        } else {
            $('.caller').removeClass('small');
        }
    });

    // Open/Close messages

    $('.open-messages').on('click', function () {
        $('.popup-messages').addClass('active');
        $(this).addClass('active');
        $('.popup-call-transfer').removeClass('active');
        $('.open-call-transfer').removeClass('active');
    });

    $('.close-messages').on('click', function () {
        $('.popup-messages').removeClass('active');
        $('.open-messages').removeClass('active');
    });

    // Search members

    function myFunction() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("members-input");
        filter = input.value.toUpperCase();
        table = document.getElementById("members-search");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

});
