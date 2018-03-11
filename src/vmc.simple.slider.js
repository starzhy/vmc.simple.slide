/**
 * vmc.simple.slider v1.0.0
 * 维米客响应式JQuery图片轮播插件
 * 维米客网页工作室 Vomoc Studio
 * www.vomoc.com
 * vomoc@qq.com
 * 2017/03/11
 **/
;(function ($, undefined) {
    var dataKey = "vomoc";

    $.fn.vmcSimpleSlider = function (settings) {
        var run = $.type(settings) === "string",
            args = [].slice.call(arguments, 1);
        if (!this.length) return;
        return this.each(function () {
            var $element = $(this),
                instance = $element.data(dataKey);
            if (run && settings.charAt(0) !== '_' && instance) {
                vmcSimpleSlider.prototype[settings] && vmcSimpleSlider.prototype[settings].apply(instance, args);
            } else if (!run && !instance) {
                instance = new vmcSimpleSlider($element, settings);
                instance._init();
                $element.data(dataKey, instance);
            }
        });
    };


    var vmcSimpleSlider = function ($element, settings) {
        var the = this;
        the.options = $.extend({}, the.options, settings);
        the.elem = $element;
        the.index = 0;

    };

    vmcSimpleSlider.prototype._init = function () {

    };

})(jQuery);
