// Generated by CoffeeScript 1.3.3

describe('Instance', function() {
  it('initiates an instance', function() {
    return new EndlessScroll(this, {});
  });
  it('responds to a #run() function', function() {
    return EndlessScroll.should.respondTo('run');
  });
  return it('wraps with a jQuery object', function() {
    return $().endlessScroll();
  });
});

describe('Instance Options', function() {
  it('has default options', function() {
    var subject;
    subject = new EndlessScroll;
    return subject.options.intervalFrequency.should.equal(250);
  });
  return it('passes in custom options', function() {
    var subjectA, subjectB;
    subjectA = new EndlessScroll(this, {
      intervalFrequency: 42
    });
    subjectB = new EndlessScroll(this, {
      intervalFrequency: 1337
    });
    subjectA.options.intervalFrequency.should.equal(42);
    return subjectB.options.intervalFrequency.should.equal(1337);
  });
});
