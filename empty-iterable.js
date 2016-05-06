
((module) => {
	'use strict';

	var EmptyIterable = require('x-iterable-base/template')
		.fromGenerator(() => EMPTY_GENERATOR);

	var {freeze} = Object;

	const RETURN_EMPTY_ITERATOR = () => EMPTY_ITERATOR;
	const EMPTY_GENERATOR = freeze({
		next: RETURN_EMPTY_ITERATOR,
		return: RETURN_EMPTY_ITERATOR
	});
	const EMPTY_ITERATOR = freeze({
		done: true
	});

	const out = new EmptyIterable();
	out.EmptyIterable = EmptyIterable;
	out.RETURN_EMPTY_ITERATOR = RETURN_EMPTY_ITERATOR;
	out.EMPTY_GENERATOR = EMPTY_GENERATOR;
	out.EMPTY_ITERATOR = EMPTY_ITERATOR;

	module.exports = freeze(out);

})(module);
