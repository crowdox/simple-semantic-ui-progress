import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ui', 'progress'],
  classNameBindings: ['status'],

  ms: 300,

  barComponentName: 'ss-progress-bar',

  progressValue: Ember.computed('progress', function() {
    let progress = this.get('progress');
    if (Ember.isBlank(progress)) {
      return 0;
    }

    progress = parseInt(progress, 10);
    if (isNaN(progress)) {
      return 0;
    }

    if (progress <= 0) {
      return 0;
    }

    if (progress >= 100) {
      return 100;
    }

    return progress;
  }),

  status: Ember.computed('progressValue', function() {
    let progress = this.get('progressValue');
    if (progress <= 0) {
      return "";
    }

    if (progress >= 100) {
      return "success";
    }

    return "active";
  }),

  barStyle: Ember.computed('ms', 'progressValue', function() {
    let ms = this.get('ms');
    let progress = this.get('progressValue');
    return Ember.String.htmlSafe(`transition-duration: ${ms}ms; width: ${progress}%;`);
  })

});
