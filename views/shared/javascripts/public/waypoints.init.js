
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=80; */

/**
 * @package     omeka
 * @subpackage  neatline-Waypoints
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

Neatline.module('Waypoints', function(Waypoints) {


  Waypoints.ID = 'WAYPOINTS';


  Waypoints.addInitializer(function() {
    Waypoints.__collection = new Neatline.Shared.Record.Collection();
    Waypoints.__view = new Waypoints.View();
    Neatline.execute(Waypoints.ID+':load');
  });


});
