import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | vault/cluster/secrets/custom/path', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:vault/cluster/secrets/custom/path');
    assert.ok(route);
  });
});