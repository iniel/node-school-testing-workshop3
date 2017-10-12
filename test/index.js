'use strict';

const fs = require('fs');
const replaceExpressions = require('../index');
const Logger = require('../logger');

const chai = require('chai');
const sinon = require('sinon');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

describe('replaceExpressions', () => {
	it('should reject with param error', () => {
		const result = replaceExpressions();
		return result.should.be.rejectedWith(Error, 'File name is missing');
	});

	it('should successfully replace expressions', () => {
		const result = replaceExpressions('./test/script');
		return result.should.eventually.equal(7);
	});
});
