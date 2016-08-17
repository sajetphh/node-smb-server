/*
 *  Copyright 2016 Adobe Systems Incorporated. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 */

var RQShare = require('../../../../lib/backends/rq/share');
var TestShare = require('../test/share');
var TestTree = require('../test/tree');

describe('RQShare', function (){
    var testShare;

    beforeEach(function () {
        testShare = new RQShare('rq', {
            work: {
                path: '/work/path'
            }
        }, new TestShare('test', {}), new TestTree(), new TestTree(), new TestTree());
    });

    it('testConnect', function (done) {
        testShare.connect({}, 'pw', function (err, tree) {
            expect(err).toBeFalsy();
            expect(tree).toBeDefined();
            done();
        });
    });
});