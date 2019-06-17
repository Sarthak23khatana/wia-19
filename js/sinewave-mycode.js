$(function(){
    var waves = new SineWaves({
      el: document.getElementById('waves'),

      speed: 2,

      width: function() {
        return $(window).width();
      },

      height: function() {
        return $(window).height();
      },

      ease: 'SineInOut',

      waves: [
        {
          timeModifier: 1,
          lineWidth: 2,
          amplitude: 150,
          wavelength: 100,
          segmentLength: 1,
          type: 'sine',
        },
        {
          timeModifier: 1,
          lineWidth: 2,
          amplitude: 150,
          wavelength: 100,
          segmentLength: 1,
          type: function(x, waves) {
            return Math.sin(x) * waves.sine(x);
          },
        }
      ],

      resizeEvent: function() {
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0,"rgba(28, 24, 22, 0)");
        gradient.addColorStop(0.5,"rgba(250, 215, 0, 1)");
        gradient.addColorStop(1,"rgba(28, 24, 22, 0)");

        var index = -1;
        var length = this.waves.length;
          while(++index < length){
          this.waves[index].strokeStyle = gradient;
        }

        // Clean Up
        index = void 0;
        length = void 0;
        gradient = void 0;
      }
    });
});