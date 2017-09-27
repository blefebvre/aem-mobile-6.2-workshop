/*
 * Copyright 2016-2017 Adobe Systems Incorporated.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Determine how to link to a page.
// When rendered on device, the navto:// protocol must be used.
// In AEM, standard http:// links can be used.

use(function() {

    "use strict";

    var CONST = {
        deviceProtocol: "navto://",
        articlePrefix: "article/",
        collectionPrefix: "collection/",
        webSuffix: ".html",
        mobileCollectionRT: "mobileapps/dps/components/page/collection/collection"
    };

    // Linked page path will be passed in as a property on this
	var linkedPagePath = this.linkedPagePath;

    if (linkedPagePath === null || linkedPagePath.length < 1) {
        // A linked page has not been set
        return "#";
    }

    var linkedPage = pageManager.getPage(linkedPagePath);
    var linkHref;

    // Use navto:// links when the app is running on device
    if (wcmmode.disabled) {
        var linkedPageContentResource = linkedPage.getContentResource();
        if (linkedPageContentResource.isResourceType(CONST.mobileCollectionRT)) {
            // Use the collection prefix
			linkHref = CONST.deviceProtocol + CONST.collectionPrefix + linkedPage.getName();
        }
        else {
            // Use the article prefix
			linkHref = CONST.deviceProtocol + CONST.articlePrefix + linkedPage.getName();
        }
    }
    else {
        // Use a standard link to the page
		linkHref = linkedPage.getPath() + CONST.webSuffix;
    }

    return {
        linkHref: linkHref
    };
});