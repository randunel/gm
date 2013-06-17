module.exports = function(gm) {

  gm.prototype.composite = function composite(change_image, mask_image, outname, callback) {
    var self = this;

    if (!callback) return self;

    var args = ["composite", change_image, mask_image, outname];
    console.log(args);    
    self._exec(args, function (err, stdout, stderr, cmd) {
      if (err) {
        return callback.call(self, err, stdout, stderr, cmd);
      }

      stdout = (stdout||"").trim().replace(/\r\n|\r/g, "\n");

      var parts = stdout.split("\n");

    });

    return self;
  };

  /**
   * helpers.
   */

  var helper = gm.compositeHelpers = {};

  helper.Geometry = function Geometry (o, val) {
    var split = val.split("x");
    o.size = {
        width:  parseInt(split[0], 10)
      , height: parseInt(split[1], 10)
    }
  };
};
