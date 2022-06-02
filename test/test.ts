import test from 'ava';

import {whatever} from '../source/index.js';

test('whatever works', t => {
	t.is(whatever(), '1337');
});
