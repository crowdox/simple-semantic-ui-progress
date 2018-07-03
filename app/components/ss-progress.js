import { htmlSafe } from '@ember/string';
import { isBlank } from '@ember/utils';
import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['ui', 'progress'],
  classNameBindings: ['status'],

  ms: 300,

  barComponentName: 'ss-progress-bar',

  progressValue: computed('progress', function() {
    let progress = this.get('progress');
    if (isBlank(progress)) {
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

  status: computed('progressValue', function() {
    let progress = this.get('progressValue');
    if (progress <= 0) {
      return "";
    }

    if (progress >= 100) {
      return "success";
    }

    return "active";
  }),

  barStyle: computed('ms', 'progressValue', function() {
    let ms = this.get('ms');
    let progress = this.get('progressValue');
    return htmlSafe(`transition-duration: ${ms}ms; width: ${progress}%;`);
  })

});
