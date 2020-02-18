(function ($) {

    $(document).ready(function(e){
        const $mapHolder = $('.office-map');
        initCanvas($mapHolder);
        $('#clear-storage').on('click', (e) => {
            clearSeatStorage();
        });
    });

    function initCanvas($mapHolder) {
        let seats = JSON.parse(localStorage.getItem('officeSeats'));
        $mapHolder.find('.level-map').each((index, item) => {
            let canvas = document.getElementById('canvas-' + index);
            let ctx = canvas.getContext('2d');
            $(canvas).on('click', (e)=>{
                let canvas = e.target;
                let coordinates = getClickCoordinates(canvas, e);
                seat = drawSeat(canvas, coordinates, ctx);
                saveSeatToStorage(seat);
            });
            $.each(seats, (seatId, seat) => {
                if (seat.canvas == canvas.id) {
                    drawSeat(canvas, seat.coordinates, ctx);
                }
            });
        });
    }

    function getClickCoordinates(canvas, evt) {
        var rect = canvas.getBoundingClientRect(),
        scaleX = canvas.width / rect.width,
        scaleY = canvas.height / rect.height;

        return {
            x: (evt.clientX - rect.left) * scaleX,
            y: (evt.clientY - rect.top) * scaleY
        }
    }

    function drawSeat(canvas, coordinates, ctx) {
        let seat = createSeat(coordinates, canvas);

        if (canvas.getContext) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            ctx.strokeRect(coordinates.x - 1, coordinates.y - 1, 1, 1);
            ctx.closePath();
        }
        return seat;
    }

    function createSeat(coordinates, canvas) {
        let seat = {
            coordinates: coordinates,
            canvas: canvas.id,
            userData: 'userData'
        }

        return seat;
    }

    function clearSeatStorage() {
        localStorage.clear();
        return location.reload();
    }

    function saveSeatToStorage(seat) {
        localSeats = localStorage.getItem('officeSeats');
        if (typeof $.parseJSON(localStorage.getItem('officeSeats')) == 'object' && $.parseJSON(localStorage.getItem('officeSeats')) !== null) {
            seats = JSON.parse(localSeats);
        } else {
            seats = [];
        }
        seats.push(seat);
        serialSeats = JSON.stringify(seats);
        localStorage.setItem('officeSeats', serialSeats);
    }

})(jQuery);