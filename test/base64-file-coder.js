const assert = require('assert');
const path = require('path');
const base64File = require('../lib/base64-file-coder')();

describe('base64-file-coder', () => {
  describe('functions', () => {
    describe('#encode()', () => {
      it('should encode file to Base64', (done) => {
        base64File.encode(
          path.join(__dirname, 'resources', 'file.txt'),
          (error, base64) => {
            const expectedBase64String =
              'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQu';
            assert.equal(
              base64,
              expectedBase64String,
              'file should be encoded to Base64'
            );
            done();
          }
        );
      });

      it('should respond with error when called with nonexistent file path', (done) => {
        base64File.encode(
          path.join(__dirname, 'resources', 'file.rtf'),
          (error) => {
            assert.throws(() => {
              throw error;
            }, Error);
            done();
          }
        );
      });

      it('should fail when called without arguments', () => {
        assert.throws(() => {
          base64File.encode();
        }, Error);
      });

      it('should fail when called with path only', () => {
        assert.throws(() => {
          base64File.encode(path.join(__dirname, 'resources', 'file.txt'));
        }, Error);
      });

      it('should fail when called with callback only', () => {
        assert.throws(() => {
          base64File.encode((error, base64) => {});
        }, Error);
      });
    });

    describe('#decode()', () => {
      it('should decode Base64 file string to byte buffer', () => {
        const buffer = base64File.decode(
          'TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVlciBhZGlwaXNjaW5nIGVsaXQu'
        );
        const bufferString = buffer.toString();
        const expectedBufferString =
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
        assert.equal(
          bufferString,
          expectedBufferString,
          'file should be decoded from Base64'
        );
      });

      it('should fail when called without arguments', () => {
        assert.throws(() => {
          base64File.decode();
        }, Error);
      });
    });
  });
});
