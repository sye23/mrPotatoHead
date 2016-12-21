/*global $ */
(function () {
    'use strict';
    var drag = ('.draggable'),
        highestZindex = 0,
        dragging,
        position = [];



    $('#playButton').click(function () {
        $.ajax({
            type: "GET",
            url: 'game.html',
            dataType: 'html',
            success: function (data) {
                $('#body').empty();
                $("#body").append(data.toString());
                $('body').css({
                    "backgroundImage": "url('images/background.png')"
                });
                $(document).on('mousedown', '.draggable', function (event) {
                    dragging = $(this);
                    dragging.addClass('dragging');
                    dragging.css('zIndex', ++highestZindex);
                    console.log(event);
                });

                $(drag).draggable({
                    stop: function () {
                        var stoppos = $(this).position();
                        console.log(this);
                        position.push(this.id, stoppos.left, stoppos.top);
                        localStorage.position = JSON.stringify(position);
                    }
                });
            },
            error: function (data, errorThrown) {
                alert(errorThrown);
            }
        });

    });




    if (localStorage.position) {
        position = JSON.parse(localStorage.position);
        console.log(position[2]);
        position.forEach(function (item) {

        });
    }


}());