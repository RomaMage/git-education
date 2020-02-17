(function ($) {
    $(document).ready(function(e){
        const $mapHolder = $('.office-map');
        initCanvas($mapHolder);
    });

    function initCanvas($mapHolder) {
        $mapHolder.find('.level-map').each((index, item) => {
            let canvas = document.getElementById('canvas-' + index);
            let ctx = canvas.getContext('2d');
            $(canvas).on('click', (e)=>{
                let canvas = e.target;
                drawSeat(canvas, e, ctx);
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

    function drawSeat(canvas, evt, ctx) {
        let coordinates = getClickCoordinates(canvas, evt);

        if (canvas.getContext) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            ctx.strokeRect(coordinates.x - 1, coordinates.y - 1, 2, 2);
            ctx.closePath();
        }
    }

})(jQuery);