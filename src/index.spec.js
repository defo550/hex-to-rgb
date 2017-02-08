const expect = require('chai').expect;
const hexToRgb = require('./index');

describe('hex-to-rgb', function () {
  it('should remove leading #', function () {
    const rgb = hexToRgb('#ffa100');

    expect(rgb[0]).to.equal(255);
    expect(rgb[1]).to.equal(161);
    expect(rgb[2]).to.equal(0);
  });

  it('should convert hexadecimal to rgb.', function () {
    const rgb = hexToRgb('#ffa100');

    expect(rgb[0]).to.equal(255);
    expect(rgb[1]).to.equal(161);
    expect(rgb[2]).to.equal(0);
  });

  it('should convert shorthand to rgb.', function () {
    const rgb = hexToRgb('#fff');

    expect(rgb[0]).to.equal(255);
    expect(rgb[1]).to.equal(255);
    expect(rgb[2]).to.equal(255);
  });
});
