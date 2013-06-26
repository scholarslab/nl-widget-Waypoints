
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     omeka
 * @subpackage  neatline-Waypoints
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

describe('Neatline | Record Listing', function() {


  var fx = {
    regular:  readFixtures('NeatlineList.regular.json'),
    changed:  readFixtures('NeatlineList.changed.json'),
    empty:    readFixtures('NeatlineList.empty.json')
  };


  beforeEach(function() {
    WP.loadNeatline();
    WP.respondWaypoints200(fx.regular);
  });


  it('should load records when the exhibit starts', function() {

    // --------------------------------------------------------------------
    // When the exhibit starts, the waypoints should template listings for
    // records that arrive in the initial query.
    // --------------------------------------------------------------------

    var rows = WP.getWidgetRows();

    // Show list titles.
    expect($(rows[0])).toHaveText('title1');
    expect($(rows[1])).toHaveText('title2');
    expect($(rows[2])).toHaveText('title3');

  });


  it('should reload records when the exhibit is refreshed', function() {

    // --------------------------------------------------------------------
    // When the exhibit is refreshed, the waypoints should query for new
    // records and update the list.
    // --------------------------------------------------------------------

    Neatline.vent.trigger('refresh');
    WP.respondWaypoints200(fx.changed);
    var rows = WP.getWidgetRows();

    // Show list updated titles.
    expect($(rows[0])).toHaveText('title3');
    expect($(rows[1])).toHaveText('title2');
    expect($(rows[2])).toHaveText('title1');

  });


  it('should add `empty` class when collection is empty', function() {

    // --------------------------------------------------------------------
    // When an empty collection is ingested, the `empty` class should be
    // added to the widget container.
    // --------------------------------------------------------------------

    // Should add empty class.
    WP.refreshWidget(fx.empty);
    expect(WP.vw.PUBLIC.$el).toHaveClass('empty');

    // Should remove empty class.
    WP.refreshWidget(fx.regular);
    expect(WP.vw.PUBLIC.$el).not.toHaveClass('empty');

  });


});
