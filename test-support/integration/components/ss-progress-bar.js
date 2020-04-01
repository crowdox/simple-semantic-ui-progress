import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ss progress bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{ss-progress-bar}}`);

    assert.dom().hasText('');

    // Template block usage:
    this.render(hbs`
      {{#ss-progress-bar}}
        template block text
      {{/ss-progress-bar}}
    `);

    assert.dom().hasText('template block text');
  });
});
