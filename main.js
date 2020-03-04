(function ($) {

    $(document).ready(function(e){
        const $mapHolder = $('.office-map');

        initCanvas($mapHolder);
        $('#clear-storage').on('click', (e) => {
            clearSeatStorage();
        });
    });

    /**
     * Initialize canvas functional.
     * @param {*} $mapHolder 
     */
    function initCanvas($mapHolder) {
        let seats = getSeatsArray();

        $mapHolder.find('.level-map').each((index, item) => {
            let canvas = document.getElementById('canvas-' + index);
            
            $(canvas).on('click', (e)=>{
                let formMode = getMapMode();
                let coordinates = getClickCoordinates(canvas, e);
                let seatIndex = getSeatsArray().length;
                if (formMode == 'add') {
                    drawSeat(canvas, coordinates);
                    let seat = createSeat(seatIndex, coordinates, canvas);
                    saveSeatToStorage(seat);
                }
                if (formMode == 'remove') {
                    seat = checkCoordinates(seats, coordinates);
                    clearSeat(canvas, coordinates);
                    removeSeatFromStorage(seat);
                }
            });

            $(seats).each((seatId, seat) => {
                if (canvas.id == seat.canvas) {
                    let seatCanvas = document.getElementById(seat.canvas);
                    drawSeat(seatCanvas, seat.coordinates);
                }
            });
        });
    }

    /**
     * Get canvas coordinates on click.
     * @param {*} canvas 
     * @param {*} evt 
     */
    function getClickCoordinates(canvas, evt) {
        let rect = canvas.getBoundingClientRect(),
        scaleX = canvas.width / rect.width,
        scaleY = canvas.height / rect.height;

        return {
            x: (evt.clientX - rect.left) * scaleX,
            y: (evt.clientY - rect.top) * scaleY
        }
    }

    /**
     * Draw seat on canvas.
     * @param {*} canvas 
     * @param {*} coordinates 
     */
    function drawSeat( canvas, coordinates) {
        let ctx = canvas.getContext('2d');
        if (canvas.getContext) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'grey';
            ctx.strokeRect(coordinates.x - 1, coordinates.y - 1, 1, 1);
            ctx.closePath();
        }
    }
    
    /**
     * clear drawn seat.
     * @param {*} canvas 
     * @param {*} coordinates 
     */
    function clearSeat(canvas, coordinates) {
        let ctx = canvas.getContext('2d');
        if (canvas.getContext) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'grey';
            ctx.clearRect(coordinates.x - 2, coordinates.y - 2, 4, 4);
            ctx.closePath();
        }
    }

    /**
     * Check if clicked place have any canvas object.
     * @param {*} seats 
     * @param {*} coordinates 
     */
    function checkCoordinates(seats, coordinates) {
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

    /**
     * Create seat object
     * @param {*} seatId 
     * @param {*} coordinates 
     * @param {*} canvas 
     */
    function createSeat(seatId, coordinates, canvas) {
        userData = '';
        let seat = new Seat(seatId, coordinates, canvas.id, userData);

        return seat;
    }

    /**
     * Clear storage
     */
    function clearSeatStorage() {
        localStorage.clear();
        return location.reload();
    }

    /**
     * Get storage data
     */
    function getSeatsArray() {
        localSeats = localStorage.getItem('officeSeats');
        if (typeof $.parseJSON(localStorage.getItem('officeSeats')) == 'object' && $.parseJSON(localStorage.getItem('officeSeats')) !== null) {
            seats = JSON.parse(localSeats);
        } else {
            seats = [];
        }

        return seats;
    }

    /**
     * Add new seat to local storage
     * @param {*} seat 
     */
    function saveSeatToStorage(seat) {
        seats = getSeatsArray();
        seats.push(seat);
        serialSeats = JSON.stringify(seats);
        localStorage.setItem('officeSeats', serialSeats);
    }

    /**
     * Remove choosen seat from local storage
     * @param {*} seat 
     */
    function removeSeatFromStorage(seat) {
        let seats = getSeatsArray();

        filteredSeats = seats.filter((item) => {
            if (JSON.stringify(item.coordinates) != JSON.stringify(seat.coordinates)) {
                return true;
            } else {
                return false;
            }
        });

        serialSeats = JSON.stringify(filteredSeats);
        localStorage.setItem('officeSeats', serialSeats);
    }

    /**
     * Get choosen map mode
     */
    function getMapMode() {
        let radios = document.getElementsByName('edit-seatmap');
        let value;
        $(radios).each((index, radio) => {
            if (radio.checked) {
                value = radio.value;
            }
        });

        return value;
    }

})(jQuery);