
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * Tests for item tray outgoing events.
 *
 * @package     omeka
 * @subpackage  neatline
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Outgoing Events', function() {


  var model, row, vent;


  beforeEach(function() {

    _tray.loadNeatline();
    _tray.respondItemTray200(_tray.json.OutgoingEvents.records);

    model = _tray.getItemTrayModels()[0];
    row = _tray.getItemTrayRows()[0];

    vent = spyOn(Neatline.vent, 'trigger');

  });


  it('should publish `highlight` on record hover', function() {

    // --------------------------------------------------------------------
    // When the cursor enters a record listing, the `highlight` event
    // should be published with the corresponding model.
    // --------------------------------------------------------------------

    $(row).trigger('mouseenter')

    expect(vent).toHaveBeenCalledWith('highlight', model);

  });


  it('should publish `unhighlight` on record hover', function() {

    // --------------------------------------------------------------------
    // When the cursor leaves a record listing, the `unhighlight` event
    // should be published with the corresponding model.
    // --------------------------------------------------------------------

    $(row).trigger('mouseleave')

    expect(vent).toHaveBeenCalledWith('unhighlight', model);

  });


  it('should publish `select` on record click', function() {

    // --------------------------------------------------------------------
    // When a record listing is clicked, the `select` event should be
    // published with the corresponding model.
    // --------------------------------------------------------------------

    $(row).trigger('click')

    expect(vent).toHaveBeenCalledWith('select', model);

  });


});
