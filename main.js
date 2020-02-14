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
            createCanvasGrid(canvasSettings, item);
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
        const div = document.createElement('div');
        const levelSettings = getLevelValues(item);
        const canvas = createCanvas(item, canvasSettings);
        div.className = 'canvas-holder';
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        $(item).append(div);

        let canvasHolderSquare = $(div).innerWidth() * $(div).innerHeight();
        console.log(levelSettings.square);
        let canvasCount = Math.round(levelSettings.square / (settings.canvasWidth * settings.canvasHeight));
        let i=1;
        while (i < canvasCount) {
            let canvas = createCanvas(item, settings);
            $(div).append(canvas);
            i++;
        }
        console.log(canvasCount);
    }

    function createCanvas(item, settings) {
        const canvas = document.createElement('canvas');
        canvas.style.height = canvasSettings.canvasHeight;
        canvas.style.width = canvasSettings.canvasWidth;
        return canvas;
    }

})(jQuery);