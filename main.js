(function ($) {
    $(document).ready(function(e){
        const $mapHolder = $('.office-map');
        initCanvas($mapHolder);
    });

    function initCanvas($mapHolder) {
        $mapHolder.find('.level-map').each((index, item) => {
            $(item).append('<canvas id="canvas-' + index + '" class="map-canvas" width="1816" height="973"></canvas>');
            let canvas = document.getElementById('canvas-' + index);
            let ctx = canvas.getContext('2d');
            console.log(ctx);
            $(canvas).on('click', (e)=>{
                let coordinates = getClickCoordinates(e);
                let canvas = e.target;
                drawSeat(canvas, coordinates, ctx);
            });

        });
    }

    function getClickCoordinates(e) {
        let coordinates = {};
        let $div = $(e.target);
        let offset = $div.offset();
        coordinates = {
            x: e.clientX - offset.left,
            y: e.clientY - offset.top
        }

        return coordinates;
    }

    function drawSeat(canvas, coordinates, ctx) {
        if (canvas.getContext) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            console.log(coordinates);
            ctx.strokeRect(coordinates.x, coordinates.y, 40, 40);
            ctx.closePath();
            console.log('draw');
            console.log(canvas);
        }
    }

})(jQuery);