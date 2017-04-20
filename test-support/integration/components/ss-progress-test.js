import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ss-progress', 'Integration | Component | ss progress', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ss-progress}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ss-progress}}
      template block text
    {{/ss-progress}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders with percent', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{ss-progress progress=40 class="teal indicating"}}
  `);

  assert.equal(this.$('.ui.progress').length, 1);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 40%;");
});

test('it renders with percent with block', function(assert) {
  assert.expect(2);

  this.render(hbs`
    {{#ss-progress progress=40 class="teal indicating" as |ss|}}
      {{ss.bar}}
      <div class="label">Completed</div>
    {{/ss-progress}}
  `);

  assert.equal(this.$('.ui.progress').length, 1);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 40%;");
});

test('binding updates precent progress', function(assert) {
  assert.expect(3);

  this.set('progress', 40);
  this.render(hbs`
    {{ss-progress progress=progress class="teal indicating"}}
  `);

  assert.equal(this.$('.ui.progress').length, 1);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 40%;");

  this.set('progress', 60);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 60%;");
});

test('binding updates precent progress with block', function(assert) {
  assert.expect(3);

  this.set('progress', 40);
  this.render(hbs`
    {{#ss-progress progress=progress class="teal indicating" as |ss|}}
      {{ss.bar}}
      <div class="label">Completed</div>
    {{/ss-progress}}
  `);

  assert.equal(this.$('.ui.progress').length, 1);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 40%;");

  this.set('progress', 60);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 60%;");
});

test('binding updates precent progress with total', function(assert) {
  assert.expect(25);

  this.set('progress', -5);
  this.render(hbs`
    {{ss-progress progress=progress class="teal indicating"}}
  `);

  assert.equal(this.$('.ui.progress').length, 1);

  // Check with -5
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 0%;");
  assert.notOk(this.$('.ui.progress').hasClass('active'));
  assert.notOk(this.$('.ui.progress').hasClass('success'));

  this.set('progress', null);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 0%;");
  assert.notOk(this.$('.ui.progress').hasClass('active'));
  assert.notOk(this.$('.ui.progress').hasClass('success'));

  this.set('progress', "stuff");
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 0%;");
  assert.notOk(this.$('.ui.progress').hasClass('active'));
  assert.notOk(this.$('.ui.progress').hasClass('success'));

  this.set('progress', 0);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 0%;");
  assert.notOk(this.$('.ui.progress').hasClass('active'));
  assert.notOk(this.$('.ui.progress').hasClass('success'));

  this.set('progress', 10);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 10%;");
  assert.ok(this.$('.ui.progress').hasClass('active'));
  assert.notOk(this.$('.ui.progress').hasClass('success'));

  this.set('progress', 90);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 90%;");
  assert.ok(this.$('.ui.progress').hasClass('active'));
  assert.notOk(this.$('.ui.progress').hasClass('success'));

  this.set('progress', 100);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 100%;");
  assert.notOk(this.$('.ui.progress').hasClass('active'));
  assert.ok(this.$('.ui.progress').hasClass('success'));

  this.set('progress', 110);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 100%;");
  assert.notOk(this.$('.ui.progress').hasClass('active'));
  assert.ok(this.$('.ui.progress').hasClass('success'));
});

test('binding updates precent progress with total with block', function(assert) {
  assert.expect(25);

  this.set('progress', -5);
  this.render(hbs`
    {{#ss-progress progress=progress class="teal indicating" as |ss|}}
      {{ss.bar}}
      <div class="label">Completed</div>
    {{/ss-progress}}
  `);

  assert.equal(this.$('.ui.progress').length, 1);

  // Check with -5
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 0%;");
  assert.notOk(this.$('.ui.progress').hasClass('active'));
  assert.notOk(this.$('.ui.progress').hasClass('success'));

  this.set('progress', null);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 0%;");
  assert.notOk(this.$('.ui.progress').hasClass('active'));
  assert.notOk(this.$('.ui.progress').hasClass('success'));

  this.set('progress', "stuff");
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 0%;");
  assert.notOk(this.$('.ui.progress').hasClass('active'));
  assert.notOk(this.$('.ui.progress').hasClass('success'));

  this.set('progress', 0);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 0%;");
  assert.notOk(this.$('.ui.progress').hasClass('active'));
  assert.notOk(this.$('.ui.progress').hasClass('success'));

  this.set('progress', 10);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 10%;");
  assert.ok(this.$('.ui.progress').hasClass('active'));
  assert.notOk(this.$('.ui.progress').hasClass('success'));

  this.set('progress', 90);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 90%;");
  assert.ok(this.$('.ui.progress').hasClass('active'));
  assert.notOk(this.$('.ui.progress').hasClass('success'));

  this.set('progress', 100);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 100%;");
  assert.notOk(this.$('.ui.progress').hasClass('active'));
  assert.ok(this.$('.ui.progress').hasClass('success'));

  this.set('progress', 110);
  assert.equal(this.$('.ui.progress > .bar').attr('style'), "transition-duration: 300ms; width: 100%;");
  assert.notOk(this.$('.ui.progress').hasClass('active'));
  assert.ok(this.$('.ui.progress').hasClass('success'));
});
