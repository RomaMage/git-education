(function ($) {
    $(document).ready(function(){
        canvasSettings = {
            canvasWidth: 40,
            canvasHeight: 40,
            canvasMargin: 10
        };
        initCanvas(canvasSettings);
    });

    function initCanvas(canvasSettings) {
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
            height: $(item).innerHeight(),
            square: $(item).innerWidth() * $(item).innerHeight()
        }

        return values;
    }

    function createCanvasGrid (settings, item) {
        while (settings.square > grid.square) {
            createCanvas(item, settings);
        }
    }

    function createCanvas(item, settings) {
        const canvas = document.createElement('canvas');
        canvas.style.height = canvasSettings.canvasHeight;
        canvas.style.width = canvasSettings.canvasWidth;
    }



})(jQuery);