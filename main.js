(function ($) {

    $(document).ready(function(e){
        const $mapHolder = $('.office-map');

        initCanvas($mapHolder);
        $('#clear-storage').on('click', (e) => {
            clearSeatStorage();
        });
    });

    function initCanvas($mapHolder) {
        let seats = getSeatsArray();
        let saveOption = $('#create-seatmap');
        let editOption = $('#edit-seatmap');

        $mapHolder.find('.level-map').each((index, item) => {
            let canvas = document.getElementById('canvas-' + index);
            let ctx = canvas.getContext('2d');

            
            $(canvas).on('click', (e)=>{
                let canvas = e.target;
                let coordinates = getClickCoordinates(canvas, e);
                let seatIndex = getSeatsArray().length;

                if (saveOption.prop('checked') == true) {
                    seat = drawSeat(seatIndex, canvas, coordinates, ctx);
                    saveSeatToStorage(seat);
                }
                if (editOption.prop('checked') == true) {
                    seat = checkCoordinates(seats, canvas, coordinates, ctx);
                }
            });

            $.each(seats, (seatId, seat) => {
                if (seat.canvas == canvas.id) {
                    drawSeat(canvas, seat.coordinates, ctx);
                }
            });
        });
    }

    function getClickCoordinates(canvas, evt) {
        let rect = canvas.getBoundingClientRect(),
        scaleX = canvas.width / rect.width,
        scaleY = canvas.height / rect.height;

        return {
            x: (evt.clientX - rect.left) * scaleX,
            y: (evt.clientY - rect.top) * scaleY
        }
    }

    function drawSeat(seatId, canvas, coordinates, ctx) {
        let seat = createSeat(seatId, coordinates, canvas);

        if (canvas.getContext) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'grey';
            ctx.strokeRect(coordinates.x - 1, coordinates.y - 1, 1, 1);
            ctx.closePath();
        }
        return seat;
    }

    function checkCoordinates(seats, canvas, coordinates, ctx) {
        let seat = {};
        let searchAreaIndex = 4;

        $.each(seats, (index, item) => {
            if (item.coordinates.x - searchAreaIndex <= coordinates.x && coordinates.x <= item.coordinates.x + searchAreaIndex) {
                if (item.coordinates.y - searchAreaIndex <= coordinates.y && coordinates.y <= item.coordinates.y + searchAreaIndex) {
                    seat = item;
                }
            }
        });

        return seat;

    }

    function createSeat(seatId, coordinates, canvas) {
        userData = '';
        let seat = new Seat(seatId, coordinates, canvas, userData);

        return seat;
    }

    function clearSeatStorage() {
        localStorage.clear();
        return location.reload();
    }

    function getSeatsArray() {
        localSeats = localStorage.getItem('officeSeats');
        if (typeof $.parseJSON(localStorage.getItem('officeSeats')) == 'object' && $.parseJSON(localStorage.getItem('officeSeats')) !== null) {
            seats = JSON.parse(localSeats);
        } else {
            seats = [];
        }

        return seats;
    }

    function saveSeatToStorage(seat) {
        seats = getSeatsArray();
        seats.push(seat);
        serialSeats = JSON.stringify(seats);
        localStorage.setItem('officeSeats', serialSeats);
    }

})(jQuery);