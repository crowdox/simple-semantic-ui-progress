import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ss progress', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{ss-progress}}`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      {{#ss-progress}}
        template block text
      {{/ss-progress}}
    `);

    assert.dom().hasText('template block text');
  });

  test('it renders with percent', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{ss-progress progress=40 class="teal indicating"}}
    `);

    assert.dom('.ui.progress').exists();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 40%;");
  });

  test('it renders with percent with block', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{#ss-progress progress=40 class="teal indicating" as |ss|}}
        {{ss.bar}}
        <div class="label">Completed</div>
      {{/ss-progress}}
    `);

    assert.dom('.ui.progress').exists();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 40%;");
  });

  test('binding updates precent progress', async function(assert) {
    assert.expect(3);

    this.set('progress', 40);
    await render(hbs`
      {{ss-progress progress=progress class="teal indicating"}}
    `);

    assert.dom('.ui.progress').exists();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 40%;");

    this.set('progress', 60);
    await settled();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 60%;");
  });

  test('binding updates precent progress with block', async function(assert) {
    assert.expect(3);

    this.set('progress', 40);
    await render(hbs`
      {{#ss-progress progress=progress class="teal indicating" as |ss|}}
        {{ss.bar}}
        <div class="label">Completed</div>
      {{/ss-progress}}
    `);

    assert.dom('.ui.progress').exists();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 40%;");

    this.set('progress', 60);
    await settled();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 60%;");
  });

  test('binding updates precent progress with total', async function(assert) {
    assert.expect(25);

    this.set('progress', -5);
    await render(hbs`
      {{ss-progress progress=progress class="teal indicating"}}
    `);

    assert.dom('.ui.progress').exists();

    // Check with -5
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 0%;");
    assert.dom('.ui.progress').doesNotHaveClass('active');
    assert.dom('.ui.progress').doesNotHaveClass('success');

    this.set('progress', null);
    await settled();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 0%;");
    assert.dom('.ui.progress').doesNotHaveClass('active');
    assert.dom('.ui.progress').doesNotHaveClass('success');

    this.set('progress', "stuff");
    await settled();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 0%;");
    assert.dom('.ui.progress').doesNotHaveClass('active');
    assert.dom('.ui.progress').doesNotHaveClass('success');

    this.set('progress', 0);
    await settled();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 0%;");
    assert.dom('.ui.progress').doesNotHaveClass('active');
    assert.dom('.ui.progress').doesNotHaveClass('success');

    this.set('progress', 10);
    await settled();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 10%;");
    assert.dom('.ui.progress').hasClass('active');
    assert.dom('.ui.progress').doesNotHaveClass('success');

    this.set('progress', 90);
    await settled();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 90%;");
    assert.dom('.ui.progress').hasClass('active');
    assert.dom('.ui.progress').doesNotHaveClass('success');

    this.set('progress', 100);
    await settled();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 100%;");
    assert.dom('.ui.progress').doesNotHaveClass('active');
    assert.dom('.ui.progress').hasClass('success');

    this.set('progress', 110);
    await settled();
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 100%;");
    assert.dom('.ui.progress').doesNotHaveClass('active');
    assert.dom('.ui.progress').hasClass('success');
  });

  test('binding updates precent progress with total with block', async function(assert) {
    assert.expect(25);

    this.set('progress', -5);
    await render(hbs`
      {{#ss-progress progress=progress class="teal indicating" as |ss|}}
        {{ss.bar}}
        <div class="label">Completed</div>
      {{/ss-progress}}
    `);

    assert.dom('.ui.progress').exists();

    // Check with -5
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 0%;");
    assert.dom('.ui.progress').doesNotHaveClass('active');
    assert.dom('.ui.progress').doesNotHaveClass('success');

    this.set('progress', null);
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 0%;");
    assert.dom('.ui.progress').doesNotHaveClass('active');
    assert.dom('.ui.progress').doesNotHaveClass('success');

    this.set('progress', "stuff");
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 0%;");
    assert.dom('.ui.progress').doesNotHaveClass('active');
    assert.dom('.ui.progress').doesNotHaveClass('success');

    this.set('progress', 0);
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 0%;");
    assert.dom('.ui.progress').doesNotHaveClass('active');
    assert.dom('.ui.progress').doesNotHaveClass('success');

    this.set('progress', 10);
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 10%;");
    assert.dom('.ui.progress').hasClass('active');
    assert.dom('.ui.progress').doesNotHaveClass('success');

    this.set('progress', 90);
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 90%;");
    assert.dom('.ui.progress').hasClass('active');
    assert.dom('.ui.progress').doesNotHaveClass('success');

    this.set('progress', 100);
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 100%;");
    assert.dom('.ui.progress').doesNotHaveClass('active');
    assert.dom('.ui.progress').hasClass('success');

    this.set('progress', 110);
    assert.dom('.ui.progress > .bar').hasAttribute('style', "transition-duration: 300ms; width: 100%;");
    assert.dom('.ui.progress').doesNotHaveClass('active');
    assert.dom('.ui.progress').hasClass('success');
  });
});
