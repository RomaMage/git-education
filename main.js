(function ($) {
    $(document).ready(function(){
        initCanvas();
    });

    function initCanvas() {
        const $mapHolder = $('.office-map');
        

        $mapHolder.find('.level-map').each((index, item) => {
            getLevelValues(item);
            console.log(getLevelValues(item));
        });
    }

    function getLevelValues(item) {
        let values = {};
        
        values = {
            width: $(item).innerWidth(),
            height: $(item).innerHeight()
        }

        return values;
    }

    function createCanvasItem(index, item) {
        const canvas = document.createElement('canvas');

        canvas.id = 'item-' + index;
        canvas.width = 40;
        canvas.height = 40;
        canvas.style.zIndex = 10;
        canvas.style.position = 'absolute';
        canvas.style.border = '1px #ccc solid';

        return canvas;
    }
})(jQuery);