
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Waypoints
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */


var WP = (function(WP) {


  /**
   * Shortcut public views.
   */
  WP.aliasNeatline = function() {
    this.vw = {
      PUBLIC: Neatline.Waypoints.__controller.view
    };
  };


  /**
   * Shortcut editor views.
   */
  WP.aliasEditor = function() {
    this.vw = {
      PUBLIC: Neatline.Waypoints.__controller.view,
      EDITOR: Neatline.Editor.Exhibit.Waypoints.__controller.view
    };
  };


  return WP;


})(WP || {});
