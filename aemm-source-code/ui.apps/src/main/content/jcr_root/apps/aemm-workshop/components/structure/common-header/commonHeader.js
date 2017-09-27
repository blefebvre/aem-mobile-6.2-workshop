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

//allow an author to set some styles on the header
use(function() {

    "use strict";

    var CONST = {
        DEFAULT_FONT: "default-font-style",
        DEFAULT_BACKGROUND:"default-background-style"
    };

    //check to see if these have been set, otherwise use the defaults
    //combine it into one property that can be outputted (optional)
    var backgroundStyle = properties.get("backgroundStyle");
    var fontStyle = properties.get("fontStyle");



    if ( backgroundStyle === null || backgroundStyle == 0 )
        backgroundStyle = CONST.DEFAULT_BACKGROUND;


    if ( fontStyle === null || fontStyle == 0 )
        fontStyle = CONST.DEFAULT_FONT;

    return {
        backgroundStyle:backgroundStyle,
        fontStyle:fontStyle
    };
});